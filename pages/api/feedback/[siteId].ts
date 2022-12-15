import { NextApiRequest, NextApiResponse } from "next";
import { getAllFeedback } from "../../../lib/helperFunctions";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const siteId = req.query.siteId;

  const feedback = await getAllFeedback(siteId as string);

  res.status(200).json({ feedback });
};
