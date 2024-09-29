import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to AI Assistant</h1>
      <div className="space-x-4">
        <Link href="/pages/Login" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Login
        </Link>
        <Link href="/pages/Register" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Register
        </Link>
      </div>
      <div className="mt-4">
        <Link href="/pages/Chat" className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">
          Go to Chat
        </Link>
      </div>
    </div>
  );
}
