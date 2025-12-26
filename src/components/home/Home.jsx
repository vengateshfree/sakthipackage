import React from 'react'
import HeroCarousel from '../Car'
import Welcome from './Welcome'
import Navbar from '../Navbar'
import CompanyIntro from './CompanyIntro'
import OurProcess from './OurProcess'
import Service from './Service'
import Testimonial from './Testimonial'
import FAQSection from './faq'

function Home() {
  return (
    <>
   
    <HeroCarousel />
    <CompanyIntro />
    <OurProcess />
    <Service />
    <Testimonial />
    <FAQSection />
    

    
    </>
  )
}

export default Home