import React from 'react'
import { AiOutlineMail, AiOutlineClockCircle } from "react-icons/ai"
import { CiLocationOn } from "react-icons/ci"
import {BsPhone } from "react-icons/bs"
import { Element } from 'react-scroll'

const Contact = () => {
  return (
    <Element name='contact-us'>
    <section className='pb-24' id='contact'>
    <h2 className='font-semibold text-3xl text-[#09367A] text-center mt-36'>Contact Us</h2>
    <p  className='text-base font-normal text-[#212A41] mt-5 text-center w-[90%] mx-auto mb-16'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit i lorem ipsum </p>
    <section className='contact flex bg-[white] p-16 w-[90%] mx-auto rounded-2xl md:flex-col'>
        <div className='bg-[#06345C] w-[28%] py-5 px-3 md:w-[100%]'>
            <div className='bg-[#EBEEF6] flex items-center rounded-2xl pl-4 py-4 mb-3'>
                <div className='bg-[#3262C1] rounded-full flex items-center justify-center w-[50px] h-[50px] text-white'>
                    <AiOutlineMail />
                </div>
                <div className='ml-3'>
                    <h2 className='text-[#0049AA] font-semibold text-base mb-1'>Email:</h2>
                    <p className='font-normal text-sm text-[#354264]'>alajeseku@gmail.com</p>
                </div>
            </div>
            <div className='bg-[#EBEEF6] flex items-center rounded-2xl pl-4 py-4 mb-3'>
            <div className='bg-[#3262C1] rounded-full flex items-center justify-center w-[50px] h-[50px] text-white'>
                    <CiLocationOn />
                </div>
                <div className='ml-3'>
                    <h2  className='text-[#0049AA] font-semibold text-base mb-1'>Location:</h2>
                    <p className='font-normal text-sm text-[#354264]'>Lekki phase1,  Lagos, Nigeria</p>
                </div>
            </div>
            <div className='bg-[#EBEEF6] flex items-center rounded-2xl pl-4 py-4 mb-3'>
            <div className='bg-[#3262C1] rounded-full flex items-center justify-center w-[50px] h-[50px] text-white text-white'>
                    <BsPhone />
                </div>
                <div className='ml-3'>
                    <h2 className='text-[#0049AA] font-semibold text-base mb-1'>Phone Number:</h2>
                    <p className='font-normal text-sm text-[#354264]'>+2349012345678</p>
                </div>
            </div>
            <div className='bg-[#EBEEF6] flex items-center rounded-2xl pl-4 py-4'>
            <div className='bg-[#3262C1] rounded-full flex items-center justify-center w-[50px] h-[50px] text-white text-white'>
                    <AiOutlineClockCircle />
                </div>
                <div className='ml-3'>
                    <h2 className='text-[#0049AA] font-semibold text-base mb-1'>Opening hours:</h2>
                    <p className='font-normal text-sm text-[#354264]'>Mon-Sat 10AM-5PM</p>
                </div>
            </div>
        </div>
        <div className='ml-14 md:ml-0 md:mt-8 w-[70%] text-center md:w-[100%]'>
            <div className='w-[100%] flex justify-between mb-4'>
                <input  className='border-[#867A7A80] border-[1px] h-[45px] pl-3 w-[45%] rounded' type="text" placeholder='Your Name' />
                <input  className='border-[#867A7A80] border-[1px] h-[45px] pl-3 w-[45%] rounded'  type="email" name="email" placeholder='Your Email' />
            </div>
            <div className='w-[100%] mb-4'>
                <input className='border-[#867A7A80] border-[1px] h-[45px] pl-3 w-[100%] rounded' type="text" name="subject" placeholder="Subject" />
            </div>
            <div className='w-[100%] mb-12'>
                <input className='border-[#867A7A80] border-[1px] pt-4 pl-3 pb-28 w-[100%] rounded' type="text" name="mes" placeholder="Message" />
            </div>
            <button className="text-white w-[30%] mx-auto font-medium text-base bg-[#06345C] px-5 py-3 rounded-lg">Submit</button>
        </div>
    </section>
  </section>
  </Element>
  )
}

export default Contact