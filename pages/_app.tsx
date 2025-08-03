import { MainLayout } from "@/layout";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "@/context";
import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import type { AppProps } from "next/app";

const client = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient || !router.isReady) return;
    const isProfilePage = router.pathname === "/profile";
    const token = getCookie("token");
    const user = localStorage.getItem("user");

    if (isProfilePage && (!token || !user)) {
      router.push("/auth/login");
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
