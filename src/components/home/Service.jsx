
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
} from "lucide-react";

const services = [
  {
    title: "Bike Transportation",
    desc: "Safe and reliable bike transportation services across cities.",
    icon: Bike,
    image:
      "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg",
    reverse: false,
  },
  {
    title: "Car Transportation",
    desc: "Door-to-door car transportation with complete safety.",
    icon: Car,
    image:
      "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg",
    reverse: false,
  },
  {
    title: "Home Shifting",
    desc: "Hassle-free home shifting services with professional handling.",
    icon: Home,
    image:
      "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    reverse: true,
  },
  {
    title: "Office Shifting",
    desc: "Quick and secure office relocation with minimal downtime.",
    icon: Building2,
    image:
      "https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg",
    reverse: true,
  },
//   {
//     title: "Packing & Moving",
//     desc: "High-quality packing materials and expert moving services.",
//     icon: Package,
//     image:
//       "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
//     reverse: false,
//   },
//   {
//     title: "Relocation Services",
//     desc: "Complete relocation solutions for local and intercity moves.",
//     icon: Truck,
//     image:
//       "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg",
//     reverse: false,
//   },
//   {
//     title: "Warehouse Services",
//     desc: "Secure and spacious warehouse storage solutions.",
//     icon: Warehouse,
//     image:
//       "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg",
//     reverse: true,
//   },
//   {
//     title: "Loading & Unloading",
//     desc: "Professional loading and unloading handled by experts.",
//     icon: Move,
//     image:
//       "https://images.pexels.com/photos/4246267/pexels-photo-4246267.jpeg",
//     reverse: true,
//   },
];


export default function Service() {
  return (
    <section className="bg-[#f7fafc] py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs tracking-widest text-gray-400 mb-2">
          FAVOURITE CONSIGNMENT
        </p>
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
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
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {item.desc}
          </p>
          <span className="text-xs font-semibold tracking-widest text-gray-800 cursor-pointer hover:text-sky-500">
            READ MORE
          </span>
        </div>
      </div>
    );
  })}
</div>
<div className="flex justify-center items-center mt-10" > 
     <button className="border  border-primary cursor-pointer text-primary px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary hover:text-white transition">
            See More Service <span>
<ArrowRight size={20}  className="mt-1" />
            </span>
          </button>
</div>

    </section>
  );
}
