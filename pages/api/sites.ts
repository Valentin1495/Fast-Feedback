import { getUserSites } from "@/utils/helpers";
import { getSession } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession(req, res);

  const uid = session?.user.sid;

  const sites = await getUserSites(uid);

  res.status(200).json(sites);
};
