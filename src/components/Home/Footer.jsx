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
        <div className="flex justify-between text-[#CACACA] w-[60%]">
            <li className="list-none"> <BsTwitter /></li>
            <li className="list-none"><FaFacebookF /></li>
            <li className="list-none"><FaLinkedinIn /></li>
            <li className="list-none"><AiFillInstagram /></li>
        </div>
      </section>
      
    </footer>
  );
};

export default Footer;
