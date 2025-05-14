"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Error = () => {
  return (
    <section className="min-h-screen bg-[#FDF7F0] flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-[6rem] font-extrabold text-amber-500 drop-shadow-lg"
      >
        500
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4"
      >
        Oops! Something went wrong.
      </motion.h2>

      <p className="text-gray-600 max-w-md mb-6">
        Sorry, we’re having trouble loading this page. Please try again later.
      </p>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="transition"
      >
        <Link
          href="/"
          className="inline-block bg-amber-500 text-white px-6 py-2 rounded-lg shadow hover:bg-amber-600 transition duration-300"
        >
          Go back Home
        </Link>
      </motion.div>
    </section>
  );
};

export default Error;
