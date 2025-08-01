import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
const client = new QueryClient();
import { AppProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <QueryClientProvider client={client}>
        <MainLayout>
          <Component {...pageProps} />
          <Toaster />
        </MainLayout>
      </QueryClientProvider>
    </AppProvider>
  );
}
