
import {
  Bike,
  Car,
  Home,
  Building2,
  Package,
  Truck,
  Warehouse,
  Move,
  ArrowRight,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import parcel17 from '../../assets/parcel17.jpg'
import parcel18 from '../../assets/parcel18.jpg'
import parcel19 from '../../assets/parcel19.jpg'
import parcel20 from '../../assets/parcel20.jpg'
import parcel34 from '../../assets/parcel34.jpg'
import work16 from '../../assets/work16.jpeg'
import work8 from '../../assets/work8.jpeg'
import work22 from '../../assets/work22.jpeg'

const services = [
  {
    title: "Bike Transportation",
    desc: "Safe and reliable bike transportation services across cities.",
    icon: Bike,
    url: "/services/bike",
    image:  work16,
    reverse: false,
  },
  {
    title: "Car Transportation",
    desc: "Door-to-door car transportation with complete safety.",
    icon: Car,
    
    url: "/services/car",
    image: parcel34,
    reverse: false,
  },
  {
    title: "Home Shifting",
    desc: "Hassle-free home shifting services with professional handling.",
    icon: Home,
    
    url: "/services/home",
    image: work8,
    reverse: true,
  },
  {
    title: "Office Shifting",
    desc: "Quick and secure office relocation with minimal downtime.",
    icon: Building2,
    
    url: "/services/office",
    image: work22, 
     reverse: true,
  },
];


export default function Service() {

  const navigate = useNavigate();

  return (
    <section className="bg-gray-50 py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
            <div className='border border-primary/50 px-3 mb-2 py-1.5 bg-primary/20 rounded-md inline-flex' >
                        <p class="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent 
                   uppercase tracking-[0.2em] font-semibold 
                   drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-sm   ">
                              <span className="flex items-center gap-2" >
                    
                      <span>
                       FAVOURITE CONSIGNMENT
                      </span>
                      <span className="animate-spin"  style={{ animationDuration: "5s" }} >
                            <Star size={15} className="text-primary"  />
                      </span>
                    </span>
                        </p>
                    </div>
        {/* <p className="text-xs tracking-widest text-gray-400 mb-2">
          FAVOURITE CONSIGNMENT
        </p> */}
        <h2 className="h2 mt-2 font-bold text-gray-900 leading-tight">
          Secured, Affordable & Reliable <br />
          Logistics Support
        </h2>
      </div>

      {/* Services */}
<div className="mx-auto grid md:grid-cols-2">
  {services.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="grid grid-cols-1 md:grid-cols-2"
      >
        {/* Image */}
        <div
          className={`${
            item.reverse ? "md:order-2" : ""
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-[260px] w-full object-cover"
          />
        </div>

        {/* Content */}
        <div
          className={`flex flex-col items-center justify-center text-center bg-white px-8 py-12 ${
            item.reverse ? "md:order-1" : ""
          }`}
        >
          <Icon className="w-8 h-8 text-primary mb-4" />
          <div className="h5 font-semibold text-gray-900 mb-2">
            {item.title}
          </div>
          <div className="h6 text-gray-500 mb-4">
            {item.desc}
          </div>
          <span onClick={() => navigate(item?.url)} className="text-xs font-semibold tracking-widest cursor-pointer hover:text-yellow-700 flex items-center text-yellow-500">
        <span>
            READ MORE
            </span>
            <span>
            <ArrowRight size={16} className="ml-1" />
            </span>
          </span>
        </div>
      </div>
    );
  })}
</div>
<div className="flex justify-center items-center mt-10" > 
     <button onClick={() => navigate("/services/bike")} className="border  border-primary cursor-pointer text-primary px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary hover:text-white transition">
            See More Service <span>
<ArrowRight size={20}  className="mt-1" />
            </span>
          </button>
</div>

    </section>
  );
}
