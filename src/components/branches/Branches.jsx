import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import parcel9 from '../../assets/parcel9.jpg'
import parcel10 from '../../assets/parcel10.jpg'

import parcel11 from '../../assets/parcel11.jpg'
import parcel14 from '../../assets/parcel14.jpg'
import { useNavigate } from 'react-router-dom';

export default function Branches() {
 
  const navigate = useNavigate()

  const branches = [
  {
    name: "Salem Branch Office",
    address: "A Block, Anna Nagar, Fort, Salem – 636 001",
    phone: "+91 74187 69922",
    email: "info@velanpackers@gmail.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125042.34611180524!2d78.0558950787394!3d11.653723377452316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca47!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766763614830!5m2!1sen!2sin"
  },
  {
    name: "Namakkal Branch Office",
    address: "5/209 Murali Kadu, Sowdhapuram, Kumarapalayam, Namakkal – 638008",
    phone: "+91 74187 69922",
    email: "info@velanpackers@gmail.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.222763709076!2d77.98908327505474!3d11.44680739184717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96df2f7bdfd0f%3A0x9b1b53bbf1e3c9ad!2sNamakkal%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766763614831!5m2!1sen!2sin"
  },
  {
    name: "Erode Branch Office",
    address: "Perundurai Road, Erode – 638011",
    phone: "+91 74187 69922",
    email: "info@velanpackers@gmail.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.377873705756!2d77.71608627505693!3d11.341036691924028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f8e76c6f47f%3A0x4a8b0f14f1d72d1b!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766763614832!5m2!1sen!2sin"
  },
  {
    name: "Coimbatore Branch Office",
    address: "Gandhipuram, Coimbatore – 641012",
    phone: "+91 74187 69922",
    email: "info@velanpackers@gmail.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.181004673356!2d76.96007727505397!3d11.01684489212561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a9f1df7c8f%3A0x4c2f2bfae8c8e9a6!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766763614833!5m2!1sen!2sin"
  },
  {
    name: "Chennai Branch Office",
    address: "Anna Nagar, Chennai – 600040",
    phone: "+91 74187 69922",
    email: "info@velanpackers@gmail.com",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.588471373598!2d80.21007657507442!3d13.084622790792514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265c2b1f8e4dd%3A0x53d8c6bb1c61f22c!2sAnna%20Nagar%2C%20Chennai!5e0!3m2!1sen!2sin!4v1766763614834!5m2!1sen!2sin"
  }
];


  return (
    <div className="min-h-screen  bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      {/* Hero Section */}
      
         <div
        className="relative bg-cover bg-center h-[400px] flex  text-center items-center mt-10"
        style={{
            backgroundImage: `url(${parcel10})`,
         }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="h1 font-bold text-white">
            Branches
          </h1>
          <p className="mt-3 text-gray-200 max-w-2xl h3">
         We are located across Tamil Nadu to serve you better.            
          </p>
        </div>
      </div>
      

      
      <div className="pt-10 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Branches</h1>
          <p className="text-xl opacity-90">Find us at convenient locations across Tamil Nadu</p>
        </div>
      </div>

      {/* Company Info Card */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 mb-12">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border-t-4 border-orange-500">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="h2 font-bold text-primary mb-4">Sakthi Packers & Movers</h2>
              <p className="text-slate-600 h5">
                Professional packing and moving services with care and reliability. 
                We ensure your belongings reach safely to their destination.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=200&fit=crop" 
                alt="Packing service" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=300&h=200&fit=crop" 
                alt="Moving service" 
                className="w-full h-40 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Branches Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Branch Header */}
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 px-2 py-3 ">
                <h3 className="h5 font-bold text-white text-center">{branch.name}</h3>
              </div>

              {/* Map Placeholder */}
              <div className="relative h-64 bg-gray-200 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-amber-100">
                
          <iframe
  src={`${branch.mapEmbed}`}
  width="100%"
  height="250"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

            {/* <div className="text-center">
                    <MapPin className="w-16 h-16 text-orange-500 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Map Location</p>
                  </div> */}
                </div>
              </div>

              {/* Branch Details */}
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Address</p>
                    <p className="text-gray-600">{branch.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Phone</p>
                    <a 
                      href={`tel:${branch.phone}`} 
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      {branch.phone}
                    </a>
                  </div>
                </div>

                {/* <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 mb-1">Email</p>
                    <a 
                      href={`mailto:${branch.email}`} 
                      className="text-orange-600 hover:text-orange-700 font-medium break-all"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div> */}

                {/* Action Button */}
                <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg">
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Move?</h3>
          <p className="text-xl mb-6 opacity-90">Contact us today for a free quote and hassle-free moving experience</p>
          <button onClick={()=>navigate("/contact")} className="bg-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
            Request a Quote
          </button>
        </div>
      </div>
    </div>
  );
}