'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Importing New Collection Images
import new_collection1 from '../bg_images/new_collection1.jpg';
import new_collection2 from '../bg_images/new_collection2.jpg';
import new_collection3 from '../bg_images/new_collection3.jpg';

import best_fashion from '../bg_images/best_fashion.jpg';

import logo1 from '../client_logo/logo1.png';
import logo2 from '../client_logo/logo2.png';
import logo3 from '../client_logo/logo3.png';
import logo4 from '../client_logo/logo4.png';
import logo5 from '../client_logo/logo5.png';

import product1 from '../product_img/product1.jpg'
import product2 from '../product_img/product2.jpg'
import product3 from '../product_img/product3.jpg'
import product4 from '../product_img/product4.jpg'
import product5 from '../product_img/product5.jpg'
import product6 from '../product_img/product6.jpg'
import product7 from '../product_img/product7.jpg'
import product8 from '../product_img/product8.jpg'

import footerlogo from '../footer/FooterLogo.png'

const products = [
  { name: 'Pastel Long Sleeve', price: '$25.99', image: product1, category: 'LIFESTYLE' },
  { name: 'Casual T-Shirt', price: '$19.99', image: product2, category: 'LIFESTYLE' },
  { name: 'Sporty Jacket', price: '$45.99', image: product3, category: 'WORKSPACE_ESSENTIALS' },
  { name: 'Smart Watch', price: '$129.99', image: product4, category: 'WORKSPACE_ESSENTIALS' },
  { name: 'Designer Jeans', price: '$59.99', image: product5, category: 'LIFESTYLE' },
  { name: 'Leather Wallet', price: '$29.99', image: product6, category: 'BRANDING_MATERIAL' },
  { name: 'Sneakers', price: '$75.99', image: product7, category: 'LIFESTYLE' },
  { name: 'Backpack', price: '$39.99', image: product8, category: 'DRINKWARES' },
];

const testimonials = [
  {
    comment: 'Comfortable and met all my expectations! I ordered a medium and it fit perfectly.',
    fullComment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacus, auctor pretium ac ultrices. Dui lacus dignissim tincidunt urna, at enim tempo. Pellentesque amet Lorem ipsum dolor sit amet.',
    name: 'Anisa Zahra',
    title: 'Founder, Millennial',
  },
  {
    comment: 'Excellent product, would definitely recommend it to others!',
    fullComment:
      'Donec ut lectus vehicula, volutpat purus at, auctor nulla. Integer sit amet mi bibendum, hendrerit leo vel, maximus turpis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;',
    name: 'John Doe',
    title: 'CEO, TechCorp',
  },
  {
    comment: 'Great service and fast shipping. Very satisfied with the product.',
    fullComment:
      'Sed consequat risus eu lectus sollicitudin, vel scelerisque magna volutpat. Suspendisse potenti. Etiam euismod, eros sit amet convallis posuere, libero odio convallis justo, at egestas leo tortor ac ligula.',
    name: 'Maria Smith',
    title: 'Operations Manager, XYZ Ltd.',
  },
  {
    comment: 'Top-notch quality and very responsive customer support!',
    fullComment:
      'Mauris imperdiet lectus ac orci condimentum, at euismod dui tincidunt. Morbi vehicula neque a egestas eleifend. Nullam bibendum erat in orci faucibus, ac lacinia odio interdum.',
    name: 'James Lee',
    title: 'Marketing Director, Innovation Inc.',
  },
  {
    comment: 'Absolutely love it! Worth every penny.',
    fullComment:
      'Nulla venenatis orci ut ex vestibulum, euismod posuere libero gravida. Integer placerat orci vel orci suscipit tincidunt. Nulla facilisi. Vivamus cursus urna id odio dictum, non suscipit enim malesuada.',
    name: 'Sophia Johnson',
    title: 'Founder, Fashionista',
  },
  {
    comment: 'The best purchase I’ve made in a while. Highly recommend!',
    fullComment:
      'Pellentesque auctor dolor ut turpis elementum, sit amet tempus arcu suscipit. Sed ac lectus in felis scelerisque iaculis. Nam feugiat, tortor ut dapibus convallis, erat erat varius leo, id lacinia libero libero et nisl.',
    name: 'Ethan Kim',
    title: 'Product Manager, TechWorld',
  },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('ALL'); // Default to ALL

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === 'ALL'
      ? products
      : products.filter(product => product.category === selectedCategory);
  return (
    <main
      style={{
        position: 'absolute',
        width: '1216px',
        height: '690px',
        left: '151px',
        top: '999px',
        fontFamily: "'Frank Ruhl Libre', serif",
        color: '#34251F',
      }}
    >
      {/* New Collection Title */}
      <h1
        style={{
          fontWeight: 700,
          fontSize: '68px',
          lineHeight: '88px',
          textAlign: 'center',
          textTransform: 'capitalize',
          marginBottom: '50px',
        }}
      >
        New Collection
      </h1>

      {/* Image Container */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px', // Adjust spacing between images
          alignItems: 'center',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Image Cards */}
        {[
          { image: new_collection1, label: 'T-SHIRT' },
          { image: new_collection2, label: 'HOODIE' },
          { image: new_collection3, label: 'NECK T-SHIRT' },
        ].map(({ image, label }, index) => (
          <div
            key={index}
            style={{
              width: '363px',
              height: '417px',
              position: 'relative',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '100%',
                height: '100%',
                position: 'relative',
              }}
            >
              <Image
                src={image}
                alt={`New Collection ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* White Box (Rectangle 130) */}
            <div
              style={{
                position: 'absolute',
                left: '6.34%',
                right: '6.34%',
                top: '80.34%',
                bottom: '5.28%',
                background: '#FFFFFF', // White background
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '5px',
              }}
            >
              {/* Text Inside White Box */}
              <p
                style={{
                  fontFamily: "'Lato', sans-serif",
                  fontStyle: 'normal',
                  fontWeight: 900,
                  fontSize: '14px',
                  lineHeight: '15px',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  color: '#34251F', // Dark brown text
                  margin: 0,
                }}
              >
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Best Fashion */}
      <div className="flex items-start pt-48">
        {/* Best Fashion Image */}
        <div className="w-[518px] h-[600px] relative rounded-tl-[200px] overflow-hidden">
          <Image
            src={best_fashion} // Adjust the path as needed
            alt="Fashion image"
            width={518} // Adjust size as needed
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
        <div
      style={{
        position: 'absolute',
        width: '739px',
        height: '173px',
        left: '370px',
        top: '1175px',
        background: '#FFFFFF', // White background
        display: 'flex',
        justifyContent: 'space-between', // Space out the three blocks
        alignItems: 'center',
        padding: '0 20px',
        boxSizing: 'border-box',
      }}
    >
      {/* First Block (2023 and Merchanzi Founded) */}
      <div>
        <span className='font-bold'
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Frank Ruhl Libre",
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '40px',
          color: '#34251F', // Dark Brown
          textAlign: 'center',
        }}>
          2023
        </span>
        <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Lato",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          color: '#34251F', // Dark Brown
          textAlign: 'center',
        }}
        >Merchanzi Founded</span>
      </div>

      {/* Line separator */}
      <div
        style={{
          height: '40px',
          width: '1px',
          backgroundColor: '#34251F', // Dark brown color for the line
          opacity: 0.12,
        }}
      ></div>

      {/* Second Block (5000+ Product Sold) */}
      <div>
      <span className='font-bold'
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Frank Ruhl Libre",
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '40px',
          color: '#34251F', // Dark Brown
          textAlign: 'center',
        }}>
          5000+</span>
          <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Lato",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          color: '#34251F', // Dark Brown
          textAlign: 'center',
        }}
        >Product Sold</span>
      </div>

      {/* Line separator */}
      <div
        style={{
          height: '40px',
          width: '1px',
          backgroundColor: '#34251F', // Dark brown color for the line
          opacity: 0.12,
        }}
      ></div>

      {/* Third Block (8399+ Best Reviews) */}
      <div>
      <span className='font-bold'
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Frank Ruhl Libre",
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '40px',
          color: '#34251F', // Dark Brown
          textAlign: 'center',
        }}>
          8399+</span>
          <span
        style={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: "Lato",
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '18px',
          color: '#34251F', // Dark Brown
          textAlign: 'center',
        }}
        >Best Reviews</span>
      </div>
    </div>
        {/* Best Fashion Text */}
        <div className="ml-24"> {/* Adjusted margin for gap between image and text */}
          <h1 className="font-bold text-[68px] leading-[78px] capitalize text-[#34251F] w-[530px] h-[156]">
          Best Fashion Since 2023
          </h1>
          <br />
          <p className="text-[32px] leading-[60px] capitalize font-Lato font-light text-[#34251F] w-[446px] h-[116]">
            One stop solution for all your event essentials
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden w-full">
        
      {/* Animated scrolling container */}
        <div
          className="flex space-x-16 animate-loop-scroll bg-gray-300"
          style={{
            width: "350%", // Make space for both sets of logos
          }}
        >

          {/* First set of logos */}
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div
              key={`set1-${index}`}
              className="w-24 h-24 flex items-center justify-center animate-loop-scroll"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}

          {/* Second set of logos (duplicated for seamless scrolling) */}
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div
              key={`set2-${index}`}
              className="w-24 h-24 flex items-center justify-center animate-loop-scroll"
              aria-hidden="true"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Third set of logos (duplicated for seamless scrolling) */}
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div
              key={`set3-${index}`}
              className="w-24 h-24 flex items-center justify-center animate-loop-scroll"
              aria-hidden="true"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Fourth set of logos (duplicated for seamless scrolling) */}
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div
              key={`set4-${index}`}
              className="w-24 h-24 flex items-center justify-center animate-loop-scroll"
              aria-hidden="true"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
          {/* Fifth set of logos (duplicated for seamless scrolling) */}
          {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
            <div
              key={`set5-${index}`}
              className="w-24 h-24 flex items-center justify-center animate-loop-scroll"
              aria-hidden="true"
            >
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

       {/* Product Section */}
       <section id="product">
        <div className="flex justify-center">
          <h2 className="w-[271px] h-[62px] text-center text-[#34251F] text-4xl font-semibold leading-[62px] capitalize font-frank-ruhl">
            Our Products
          </h2>
        </div>
        <div className="flex justify-center gap-8 mb-8">
          <a
            href="#ALL"
            className="text-gray-800 hover:text-blue-600 font-semibold"
            onClick={() => setSelectedCategory('ALL')}
          >
            ALL
          </a>
          <a
            href="#LIFESTYLE"
            className="text-gray-800 hover:text-blue-600 font-semibold"
            onClick={() => setSelectedCategory('LIFESTYLE')}
          >
            LIFESTYLE
          </a>
          <a
            href="#WORKSPACE_ESSENTIALS"
            className="text-gray-800 hover:text-blue-600 font-semibold"
            onClick={() => setSelectedCategory('WORKSPACE_ESSENTIALS')}
          >
            WORKSPACE ESSENTIALS
          </a>
          <a
            href="#DRINKWARES"
            className="text-gray-800 hover:text-blue-600 font-semibold"
            onClick={() => setSelectedCategory('DRINKWARES')}
          >
            DRINKWARES
          </a>
          <a
            href="#BRANDING_MATERIAL"
            className="text-gray-800 hover:text-blue-600 font-semibold"
            onClick={() => setSelectedCategory('BRANDING_MATERIAL')}
          >
            BRANDING MATERIAL
          </a>
        </div>

        <div className="flex flex-wrap justify-center mt-8">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="w-64 h-[340px] m-4 p-2 bg-white border rounded-lg shadow-md"
            >
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <h3 className="text-center font-semibold text-lg mt-2">{product.name}</h3>
              <p className="text-center text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section id="about">
      <div className="absolute w-[1139px] h-[504px] left-[28px] top-[2308px] bg-[#EEDDCC] border border-[#EEDDCC] box-border">
        <h1 className="flex justify-center absolute w-[250px] h-[62px] left-[450px] top-[50] text-[#34251F] text-4xl font-bold font-frank-ruhl text-center capitalize">
            About Us
        </h1>
          <br />
          <p className="flex justify-center absolute w-[438px] h-[45px] left-[360px] top-[200px] text-[#34251F] text-2xl font-normal capitalize font-lato leading-[180%]">
      Merchanzi | Merchandise made easy
    </p>
    </div>
    </section>

    
      {/* Testimonial Cards */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[2900px]">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-[#34251F]">
          What People Say About Us
        </h1>
        <br/>
        {/* Subheading */}
        <p className="text-lg text-center text-[#34251F] opacity-80">
          "Stories of trust, impact, and excellence!"
        </p>

        <div className="flex w-max animate-loop-scroll2">
        {/* Repeat testimonials twice for smooth looping */}
        {testimonials.concat(testimonials).map((testimonial, index) => (
          <div
            key={index}
            className="w-[557px] h-[389px] shadow-lg rounded-lg mx-4 flex flex-col justify-between items-center p-6"
            style={{ backgroundColor: "#EEDDCC" }}
          >
            {/* Main Comment */}
            <p className="text-xl font-extrabold text-center text-[#34251F]">
              {testimonial.comment}
            </p>

            {/* Full Comment */}
            <p className="text-sm text-center text-[#34251F] opacity-80">
              {testimonial.fullComment}
            </p>

            {/* Bottom Section */}
            <div className="text-center">
              {/* Customer Name */}
              <p className="text-lg font-bold text-[#34251F]">
                {testimonial.name}
              </p>

              {/* Customer Title */}
              <p className="text-sm text-[#34251F] opacity-50">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
    <footer className="bg-[#413531] text-white py-6">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Logo on the left */}
        <div className="flex items-center">
          <Image src={footerlogo} alt="Logo" width={200} height={200} />
        </div>

        {/* Centered links */}
        <div className="flex space-x-8 text-center">
          <a href="/contact-us" className="hover:underline">Contact Us</a>
          <a href="/terms-of-use" className="hover:underline">Terms of Use</a>
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
          <a href="/sales-policy" className="hover:underline">Sales Policy</a>
          <a href="/faq" className="hover:underline">FAQ</a>
        </div>
      </div>
    </footer>
    </div>

    
    </main>
  );
}
