import React from "react";
import parcel10 from '../../assets/parcel10.jpg'
import parcel3 from '../../assets/parcel25.jpg'
import parcel5 from '../../assets/parcel23.jpg'
import parcel7 from '../../assets/parcel33.jpg'

function VisionPage() {
  return (
    <div className="bg-gray-50">

      {/* HERO */} 
      <div
        className="relative h-[420px] flex items-center justify-center bg-cover bg-center mt-10 "
        style={{
           backgroundImage: `url(${parcel10})`,
       }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h1 className="h1 font-bold text-white">
 
         
           Vision & Mission   
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
            <h2 className="h4 font-bold text-primary mb-3">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed h6">
              At Velan Packers & Movers, our vision is to become a trusted leader
              in relocation and logistics across Tamil Nadu and India by
              delivering innovative, reliable, and customer-focused moving
              solutions.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="h4 font-bold text-yellow-900 mb-3">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed h6">
              We strive to build long-term relationships with customers and
              partners through ethical practices, teamwork, and service
              excellence—ensuring every move is smooth, safe, and stress-free.
            </p>
          </div>

          {/* Leadership Values */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="h4 font-bold mb-4">Leadership Values</h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-600">
              {[
                "Collaboration & teamwork",
                "Integrity & transparency",
                "Accountability & responsibility",
                "Passion for service",
                "Uncompromised quality",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-yellow-500 font-bold">✔</span>
                  <span className="h6" >{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="h4 font-bold mb-4">Commitment to Excellence</h2>
            <ul className="space-y-2 h6 text-gray-600">
              <li>• Taking initiative and delivering results</li>
              <li>• Adapting to challenges with confidence</li>
              <li>• Continuous improvement & innovation</li>
              <li>• Ethical operations and customer respect</li>
            </ul>
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
          {[ parcel3, parcel7, parcel5
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

export default VisionPage;
