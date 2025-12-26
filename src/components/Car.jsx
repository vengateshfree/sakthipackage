import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Rocket,
    ShieldCheck,
    DollarSign,
    PhoneCall,
} from "lucide-react";
import Navbar from "./Navbar";


const slides = [
    {
        image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg",
        title: "We Provide Best Warehousing Services",
        desc:
            "Hi-Safe Packers and Movers is one of the best packers and movers service provider company in Erode",
    },
    {
        image: "https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg",
        title: "Safe & Secure Storage Solutions",
        desc:
            "Modern infrastructure with 24/7 monitoring and professional handling",
    },
    {
        image: "https://images.pexels.com/photos/753331/pexels-photo-753331.jpeg",
        title: "Safe & Secure Storage Solutions",
        desc:
            "Modern infrastructure with 24/7 monitoring and professional handling",
    },
    {
        image:"https://images.pexels.com/photos/31305410/pexels-photo-31305410.jpeg",
        title: "Safe & Secure Storage Solutions",
        desc:
            "Modern infrastructure with 24/7 monitoring and professional handling",
    },
];


const features = [
    {
        title: "Fast Delivery",
        desc: "Fast and quality delivery",
        bg: "bg-orange-800/30",
        icon: Rocket,
    },
    {
        title: "Secured Services",
        desc: "Complex long-distance transportation",
        bg: "bg-yellow-500/30",
        icon: ShieldCheck,
    },
    {
        title: "Affordable Prices",
        desc: "Save cost to carry fridge, TV, etc",
        bg: "bg-orange-800/30",
        icon: DollarSign,
    },
    {
        title: "24/7 Support",
        desc: "Ensuring even better customer experience",
        bg: "bg-yellow-500/30",
        icon: PhoneCall,
    },
];
export default function HeroCarousel() {
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
            >
                {slides.map((slide, i) => (
                    <div key={i} className="relative h-screen">
                        <img
                            src={slide.image}
                            alt=""
                            className="h-full w-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-linear-to-r from-black/50 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 flex items-center justify-start">
                            <div className="container mx-auto px-6 lg:px-16">
                                <div className="max-w-4xl text-white">
                                    <h1 className="h1 leading-tight font-extrabold text-start">
                                        {slide.title}
                                    </h1>

                                    <p className="mt-4 text-gray-200 h4 text-start">
                                        {slide.desc}
                                    </p>
<div className="flex" >
                                    <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition">
                                        READ MORE
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>

            {/* ===== BOTTOM FEATURE CARDS ===== */}
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
        </section>
    );
}


// const slides = [
//   {
//     image: "https://images.pexels.com/photos/31305410/pexels-photo-31305410.jpeg",
//     title: "We Provide Best Warehousing Services",
//     desc: "Hi-Safe Packers and Movers is one of the best service providers in Erode",
//     variant: "left",
//   },
//   {
//     image: "https://images.pexels.com/photos/31305410/pexels-photo-31305410.jpeg",
//     title: "Safe & Secure Storage Solutions",
//     desc: "Modern infrastructure with 24/7 monitoring",
//     variant: "right",
//   },
//   {
//     image: "https://images.pexels.com/photos/31305410/pexels-photo-31305410.jpeg",
//     title: "Fast & Reliable Moving",
//     desc: "Door-to-door professional relocation services",
//     variant: "center",
//   },
//   {
//     image: "https://images.pexels.com/photos/31305410/pexels-photo-31305410.jpeg",
//     title: "Affordable Prices Guaranteed",
//     desc: "Best pricing without compromising safety",
//     variant: "split",
//   },
// ];






// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// export default function HeroCarousel() {
//   return (
//     <section className="relative">
//       <Carousel
//         autoPlay
//         infiniteLoop
//         interval={4500}
//         transitionTime={1000}
//         showThumbs={false}
//         showStatus={false}
//         showIndicators={false}
//         stopOnHover={false}
//         swipeable
//       >
//         {slides.map((slide, i) => (
//           <div key={i} className="relative h-[80vh] overflow-hidden">
//             {/* IMAGE WITH DIFFERENT EFFECTS */}
//             <img
//               src={slide.image}
//               className={`h-full w-full object-cover ${
//                 slide.variant === "center"
//                   ? "scale-110 animate-slowZoom"
//                   : slide.variant === "split"
//                   ? "scale-105 rotate-1"
//                   : ""
//               }`}
//               alt=""
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50" />

//             {/* CONTENT */}
//             <div className="absolute inset-0 flex items-center">
//               <div className="container mx-auto px-6 lg:px-16">
//                 {slide.variant === "left" && (
//                   <div className="max-w-xl text-white animate-slideLeft">
//                     <h1 className="text-5xl font-bold">{slide.title}</h1>
//                     <p className="mt-4 text-gray-200">{slide.desc}</p>
//                     <button className="mt-6 bg-orange-500 px-6 py-3 rounded-full">
//                       READ MORE
//                     </button>
//                   </div>
//                 )}

//                 {slide.variant === "right" && (
//                   <div className="ml-auto max-w-xl text-right text-white animate-slideRight">
//                     <h1 className="text-5xl font-bold">{slide.title}</h1>
//                     <p className="mt-4 text-gray-200">{slide.desc}</p>
//                     <button className="mt-6 border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
//                       DISCOVER
//                     </button>
//                   </div>
//                 )}

//                 {slide.variant === "center" && (
//                   <div className="mx-auto max-w-2xl text-center text-white animate-fadeUp">
//                     <h1 className="text-5xl font-extrabold tracking-wide">
//                       {slide.title}
//                     </h1>
//                     <p className="mt-4 text-gray-200">{slide.desc}</p>
//                     <button className="mt-6 bg-yellow-500 px-8 py-3 rounded-lg font-semibold">
//                       GET STARTED
//                     </button>
//                   </div>
//                 )}

//                 {slide.variant === "split" && (
//                   <div className="grid md:grid-cols-2 gap-10 items-center text-white">
//                     <div className="animate-slideLeft">
//                       <h1 className="text-5xl font-bold">{slide.title}</h1>
//                       <p className="mt-4">{slide.desc}</p>
//                       <button className="mt-6 bg-orange-600 px-6 py-3 rounded-full">
//                         CONTACT US
//                       </button>
//                     </div>
//                     <div className="hidden md:block animate-slideRight">
//                       <div className="h-72 w-full rounded-xl bg-white/20 backdrop-blur-lg" />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </Carousel>
//     </section>
//   );
// }
