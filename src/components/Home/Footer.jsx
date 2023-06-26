import React from "react";
import { Link } from "react-router-dom";
import FooterLogo from "../../Assets/nav link.png";
import { AiOutlineMail, AiFillInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { BsPhone, BsTwitter,  } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"


const Footer = () => {
  return (
    <footer className="bg-[#06345C] w-[100%] px-[5%] py-16  text-white flex justify-between md:flex-col md:justify-center md:items-center md:text-center ">
      <section className="w-[70%] mx-auto flex flex-col justify-center items-center text-center md:w-[100%] md:text-center md:flex md:flex-col md:justify-center md:items-center">
        <div>
          <Link to="/"><img src={FooterLogo} alt="Alajeseku " /></Link>
        </div>
        <p className="text-base text-[#CACACA] font-normal mt-4 mb-7">
          Alajeseku is a unique cloud based cooperative management software that
          helps cooperative societies effectively record & manage loan
          transactions effectively.
        </p>
        <div className="flex justify-center mx-auto text-[#CACACA] w-[100%] text-center">
            <li className="list-none w-[40px] h-[40px] footer "> <BsTwitter /></li>
            <li className="list-none w-[40px] h-[40px] footer"><FaFacebookF /></li>
            <li className="list-none w-[40px] h-[40px] footer"><FaLinkedinIn /></li>
            <li className="list-none w-[40px] h-[40px] footer"><AiFillInstagram /></li>
        </div>
        <div className="flex justify-center mx-auto mt-9 text-[#CACACA] w-[100%] text-center">
            <li className="list-none  itemn "> 
            <a href="#home">Home</a>
            </li>
            <li className="list-none  itemn">
              <a href="#about">About us</a>
            </li>
            <li className="list-none  itemn">
              <a href="#services">Services</a>
            </li>
            <li className="list-none  itemn">
              <a href="#contact">Contact</a>
            </li>
        </div>
        <div className="mt-9">
          copyright &copy; 2023 All rights reserved
        </div>
      </section>
      
    </footer>
  );
};

export default Footer;
