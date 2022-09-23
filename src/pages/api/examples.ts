// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const shorts = async (req: NextApiRequest, res: NextApiResponse) => {
  prisma.$connect()

  const allUrls = await prisma.shorts.findMany()

  console.dir(allUrls, { depth: null })
  res.status(200).json(allUrls);
};

export default shorts;
