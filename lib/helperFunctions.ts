import supabase from "./supabase";

export async function getUserSites(uid: string) {
  const { error, data: sites } = await supabase
    .from("sites")
    .select()
    .eq("authorId", Number(uid));
  if (error) {
    console.log(error);
  }
  return sites;
}

export async function getAllFeedback(siteId: string) {
  const { data: feedback } = await supabase
    .from("feedback")
    .select()
    .eq("siteId", siteId);

  return feedback;
}
