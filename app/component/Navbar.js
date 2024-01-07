import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" flex justify-center my-4">
      <ul className="flex justify-between w-3/6 font-bold text-xl">
        <Link href="/">
          <li>Home</li>{" "}
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
        <Link href="/blog">
          <li>Blog</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
