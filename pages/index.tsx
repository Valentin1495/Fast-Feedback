import { GetServerSideProps } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Example from "../components/Example";
import Introduction from "../components/Introduction";

export default function Home({ session }: { session: Session }) {
  return (
    <div className="overflow-y-auto">
      <Introduction session={session} />
      <Example />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
