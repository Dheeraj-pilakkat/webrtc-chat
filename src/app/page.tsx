"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/Home");
  }, [router]);
  return (
   <div className="bg-dark">
    <h1>If not auto-redirected then use this link <Link href="/Home">Home</Link></h1>
   </div>
  );
}
