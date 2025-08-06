import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/context";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !router.isReady) return;

    const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    const token = getCookie('token');

    if (router.pathname === '/profile' && !(user && token)) {
      router.replace('/auth/login'); 
    }
  }, [isClient, router.isReady, router.pathname]);


  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <MainLayout>
          <Component {...pageProps} />
          <Toaster />
        </MainLayout>
      </AppProvider>
    </QueryClientProvider>
  );
}
