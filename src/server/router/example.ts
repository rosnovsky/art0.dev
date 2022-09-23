import { createRouter } from "./context";
import { z } from "zod";

export const shortenerRouter = createRouter()
  .query("getUrl", {
    input: z
      .object({
        slug: z.string()
      }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.shorts.findOne([{ slug: input.slug }]);
    },
  })
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.shorts.findMany();
    },
  });
