import React from 'react'
import Image from 'next/image';
import footerlogo from '../footer/FooterLogo.png'

const Footer: React.FC = () => {
  return (
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
  )
}

export default Footer;
