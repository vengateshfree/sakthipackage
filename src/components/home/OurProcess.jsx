import { Star } from "lucide-react";

import parcel15 from '../../assets/parcel15.jpg'
import parcel13 from '../../assets/parcel13.jpg'
import parcel16 from '../../assets/parcel16.jpg'
import parcel3 from '../../assets/parcel3.jpg'

export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Order Processing",
      desc: "The logistics process begins with the receipt of customer orders.",
      img: parcel15,
    },
    {
      step: "02",
      title: "Warehousing",
      desc: "Goods that are ready for shipment are stored in warehouses.",
      img: parcel13,
    },
    {
      step: "03",
      title: "Order Tracking",
      desc: "Real-time tracking systems are used to monitor the shipment.",
      img: parcel16,
    },
    {
      step: "04",
      title: "Product Delivery",
      desc: "In the final stage of logistics services, products are delivered.",
      img: parcel3
    },
  ];

  return (
    <section className="relative py-18 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20">
        {/* <p className="text-sm tracking-widest text-red-500 font-semibold mb-3">
          02 _ WORK PROCESS
        </p> */}
            <div className='border border-primary/50 px-3 mb-2 py-1.5 bg-primary/20 rounded-md inline-flex' >
                        <p class="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent 
                   uppercase tracking-[0.2em] font-semibold 
                   drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-sm   ">
                              <span className="flex items-center gap-2" >
                    
                      <span>
                       WORK PROCESS
                      </span>
                      <span className="animate-spin"  style={{ animationDuration: "5s" }} >
                            <Star size={15} className="text-primary"  />
                      </span>
                    </span>
                        </p>
                    </div>
        <h2 className="text-4xl md:text-5xl mt-2 font-extrabold text-slate-900">
          Logistics workflow
        </h2>
      </div>

      {/* Connector line */}
   

      {/* Steps */}
<section className="relative z-0 overflow-visible">
  <div className="relative max-w-7xl mx-auto grid 
                  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                  gap-16 px-6">

    {/* Connector line */}
    <div className="hidden lg:block absolute left-1/2 top-0 
                    w-[85%] -translate-x-1/2 z-0 pointer-events-none">
      <svg viewBox="0 0 1200 200" className="w-full" fill="none">
        <path
          d="M0 120 C 200 20, 400 220, 600 120 
             C 800 20, 1000 220, 1200 120"
          stroke="#CBD5E1"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
      </svg>
    </div>

    {steps.map((item) => (
      <div key={item.step} className="relative z-10 text-center">

        {/* Image */}
        <div className="relative mx-auto w-44 h-44 z-10">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover rounded-full"
          />

          {/* Step Badge */}
          <div className="absolute -top-3 left-5 -translate-x-1/2 z-20">
            <span
              className="relative w-12 h-12 flex items-center justify-center 
                         rounded-full bg-red-500 text-white font-bold 
                         shadow-lg ring-8 ring-red-100
                         animate-[pulse-ring_2s_infinite]"
            >
              {item.step}
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="mt-8 font-bold text-yellow-800">
          {item.title}
        </div>
        <div className="mt-3 text-slate-500 leading-relaxed">
          {item.desc}
        </div>

      </div>
    ))}
  </div>
</section>

    </section>
  );
}
