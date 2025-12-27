import { ArrowLeft, ArrowRight, Check, Star, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import parcel12 from '../../assets/parcel12.jpg'

export default function CompanyIntro() {

   const navigate = useNavigate ();
  return (
    <section className=" my-10 md:my-30">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 md:gap-30 items-center">
        
        {/* IMAGE SIDE */}
        <div className="relative">
          {/* Border Accent */}

          {/* Image */}
          <div className="z-50" >
          <img
            src={parcel12}
            alt="Logistics"
            className="relative  z-10 rounded-2xl w-full object-cover"
          />
          </div>
          <div className="absolute -right-5 top-7 h-[90%] w-10 rounded-md border-2 border-lime-400 hidden z-0 lg:block"></div>

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
                 {/* <div className='border border-yellow-200/50 px-3 py-1.5 bg-yellow-200/20 rounded-md inline-flex' >
                        <p class="bg-gradient-to-r from-yellow-600 to-yellow-400 bg-clip-text text-transparent 
                   uppercase tracking-[0.3em] font-semibold 
                   drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-[10px] md:text-[12px] lg:text-sm  ">
                              <span className="flex items-center gap-2" >
                   
                      <span>
                        About Us
                      </span>
                      <span>
                            <Star size={15} className="text-yellow-500"  />
                      </span>
                    </span>
                        </p>
                    </div> */}

                      <div className='border border-primary/50 px-3 mb-2 py-1.5 bg-primary/20 rounded-md inline-flex' >
                        <p class="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent 
                   uppercase tracking-[0.2em] font-semibold 
                   drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-sm   ">
                              <span className="flex items-center gap-2" >
                    
                      <span>
                        About Us
                      </span>
                      <span className="animate-spin"  style={{ animationDuration: "5s" }} >
                            <Star size={15} className="text-primary"  />
                      </span>
                    </span>
                        </p>
                    </div>
              
          {/* <div className="inline-flex gap-2 items-center border-amber-100 rounded-full bg-amber-200 p-1 backdrop-blur-2xl" >
            <Star size={15} className="text-yellow-400 " />
          <p className="uppercase tracking-widest  font-semibold text-gray-500  h6">
            About Us
          </p>
          
            <Star size={15} className="text-yellow-400" />
          </div> */}

          <h2 className="h2 font-extrabold text-dark leading-tight mb-6">
            Streamlined Solutions For A Seamless Deliveries
          </h2>

          <p className="text-gray-600 mb-8 max-w-xl h5">
        Customer trust is at the heart of everything we do. We focus on transparent pricing, timely service, and personalized support to ensure complete peace of mind throughout the shifting process.
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
                <p className="text-gray-600 h6">{item}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button onClick={() => navigate("/profile")} className="border  cursor-pointer border-primary text-primary px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary hover:text-white transition">
            Learn More <span>
<ArrowRight size={20}  />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

