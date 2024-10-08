"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
    }
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, newMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "/api/chat",
        { message: input },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const aiResponse = { id: Date.now(), text: res.data.response, sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Card className="flex-1 overflow-y-auto m-4">
        <CardContent className="space-y-4 p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs p-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>
      </Card>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send'}
          </Button>
        </div>
      </form>
    </div>
  );
}