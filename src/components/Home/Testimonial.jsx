import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quoteImg from "../../Assets/quotes.png"
import personOne from "../../Assets/Ellipse 1.png"
import personTwo from "../../Assets/Ellipse 1 (1).png"

const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        useCSS: false
      };
  return (
   <section className='w-[90%] mx-auto'>
     <Slider {...settings}>
      <section className='w-[100%] '>
        <section className='flex w-[100%] justify-between md:flex-col'>
        <div className='w-[30%] md:w-[100%] md:mb-4 md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personOne} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personOne} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personOne} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        </section>
      </section>
    
      <section className='w-[100%] '>
        <section className='flex w-[100%] justify-between md:flex-col'>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personOne} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personOne} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personTwo} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        </section>
      </section>
      <section className='w-[100%] '>
        <section className='flex w-[100%] justify-between md:flex-col'>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personTwo} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personOne} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        <div className='w-[30%] md:w-[100%] md:mb-4 testimony bg-[#FFFFFF] py-9 px-8 text-center flex flex-col justify-center items-center rounded-2xl '>
            <div>
                <img src={quoteImg} alt="quote" />
            </div>
            <p className='py-4 text-sm font-normal text-[#57606A]'>Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac  odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className='pb-3'>
                <img className='rounded-full' src={personOne} alt="testimonial" />
            </div>
            <h2 className='pb-2 text-sm font-bold text-[#4A4747]'>ADERINTO ADEYEMIOLA</h2>
            <p className='font-normal text-[#57606A] text-sm'>Ibadan cooperative</p>
        </div>
        </section>
      </section>
    </Slider>
   </section>
  )
}

export default Testimonial