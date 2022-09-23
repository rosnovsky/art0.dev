import { createRouter } from "./context";
import { z } from "zod";

export const shortenerRouter = createRouter()
  .query("getUrl", {
    input: z.object({
      slug: z
        .string()
        // .regex(/[a-zA-Z0-9]+/m)
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
  });
