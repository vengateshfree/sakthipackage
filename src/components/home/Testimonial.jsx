import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text:
        "It fits our needs perfectly. I am completely blown away. Very easy to use. Nice work on your cargo. Thanks Kargon! Kargon has got everything I need.",
      name: "DENNIS BULGER",
      role: "CREW SUPERVISOR",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    },
    {
      id: 2,
      text:
        "Outstanding service and exceptional quality. The team went above and beyond our expectations. Highly recommend to anyone looking for reliable cargo solutions.",
      name: "SARAH MITCHELL",
      role: "LOGISTICS MANAGER",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    },
    {
      id: 3,
      text:
        "Professional, efficient, and always on time. Working with this company has transformed our supply chain operations completely.",
      name: "JAMES PETERSON",
      role: "OPERATIONS DIRECTOR",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center lg:text-start grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-red-500  text-sm font-semibold tracking-widest uppercase mb-4">
            03 _ WHAT PEOPLE SAY
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 ">
            What our clients <br /> say about us
          </h2>
        </div>

        {/* RIGHT CAROUSEL */}
        <div className="relative testimonial-carousel">
          <Carousel
            showStatus={false}
            showThumbs={false}
            infiniteLoop
            autoPlay
            interval={5000}
            transitionTime={600}
            swipeable
            emulateTouch
            renderArrowPrev={(onClickHandler, hasPrev) =>
              hasPrev && (
                <button
                  onClick={onClickHandler}
                  className="absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
                  aria-label="Previous"
                >
                  ‹
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext) =>
              hasNext && (
                <button
                  onClick={onClickHandler}
                  className="absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
                  aria-label="Next"
                >
                  ›
                </button>
              )
            }
            renderIndicator={(onClickHandler, isSelected, index) => (
              <li
                key={index}
                onClick={onClickHandler}
                className={`inline-block mx-1 h-2 rounded-full cursor-pointer transition-all ${
                  isSelected ? "w-8 bg-gray-800" : "w-2 bg-gray-300"
                }`}
                role="button"
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              />
            )}
          >
        {testimonials.map((item) => (
  <div key={item.id} className="pb-12 ">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

      {/* IMAGE */}
      <div className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] flex-shrink-0 rounded-full overflow-hidden border-4 border-gray-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* TEXT */}
      <div className="flex-1 ">
        <p className="text-primary text-center md:text-left mb-4 w-[90%] md:w-full mx-auto md:mx-0">
          {item.text}
        </p>

        {/* NAME */}
        <h3 className="text-gray-900 font-bold tracking-wide text-center md:text-left " >
          {item.name}
        </h3>
        <p className="text-yellow-500 text-sm tracking-widest mt-1 text-center md:text-left">
          {item.role}
        </p>
      </div>

    </div>
  </div>
))}
 
          </Carousel>
        </div>
      </div>
    </section>
  );
}
