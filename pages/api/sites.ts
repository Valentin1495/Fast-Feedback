import type { NextApiRequest, NextApiResponse } from "next";
import supabase from "../../lib/supabase";

export default async function getSites(
  _: NextApiRequest,
  res: NextApiResponse
) {
  const { data, error } = await supabase.from("sites").select();
  if (error) {
    console.log(error);
  } else {
    res.status(200).json(data);
  }
}
