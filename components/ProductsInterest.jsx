"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import like from "../public/image/like.png";
import table from "../public/image/big_table.png";


function ProductsInterest() {
  const containerRef = useRef(null);

  // Scroll functionality
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -600, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 600, behavior: "smooth" });
  };

  return (
    <div id="productinterest-container" className="relative my-6 p-4">
      <h1 className="text-[35px] mb-6 ml-5">Ces produits pourraient vous intéresser</h1>
      <div className="flex items-center gap-4">
        {/* Left Arrow */}
        <FaArrowLeft
          onClick={scrollLeft}
          className="absolute left-1 z-10 text-[64px] p-[15px] cursor-pointer text-white bg-[#5CD2DD]"
        />

        {/* Image Container */}
        <div
        id="productinterest"
          ref={containerRef}
          className="flex gap-4 overflow-x-hidden overflow-y-hidden scrollbar-hide w-[98%] mx-auto"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-[550px] flex-shrink-0  rounded-xl"
            >
                <div className="bg-[#F9F7F5]">
              <div className="w-full flex items-center justify-between p-4 mt-4">
                <Image src={like} alt="Like Icon" width={35} />
                <button className="uppercase bg-white py-1 px-4">
                  Art de la table
                </button>
              </div>
              <div className="flex items-center justify-center h-[380px]">
                <Image src={table} alt="Table" />
              </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-bold text-[24px]">Title</h1>
                    <p className="text-gray-700">0,35€/Pièce · RÉF : VABGN5</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <h1 className="font-bold text-[24px]">
                      0 <sup>€</sup>
                    </h1>
                    <p className="text-gray-700 bg-gray-300 px-4 py-1 rounded-full">
                      20 pièces
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <FaArrowRight
          onClick={scrollRight}
          className="absolute right-4 z-10 text-[64px] p-[15px] cursor-pointer text-white bg-[#5CD2DD]"
        />
      </div>
    </div>
  );
}

export default ProductsInterest;
