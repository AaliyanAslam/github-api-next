import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow shadow-amber-500">
      {/* Left Side - Logo & Mobile Menu */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 mt-3 z-[1] p-2 shadow rounded-box w-52">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/service">Services</Link></li>
          </ul>
        </div>
        <Link href="/" className="text-xl font-bold">
          G<span className="text-amber-500">it</span>View
        </Link>
      </div>

      {/* Center - Menu (desktop only) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/service">Services</Link></li>
        </ul>
      </div>

      {/* Right Side - Login Button */}
      <div className="navbar-end">
        <Link href="/login" className="btn border border-amber-500 text-amber-500 hover:text-white hover:bg-amber-500">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
