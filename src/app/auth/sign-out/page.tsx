"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.removeItem("data");
    document.cookie =
      "auth" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/");
  }, [router]);

  return <div className="fixed top-0 left-0 h-screen w-screen bg-black"></div>;
}
