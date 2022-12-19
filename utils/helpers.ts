import supabase from "@/lib/supabase";

export async function getUserSites(uid: string) {
  const { data, error } = await supabase
    .from("sites")
    .select("id, created_at, site, link")
    .eq("authorId", uid);

  if (error) {
    console.log(error);
  }

  return data;
}

export async function getAllFeedback(siteId: string) {
  const { data: feedback } = await supabase
    .from("feedback")
    .select()
    .eq("siteId", siteId);

  return feedback;
}
