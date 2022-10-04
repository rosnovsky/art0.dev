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
      z.object({
        slug: z.string(),
      })
    )
    .query(async ({ input, ctx }) => {
      return await ctx.prisma.shorts.findFirst({
        where: {
          slug: input.slug,
        },
      });
    }),
  getAll: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.shorts.findMany();
  }),
  registerClick: t.procedure
    .input(
      z.object({
        slug: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.shorts.update({
        where: {
          slug: input.slug,
        },
        data: {
          clicks: {
            increment: 1,
          },
        },
      });
    }),
  addUrl: t.procedure
    // validate input with Zod
    .input(z.object({ longUrl: z.string().url() }))
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
