"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import Link from 'next/link';

const Notfound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-amber-50 p-4">
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10 }}
        className="bg-amber-100 border border-amber-300 text-amber-800 rounded-2xl shadow-xl p-8 max-w-md text-center"
      >
        <div className="flex justify-center mb-4">
          <AlertTriangle className="h-16 w-16 text-amber-500 animate-pulse" />
        </div>
        <h1 className="text-4xl font-bold mb-2">404 - Not Found</h1>
        <p className="text-lg mb-4">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-amber-500 text-white font-medium rounded-full shadow hover:bg-amber-600 transition"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default Notfound;
