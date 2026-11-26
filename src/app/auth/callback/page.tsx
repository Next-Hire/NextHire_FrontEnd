"use client";

import { useEffect, useRef, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function CallbackHandler() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { loginComToken } = useAuth();
  const executou = useRef(false); // Evita rodar duas vezes no StrictMode do React

  useEffect(() => {
    if (executou.current) return;
    executou.current = true;

    const token = searchParams.get("token");

    if (token) {
      loginComToken(token);
    } else {
      router.replace("/login");
    }
  }, [router, searchParams, loginComToken]);

  return (
    <div className="flex h-screen items-center justify-center">
      <p>Finalizando autenticação com LinkedIn...</p>
    </div>
  );
}

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <CallbackHandler />
    </Suspense>
  );
}