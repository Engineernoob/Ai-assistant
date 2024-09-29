"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { GridPattern } from "@/components/ui/grid-pattern";

const welcomeMessages = [
  "Welcome to your new AI Assistant",
  "Your Personal AI Companion",
  "Let's Chat and Explore",
  "AI-Powered Conversations",
  "Discover the Future of AI"
];

export default function HomePage() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => 
        (prevIndex + 1) % welcomeMessages.length
      );
    }, 5000); // Change message every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <GridPattern
        width={40}
        height={40}
        className="absolute inset-0 z-0 text-gray-300"
        squares={[
          [0, 2],
          [2, 0],
          [4, 4],
          [6, 2],
          [8, 0],
        ]}
      />
      <div className="relative z-10">
        <TypingAnimation 
          key={currentMessageIndex}
          text={welcomeMessages[currentMessageIndex]} 
          duration={50} 
          className="text-4xl font-bold mb-8 text-gray-900"
        />
        <div className="space-x-4">
          <Button asChild>
            <Link href="/Login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/Register">Register</Link>
          </Button>
        </div>
        <div className="mt-4">
          <Button asChild variant="secondary">
            <Link href="/Chat">Go to Chat</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
