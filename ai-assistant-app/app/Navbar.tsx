"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  // Remove global router assignment for security reasons
  // if (typeof window !== 'undefined') {
  //   // @ts-ignore
  //   window.Router = router;
  // }

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li><Button asChild variant="ghost"><Link href="/">Home</Link></Button></li>
        <li><Button asChild variant="ghost"><Link href="/pages/Login">Login</Link></Button></li>
        <li><Button asChild variant="ghost"><Link href="/pages/Register">Register</Link></Button></li>
        <li><Button asChild variant="ghost"><Link href="/chat/chatpage">Chat</Link></Button></li>
      </ul>
    </nav>
  );
}
