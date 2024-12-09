import React from "react";
import groupe1 from "../public/image/Groupe1.svg";
import groupe2 from "../public/image/Groupe2.svg";
import groupe3 from "../public/image/Groupe3.svg";
import groupe4 from "../public/image/Groupe4.svg";
import buffet from "../public/image/BUFFET.png";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

function SubscribeSection() {
  return (
    <div className="relative w-full h-[567px] bg-gradient-to-b from-[#ffdfef] to-[#FFFFFF] p-6 mb-32">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">
          On s’occupe de <span className="text-[#5CD2DD]">tout</span>
        </h1>
        <h3 className="text-lg text-gray-600">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </h3>
      </div>

      {/* Features Section */}
      <div className="flex justify-center items-center my-16">
        {/* Feature 1 */}
        <div className="text-center flex flex-col items-center justify-center">
          <Image src={groupe1} alt="Livraison & Reprise" />
          <h1 className="font-bold text-xl mt-2">Livraison & Reprise</h1>
          <p className="text-gray-600 text-lg">Selon vos besoins</p>
        </div>
        <hr className="mb-12 w-36 border h-1 bg-gray-400" />
        {/* Feature 2 */}
        <div className="text-center flex flex-col items-center justify-center">
          <Image src={groupe2} alt="Nettoyage" />
          <h1 className="font-bold text-xl mt-2">Nettoyage</h1>
          <p className="text-gray-600 text-lg">Selon vos besoins</p>
        </div>
        <hr className="mb-12 w-36 border h-1 bg-gray-400" />
        {/* Feature 3 */}
        <div className="text-center flex flex-col items-center justify-center">
          <Image src={groupe3} alt="Commande Illimitée" />
          <h1 className="font-bold text-xl mt-2">Commande Illimitée</h1>
          <p className="text-gray-600 text-lg">Selon vos besoins</p>
        </div>
        <hr className="mb-12 w-36 border h-1 bg-gray-400" />
        {/* Feature 4 */}
        <div className="text-center flex flex-col items-center justify-center">
          <Image src={groupe4} alt="Transport & Enlèvement" />
          <h1 className="font-bold text-xl mt-2">Transport & Enlèvement</h1>
          <p className="text-gray-600 text-lg">Selon vos besoins</p>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="mt-[200px] flex items-center justify-between">
        {/* Left Image */}
        <div className="w-[700px] h-[300px] flex justify-center rounded-xl">
          <Image
            src={buffet}
            alt="Buffet"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-[800px] h-[300px] pl-8 bg-[#FFF3F9] p-6 rounded-xl">
          <h1 className="text-2xl font-bold mb-4">
            S&rsquo;inscrire & économiser <span className="text-[#5CD2DD]">10%</span>
          </h1>
          <p className="text-gray-600 mb-6 text-xl">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn&apos;t. Yet busy any meeting
            shark light marginalised 4-blocker message. Productize corporate
            nail caught synergy highlights lunch. Company another pushback items
            dear or any.
          </p>
          {/* Input and Button */}
          <div className="flex gap-1">
            <input
              type="text"
              placeholder="john@doe.com"
              className="w-full px-4 py-4 border border-gray-300 rounded-md focus:outline-none"
            />
            <button className="bg-[#5CD2DD] text-white px-6 py-2 rounded-lg flex items-center">
              S’inscrire <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeSection;
