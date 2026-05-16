"use client";
import { Button } from "@/components/ui/button";
import { AppShell } from "@/components/layout/app-shell";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({ provider: "google", options: { redirectTo: `${window.location.origin}/dashboard` } });
  };

  return <AppShell><div className="mx-auto max-w-md"><div className="rounded-xl border border-border bg-card p-6"><h1 className="mb-3 text-xl font-semibold">Giriş Yap</h1><Button onClick={login} className="w-full">Google ile giriş</Button></div></div></AppShell>;
}
