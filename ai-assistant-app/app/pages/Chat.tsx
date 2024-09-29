"use client";

// pages/chat.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import AIAssistant from "../page";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token"); // Retrieve the token
    if (!token) {
      alert("Please log in first");
      router.push("/login"); // Redirect to login if not logged in
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:8000/chat",
        { message },
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in headers
          },
        }
      );
      setResponse(res.data.response);
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(
          "Error: " + (error as any).response?.data?.detail || error.message
        );
      } else {
        alert("An unknown error occurred");
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login"); // Redirect to login if not authenticated
    }
  }, []);

  return (
    <div>
      <h2>Chat with Jai</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Message:</label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Send</button>
      </form>
      {response && (
        <div>
          <h3>Response:</h3>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default function ChatPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
        <div className="w-full max-w-2xl">
          <AIAssistant />
        </div>
      </div>
    );
  }
