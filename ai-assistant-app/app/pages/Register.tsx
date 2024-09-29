"use client";

import Link from 'next/link';

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Register</h1>
      <form className="w-full max-w-xs">
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 mb-4 border rounded"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Register
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{' '}
        <Link href="/pages/Login" className="text-blue-500 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  );
}
