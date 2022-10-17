import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { Context } from "../../../server/router/context";
import { env } from "../../../env/server.mjs";
import { createContext } from "../../../server/router/context";
import crypto from "node:crypto";
import mql from "@microlink/mql";

export const t = initTRPC.context<Context>().create();

export const appRouter = t.router({
  getUrl: t.procedure
    .input(
      z
        .object({
          slug: z.string(),
        })
        .required()
    )
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.shorts.findFirst({
        where: {
          slug: input.slug,
        },
      });
    }),
  getAllClicks: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.click.count();
  }),
  getClicks: t.procedure.input(z.string()).query(async ({ input, ctx }) => {
    return await ctx.prisma.click.count({
      where: {
        shortsId: input,
      },
    });
  }),
  update: t.procedure
    .input(z.object({ id: z.string(), status: z.boolean() }))
    .mutation(async ({ input, ctx }) => {
      console.log("update", input);
      return await ctx.prisma.shorts.update({
        where: {
          id: input.id,
        },
        data: {
          status: input.status,
        },
      });
    }),
  getAll: t.procedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ ctx, input }) => {
      const shorts = await ctx.prisma.shorts.findMany({
        where: {
          userId: input.userId,
        },
      });
      return shorts;
    }),
  registerClick: t.procedure
    .input(
      z.object({
        slug: z.string(),
        country: z.string(),
        region: z.string(),
        city: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const short = await ctx.prisma.shorts.findFirst({
        where: {
          slug: input.slug,
        },
      });
      if (!short) {
        throw new Error("Short not found");
      }
      return await ctx.prisma.click.create({
        data: {
          country: input.country,
          region: input.region,
          city: input.city,
          shortsId: short.id,
        },
      });
    }),
  addUrl: t.procedure
    // validate input with Zod
    .input(z.object({ longUrl: z.string().url(), user: z.string() }))
    .mutation(async ({ input, ctx }) => {
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
      const { status, data } = await mql(input.longUrl, {
        meta: true,
        screenshot: {
          type: "png",
          fullPage: true,
          waitUntil: "networkidle2",
        },
      });
      const { title, logo, screenshot } = data;

      return await ctx.prisma.shorts.create({
        data: {
          longUrl: input.longUrl,
          slug,
          shortUrl: `https://art0.dev/${slug}`,
          title: title || "",
          favicon: logo?.url || "",
          userId: input.user,
          screenshot: screenshot?.url,
        },
      });
    }),
  deleteUrl: t.procedure
    .input(
      z.object({
        longUrl: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.shorts.delete({
        where: {
          longUrl: input.longUrl,
        },
      });
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ req, error, input }) => {
          console.error(`❌ tRPC failed on ${input} (${req.url}): ${error}`);
        }
      : undefined,
});
