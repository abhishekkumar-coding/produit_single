"use client"

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/image/logo.png";
import Inspirations from "../public/image/Inspirations.png";
import like from "../public/image/like.png";
import search from "../public/image/search.png";
import cart from "../public/image/cart.png";
import vector from "../public/image/Vector.png";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { id: 1, label: "Art de la table", href: "/" },
    { id: 2, label: "Mobilier", href: "/about" },
    { id: 3, label: "Nappage", href: "/services" },
    { id: 4, label: "Matériel de salle", href: "/portfolio" },
    { id: 5, label: "Cuisine", href: "/contact" },
    { id: 6, label: "Barbecue", href: "/blog" },
    { id: 7, label: "Tente", href: "/careers" },
    { id: 8, label: "Chauffage", href: "/Chauffage" },
    {
      id: 9,
      label: "Podium - Piste de danse",
      href: "/Podium - Piste de danse",
    },
    { id: 10, label: "Son et lumière", href: "/testimonials" },
    { id: 11, label: "Packs", href: "/team" },
  ];

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  return (
    <nav id="nav" className="z-10 overflow-y-hidden overflow-x-hidden fixed top-0 w-full h-[168px] border-b bg-white py-4 px-6 flex flex-col items-center justify-between">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-14">
          <Image src={logo} alt="Brand Logo" />

          <div id="navbar" className="flex items-center w-[768px] h-[50px] bg-[#F9FAFB] p-2 rounded space-x-4">
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="text-[#667482] ml-2 outline-none bg-transparent placeholder-gray-400 flex-grow"
            />
            <Image src={search} alt="Search Icon" width={24} height={24} />
          </div>
        </div>
        <CiMenuFries id="menu"/>

        <div id="navbar" className="flex items-center space-x-6">

          <div className="flex items-center space-x-2">
            <Image src={Inspirations} alt="Inspiration Icon" width={24} height={24} />
            <span className="text-xl text-black">Inspirations</span>
          </div>

          <div className="flex items-center space-x-2">
            <Image src={like} alt="Like Icon" width={24} height={24} />
            <span className="text-xl text-black">Mes favoris</span>
          </div>

          <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded">
            <Image src={cart} alt="Cart Icon" width={24} height={24} />
            <span className="ml-2">Panier</span>
          </button>

          <div className="flex items-center space-x-2">
            <div className="w-[44px] h-[44px] rounded-full bg-[#EAEDEE]"></div>
            <span className="text-xl text-black">AB</span>
            <Image src={vector} alt="Dropdown Icon" width={16} height={16} />
          </div>
        </div>
      </div>

      <div id="navbar" className="flex flex-wrap p-1">
        {links.map((link) => (
          <Link key={link.id} href={link.href} passHref>
            <div
              onClick={() => handleLinkClick(link.id)}
              className={`cursor-pointer text-base px-7 font-medium mt-7 text-[1vw] py-2 ${
                activeLink === link.id
                  ? "text-[#0093D0] border-b-2 border-[#0093D0]"
                  : "text-gray-700 hover:text-[#0093D0]"
              }`}
            >
              {link.label}
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
