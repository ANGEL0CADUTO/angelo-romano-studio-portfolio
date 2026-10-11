import type { GetServerSideProps } from "next";

export default function AboutLegacyRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/it/chi-sono",
    permanent: true,
  },
});
