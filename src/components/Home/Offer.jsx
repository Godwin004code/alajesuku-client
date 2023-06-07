import React from 'react'
import OfferTwo from "../../Assets/asset 17.png"
import OfferOne from "../../Assets/asset 17 (1).png"
import { BsFillBarChartFill } from 'react-icons/bs'

const Offer = () => {
    
  return (
    <section className='w-[90%] mx-auto'>
        <h2 className='text-[#0C3F6B] font-bold text-4xl text-center w-[90%] mx-auto'>What we offer to help you boast your Cooperative growth </h2>
        <p className='text-base font-normal text-[#1D1D1D] text-center mt-4 mb-12'>loreem dolar  ipsum dolor sit amet, consectetur adipiscing eliiilyit. Nunc vulputate libero.</p>
        <section className='flex justify-between w-[100%] mb-24'>
            <div className='w-[50%] mt-24'>
                <h2 className='font-semibold mb-4 text-[#06345C] text-3xl'>Automated Accounting System.</h2>
                <p className='leading-7'>loreem dolar  ipsum dolor sit amet, cnsectetur adipiscing eliiilyit. Nunc liii vulputate libero et velit interdum, ac aliquet odio mattis. Classs aptent taciti sociosqu ad litora adipiscing elit nun. lorem ipsumClasss aptent taciti sociosqu ad litora adipiscing elit nun. lorem ipsum</p>
                <div className='flex mt-9'>
                    <div className='bg-[#0C3F6B] w-[80px] h-[50px] flex justify-center items-center rounded-lg'>
                        <BsFillBarChartFill className='text-white' />
                    </div>
                    <div className='ml-4'>
                    <p className='text-[#0C3F6B] font-semibold'>
                    loreem dolar  ipsum dolor sit amet, cnsectetur adipiscing eliiilyit. Nunc vulputate libero et velit interdum, ac aliquet 
                    </p>
                    <p className='mt-8 text-[#1D1D1D] font-normal text-base'>
                    loreem dolar  ipsum dolor sit amet, cnsectetur adipiscing eliiilyit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Classs aptent. class apdent sociosque ad litoria 
                    </p>
                    </div>
                </div>
            </div>
            <div className='w-[40%]'>
    <img src={OfferTwo} className='w-[100%]' alt="Automated Accounting System." />
            </div>
        </section>
        <section className='flex justify-between w-[100%] mb-36'>
            <div className='w-[40%]'>
                <img src={OfferOne} className='w-[100%]' alt="Daily reports and insight and efficient User management" />
            </div>
            <div className='w-[50%] mt-24'>
            <h2 className='font-semibold text-[#06345C] text-3xl mb-4'>Daily reports and insight and efficient User management.</h2>
                <p className='leading-7'>loreem dolar  ipsum dolor sit amet, cnsectetur adipiscing eliiilyit. Nunc liii vulputate libero et velit interdum, ac aliquet odio mattis. Classs aptent taciti sociosqu ad litora adipiscing elit nun. lorem ipsumClasss aptent taciti sociosqu ad litora adipiscing elit nun. lorem ipsum</p>
                <div className='flex mt-9'>
                    <div className='bg-[#0C3F6B] w-[80px] h-[50px] flex justify-center items-center rounded-lg'>
                        <BsFillBarChartFill className='text-white' />
                    </div>
                    <div className='ml-4'>
                    <p className='text-[#0C3F6B] font-semibold'>
                    loreem dolar  ipsum dolor sit amet, cnsectetur adipiscing eliiilyit. Nunc vulputate libero et velit interdum, ac aliquet 
                    </p>
                    <p className='mt-8 text-[#1D1D1D] font-normal text-base'>
                    loreem dolar  ipsum dolor sit amet, cnsectetur adipiscing eliiilyit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Classs aptent. class apdent sociosque ad litoria 
                    </p>
                    </div>
                </div>
            </div>
        </section>
    </section>
  )
}

export default Offer