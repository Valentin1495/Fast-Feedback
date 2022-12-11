import Navbar from "../components/Navbar";

export default function Sites() {
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
              Get feedback on your site instantly.
            </p>
            <p className="text-xl mb-10">Start today, then grow with us 🔥</p>

            <button className="bg-black text-white text-lg font-bold px-3 py-1.5 rounded-md hover:text-black hover:bg-white duration-700 hover:cursor-pointer">
              Upgrade to Starter
            </button>
          </article>
        </section>
      </div>
    </div>
  );
}
