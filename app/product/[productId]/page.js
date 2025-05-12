// import axios from "axios";
import Image from "next/image";
import React from "react";

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
      {/* {console.log(productId)} */}

      {/* <div>
        <h1 style={{ fontFamily: "sans", textAlign: "center" }}>{productId}</h1>
        <Image
          src={data?.avatar_url}
          alt="image"
          width={200}
          height={200}
          style={{ borderRadius: "50%", margin: "auto", display: "block" }}/>
        <p className="text-center">{data.name}</p>
      </div> */}

<div className="container mx-auto mt-3">
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
