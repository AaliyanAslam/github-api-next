// import axios from "axios";
import Image from "next/image";
import React from "react";
import BackBtn from "@/components/BackBtn";

const page = async ({ params }) => {
  const { productId } = await params;
let data = null
  try {
    const api = "https://api.github.com/users";

    const res = await fetch(`${api}/${productId}`);
   data = await res.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
  return (
    <>


<div className="container mx-auto mt-14">
<BackBtn/>
<div className="card card-side bg-base-60 shadow-sm  ">
  <figure>
  <Image
          src={data?.avatar_url}
          alt="image"
          width={200}
          height={200}
          priority
         />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{data.name}</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div>
    </>
  );
};

export default page;
