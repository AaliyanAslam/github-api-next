import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-base-100 shadow shadow-amber-500">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/service">Services</Link></li>
      </ul>
    </div>
    <Link href= "/" className="text-xl">G<span className="text-amber-500">it</span>View</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/contact">Contact</Link></li>
      <li><Link href="/service">Services</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn border border-amber-500 text-amber-500 hover:text-white hover:bg-amber-500">Login</a>
  </div>
</div>
      {/* <div className="navbar bg-white text-black shadow-sm border-b border-amber-500">
        <div className="flex-1">
          <Link href="/" className="text-xl font-sans tracking-tight">
            View <span className="text-amber-500 font-semibold">Pro</span>file
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-6 text-base font-medium">
            <Link  href="/" className="hover:text-amber-500 transition-colors duration-200">
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
      </div> */}
    </>
  );
};

export default Navbar;