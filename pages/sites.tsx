import Navbar from "@/components/Navbar";
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
    return "Loading...";
  }

  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-57.5px)] px-6 relative bg-[#EDF2F7]">
        <section
          className="max-w-5xl w-full px-6 xl:px-0 absolute 
          top-24 left-1/2 -translate-x-1/2 "
        >
          {data?.length ? (
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="flex-1">
                  <h3 className="text-2xl font-light">Sites</h3>
                  <h1 className="text-4xl font-bold">My Sites</h1>
                </div>
                <AddSite setOpenToast={setOpenToast}>+ Add Site</AddSite>
              </div>

              <article className="bg-white space-y-3 px-3 py-10">
                <p className="grid grid-cols-4 text-center gap-3">
                  <span className="category">Name</span>
                  <span className="category">Site link</span>
                  <span className="category">Feedback link</span>
                  <span className="category">Date added</span>
                </p>
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
