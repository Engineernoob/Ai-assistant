import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-6">Welcome to AI Assistant</h1>
      <p className="mb-6 text-lg text-gray-600">
        Experience the power of AI. Log in or register to start chatting with our AI assistant.
      </p>
      <div className="flex space-x-4">
        <Link href="/login">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}