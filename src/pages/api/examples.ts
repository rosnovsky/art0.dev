// src/pages/api/examples.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.$connect;
  const allUrls = await prisma.url.findMany()

  console.log(allUrls)
  res.status(200).json(allUrls);
};

export default examples;
