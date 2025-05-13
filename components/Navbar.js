import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-white text-black shadow-sm border-b border-amber-500">
        <div className="flex-1">
          <Link href="/" className="text-xl font-sans tracking-tight">
            View <span className="text-amber-500 font-semibold">Pro</span>file
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-6 text-base font-medium">
            <Link href="/" className="hover:text-amber-500 transition-colors duration-200">
              Home
            </Link>
            <Link href="/about" className="hover:text-amber-500 transition-colors duration-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-amber-500 transition-colors duration-200">
              Contact
            </Link>
            <Link href="/service" className="hover:text-amber-500 transition-colors duration-200">
              Services
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;