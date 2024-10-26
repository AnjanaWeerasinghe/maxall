import React from 'react';
import Image from "next/image"; 
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import logo from "../assets/logo.jpeg"; 

const links = [
    { name: "home", path: "/" },
    { name: "about us", path: "/about-us" },
    { name: "cocopeat", path: "/cocopeat" },
    { name: "horticulture", path: "/horticulture" },
];

const Footer = () => {
  return (
    <footer className="bg-[#134611] py-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 px-6">

        {/* Logo Section */}
        <div className="flex-shrink-0 mb-4 md:mb-0 text-center md:text-left">
          <Image src={logo} alt="Maxo Logo" width={96} height={96} className="mx-auto md:mx-0" />
        </div>
        
        {/* Quick Links */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="font-bold text-lg mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.path} className="capitalize" target="_blank" rel="noopener noreferrer">{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p>
            <a href="tel:+94773220022">+94 773 220 022</a>
          </p>
          <p>
            <a href="mailto:maxol@maxolsl.com" >maxol@maxolsl.com</a>
          </p>
          <ul className="flex space-x-4 justify-center md:justify-start mt-4">
            <li><a href="#facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a></li>
            <li><a href="#instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a></li>
            <li><a href="#linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" ><FaLinkedin size={24} /></a></li>
            <li><a href="#tiktok" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><FaTiktok size={24} /></a></li>
          </ul>
        </div>

        {/* Address */}
        <div className="text-center md:text-left w-full md:w-auto">
          <h2 className="font-bold text-lg mb-4">Address</h2>
          <p>No.75 / 14,</p>
          <p>D.L.Pathirage Mawatha,</p>
          <p>Gangodawila,</p>
          <p>Nugegoda (10250),</p>
          <p>Sri Lanka.</p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-brown-300 my-6 mx-6"></div>

      {/* Copyright */}
      <div className="text-center text-brown-700 text-sm px-6">
        <p>&copy; 2024 | Maxol - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
