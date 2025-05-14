"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const BackBtn = () => {
  const router = useRouter();
  return (
    <div className="relative bottom-5">
      <button
        className="btn btn-dark border text-amber-500 border-amber-500 hover:bg-amber-500  bg-white hover:text-white"
        onClick={() => router.push("/")}
      >
        <MdOutlineArrowBackIosNew />
      </button>
    </div>
  );
};

export default BackBtn;
