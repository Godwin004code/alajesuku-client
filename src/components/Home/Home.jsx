import React from 'react'
import Nav from '../Nav'
import HeroImage from "../../Assets/Group 3.png"
import maskedOne from "../../Assets/Mask group (1).png"
import maskedTwo from "../../Assets/Mask group (2).png"
import maskedThree from "../../Assets/Mask group.png"
import womenViewing from "../../Assets/two-women-viewing-content-phone-local-african-market 1.png"
import aboutImgOne from "../../Assets/Frame 125 (1).png"
import aboutImgTwo from "../../Assets/Frame 125 (2).png"
import aboutImgThree from "../../Assets/Frame 125 (3).png"
import aboutImgFive from "../../Assets/Frame 125.png"
import Footer from './Footer'

import { BsChevronRight } from "react-icons/bs"
import Testimonial from './Testimonial'
import Contact from './Contact'



const Home = () => {
  return (
    <>
    <Nav />
    <section className='w-[100%] bg-[#06345C]  pt-12 md:pt-0 relative pb-24'>
        <section className='flex justify-between md:flex-col'>
        <div className='w-[45%] ml-[5%] md:w-[90%]'>
        <h2 className='text-white font-semibold text-5xl mt-16'>We offer the <span className='text-[#42B8E9]'>best</span > digital solution for your cooperative </h2>
        <p className='w-[100%] text-white font-normal mt-7 mb-12'>Alajeseku is a unique cloud based cooperative management software that enables cooperative societies effectively record, manage loan transactions, member management, manage report inventories and run transparently, efficiently and proficiently.</p>
        <div>
            <button className="text-white font-medium text-base bg-[#42B8E9] px-5 py-3 rounded-lg">Contact us</button>
            <button className="text-white font-medium text-base border-[1px] border-[#42b8e9] px-5 py-3 rounded-lg ml-5">Live Demo</button>
        </div>
    </div>
    <div className='w-[50%] mr-[0%] md:w-[90%] md:mt-4'>
        <img src={HeroImage} alt="Hero pics" />
    </div>
        </section>
        <section className='flex justify-between pl-[5%] pr-[5%]  w-[100%] absolute bottom-[-27.8%] md:bottom-[-84.3%] md:flex-col  '>
        <div className='bg-white w-[22%] md:w-[100%] md:mb-4  flex justify-center flex-col items-center text-center py-7 px-5'>
            <img src={maskedThree} className='w-[50px]' alt="Automated Accounting system" />
            <h2 className='text-base font-medium text-[#09367A] py-5'>Automated Accounting system</h2>
            <p>Sorem ipsum dolor sit amet, khk consectetur adipiscing   vulputate libero et velit interdum</p>
        </div>
        <div  className='bg-white w-[22%] md:w-[100%] md:mb-4  flex justify-center flex-col items-center text-center py-7 px-5'>
            <img src={maskedOne} alt="Efficient Membership Management" />
            <h2 className='text-base font-medium text-[#09367A] py-5' >Efficient Membership Management</h2>
            <p>Sorem ipsum dolor sit amet, khk consectetur adipiscing   vulputate libero et velit interdum</p>
        </div>
        <div  className='bg-white w-[22%] md:w-[100%] md:mb-4  flex justify-center flex-col items-center text-center py-7 px-5'>
            <img src={maskedThree} alt="Instant message notification" />
            <h2 className='text-base font-medium text-[#09367A] py-5'>Instant message notification</h2>
            <p>
            Sorem ipsum dolor sit amet, khk consectetur adipiscing   vulputate libero et velit interdum
            </p>
        </div>
        <div  className='bg-white w-[22%] md:w-[100%]  flex justify-center flex-col items-center text-center py-7 px-5'>
            <img src={maskedTwo} alt="Daily reports and insights" />
            <h2 className='text-base font-medium text-[#09367A] py-5'>Daily reports and insights</h2>
            <p>Sorem ipsum dolor sit amet, khk consectetur adipiscing   vulputate libero et velit interdum</p>
        </div>
    </section>
    </section>
    <main className='bg-[#C2C2C2] w-[100%] pt-24 md:pt-96 pb-24 '>

  <section className='mt-48 md:mt-96'>
    <h2 className='font-semibold text-3xl text-center text-[#09367A] mb-12 md:pt-48'>About Us</h2>
    <section className='flex justify-center w-[80%] mx-auto items-center md:flex-col '>
        <div className='w-[50%] rounded-sm md:rounded-b-[0px] md:w-[100%]'>
<img src={womenViewing} alt="two women viewing " className='w-[100%] rounded-lg' />
        </div>
        <div className='w-[50%] md:w-[100%] bg-[#EBEEF6] py-8 px-5 h-fit rounded-r-lg '>
            <h2 className='font-semibold text-xl text-[#09367A] mb-5'>Gorem ipsum dolor sit amet, consectetur elit iste adipiscing elit. Nunc vulputate libero esr sint iste reprehenderit.</h2>
<p>
Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, Curabitur tempus urna at turpis condimentum lobortis em ipsum dolor sit amet, consectetur adipiscing elit nun. lorem ipsum dolar sit.ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis em ipsum dolor sit amet, consectetur.
</p>
        </div>
    </section>
  </section>
  <section className='mt-36'>
    <h2 className='font-semibold text-3xl text-[#09367A] text-center'>Our Services</h2>
    <p className='text-base font-normal text-[#1D1D1D] mt-5 text-center w-[90%] mx-auto mb-16'>loreem dolar  ipsum dolor sit amet, consectetur adipiscing eliiilyit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Classs aptent taciti sociosqu ad litora adipiscing elit nun. lorem ipsum</p>
    <section>
        <section className='flex justify-between w-[90%] mx-auto md:flex-col'>
            <div className='bg-white w-[46%] flex items-center py-5 px-4 rounded-lg md:w-[100%]'>
               <div>
                <img src={aboutImgFive} alt="Multiple Admin Access" />
                </div>
                <div className='ml-3'>
                <h2 className='font-normal text-2xl text-[#003AA9] mb-4'>Multiple Admin Access</h2>
                <p className='font-normal text-base text-[#453F3F]'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad  </p>    
                </div> 
            </div>
            <div className='bg-white w-[46%] flex items-center py-5 px-4 rounded-lg md:w-[100%] md:mt-4'>
            <div>
                <img src={aboutImgOne} alt="Multiple Admin Access" />
                </div>
                <div className='ml-3'>
                <h2 className='font-normal text-2xl text-[#003AA9] mb-4'>Multiple Admin Access</h2>
                <p className='text-[#453F3F] text-base font-normal'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad  </p>    
                </div>
            </div>
        </section>
        <section className='flex justify-between w-[90%] mx-auto mt-4 md:flex-col'>
        <div className='bg-white w-[46%] flex items-center py-5 px-4 rounded-lg md:w-[100%]'>
               <div>
                <img src={aboutImgTwo} alt="Multiple Admin Access" />
                </div>
                <div className='ml-3'>
                <h2 className='font-normal text-2xl text-[#003AA9] mb-4'>Multiple Admin Access</h2>
                <p className='text-[#453F3F] text-base font-normal'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad  </p>    
                </div> 
            </div>
            <div className='bg-white w-[46%] flex items-center py-5 px-4 rounded-lg md:w-[100%] md:mt-4'>
            <div>
                <img src={aboutImgThree} alt="Multiple Admin Access" />
                </div>
                <div className='ml-3'>
                <h2 className='font-normal text-2xl text-[#003AA9] mb-4'>Multiple Admin Access</h2>
                <p className='text-[#453F3F] text-base font-normal'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad  </p>    
                </div>
            </div>
        </section>
        <section className='flex justify-between w-[90%] mx-auto mt-4 md:flex-col'>
        <div className='bg-white w-[46%] flex items-center py-5 px-4 rounded-lg md:w-[100%]'>
               <div>
                <img src={aboutImgThree} alt="Multiple Admin Access" />
                </div>
                <div className='ml-3'>
                <h2 className='font-normal text-2xl text-[#003AA9] mb-4'>Multiple Admin Access</h2>
                <p className='text-[#453F3F] text-base font-normal'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad  </p>    
                </div> 
            </div>
            <div className='bg-white w-[46%] flex items-center py-5 px-4 rounded-lg md:w-[100%] md:mt-4'>
            <div>
                <img src={aboutImgThree} alt="Multiple Admin Access" />
                </div>
                <div className='ml-3'>
                <h2 className='font-normal text-2xl text-[#003AA9] mb-4'>Multiple Admin Access</h2>
                <p className='text-[#453F3F] text-base font-normal'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad  </p>    
                </div>
            </div>
        </section>
    </section>
  </section>
  <section>
  <h2 className='font-semibold text-3xl text-[#09367A] text-center mt-36'>Testimonial</h2>
    <p  className='text-base font-normal text-[#212A41] mt-5 text-center w-[90%] mx-auto mb-16'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit i lorem ipsum </p>
<Testimonial />
  </section>
  <section>
  <h2 className='font-semibold text-3xl text-[#09367A] text-center mt-36'>Pricing</h2>
    <p  className='text-base font-normal text-[#212A41] mt-5 text-center w-[90%] mx-auto mb-16'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit i lorem ipsum </p>
    <section className='flex w-[90%] mx-auto justify-between md:flex-col '>
        <div className='w-[30%] md:w-[100%]'>
            <div className='w-[100%] bg-[#FFFFFF] text-center pt-5 rounded-t-2xl pb-3'>
                <h2 className='text-[#3865BA] font-bold text-3xl'>Basic</h2>
                <p className='text-sm font-medium text-[#4A535D]'>The basics for individuals 
and organizations</p>
<div className='flex justify-center w-[100%] my-4'>
     <p className='text-[#57606A] text-xs font-normal mt-4 mr-1'>$</p>
      <h2 className='text-[#0049AA] font-normal text-7xl'>0</h2>
       <p className='text-xs font-light text-[#57606A] mt-3 ml-1'>per member <br /> monthly</p> </div>
<button className="text-[#42b8e9] font-medium text-base border-[1px] border-[#42b8e9] w-[90%] mx-auto py-3 rounded-lg">Contact us</button>
            </div>
            <div className='w-[100%] bg-[#F6F8FA99] pt-5 pb-24 rounded-b-2xl'>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 1 admin user</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited read only users</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Registrations</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Uploads</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 120 hours Code spaces compute/month </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 15GB of codespaces storage</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> New issues & projects(in limited beta) </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Community support</span>
                </div>
            </div>
        </div>
        <div className='w-[30%] md:w-[100%] md:my-8'>
            <div className='w-[100%] bg-[#FFFFFF] text-center pt-5 rounded-t-2xl pb-3'>
                <h2 className='text-[#3865BA] font-bold text-3xl'>Standard</h2>
                <p className='text-sm font-medium text-[#4A535D]'>Everything in Basic plan
plus more</p>
<div className='flex justify-center w-[100%] my-4'>
     <p className='text-[#57606A] text-xs font-normal mt-4 mr-1'>$</p>
      <h2 className='text-[#0049AA] font-normal text-7xl'>2</h2>
       <p className='text-xs font-light text-[#57606A] mt-3 ml-1'>per member <br /> monthly</p> </div>
<button className="text-[#42b8e9] font-medium text-base border-[1px] border-[#42b8e9] w-[90%] mx-auto py-3 rounded-lg">Contact us</button>
            </div>
            <div className='w-[100%] bg-[#F6F8FA99] pt-5 pb-24 rounded-b-2xl'>
            <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 1 admin user</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited read only users</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Registrations</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Uploads</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 120 hours Code spaces compute/month </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 15GB of codespaces storage</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> New issues & projects(in limited beta) </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Community support</span>
                </div>    
            </div> 
        </div>
        <div className='w-[30%] md:w-[100%]'>
            <div className='w-[100%] bg-[#FFFFFF] text-center pt-5 rounded-t-2xl pb-3'>
                <h2  className='text-[#3865BA] font-bold text-3xl'>Premium</h2>
                <p className='text-sm font-medium text-[#4A535D]'>Everything in standard plan
plus more</p>
<div className='flex justify-center w-[100%] my-4'>
     <p className='text-[#57606A] text-xs font-normal mt-4 mr-1'>$</p>
      <h2 className='text-[#0049AA] font-normal text-7xl'>7</h2>
       <p className='text-xs font-light text-[#57606A] mt-3 ml-1'>per member <br /> monthly</p> </div>
<button className="text-[#42b8e9] font-medium text-base border-[1px] border-[#42b8e9] w-[90%] mx-auto py-3 rounded-lg">Contact us</button>
            </div>
            <div className='w-[100%] bg-[#F6F8FA99] pt-5 pb-24 rounded-b-2xl'>
            <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 1 admin user</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited read only users</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Registrations</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Uploads</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited team members </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> API Importation</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Premium user management </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-3'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Community support</span>
                </div>
            </div>
        </div>
    </section>
  </section>
<Contact />
    </main>
    <Footer />
    </>
  )
}

export default Home