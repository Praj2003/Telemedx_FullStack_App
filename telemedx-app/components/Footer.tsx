import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-w-full p-3 bg-black grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
      <div className="flex flex-col items-center gap-5 font-bold">
        <button className="text-white bg-black px-3 py-2 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer">
          Home
        </button>
        <button className="text-white bg-black px-3 py-2 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer">
          About Us
        </button>
        <button className="text-white bg-black px-3 py-2 rounded-lg hover:bg-teal-700 hover:text-white cursor-pointer">
          Book Appointment
        </button>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 text-white font-bold">
        <div className="flex items-center justify-between w-3/4">
          <span>Email:</span>
          <span>info@telemedx.com</span>
        </div>
        <div className="flex items-center justify-between w-3/4">
          <span>Phone:</span>
          <span>+91 12345 67890</span>
        </div>

        <div className="flex items-center justify-between w-3/4">
          <span>Address:</span>
          <span>T-29 Green Park Main, New Delhi</span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 font-bold">
        <span className="text-white text-xl">Follow Us</span>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-700"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-teal-700"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
