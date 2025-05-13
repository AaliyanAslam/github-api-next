"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div className="relative bottom-5">
      <button
        className="btn btn-dark hover:bg-[#ff3a3a] border-none bg-white hover:text-white"
        onClick={() => router.push("/")}
      >
        <MdOutlineArrowBackIosNew />
      </button>
    </div>
  );
};

export default BackBtn;
