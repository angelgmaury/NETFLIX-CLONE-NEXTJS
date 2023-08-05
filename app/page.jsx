"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      router.push("/selectUser");
    } else {
      router.push("/login");
    }
  }, []);

  return <div id="loader" className="nfLoader"></div>;
}
