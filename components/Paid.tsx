import AddFirstSite from "./AddFirstSite";

export default function Paid({ setOpenToast }: { setOpenToast: SetOpenToast }) {
  return (
    <div>
      <div>
        <h3 className="text-2xl font-light">Sites</h3>
        <h1 className="text-4xl font-bold">My Sites</h1>
      </div>
      <article className="bg-white text-center py-20">
        <p className="text-2xl font-bold mb-3">You haven't added any sites.</p>
        <p className="text-xl mb-10">Let's get started 🚀</p>
        <AddFirstSite setOpenToast={setOpenToast} />
      </article>
    </div>
  );
}
