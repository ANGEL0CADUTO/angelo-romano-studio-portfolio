import type { GetServerSideProps } from "next";

export default function ConsultingLegacyRedirect() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    destination: "/it/consulenza-it",
    permanent: true,
  },
});
