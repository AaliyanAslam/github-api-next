"use client";
import React from 'react'
import { useRouter } from 'next/navigation'

const BackBtn = () => {
    const router = useRouter();
  return (
    <div><button className="btn btn-soft btn-warning" onClick={()=> router.push("/") }>Warning</button></div>
  )
}

export default BackBtn