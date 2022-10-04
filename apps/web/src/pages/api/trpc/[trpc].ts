import { initTRPC } from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import { z } from "zod";
import { Context } from "../../../server/router/context";
import { env } from "../../../env/server.mjs";
import { createContext } from "../../../server/router/context";
import crypto from "node:crypto";
import mql from "@microlink/mql";
import { Shorts } from "../../../generated/prisma-client";

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
    const shorts = await ctx.prisma.shorts.findMany();
    const clicks = await shorts.forEach(async (short) => {
      return await ctx.prisma.click.count({
        where: {
          shortsId: short.id,
        },
      });
    });
    return { shorts, clicks };
  }),
  registerClick: t.procedure
    .input(
      z.object({
        slug: z.string(),
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
          country: "US",
          city: "New York",
          shortsId: short.id,
        },
      });
    }),
  addUrl: t.procedure
    // validate input with Zod
    .input(z.object({ longUrl: z.string().url(), user: z.string() }))
    .mutation(async ({ input, ctx }) => {
      console.log(input.user);
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
          title: title || "",
          favicon: logo?.url || "",
          userId: input.user,
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
