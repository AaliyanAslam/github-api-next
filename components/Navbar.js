import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#131010] text-white shadow-sm">
        <div className="flex-1">
          <Link href="/">View Profile</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/service">Services</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
