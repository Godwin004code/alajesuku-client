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
      <section className="w-[25%] md:w-[100%] md:text-center md:flex md:flex-col md:justify-center md:items-center">
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
      <section className="md:my-12">
        <h2 className="uppercase text-sm font-semibold mb-4">Navigations</h2>
        <ul>
          <li className="mb-4">
            <Link to="/">Homepage</Link>
          </li>
          <li className="mb-4">
            <Link to="/">About us</Link>
          </li>
          <li className="mb-4">
            <Link to="/">Prices</Link>
          </li>
          <li>
            <Link to="/">Testimonial</Link>
          </li>
        </ul>
      </section>
      <section className="md:mb-12">
        <h2 className="uppercase text-sm font-semibold mb-4">Services</h2>
        <ul>
          <li className="mb-4">
            <Link to="/">Management</Link>
          </li>
          <li className="mb-4">
            <Link to="/">Message Notification</Link>
          </li>
          <li className="mb-4">
            <Link to="/">Reports and insights</Link>
          </li>
          <li>
            <Link to="/">Accounting system</Link>
          </li>
        </ul>
      </section>
      <section className="w-[25%] md:w-[100%] ">
        <h2 className="uppercase text-sm font-semibold mb-4">Contact us</h2>
        <div className="text-center md:w-[100%]">
          <div className="flex w-[100%] mx-auto mb-4 md:justify-center">
            <AiOutlineMail className="text-[white]" />
            <span className="mt-[-5px] ml-2">alajeseku@gmail.com </span>
          </div>
          <div className="flex w-[100%] mx-auto mb-4 md:justify-center">
            <BsPhone className="text-[white]" />
            <span className="mt-[-5px] ml-2">+999-234-324 </span>
          </div>
          <div className="flex w-[100%] mx-auto mb-4 md:justify-center">
            <CiLocationOn className="text-[white]" />
            <span className="mt-[-5px]">23 street, Nilloy Avenue,
Sangotedo, Ajah,  Lagos</span>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
