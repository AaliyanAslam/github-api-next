"use client";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Loading from "@/app/loading";

export default function InputForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setLoading(true);
    console.log(data);
    router.push(`/product/${data.username}`);
  };

  return (
    <div className="w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto mt-12 p-4 sm:p-6 md:p-8 bg-[#FAF9F6] rounded-xl shadow-md border border-[#FF9000]">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">
        Enter <span className="text-[#FF9000]">Username</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block mb-1 text-sm sm:text-base font-medium text-gray-700"
          >
            Enter Your <span className="text-amber-500">Github</span> Username
          </label>
          <input id="username"
            {...register("username", { required: "Username is required" })}
            placeholder="eg :  johndoe123"
            className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9000] focus:border-transparent transition duration-200 text-sm sm:text-base"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          className="w-full py-2 px-4 text-sm sm:text-base text-amber-500 border border-amber-500 hover:text-white hover:bg-[#FF9000] rounded-lg transition duration-200 font-medium"
        >
          <span>{loading ? <Loading /> : "Submit"}</span>
        </motion.button>
      </form>
    </div>
  );
}
