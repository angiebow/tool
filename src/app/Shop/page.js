import React from "react";
import Background from "@/components/background/Background";
import localFont from "next/font/local";

const lun = localFont({ src: "/lunema-regular.ttf" });
const me = localFont({ src: "/MonumentExtended-Ultrabold.otf" });

const Shop = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Background />
      <div className="m-5 absolute top-0 left-0 p-4">
        <a
          href="/"
          className={`text-black text-sSize bg-gray-100 bg-opacity-50 rounded p-2 shadow-md ${lun.className}`}
        >
          &lt; Home
        </a>
      </div>
      <div className="text-center mt-0">
        <img src="/comShop.svg" alt="star" className="w-6/7 p-8 mx-auto" />
      </div>
      <div class={`text-black text-center text-hSize mb-2 ${me.className}`}>
        We are coming soon.
      </div>
      <div className={`text-center text-sSize text-black mb-4 ${lun.className}`}>
        Get notified when we launch.
      </div>
      <form className="flex justify-center">
        <div className="mb-3 pr-3">
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className={`text-black text-kSize p-2 w-full border border-black rounded focus:outline-none focus:ring focus:border-blue-300 ${lun.className}`}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`px-4 py-2 bg-toolbeng-red text-white rounded text-kSize hover:bg-red-500 focus:outline-none focus:ring focus:ring-blue-300 ${lun.className}`}
          >
            Notify Me
          </button>
        </div>
      </form>
    </div>
  );
};

export default Shop;
