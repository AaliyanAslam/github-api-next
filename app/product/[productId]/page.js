import axios from "axios";
import React from "react";

const page = async ({ params }) => {
  const { productId } = await params;

  try {
    const api = "https://api.github.com/users";

    const res = await axios(`${api}/${productId}`);
    // const data = await res.json();

    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
  return (
    <>
      {/* {console.log(productId)} */}

      <div>
        <h1 style={{ fontFamily: "sans", textAlign: "center" }}>{productId}</h1>
        {/* <p>{console.log(res.data)}</p> */}
      </div>
    </>
  );
};

export default page;
