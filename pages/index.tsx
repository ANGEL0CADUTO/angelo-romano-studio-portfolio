import type { GetServerSideProps } from "next";

export default function RootRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/it",
    permanent: true,
  },
});
