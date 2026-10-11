import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { DEFAULT_LANGUAGE } from "../src/i18n";
import "../src/index.css";
import { SiteI18nProvider } from "../src/site/i18n-context";

const inter = localFont({ src: "../src/assets/fonts/inter-normal-latin.woff2", display: "swap", variable: "--font-inter" });
const jetbrainsMono = { variable: "demo-monospace" };

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SiteI18nProvider lang={pageProps.lang ?? DEFAULT_LANGUAGE}>
      <div className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <Component {...pageProps} />
      </div>
    </SiteI18nProvider>
  );
}
