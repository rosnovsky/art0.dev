import { createRouter } from "./context";
import { z } from "zod";
import crypto from "node:crypto";
import mql from "@microlink/mql";

export const shortenerRouter = createRouter()
  .mutation("getUrl", {
    input: z.object({
      slug: z.string(),
    }),
    async resolve({ input, ctx }) {
      console.log("input", input, ctx);
      return await ctx.prisma.shorts.findFirst({
        where: {
          slug: input.slug,
        },
      });
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.shorts.findMany();
    },
  })
  .mutation("addUrl", {
    // validate input with Zod
    input: z.object({ longUrl: z.string().url() }),
    // resolve the mutation
    async resolve({ input, ctx }) {
      const slug = crypto
        .createHash("sha256")
        .update(input.longUrl)
        .digest("base64")
        .substring(0, 6);
      const notUnique = await ctx.prisma.shorts.findFirst({
        where: { slug },
      });
      if (notUnique) {
        return notUnique;
      }
      const { status, data } = await mql(input.longUrl, { meta: true });
      const { title, logo } = data;
      return await ctx.prisma.shorts.create({
        data: {
          longUrl: input.longUrl,
          slug,
          shortUrl: `https://art0.dev/${slug}`,
          clicks: 0,
          title: title || "",
          favicon: logo?.url || "",
        },
      });
    },
  })
  .mutation("deleteUrl", {
    input: z.object({ longUrl: z.string().url() }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.shorts.delete({
        where: {
          longUrl: input.longUrl,
        },
      });
    },
  });
