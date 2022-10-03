// src/server/router/index.ts
import { Context } from "./context";
import superjson from "superjson";

import { shortenerRouter } from "./shrtener";

import { TRPCError, initTRPC } from "@trpc/server";
import { appRouter } from "../../pages/api/trpc/[trpc]";
export const t = initTRPC.context<Context>().create();

// export type definition of API
export type AppRouter = typeof appRouter;
