import { createRouter } from "./context";
import { z } from "zod";
import crypto from "node:crypto";


export const shortenerRouter = createRouter()
  .query("getUrl", {
    input: z.object({
      slug: z
        .string()
        .regex(/[a-zA-Z0-9]+/m)
        .trim(),
    }),
    async resolve({ input, ctx }) {
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
  .query("addUrl", {
    input: z.object({
      longUrl: z
        .string()
        .url()
        .trim(),
    }),
    async resolve({ input, ctx }) {

      const slug = crypto.createHash("sha256").update(input.longUrl).digest("base64").substring(0, 6);
      const notUnique = await ctx.prisma.shorts.findFirst({ where: { slug } });
      if (notUnique) {
        return notUnique;
      }
      return await ctx.prisma.shorts.create({
        data: {
          longUrl: input.longUrl,
          slug,
          shortUrl: `https://art0.dev/${slug}`,
          clicks: 0
        }
      });
    },
  })
