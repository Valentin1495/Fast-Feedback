import supabase from "./supabase";

export async function getAllSites() {
  const { data: sites } = await supabase.from("sites").select();

  return sites;
}

export async function getAllFeedback(siteId: string) {
  const { data: feedback } = await supabase
    .from("feedback")
    .select()
    .eq("siteId", siteId);

  return feedback;
}
