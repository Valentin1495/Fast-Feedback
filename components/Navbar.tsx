import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const session = useSession();
  return (
    <nav className="px-6 py-3 bg-white">
      <div className="max-w-5xl mx-auto flex items-center">
        <div className="flex-1">
          <Link href="/">
            <svg
              viewBox="0 0 46 32"
              focusable="false"
              className="w-8 h-8 text-black inline-block mr-6 shrink-0"
            >
              <path
                d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
          <Link href="/sites" className="mr-3 hover:underline text-lg">
            Sites
          </Link>
          <Link href="/feedback" className="hover:underline text-lg">
            Feedback
          </Link>
        </div>
        <Link href="/account">
          <img
            src={session.data?.user?.image}
            alt="profile picture"
            className="h-8 w-8 rounded-full"
          />
        </Link>
      </div>
    </nav>
  );
}
