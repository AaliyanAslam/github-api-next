"use client";
import { useForm } from "react-hook-form";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

export default function InputForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    router.push(`/product/${data.username}`);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-12 p-6 bg-[#FAF9F6] rounded-xl shadow-md border border-[#FF9000]">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
        Enter <span className="text-[#FF9000]">Username</span>
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="username"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Enter Your <span className="text-amber-500">Github</span> Username
          </label>
          <input
            id="username"
            {...register("username", { required: "Username is required" })}
            placeholder="eg :  johndoe123"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF9000] focus:border-transparent transition duration-200"
          />
          {errors.username && (
            <p className="mt-1 text-sm text-red-600">
              {errors.username.message}
            </p>
          )}
        </div>

        <motion.button
          type="submit"
          className="w-full py-2 px-4  text-amber-500 border border-amber-500 hover:text-white hover:bg-[#FF9000] rounded-lg  transition duration-200 font-medium"
        >
          <span>Submit</span>
        </motion.button>
      </form>
    </div>
  );
}
