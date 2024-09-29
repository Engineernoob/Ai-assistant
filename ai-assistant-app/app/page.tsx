import Link from "next/link";
import { Button } from "@/components/ui/button";
import TypingAnimation from "@/components/ui/typing-animation";
import { GridPattern } from "@/components/ui/grid-pattern";

export default function HomePage() {
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
          text="Welcome to AI Assistant" 
          duration={100} 
          className="text-4xl font-bold mb-8 text-gray-800"
        />
        <div className="space-x-4">
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/register">Register</Link>
          </Button>
        </div>
        <div className="mt-4">
          <Button asChild variant="secondary">
            <Link href="/chat">Go to Chat</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
