

import React from "react";

function ProfilePage() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <div
        className="relative h-[420px] flex items-center justify-center bg-cover bg-center mt-10 "
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h1 className="h1 font-bold text-white">
 
         
           Profile   
    </h1>
    {/* <p className="mt-3 text-gray-200 max-w-2xl h3 text-center">
        Driven by purpose, powered by trust, and committed to excellence
    </p> */}
  </div>
      </div>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-8">

          {/* Vision */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="h4 font-bold text-primary mb-3">Our Company Profile</h2>
            <p className="text-gray-600 leading-relaxed h6">
            Welcome to Sakthi Traders, your trusted partner for seamless packing and moving services across Tamil Nadu and beyond. Whether you’re relocating your home or workplace within cities like Madurai, Coimbatore, Chennai, or moving interstate, we specialise in handling household, office, and industrial goods with utmost care
            </p>
          </div>

          {/* Mission */}
          {/* <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="h4 font-bold text-yellow-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed h6">
              We strive to build long-term relationships with customers and
              partners through ethical practices, teamwork, and service
              excellence—ensuring every move is smooth, safe, and stress-free.
            </p>
          </div> */}

          {/* Leadership Values */}
      

       
            <div className="bg-white rounded-xl shadow-md p-6">
               <p className="text-gray-600 leading-relaxed h6">
            Welcome to Sakthi Traders, your trusted partner for seamless packing and moving services across Tamil Nadu and beyond. Whether you’re relocating your home or workplace within cities like Madurai, Coimbatore, Chennai, or moving interstate, we specialise in handling household, office, and industrial goods with utmost care
 Traders for a smooth, safe, and stress-free relocation experience. We recognise that moving can feel overwhelming — especially when you’re unfamiliar with the area. That’s why we act as your guiding partner, offering verified moving solutions, transparent pricing, and dedicated support every step of the way.
            </p>
         
          </div>

              <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="h4 font-bold mb-4">Leadership Values</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              {["Well trained in modern packing techniques",
               "Enthusiastic and customer-friendly",
               "Committed to delivering your goods safely and on time",
               "Equipped to handle every step — from packing to final placement"   ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">✔</span>
                  <span className="h6" >{item}</span>
                </div>
              ))}
            </div>
          {/* </div>
            <div className="bg-white rounded-xl shadow-md p-6">
             <p className="text-gray-600 leading-relaxed h6">
        
            We have emerged as one of the leading service providers in the relocation industry by offering exceptional solutions designed to make your move simple, efficient, and secure. With a strong reputation for reliability and consistency, we ensure that your belongings are handled with the highest standards of care and delivered exactly when promised.
  </p>
         
          </div>
            <div className="bg-white rounded-xl shadow-md p-6">
           <p className="text-gray-600 leading-relaxed h6">
    
Our team at Sakthi Traders brings together deep expertise in packing methodology and logistics planning. We provide true door-to-door services tailored to your specific requirements — giving you a hassle-free relocation experience from start to finish.
       </p> */}
         
          </div>
            <div className="bg-white rounded-xl shadow-md p-6">
             <p className="text-gray-600 leading-relaxed h6">
    
Whether your move is local or long-distance, we also offer secure temporary storage and warehousing solutions so your belongings remain safe during the transition. Our storage services cater to both short-term and long-term needs, offering flexibility and peace of mind.
     </p>
         
          </div>

          {/* Strength & Why Choose Us */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-yellow-400 rounded-xl p-6 text-black">
              <h2 className="text-xl font-bold mb-3">Our Strength</h2>
              <ul className="space-y-2 text-sm">
                <li>✔ Skilled relocation professionals</li>
                <li>✔ Cost-effective solutions</li>
                <li>✔ Wide service network</li>
                <li>✔ Complete care of goods</li>
              </ul>
            </div>

            <div className="bg-black rounded-xl p-6 text-white">
              <h2 className="text-xl font-bold mb-3">Why Choose Us?</h2>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✔ On-time delivery</li>
                <li>✔ Maximum safety standards</li>
                <li>✔ Transparent pricing</li>
                <li>✔ End-to-end relocation support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="space-y-6 lg:sticky lg:top-24 h-fit">
          {[
            "https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg",
            "https://images.pexels.com/photos/4246118/pexels-photo-4246118.jpeg",
            "https://images.pexels.com/photos/4246266/pexels-photo-4246266.jpeg",
          ].map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={img}
                alt="Packers and Movers"
                className="w-full h-52 object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProfilePage;
