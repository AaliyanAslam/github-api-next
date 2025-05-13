"use client";
import { useForm } from "react-hook-form";
import React  from "react";
import { useRouter } from "next/navigation";

export default function Input() {
const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.watch(data)
    console.log(data)
    router.push(`/product/${data.username}`)
  } 


  
  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
   

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("username", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
