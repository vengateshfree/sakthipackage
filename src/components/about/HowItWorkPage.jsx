import React from 'react'
import CompanyIntro from '../home/CompanyIntro'
import OurProcess from '../home/OurProcess'
import Service from '../home/Service'
import Testimonial from '../home/Testimonial'
import parcel10 from '../../assets/parcel10.jpg'

function HowItWorkPage() {
  return (
    <div>
                    <div
  className="relative bg-cover bg-center h-[400px] flex  text-center items-center mt-10"
  style={{
     backgroundImage: `url(${parcel10})`,
 }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h1 className="h1 font-bold text-white">
   HOW It Works
    </h1>
  
  </div>
</div>

      
          <OurProcess />
          <Service />
          <Testimonial />
           <CompanyIntro />
    </div>
  )
}

export default HowItWorkPage