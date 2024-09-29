// app/page.tsx
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-green-500">
      <h1 className="text-5xl font-extrabold text-white mb-6">Welcome to AI Assistant</h1>
      <p className="mb-8 text-xl text-white text-center max-w-lg">
        Experience the power of AI. Log in or register to start chatting with your virtual assistant.
      </p>
      <div className="flex space-x-6">
        <Link href="/login">
          <a className="px-8 py-3 bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-800 transition">
            Login
          </a>
        </Link>
        <Link href="/register">
          <a className="px-8 py-3 bg-green-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-800 transition">
            Register
          </a>
        </Link>
      </div>
    </div>
  );
}
