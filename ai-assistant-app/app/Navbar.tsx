"use client";

// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/register">Register</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/">Chat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
