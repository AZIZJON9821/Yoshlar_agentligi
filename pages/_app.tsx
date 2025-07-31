import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <MainLayout>
        <Component {...pageProps} />
        <Toaster />
      </MainLayout>
    </AppProvider>
  );
}
