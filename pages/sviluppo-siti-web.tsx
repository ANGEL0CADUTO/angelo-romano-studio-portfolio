import type { GetServerSideProps } from "next";

export default function WebDevelopmentLegacyRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/it/sviluppo-siti-web",
    permanent: true,
  },
});
