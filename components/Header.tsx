import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Header() {
  const { user } = useUser();

  return (
    <div className="px-6 py-3">
      <div className="max-w-5xl mx-auto flex items-center">
        <div className="flex-1 flex items-center gap-x-3">
          <Link href="/">
            <div className="w-fit bg-white rounded-full">
              <svg
                viewBox="0 0 46 32"
                focusable="false"
                className="w-8 h-8 m-2.5 inline-block shrink-0"
              >
                <path d="M19.557.113C11.34.32 9.117 8.757 9.03 12.95c1.643-2.67 4.62-3.08 6.931-3.08 2.825.085 10.27.205 17.458 0C40.61 9.663 44.802 3.28 46 .112c-5.391-.085-18.228-.205-26.443 0zM14.422 14.234C3.332 14.234-.468 24.76.045 31.948c3.594-6.418 7.617-7.53 9.243-7.445h6.675c5.956 0 11.039-6.846 12.836-10.27H14.422z" />
              </svg>
            </div>
          </Link>
          <Link href="/sites" className="hover:underline text-white text-lg">
            Sites
          </Link>
          <Link href="/feedback" className="hover:underline text-white text-lg">
            Feedback
          </Link>
        </div>
        <a href="/api/auth/logout">
          <img
            src={user?.picture!}
            alt="profile picture"
            className="h-[52px] w-[52px] rounded-full object-cover"
          />
        </a>
      </div>
    </div>
  );
}
