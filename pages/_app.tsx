import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/context";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next/client";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    if (router.pathname === '/profile') {
      const userCookies = getCookie('access_token');
      const userLocalStorage = typeof window !== "undefined" ? localStorage.getItem('user') : null;
      if (!(!!userCookies && !!userLocalStorage)) {
        router.push('auth/login');
      }
    }
  }, [router.pathname]);
  return (
    <AppProvider>
      <MainLayout>
        <Component {...pageProps} />
        <Toaster />
      </MainLayout>
    </AppProvider>
  );
}
