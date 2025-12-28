import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import parcel9 from '../assets/parcel9.jpg'
import parcel10 from '../assets/parcel10.jpg'
import parcel11 from '../assets/parcel11.jpg'
import parcel14 from '../assets/parcel14.jpg'


const slides = [
  {
    image: parcel9,
    title: "Trusted Warehousing & Storage Services",
    desc:
      "Hi-Safe Packers and Movers offers secure, spacious, and well-managed warehousing solutions in Erode, ensuring complete safety for your goods.",
  },
  {
    image: parcel10,
    title: "Safe, Secure & Modern Storage Facilities",
    desc:
      "Our warehouses are equipped with advanced infrastructure, 24/7 surveillance, and professional handling for maximum protection.",
  },
  {
    image: parcel11,
    title: "Reliable Logistics & Moving Solutions",
    desc:
      "From packing to transportation and storage, we provide end-to-end logistics services tailored to your needs.",
  },
  {
    image: parcel14,
    title: "Your Goods, Our Responsibility",
    desc:
      "We ensure careful handling, timely delivery, and complete peace of mind with our experienced moving professionals.",
  },
];


export default function HeroCarousel() {

  const [activeIndex, setActiveIndex] = useState(0);

  const navigate = useNavigate();

  return (
    <section className="relative">

      {/* ===== HERO CAROUSEL ===== */}
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        transitionTime={1000}      // fade duration
        animationHandler="fade"   // 👈 KEY
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        stopOnHover={false}
        swipeable={false}         // prevent swipe movement
        emulateTouch={false}
        onChange={(index) => setActiveIndex(index)}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative h-[400px] md:h-screen ">
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />

            {/* Content */}

            <div className="absolute inset-0 flex items-center mt-20 md:mt-0 justify-start">
              <div className="container mx-auto px-6 lg:px-16">
                <div className="max-w-4xl text-white">

                  {/* Re-mount on every slide */}
                  <div className="animate-slide-up">
                    <h1 className="h1 font-extrabold leading-tight text-left">
                      {slide.title}
                    </h1>

                    {/* <p className="mt-4 max-w-xl text-lg text-white/90">
          {slide.desc}
        </p> */}
                    <div className="flex" >
                      <button
                        onClick={() => navigate("/contact")}
                        className="mt-6 cursor-pointer relative z-10 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-semibold transition"
                      >
                        Contact Us
                      </button>

                    </div>
                  </div>

                </div>
              </div>
            </div>



          </div>
        ))}
      </Carousel>

    </section>
  );
}





{/* ===== BOTTOM FEATURE CARDS ===== */ }
{/* <div className="relative -mt-24 z-10">
                <div className="container mx-auto  w-[90%]  lg:w-[70%] bg-black/50">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-lg shadow-lg">
                        {features.map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={i}
                                    className={`${item.bg} backdrop-blur-2xl  text-white px-8  py-14 text-center`}
                                >
                                    <div className="flex justify-center mb-4">
                                        <Icon size={42} className="text-white" />
                                    </div>

                                    <h3 className=" text-primary h4">
                                        {item.title}
                                    </h3>

                                    <p className="text-sm mt-2  text-secondary h5 ">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div> */}