"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import like from "../public/image/like.png";
import big_table from "../public/image/big_table.png";

function SimilarArticles() {
  const containerRef = useRef(null);

  // Scroll functionality
  const scrollLeft = () => {
    containerRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };

  return (
    <div id="art_similaries" className="relative p-8">
      <h1 className="text-3xl mb-8">Articles similaires</h1>
      <div  className="relative flex items-center">
        <FaArrowLeft
          onClick={scrollLeft}
          className="absolute left-[-30] z-10 text-[64px] p-4 text-white bg-[#5CD2DD] cursor-pointer"
        />

        <div id="image_conatiner"
          ref={containerRef}
          className="flex gap-6 overflow-hidden scroll-smooth no-scrollbar"
        >
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="w-[330px] flex-shrink-0 h-[400px] border-gray-300 "
            >
              {/* Image Section */}
              <div className="flex flex-col items-center w-full  bg-[#F9F7F5]">
                <div className="w-full flex items-center justify-between p-3">
                  <Image src={like} width={35} alt="Like" />
                  <button className="uppercase bg-white p-2">
                    Art de la table
                  </button>
                </div>
                <Image src={big_table} alt="Big Table" />
              </div>

              {/* Details Section */}
              <div className="my-4 flex items-center justify-between p-1">
                <div>
                  <h1 className="font-bold text-lg">Title</h1>
                  <p className="text-gray-700">0,35€/Pièce · RÉF : VABGN5</p>
                </div>
                <div className="flex flex-col items-end justify-end">
                  <h1 className="font-bold text-lg">
                    0<sup>€</sup>
                  </h1>
                  <p className="text-gray-700 bg-gray-300 p-1 px-2 rounded-full">
                    20 pièces
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <FaArrowRight
          onClick={scrollRight}
          className="absolute right-[-10] z-10 text-[64px] p-4 text-white bg-[#5CD2DD] cursor-pointer"
        />
      </div>
    </div>
  );
}

export default SimilarArticles;
