import React from 'react'
import Nav from '../Nav';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <>
    <Nav />
    <section className='bg-[#0C3F6B] text-white relative pt-10 pb-96'>
        
        <h2 className='text-6xl mt-14 text-center font-semibold'>We’ll love to hear from you
            <br />
            Get in touch</h2>
            <ContactForm  />
    </section>
    
    </>
  )
}

export default ContactPage