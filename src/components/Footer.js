import React from 'react';

import { Typography } from "@material-tailwind/react";

import { FaGithub, FaInstagram } from 'react-icons/fa';
import { BsSubstack } from "react-icons/bs";


const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="relative w-full tealBG">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="flex w-full flex-col items-center justify-center  py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-white md:mb-0"
          >
            &copy; {currentYear} <a href="https://material-tailwind.com/">Aight.Fun</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-white sm:justify-center">
            <Typography as="a" href="https://github.com/JoeShippo" className="opacity-80 transition-opacity hover:opacity-100">
              <FaGithub />
            </Typography>
            <Typography as="a" href="https://www.instagram.com/hopswithjoe/" className="opacity-80 transition-opacity hover:opacity-100">
              <FaInstagram />
            </Typography>

            <Typography as="a" href="http://substack.com/@joeshipton" className="opacity-80 transition-opacity hover:opacity-100">
              <BsSubstack />
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




