// src/server/db/client.ts
import { PrismaClient } from "../../../../../packages/prismadb/prisma/generated/prisma-client";

export const prisma = new PrismaClient();
