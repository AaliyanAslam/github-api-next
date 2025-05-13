import React from "react";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-[#F6F6E3] text-gray-800 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#FF9000] mb-8">Contact Us</h1>

        <p className="text-lg mb-10">
          Have questions or want to work with us? Fill out the form below or reach out directly. We’ll get back to you soon.
        </p>

        <form className="grid grid-cols-1 gap-6">
          <div>
            <label className="block mb-2 text-sm font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF9000]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF9000]"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">Message</label>
            <textarea
              rows={5}
              placeholder="Your message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#FF9000]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4  text-amber-500 border border-amber-500 hover:text-white hover:bg-[#FF9000] rounded-lg  transition duration-200 font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
