import AddSite from "./AddSite";

export default function Paid({ setOpenToast }: { setOpenToast: SetOpenToast }) {
  return (
    <div className="space-y-8 bg-black text-white">
      <div>
        <h3 className="text-2xl font-light">Sites</h3>
        <h1 className="text-4xl font-bold">My Sites</h1>
      </div>
      <article className="text-center py-20">
        <p className="text-2xl font-bold mb-3">You haven't added any sites.</p>
        <p className="text-xl mb-10">Let's get started 🚀</p>
        <AddSite setOpenToast={setOpenToast}>Add your First Site</AddSite>
      </article>
    </div>
  );
}
