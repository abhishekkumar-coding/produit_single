import React from "react";
import Image from "next/image";
import table from "../public/image/table.png";
import machine from "../public/image/machine.png";
import like from "../public/image/like.png";
import scale from "../public/image/scale.png";
import circle from "../public/image/circle.png";

// Component to render product images
const ProductImages = () => (
  <div className="absolute top-5 left-5 flex flex-col gap-1">
    {[...Array(4)].map((_, index) => (
      <Image
        key={index}
        className="w-[55px] rounded-lg mt-3 bg-white"
        src={table}
        alt={`Table ${index + 1}`}
      />
    ))}
  </div>
);

// Component to render product details
const ProductDetails = () => (
  <div>
    <div className="border-b flex items-center justify-between">
      <div className="border-b">
        <h1 className="text-[30px]">Cheese – appareil à raclette 1/2 roue</h1>
        <span className="flex items-center gap-3">
          <h1 className="text-[30px]">39,50€</h1>
          <p className="text-gray-600 text-[14px]">/pièce</p>
        </span>
      </div>
      <Image
        className="absolute top-4 right-5"
        width={27}
        src={like}
        alt="Like button"
      />
    </div>
    <div className="flex border-b items-center justify-between px-5">
      <div className="flex items-center gap-8">
        <span className="flex items-center gap-4 py-6">
          <Image src={scale} />
          <p>
            20<sup>cm</sup>
          </p>
        </span>
        <span className="flex items-center gap-4 py-6">
          <Image src={circle} />
          <p>
            50<sup>cm</sup>
          </p>
        </span>
      </div>
      <span>RÉF : VABGN5</span>
    </div>
    <div className="py-8 border-b h-[390px]">
      <p className="w-[60%]">
        Location appareil à raclette - Raclette traditionnelle 1/2 roue Réglable
        en hauteur Appareil à raclette professionnel Boîtier de chauffe
        horizontal réglable en hauteur <br />
        <br /> 220V <br /> 900W
      </p>
    </div>
    <div className="flex items-center mt-5">
      <div className="cursor-pointer flex items-center justify-evenly w-[25%] py-2 mx-2 border rounded">
        <p>-</p>
        <h1>1</h1>
        <p>+</p>
      </div>
      <button className="uppercase bg-[#5CD2DD] py-2 w-[65%] rounded">
        Ajouter au panier
      </button>
    </div>
  </div>
);

function Hero() {
  return (
    <div>
      <div className="flex items-center gap-4 my-6 ml-4 mt-48">
        <h2>Home </h2>
        <div className="w-[5px] h-[5px] bg-[#9C9C9C] rounded-full"></div>
        <h2 className="text-gray-500">Art de la table</h2>
      </div>

      {/* HERO SECTIONS DIV  */}
      <div className="flex items-center justify-around">
        {/* LEFT SIDE DIV  */}
        <div>
          <div className="relative flex flex-col items-center justify-center w-[760px] h-[650px] bg-[#F8F6F4] rounded-3xl">
            <ProductImages />
            <div className="">
              <Image src={machine} alt="Machine" />
            </div>
          </div>
          <div className="w-[740px] mt-10">
            <h1 className="text-3xl my-5">Description produit</h1>
            <p className="text-[1vw]">
              Festi vous propose à la location un/une "Jewel – grand
              couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce
              (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou
              du personnel, ce produit a fait l'objet d'une sélection rigoureuse
              par notre équipe. Il est en location chez nous sous la référence
              "VAJGC". Nous sommes à votre disposition pour que les événements
              de nos clients, même en last-minute, soient toujours une réussite.
              Vous pourrez trouver tout une série d'autres produits à louer de
              ce type dans la catégorie "Art de la Table".
            </p>
          </div>
        </div>

        {/* RIGHT SIDE DIV  */}
        <div className="">
          <div className="relative w-[760px] h-[650px]">
            <ProductDetails />
          </div>
          <div className="flex flex-col mt-16">
            <button className="bg-[#FBF9F8] TEXT-[16px] p-4 my-1 text-start w-[758px]">
              LIVRAISONS
            </button>
            <button className="bg-[#FBF9F8] TEXT-[16px] p-4 my-1 text-start w-[758px]">
              QUESTIONS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
