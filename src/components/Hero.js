import React from 'react';

import { Typography } from "@material-tailwind/react";
import { FaGithub, FaInstagram, FaDownload } from 'react-icons/fa';
import { BsSubstack } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-white tealBG">
      <div className="absolute top-0 w-full p-4">
        <div className="flex justify-end items-center w-full">
          <div className="flex space-x-4 mr-4 mt-4">
            <div
              className="text-md font-bold uppercase opacity-100 transition-opacity hover:opacity-80 cursor-pointer"
              size={20}
              color="white"
              onClick={() => window.open("https://github.com/JoeShippo", "_blank")}
            >
              <FaGithub className='inline md:mr-1' size={24} />
            </div>
            <div
              className="text-md font-bold uppercase opacity-100 transition-opacity hover:opacity-80 cursor-pointer"
              size={20}
              color="white"
              onClick={() => window.open("https://www.instagram.com/hopswithjoe/", "_blank")}
            >
              <FaInstagram className='inline md:mr-1' size={24} />
            </div>
            <div
              className="text-md font-bold uppercase opacity-100 transition-opacity hover:opacity-80 cursor-pointer"
              size={20}
              color="white"
              onClick={() => window.open("http://substack.com/@joeshipton", "_blank")}
            >
              <BsSubstack className='inline md:mr-1' size={24} />
            </div>
            <div
              className="text-md font-bold uppercase opacity-100 transition-opacity hover:opacity-80 cursor-pointer"
              size={20}
              color="white"
              onClick={() => window.open("/JoeShiptonCV.pdf", "_blank")}
            >
              <FaDownload className='inline md:mr-1' size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4">
        <div className="flex-grow flex flex-col justify-center text-left w-full">
          <Typography variant="h1" className="text-4xl md:text-7xl font-normal text-white text-left">
            Aight! <span className='font-bold'>I'm Joe</span>.<br /><br />
            This is my site where I showcase random <span className='line-through'>crap</span> stuff that I've created to <span className='line-through'>prove</span> show off that I <span className='line-through'>could actually be</span> am <span className='font-bold'>a Software &#x2f; Web Developer.</span>
          </Typography>

          <Typography variant="h6" className="text-2xl md:text-5xl font-normal text-white text-left mt-8">
            Take a look below or <a href="#aboutSection" className="inline-block border-b-4 border-dashed border-white opacity-100 transition-opacity hover:opacity-80">find out what makes me tick.</a>
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default Hero;
