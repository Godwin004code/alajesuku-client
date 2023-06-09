import React from 'react'
import Nav from '../Nav'
import HeroImage from "../../Assets/dashboard 3 (1).png"
import womenViewing from "../../Assets/two-women-viewing-content-phone-local-african-market 1.png"
import aboutImgFive from "../../Assets/Frame 125.png"
import Footer from './Footer'
import {  GrCheckmark } from "react-icons/gr"
import { BsChevronRight } from "react-icons/bs"
import Testimonial from './Testimonial'
import Contact from './Contact'
import Offer from './Offer'
import { Link } from 'react-router-dom'
import { Element } from 'react-scroll'


const Home = () => {
   
  return (
    <>
    
    <Nav />
    <section className='w-[100%] bg-[#0C3F6B]  pt-12 md:pt-0 relative pb-[500px] '>
        <section className='100%'>
        <div className='w-[70%] text-center mx-auto md:pt-10'>
        <h2 className='text-white font-semibold text-6xl mt-10 '>We offer the best digital solution for your cooperative </h2>
        <p className='w-[100%] text-white font-normal mt-7 mb-12'>Alajeseku is a unique cloud based cooperative management software that enables cooperative societies effectively record, manage loan transactions, member management, manage report inventories and run transparently, efficiently and proficiently.</p>
        <div className='mb-20'>
        <Link to="/contact-us">
            <button className="contact-us text-white font-medium text-base bg-[#42B8E9] px-12 py-3 rounded-lg">Contact us</button>
            </Link>
            <button className="live-demo text-white font-medium text-base border-[1px] border-[#fff] px-12 py-3 rounded-lg ml-5">Live Demo</button>
        </div>
    </div>
    <div className='w-[80%] left-[10%]  mx-auto mt-14 absolute top-[40%]'>
        <img src={HeroImage} className='w-[100%]' alt="Hero pics" />
    </div>
        </section>
       
    </section>
    <main className='bg-[#f8f8f8] w-[100%] pt-96 md:pt-96 pb-24 '>
<Element name='about'>
  <section className=' ' id='about'>
    <section className='flex mt-24 justify-center w-[90%] mx-auto items-center md:flex-col '>
        <div className='w-[50%] mt-48 rounded-sm md:rounded-b-[0px] md:w-[100%]'>
<img src={womenViewing} alt="two women viewing " className='w-[100%] rounded-lg' />
        </div>
        <div className='w-[50%] md:w-[100%] ml-24 mt-28  h-fit rounded-r-lg '>
            <h2 className=' text-[#09367A] font-bold text-4xl mb-5'>About  Alajeseku</h2>
<p className='text-[#3C3939] font-normal text-base mt-10 leading-8'>
Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, Curabitur tempus urna at turpis condimentum lobortis em ipsum dolor sit amet, consectetur adipiscing elit nun. lorem ipsum dolar sit.ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis em ipsum dolor sit amet, consectetur.
</p>
<div  className='flex mt-5'>
    <span><GrCheckmark /></span> <span className='ml-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, soluta.</span>
</div>
<div  className='flex my-4'>
    <span><GrCheckmark /></span> <span className='ml-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, soluta.</span>
</div>
<div  className='flex mb-5'>
    <span><GrCheckmark /></span> <span className='ml-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, soluta.</span>
</div>
<p className='leading-7'>
urabitur tempus urna at turpis condimentum lobortis em ipsum dolor sit amet, consectetur.urabitur tempus urna at turpis condimentum lobortis em ipsum dolor sit amet, consectetur.
</p>
        </div>
    </section>
  </section>
  </Element>
  </main>
  <section className='mt-36' id='services'>
    <Element name='services'>
    <div className='flex justify-between w-[90%] mx-auto'>
    <h2 className='font-semibold text-4xl text-[#0C3F6B] w-[35%] '>The best management software
 your cooperative need</h2>
    <div className='text-base font-normal text-[#1D1D1D]   w-[40%] mb-16'>loreem dolar  ipsum dolor sit amet, consectetur adipiscing eliiilyit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Classs aptent taciti sociosqu ad litora adipiscing elit nun. lorem ipsum</div>
    </div>
    <section>
        <section className='flex justify-between w-[90%] mx-auto md:flex-col'>
            <div className='service bg-white w-[30%]  items-center p-16 break-all rounded-lg md:w-[100%]'>
               <div className='flex items-center'>
                <img src={aboutImgFive} alt="Multiple Admin Access" />
                <h2 className='font-semibold text-xl text-[#003AA9] ml-4'>Multiple Admin Access</h2>
                </div>
                <div className=''>
                <p className='font-normal mt-4 text-base text-[#453F3F] leading-7'> Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus pariatur, rerum minima natus suscipit est velit deleniti accusamus qui, dignissimos alias ea quod, placeat aut harum repellendus ab sunt. </p>    
                </div> 
            </div>
            <div className='service p-16 break-all bg-white w-[30%]  items-center  rounded-lg md:w-[100%]'>
               <div className='flex items-center'>
                <img src={aboutImgFive} alt="Multiple Admin Access" />
                <h2 className='font-semibold text-xl text-[#003AA9] ml-4'>Multiple Admin Access</h2>
                </div>
                <div className=''>
                <p className='font-normal mt-4 text-base text-[#453F3F] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus pariatur, rerum minima natus suscipit est velit deleniti accusamus qui, dignissimos alias ea quod, placeat aut harum repellendus ab sunt.  </p>    
                </div> 
            </div>
            <div className='service p-16 break-all bg-white w-[30%]  items-center  rounded-lg md:w-[100%]'>
               <div className='flex items-center'>
                <img src={aboutImgFive} alt="Multiple Admin Access" />
                <h2 className='font-semibold text-xl text-[#003AA9] ml-4'>Multiple Admin Access</h2>
                </div>
                <div className=''>
                <p className='font-normal mt-4 text-base text-[#453F3F] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus pariatur, rerum minima natus suscipit est velit deleniti accusamus qui, dignissimos alias ea quod, placeat aut harum repellendus ab sunt.  </p>    
                </div> 
            </div>
        </section>
        <section className='flex justify-between w-[90%] mx-auto mt-20 md:flex-col'>
        <div className='service p-16 break-all bg-white w-[30%]  items-center  rounded-lg md:w-[100%]'>
               <div className='flex items-center'>
                <img src={aboutImgFive} alt="Multiple Admin Access" />
                <h2 className='font-semibold text-xl text-[#003AA9] ml-4'>Multiple Admin Access</h2>
                </div>
                <div className=''>
                <p className='font-normal mt-4 text-base text-[#453F3F] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus pariatur, rerum minima natus suscipit est velit deleniti accusamus qui, dignissimos alias ea quod, placeat aut harum repellendus ab sunt.  </p>    
                </div> 
            </div>
            <div className='service p-16 break-all bg-white w-[30%]  items-center  rounded-lg md:w-[100%]'>
               <div className='flex items-center'>
                <img src={aboutImgFive} alt="Multiple Admin Access" />
                <h2 className='font-semibold text-xl text-[#003AA9] ml-4'>Multiple Admin Access</h2>
                </div>
                <div className=''>
                <p className='font-normal mt-4 text-base text-[#453F3F] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus pariatur, rerum minima natus suscipit est velit deleniti accusamus qui, dignissimos alias ea quod, placeat aut harum repellendus ab sunt.  </p>    
                </div> 
            </div>
            <div className='service p-16 break-all bg-white w-[30%]  items-center  rounded-lg md:w-[100%]'>
               <div className='flex items-center'>
                <img src={aboutImgFive} alt="Multiple Admin Access" />
                <h2 className='font-semibold text-xl text-[#003AA9] ml-4'>Multiple Admin Access</h2>
                </div>
                <div className=''>
                <p className='font-normal mt-4 text-base text-[#453F3F] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A delectus pariatur, rerum minima natus suscipit est velit deleniti accusamus qui, dignissimos alias ea quod, placeat aut harum repellendus ab sunt.  </p>    
                </div> 
            </div>
        </section>
      
    </section>
    </Element>
  </section>
  <main className='bg-[#f8f8f8] w-[100%] mt-36 pt-12'>
    <Offer />
  <section>
  <h2 className='font-semibold text-3xl text-[#09367A] text-center '>Testimonial</h2>
    <p  className='text-base font-normal text-[#212A41] mt-5 text-center w-[90%] mx-auto mb-16'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit i lorem ipsum </p>
<Testimonial />
  </section>
  <section>
  <h2 className='font-semibold text-3xl text-[#09367A] text-center mt-36'>Check out our prices</h2>
    <p  className='text-base font-normal text-[#212A41] mt-5 text-center w-[90%] mx-auto mb-16'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit i lorem ipsum </p>
    <section className='flex w-[90%] mx-auto justify-between md:flex-col '>
        <div className='pricing w-[30%] md:w-[100%]'>
            <div className='w-[100%] bg-[#FFFFFF] text-center pt-5 rounded-t-2xl pb-3'>
                <h2 className='text-[#3865BA] font-bold text-3xl'>Basic</h2>
                <p className='text-sm font-medium text-[#4A535D]'>The basics for individuals 
and organizations</p>
<div className='flex justify-center w-[100%] my-4'>
     <p className='text-[#57606A] text-xs font-normal mt-4 mr-1'>$</p>
      <h2 className='text-[#0049AA] font-normal text-7xl'>0</h2>
       <p className='text-xs font-light text-[#57606A] mt-3 ml-1'>per member <br /> monthly</p> </div>
       <Link to="/contact-us"><button className="text-[#42b8e9] font-medium text-base border-[1px] border-[#42b8e9] w-[90%] mx-auto py-3 rounded-lg">
    Contact us
    </button></Link>
            </div>
            <div className='w-[100%] bg-[#F6F8FA99] pt-5 pb-24 rounded-b-2xl'>
                <div className='flex w-[90%] mx-auto mb-8 mt-5'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 1 admin user</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited read only users</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Registrations</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Uploads</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 120 hours Code spaces compute/month </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 15GB of codespaces storage</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> New issues & projects(in limited beta) </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Community support</span>
                </div>
            </div>
        </div>
        <div className=' pricing w-[30%] md:w-[100%] md:my-8'>
            <div className='w-[100%] bg-[#FFFFFF] text-center pt-5 rounded-t-2xl pb-3'>
                <h2 className='text-[#3865BA] font-bold text-3xl'>Standard</h2>
                <p className='text-sm font-medium text-[#4A535D]'>Everything in Basic plan
plus more</p>
<div className='flex justify-center w-[100%] my-4'>
     <p className='text-[#57606A] text-xs font-normal mt-4 mr-1'>$</p>
      <h2 className='text-[#0049AA] font-normal text-7xl'>2</h2>
 
      <p className='text-xs font-light text-[#57606A] mt-3 ml-1'>per member <br /> monthly</p> </div>
      <Link to="/contact-us">
<button className="text-[#42b8e9] font-medium text-base border-[1px] border-[#42b8e9] w-[90%] mx-auto py-3 rounded-lg">Contact us</button></Link>
            </div>
            <div className='w-[100%] bg-[#F6F8FA99] pt-5 pb-24 rounded-b-2xl'>
            <div className='flex w-[90%] mx-auto mb-8 mt-5'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 1 admin user</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited read only users</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Registrations</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Uploads</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 120 hours Code spaces compute/month </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 15GB of codespaces storage</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> New issues & projects(in limited beta) </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Community support</span>
                </div>    
            </div> 
        </div>
        <div className='pricing w-[30%] md:w-[100%]'>
            <div className='w-[100%] bg-[#FFFFFF] text-center pt-5 rounded-t-2xl pb-3'>
                <h2  className='text-[#3865BA] font-bold text-3xl'>Premium</h2>
                <p className='text-sm font-medium text-[#4A535D]'>Everything in standard plan
plus more</p>
<div className='flex justify-center w-[100%] my-4'>
     <p className='text-[#57606A] text-xs font-normal mt-4 mr-1'>$</p>
      <h2 className='text-[#0049AA] font-normal text-7xl'>7</h2>
       <p className='text-xs font-light text-[#57606A] mt-3 ml-1'>per member <br /> monthly</p> </div>
       <Link to="/contact-us">
<button className="text-[#42b8e9] font-medium text-base border-[1px] border-[#42b8e9] w-[90%] mx-auto py-3 rounded-lg">Contact us</button></Link>
            </div>
            <div className='w-[100%] bg-[#F6F8FA99] pt-5 pb-24 rounded-b-2xl'>
            <div className='flex w-[90%] mx-auto mb-8 mt-5'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> 1 admin user</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited read only users</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Registrations</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited Uploads</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Unlimited team members </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> API Importation</span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
                    <BsChevronRight className='text-[#404953]' /> <span className='mt-[-5px] ml-2'> Premium user management </span>
                </div>
                <div className='flex w-[90%] mx-auto mb-8'>
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