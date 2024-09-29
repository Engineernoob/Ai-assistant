"use client";

// pages/login.tsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/token', {
        username: email,
        password
      });
      localStorage.setItem('token', response.data.access_token); // Store token
      alert('Login successful!');
      router.push('/chat'); // Redirect to chat page
    } catch (error) {
      if (error instanceof Error) {
        alert('Login failed: ' + (error as any).response?.data?.detail || error.message);
      } else {
        alert('An unknown error occurred');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
