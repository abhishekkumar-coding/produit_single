import React from "react";
import logo from "../public/image/logo.png";
import linkedin from "../public/image/linkedin.png";
import insta from "../public/image/insta.png";
import twitter from "../public/image/twitter.png";
import Image from "next/image";

function Footer() {
  return (
    <div className=" relative w-full border-t text-white py-12 mt-64 flex items-center justify-between">
      <div className="w-[70%] ml-10 flex flex-wrap justify-between items-center px-4">
        <div className="flex flex-col items-start space-y-4">
          <Image src={logo} alt="Company Logo" className="w-32 h-auto" />
        </div>
        <div className="flex flex-col text-black items-start space-y-2">
          <h1 className="text-2xl font-bold">INFOS PRATIQUES</h1>
          <h3 className="text-xl">À propos</h3>
          <h3 className="text-xl">Livraisons & Reprises</h3>
          <h3 className="text-xl">Mode d’emploi</h3>
          <h3 className="text-xl">F.A.Q</h3>
        </div>
        <div className="flex flex-col text-black items-start space-y-2">
          <h1 className="text-2xl font-bold">LÉGAL</h1>
          <h3 className="text-xl">Mentions légales</h3>
          <h3 className="text-xl">Livraisons & Reprises</h3>
          <h3 className="text-xl">CGU</h3>
          <h3 className="text-xl">CGV</h3>
        </div>
        <div className="flex flex-col text-black items-start space-y-2">
          <h1 className="text-2xl font-bold">MON COMPTE</h1>
          <h3 className="text-xl">Accéder à mon compte</h3>
          <h3 className="text-xl">Ma liste d’envie</h3>
          <h3 className="text-xl">Créer un compte</h3>
          <h3 className="text-xl">Mot de passe oublié</h3>
        </div>
      </div>
      <div className="absolute right-10 top-5 mx-auto flex flex-col items-center px-4 mt-8">
        <h1 className="text-lg text-black font-bold mb-4">NOUS SUIVRE</h1>
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={insta} alt="Instagram" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedin} alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
