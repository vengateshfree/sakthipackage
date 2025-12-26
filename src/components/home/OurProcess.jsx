export default function OurProcess() {
  const steps = [
    {
      step: "01",
      title: "Order Processing",
      desc: "The logistics process begins with the receipt of customer orders.",
      img: "https://images.pexels.com/photos/4481328/pexels-photo-4481328.jpeg",
    },
    {
      step: "02",
      title: "Warehousing",
      desc: "Goods that are ready for shipment are stored in warehouses.",
      img: "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
    },
    {
      step: "03",
      title: "Order Tracking",
      desc: "Real-time tracking systems are used to monitor the shipment.",
      img: "https://images.pexels.com/photos/5474296/pexels-photo-5474296.jpeg",
    },
    {
      step: "04",
      title: "Product Delivery",
      desc: "In the final stage of logistics services, products are delivered.",
      img: "https://images.pexels.com/photos/4391470/pexels-photo-4391470.jpeg",
    },
  ];

  return (
    <section className="relative py-28 bg-white overflow-hidden">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-sm tracking-widest text-red-500 font-semibold mb-3">
          02 _ WORK PROCESS
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Logistics workflow
        </h2>
      </div>

      {/* Connector line */}
   

      {/* Steps */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 px-6">
   <div className="hidden lg:block absolute left-1/2 top-[0%] w-[85%] -translate-x-1/2 ">
   <span className="" >
        <svg
          viewBox="0 0 1200 200"
          className="w-full"
          fill="none"
        >
          <path
            d="M0 120 C 200 20, 400 220, 600 120 C 800 20, 1000 220, 1200 120"
            stroke="#CBD5E1"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
        </span>
      </div>


        {steps.map((item) => (
          <div key={item.step} className="text-center">
            {/* Image */}
            <div className="relative mx-auto w-44 h-44">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-full"
              />

              {/* Step Badge */}
           <div className="absolute -top-3 left-5 -translate-x-1/2">
  <span
    className={`relative w-12 h-12 flex items-center justify-center 
               rounded-full bg-red-500 text-white font-bold 
               shadow-lg ring-8 ring-red-100 
               animate-[pulse-ring_${item.step}s_infinite]`}
  >
    {item.step}
  </span>
</div>

            </div>

            {/* Text */}
            <h3 className="mt-8 text-lg font-bold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-slate-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
