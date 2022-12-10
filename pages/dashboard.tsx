import Navbar from "../components/Navbar";
import Modal from "../components/Modal";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className="h-[calc(100vh-57.5px)] px-6 relative bg-[#EDF2F7]">
        <section
          className="max-w-5xl w-full px-6 xl:px-0 absolute 
          top-24 space-y-8 left-1/2 -translate-x-1/2 "
        >
          <div>
            <h3 className="text-2xl font-light">Sites</h3>
            <h1 className="text-4xl font-bold">My Sites</h1>
          </div>
          <article className="bg-white text-center py-20">
            <p className="text-2xl font-bold mb-3">
              You haven't added any sites.
            </p>
            <p className="text-xl mb-10">Let's get started 🚀</p>
            <Modal />
          </article>
        </section>
      </div>
    </div>
  );
}
