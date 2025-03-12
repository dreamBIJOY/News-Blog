import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { PiTelegramLogo } from "react-icons/pi";

function TopSection() {
  return (
    <div className="bg-gradient-to-r from-[#5684fe] to-[#fe5773] py-1.5">
      <div className="flex items-center justify-between w-11/12 mx-auto text-white">
        <div className="hidden md:block">
        <div className="flex items-center gap-6">
          <FaFacebookF size={20} />
          <FaXTwitter size={20} />
          <IoLogoInstagram size={25} />
          <PiTelegramLogo size={25} />
        </div>
        </div>
        <div className="flex items-center gap-2 md:gap-4 text-lg md:text-xl text-white font-Inter">
            <h6>About Us</h6>
            <h6>-</h6>
            <h6>Our Story</h6>
            <h6>-</h6>
            <h6>Project</h6>
        </div>
      </div>
    </div>
  );
}

export default TopSection;
