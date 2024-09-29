"use client";

// components/Navbar.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  // Make router available globally for debugging
  if (typeof window !== 'undefined') {
    // @ts-ignore
    window.Router = router;
  }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Button asChild variant="ghost"><Link href="/">Home</Link></Button></li>
        <li><Button asChild variant="ghost"><Link href="/login">Login</Link></Button></li>
        <li><Button asChild variant="ghost"><Link href="/register">Register</Link></Button></li>
        <li><Button asChild variant="ghost"><Link href="/chat">Chat</Link></Button></li>
      </ul>
    </nav>
  );
}
