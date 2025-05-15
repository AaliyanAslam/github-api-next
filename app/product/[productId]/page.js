// app/product/[productId]/page.jsx
import Image from "next/image";
import React from "react";
import BackBtn from "@/components/BackBtn";
import Notfound from "@/app/not-found";
// import Loading from "@/app/loading";

const Page = async ({ params }) => {
  const { productId } = await params;
  let data = null;


  try {
    
    const api = `https://api.github.com/users/${productId}`;
    const res = await fetch(api, { next: { revalidate: 60 } });
    console.log(res.status);
    if (res.status !== 200) {
      return (
        <>
          <Notfound />
        </>
      );
    }
    data = await res.json();
  } catch (error) {
    console.error("Error fetching user:", error);
  }

  return (
    <div className="min-h-screen bg-[#F6F6E3] py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <BackBtn />

        <div className="shadow-amber-200 border border-amber-500 bg-white rounded-2xl shadow-lg p-8 mt-10 flex flex-col md:flex-row items-start gap-10">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <Image
              src={data?.avatar_url}
              alt="User Avatar"
              width={220}
              height={220}
              className="rounded-xl border border-[#FF9000]/30 shadow"
            />
          </div>

          {/* Details */}
          <div className="flex-1 space-y-4">
            <div>
              <h1 className="text-4xl font-bold text-[#FF9000] mb-1">
                {data?.name || data?.login}
              </h1>
              <p className="text-gray-600 text-lg">
                {data?.bio || "No bio available."}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
              <Stat label="Followers" value={data?.followers} />
              <Stat label="Following" value={data?.following} />
              <Stat label="Public Repos" value={data?.public_repos} />
            </div>

            <div className="mt-6 space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">Username:</span> {data?.login}
              </p>
              <p>
                <span className="font-semibold">Location:</span>{" "}
                {data?.location || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Company:</span>{" "}
                {data?.company || "N/A"}
              </p>
              <p>
                <span className="font-semibold">Blog:</span>{" "}
                {data?.blog ? (
                  <a
                    href={
                      data.blog.startsWith("http")
                        ? data.blog
                        : `https://${data.blog}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    {data.blog}
                  </a>
                ) : (
                  "N/A"
                )}
              </p>
            </div>

            <div className="mt-8">
              <a
                href={data?.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 border border-amber-500 text-amber-500 hover:bg-[#FF9000] hover:text-white rounded-lg transition duration-300 font-medium"
              >
                Visit GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="bg-[#FFF9F0] text-center py-3 px-4 rounded-lg shadow-sm border border-[#FF9000]/30">
    <p className="text-lg font-semibold text-[#FF9000]">{value}</p>
    <p className="text-sm text-gray-600">{label}</p>
  </div>
);

export default Page;
