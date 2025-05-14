"use client";
import React from "react";
import { motion } from "framer-motion"; // fixed import: should be from "framer-motion"

const ServicesPage = () => {
  return (
    <section className="min-h-screen bg-[#F6F6E3] text-gray-800 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ y: -70 }}
          animate={{ y: 12 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-[#FF9000] mb-10"
        >
          Our Services
        </motion.h1>

        <motion.p
          initial={{ x: -60 }}
          animate={{ x: 3 }}
          transition={{ duration: 0.5 }}
          className="text-lg mb-12"
        >
          We offer a range of creative and technical services to help you succeed.
        </motion.p>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* Service Card 1 */}
          <motion.div
            initial={{ x: -60 }}
            animate={{ x: 5 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FF9000]">Web Development</h3>
            <p className="text-sm text-gray-700">
              Modern, responsive, and fast websites built using the latest technologies.
            </p>
          </motion.div>

          {/* Service Card 2 */}
          <motion.div
            initial={{ y: -60 }}
            animate={{ y: 4 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FF9000]">UI/UX Design</h3>
            <p className="text-sm text-gray-700">
              Intuitive and elegant design experiences tailored for your audience.
            </p>
          </motion.div>

          {/* Service Card 3 */}
          <motion.div
            initial={{ x: 60 }}
            animate={{ x: -5 }}
            transition={{ duration: 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2 text-[#FF9000]">SEO Optimization</h3>
            <p className="text-sm text-gray-700">
              Improve your visibility on search engines and reach more customers.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
