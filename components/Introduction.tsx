import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

export default function Introduction() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  return (
    <div className=" bg-[#EDF2F7] px-4 py-9">
      <div className="flex flex-col gap-y-3 max-w-2xl mx-auto">
        <svg
          viewBox="0 0 46 32"
          focusable="false"
          role="presentation"
          className="w-12 h-12 text-black inline-block align-middle mb-[0.5rem] shrink-0"
        >
          <path
            d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
            fill="currentColor"
          ></path>
        </svg>
        <p className="text-xl">
          <span className="font-bold">Fast Feedback</span> is the easiest way to
          add comments or reviews to your static site. Try it out by leaving a
          comment below. After the comment is approved, it will display below.
        </p>
        <div className="mt-5">
          {user ? (
            <Link
              className="bg-black text-white text-lg font-bold px-3 py-1.5 rounded-md hover:text-black hover:bg-[#EDF2F7] duration-700 w-fit mx-auto sm:mx-0"
              href="/sites"
            >
              View Dashboard
            </Link>
          ) : (
            <Link
              className="bg-black text-white text-lg font-bold px-3 py-1.5 rounded-md hover:text-black hover:bg-[#EDF2F7] duration-700 w-fit mx-auto sm:mx-0"
              href="/api/auth/login"
            >
              Start now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
