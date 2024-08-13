import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from "@/components/themeProvider";
import '../../i18n';

import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
function App({ Component, pageProps }: AppProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {isClient && <>
      <Header />
      <Component {...pageProps} />
      <Footer /></>}
  </ThemeProvider>;
}
export default appWithTranslation(App)