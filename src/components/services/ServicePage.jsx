import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Download, Plus, Minus } from 'lucide-react';
import { Outlet, useNavigate } from 'react-router-dom';



export default function ServicePage() {
  const [openFaq, setOpenFaq] = useState(null);
  const navigate = useNavigate();

const services = [
  { name: "Bike Transport", path: "/services/bike" },
  { name: "Car Transport", path: "/services/car" },
  { name: "Home Shifting", path: "/services/home" },
  { name: "Office Shifting", path: "/services/office" },
  { name: "Package Moving", path: "/services/package" },
  { name: "Relocation Service", path: "/services/location" },
  { name: "Warhouse Service", path: "/services/warhouse" },
  { name: "Loading & Unloading", path: "/services/loading" },
];


  const faqs = [
    {
      question: "Can I specify a delivery date when ordering?",
      answer: "We are committed to providing customers with exceptional service while offering our employees the best training. There are many variations of passages lorem ipsum is simply free."
    },
    {
      question: "How can I track my shipments?",
      answer: "You can track your shipments through our online portal using your tracking number."
    },
    {
      question: "What is included in your services?",
      answer: "Our services include warehousing, packaging, storage, and delivery solutions."
    },
    {
      question: "How can I safely use fles?",
      answer: "All our facilities follow strict safety protocols and guidelines."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex mt-30 max-w-7xl mx-auto">
      {/* Sidebar */}
      <div className="w-64 bg-white flex-shrink-0 hidden lg:block">
        {/* Our Services */}
        <div className="bg-slate-800 text-white p-4 font-bold">
          OUR SERVICES
        </div>
        <div className="py-2">
       <div className="py-2">
      {services.map((service, index) => {
        const isActive = location.pathname === `${service.path}`;
console.log("Current Path:", location.pathname, "Service Path:", service.path, "Is Active:", isActive, "thiw will re-render");
        return (
          <div
            key={index}
            onClick={() => navigate(`${service.path}`)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors
              ${isActive ? "bg-red-500 text-white" : "text-gray-700 hover:bg-gray-100"}
            `}
          >
            <span className="h6">{service.name}</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        );
      })}
    </div>
        </div>

        {/* Contact Info */}
        <div className="bg-slate-800 text-white p-4 font-bold mt-8">
          CONTACT INFO
        </div>
        <div className="p-4 space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-red-500 text-white rounded-full p-2 flex-shrink-0">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="h6 font-bold text-yellow-900">Email Address</div>
              <div className="h6 text-gray-600">info@yourdomain.com</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-red-500 text-white rounded-full p-2 flex-shrink-0">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="h6 font-bold text-yellow-900">Phone Number</div>
              <div className="h6 text-gray-600">+1234 123 456 789</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-red-500 text-white rounded-full p-2 flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <div className="h6 font-bold text-yellow-900">Location</div>
              <div className="h6 text-gray-600">Guild Street 512B, UK</div>
            </div>
          </div>
        </div>

        {/* Brochures */}
  
      

        {/* Help Section */}
        <div className=" bg-slate-800 text-white p-6 text-center">
          <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8" />
          </div>
          <div className="text-lg font-bold mb-2">How Can We Help?</div>
          <div className="text-sm mb-1 flex items-center justify-center gap-1">
            <Phone className="w-3 h-3" />
            <span>(+1)123 456 789</span>
          </div>
          <div className="text-xs flex items-center justify-center gap-1">
            <Mail className="w-3 h-3" />
            <span>info@youremail.com</span>
          </div>
        </div>
      </div>

      {/* Main Content */}

      <Outlet />
   

    </div>
  );
}