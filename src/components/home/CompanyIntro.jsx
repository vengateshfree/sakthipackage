import { ArrowLeft, ArrowRight, Check, Trophy } from "lucide-react";

export default function CompanyIntro() {
  return (
    <section className=" my-30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-30 items-center">
        
        {/* IMAGE SIDE */}
        <div className="relative">
          {/* Border Accent */}

          {/* Image */}
          <div className="z-50" >
          <img
            src="https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg"
            alt="Logistics"
            className="relative  z-10 rounded-2xl w-full object-cover"
          />
          </div>
          <div className="absolute -right-4 top-8 h-[90%] w-10 rounded-md border-2 border-lime-400 hidden z-0 lg:block"></div>

          {/* Badge */}
          <div className="absolute -bottom-8 right-8 bg-primary text-white rounded-2xl px-8 py-6 flex items-center gap-5 z-20 shadow-lg">
            <div className="bg-accent text-primary rounded-full ">
              <Trophy size={40}  className="text-white" />
            </div>
            <div>
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-sm opacity-90">Winning award</p>
            </div>
          </div>
        </div>

        {/* CONTENT SIDE */}
        <div>
          <p className="uppercase tracking-widest text-sm font-semibold text-gray-500 mb-4">
            About Us
          </p>

          <h2 className="text-4xl font-bold text-dark leading-tight mb-6">
            Streamlined Solutions For <br /> A Seamless Deliveries
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl">
            Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultrices
            the dictum facilisis thr sem. Imperdiet massa turpis sit Lorem
            ipsum dolor sit amet.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Your satisfaction is our priority",
              "Enhancing your travel experience",
              "Safe, comfortable, and on time",
              "Discover the joy free transportation",
              "Discover the joy free transportation",
              "Discover the joy free transportation",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="bg-primary text-white rounded-full p-1">
                  <Check size={16} />
                </span>
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="border  border-primary text-primary px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary hover:text-white transition">
            Learn More <span>
<ArrowRight size={20}  />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

