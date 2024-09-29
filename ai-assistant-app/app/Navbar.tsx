"use client";

// components/Navbar.tsx
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/Register">Register</Link>
        </li>
        <li>
          <Link href="/Login">Login</Link>
        </li>
        <li>
          <Link href="/Chat">Chat</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
