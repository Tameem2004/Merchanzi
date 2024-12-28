import React from 'react';
import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

// Import the logo
import hero_logo_brown from '../bg_images/hero_logo.png';
import hero_page_image from '../bg_images/hero_page_product_img.jpg'
const NavBar: React.FC = () => {
  return (
    <section id="home">
    <div className="bg-bgImg bg-no-repeat bg-cover h-[900] w-full hero-section">
      <div className="container mx-auto flex items-top justify-between py-4 px-6 ">
        {/* Logo Section */}
        <div className="items-top">
          <Image
            src={hero_logo_brown}
            alt="Merchanzi Logo"
            width={100} // Adjust size as needed
            height={100}
          />
        </div>

        {/* Navbar Links */}
        <div className="hidden sm:flex space-x-8">
          <a href="#home" className="text-gray-800 hover:text-blue-600 font-semibold">HOME</a>
          <a href="#product" className="text-gray-800 hover:text-blue-600 font-semibold">PRODUCT</a>
          <a href="https://wa.me/c/918100600345" className="text-gray-800 hover:text-blue-600 font-semibold">CONTACT</a>
          <a href="#about" className="text-gray-800 hover:text-blue-600 font-semibold">ABOUT</a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://x.com/merchanzi" passHref>
            <FaTwitter className="text-gray-800 hover:text-blue-600 text-xl cursor-pointer" />
          </Link>
          <Link href="https://www.instagram.com/merchanzi" passHref>
            <FaInstagram className="text-gray-800 hover:text-pink-600 text-xl cursor-pointer" />
          </Link>
          <Link href="https://wa.me/c/918100600345" passHref>
            <FaWhatsapp className="text-gray-800 hover:text-green-600 text-xl cursor-pointer" />
          </Link>
        </div>
        
      </div>
      {/* Hero Section Text */}
      <div className="flex flex-col items-center justify-between mt-8">
        <h1
          className="absolute font-bold text-[65px] leading-[78px] capitalize"
          style={{
            width: '530px',
            height: '78px',
            left: '153px',
            top: '385px',
            fontFamily: "'Frank Ruhl Libre', serif",
            color: '#34251F',
          }}
        >
          MERCHANDISE
        </h1>
        <p
          className="absolute text-[24px] leading-[31px] capitalize"
          style={{
            width: '670px',
            height: '93px',
            left: '153px',
            top: '507px',
            fontFamily: "'ADLaM Display', sans-serif",
            fontWeight: '400',
            color: '#34251F',
          }}
        >
          “Effortless Event Planning Starts Here. 
          <br />
          Your One-Stop Solution for All Event Essentials”.
        </p>
      </div>
        <div className="absolute left-[829px] top-[181px] bg-no-repeat bg-cover overflow-hidden rounded-bl-[200px]"
        style={{
          width: '518px',
          height: '600px',
        }}
      >
        <Image
          src={hero_page_image} // Adjust the path as needed
          alt="Merchanzi Logo"
          width={518} // Adjust size as needed
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    </section>
  );
};

export default NavBar;
