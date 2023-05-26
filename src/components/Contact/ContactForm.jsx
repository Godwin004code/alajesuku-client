import React from 'react'
import { BsPhone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { CiLocationOn } from 'react-icons/ci'
import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ContactForm = () => {
  return (
    <section  className='flex justify-between contact-form-page w-[80%] mx-auto bg-[white] absolute top-[50%] right-[5%] left-[5%] '>
<div className='w-[30%] bg-[#CDD6DE] pl-7 pt-12 rounded-tl-2xl rounded-bl-2xl'>
    <h2 className='text-[#09367A] text-3xl font-bold'>Contact  Information</h2>
    <div className='flex items-center rounded-2xl pl-4 py-4 mb-3'>
            <div className='bg-[#3262C1] rounded-full flex items-center justify-center w-[50px] h-[50px] text-white text-white'>
                    <BsPhone />
                </div>
                <div className='ml-3'>
                    <h2 className='text-[#0049AA] font-semibold text-base mb-1'>Phone Number:</h2>
                    <p className='font-normal text-sm text-[#354264]'>+2349012345678</p>
                </div>
            </div>
            <div className=' flex items-center rounded-2xl pl-4 py-4 mb-3'>
                <div className='bg-[#3262C1] rounded-full flex items-center justify-center w-[50px] h-[50px] text-white'>
                    <AiOutlineMail />
                </div>
                <div className='ml-3'>
                   
                    <p className='font-normal text-sm text-[#354264]'>alajeseku@gmail.com</p>
                </div>
            </div>
            <div className=' flex items-center rounded-2xl pl-4 py-4 mb-3'>
            <div className='bg-[#3262C1] rounded-full flex items-center justify-center w-[50px] h-[50px] text-white'>
                    <CiLocationOn />
                </div>
                <div className='ml-3'>
                    
                    <p className='font-normal text-sm text-[#354264]'>Lekki phase1,  Lagos, Nigeria</p>
                </div>
            </div>
</div>
<div className='ml-4 pt-12 pb-20 md:ml-0 md:mt-8 w-[60%] bg-[white] text-center md:w-[100%]'>
            <div className='w-[100%] flex justify-between mb-12'>
                <input  className='border-[#867A7A80] border-[1px] h-[45px] pl-3 w-[45%] rounded text text-black' type="text"  placeholder='Your Name' />
                <input  className='border-[#867A7A80] border-[1px] h-[45px] pl-3 w-[45%] rounded text-black'  type="email" name="email" placeholder='Your Email' />
            </div>
            <div className='w-[100%] mb-12'>
                <input className='border-[#867A7A80] border-[1px] h-[45px] pl-3 w-[100%] rounded text-black' type="text" name="subject" placeholder="Subject" />
            </div>
            <div className='w-[100%] mb-12'>
                <input className='border-[#867A7A80] border-[1px] pt-4 pl-3 pb-28 w-[100%] rounded text-black' type="text" name="mes" placeholder="Message" />
            </div>
            <button className="text-white w-[30%] mx-auto font-medium text-base bg-[#0C3F6B] px-5 py-3 rounded-lg">Submit</button>
        </div>
        <div className='w-[4%]  bg-[#0D477A] text-center text-white rounded-br-2xl mt-auto py-3 '>
            <Link to="/">
                <FaLinkedinIn  className='w-[24px] h-[24px] mx-auto' />

            </Link>
            <Link to="/">
                <FaTwitter className='w-[24px] h-[24px] mx-auto my-4' /> 
            </Link>
            <Link to="/">
                <FaFacebookF className='w-[24px] h-[24px] mx-auto' />
            </Link>
        </div>
    </section>
  )
}

export default ContactForm