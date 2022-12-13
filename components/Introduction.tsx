import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function Introduction({ session }: { session: Session }) {
  const signInWithGoogle = () => {
    signIn("google");
  };

  const signInWithGithub = () => {
    signIn("github");
  };
  const signInWithTwitter = () => {
    signIn("twitter");
  };

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
        <div className="mt-10 mb-5 sm:space-x-2 flex flex-col gap-y-2 sm:flex-row">
          {!session ? (
            <div className="w-full">
              <div className="grid gap-3 grid-cols-3">
                <button className="btn" onClick={signInWithGoogle}>
                  <svg
                    viewBox="0 0 533.5 544.3"
                    focusable="false"
                    role="presentation"
                    aria-hidden="true"
                    className="icon"
                  >
                    <g>
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      ></path>
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      ></path>
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      ></path>
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      ></path>
                    </g>
                  </svg>
                </button>
                <button className="btn" onClick={signInWithGithub}>
                  <svg aria-hidden="true" viewBox="0 0 16 16" className="icon">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </button>
                <button className="btn" onClick={signInWithTwitter}>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="icon">
                    <g>
                      <path
                        fill="rgb(29, 155, 240)"
                        d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <Link href="/sites">
              <button className="bg-black text-white text-lg font-bold px-3 py-1.5 rounded-md hover:text-black hover:bg-[#EDF2F7] duration-700 w-fit mx-auto sm:mx-0">
                View Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
