import Header from "@/components/Header";
import Paid from "@/components/Paid";
import useSWR from "swr";
import fetcher from "@/utils/fetcher";
import Site from "@/components/Site";
import Notification from "@/components/Notification";
import { useState } from "react";
import AddSite from "@/components/AddSite";

export default function Sites() {
  const [openToast, setOpenToast] = useState(false);

  const { data, isLoading } = useSWR("/api/sites", fetcher);

  if (isLoading) {
    return "loading...";
  }

  return (
    <div className="space-y-5 h-screen bg-black">
      <Header />
      <div className="bg-black px-6 h-fit">
        <section className="max-w-5xl w-full mx-auto">
          {data?.length ? (
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-light text-white">Sites</h3>
                  <h1 className="text-4xl font-bold text-white">My Sites</h1>
                </div>
                <AddSite setOpenToast={setOpenToast}>+ Add Site</AddSite>
              </div>

              <article className="space-y-3 py-3">
                <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-3">
                  <span className="category">Name</span>
                  <span className="category">Site link</span>
                  <span className="category hidden md:inline">
                    Feedback link
                  </span>
                  <span className="category hidden md:inline">Date added</span>
                </div>
                {data?.map((site: Site) => (
                  <Site site={site} key={site.id} />
                ))}
              </article>
            </div>
          ) : (
            <Paid setOpenToast={setOpenToast} />
          )}
        </section>
        <Notification openToast={openToast} setOpenToast={setOpenToast} />
      </div>
    </div>
  );
}
