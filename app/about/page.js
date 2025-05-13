import React from "react";

const AboutPage = () => {
  return (
    <section className="min-h-screen bg-[#F6F6E3] text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-[#FF9000] tracking-tight">
          About Us
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to <span className="font-semibold text-[#FF9000]">ViewProfile</span>, your
          personalized digital presence hub. We help individuals and professionals
          showcase their work, identity, and contact information in one elegant profile.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Whether you're a designer, developer, freelancer, or creator, ViewProfile
          offers a minimal and modern platform to build your personal brand.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Empower every individual with a professional online identity that speaks
            volumes — clean, simple, and powerful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
