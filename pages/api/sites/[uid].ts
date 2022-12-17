import { NextApiRequest, NextApiResponse } from "next";
import { getUserSites } from "@/lib/helperFunctions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const uid = req.query.uid;

  const sites = await getUserSites(uid as string);

  return res.status(200).json({ sites });
};
