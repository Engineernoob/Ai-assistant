"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
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