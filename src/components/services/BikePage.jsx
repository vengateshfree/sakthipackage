import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

import parcel17 from "../../assets/parcel17.jpg";

import parcel9 from '../../assets/parcel9.jpg'
function Bikepage() {
  const [openFaq, setOpenFaq] = useState(null);

  // ===== PAGE CONTENT DATA =====
  const pageContent = {
    heroImage: parcel9,
    title: "Bike Transportation Services",
    description: [
      "Our Bike Transportation Service is designed to move your two-wheeler safely, efficiently, and without hassle. Whether you are relocating to a new city or sending your bike across states, we ensure secure handling from pickup to delivery using professional packing methods.",
      "With years of experience in two-wheeler logistics, we provide reliable door-to-door bike transport solutions. From proper documentation support to real-time tracking, we make the entire process smooth, transparent, and worry-free.",
    ],
    extraDescription:
      "We follow a structured bike transportation process that includes inspection, professional packing, safe loading, transit monitoring, and careful unloading at the destination. Every bike is handled with precision to ensure it reaches you in perfect condition.",
  };

  const serviceCards = [
    {
      id: 1,
      number: "01",
      title: "Secure Bike Packing",
      desc: "High-quality packing materials are used to protect your bike from scratches, dust, and transit damage.",
      score: "96% SAFETY SCORE",
    },
    {
      id: 2,
      number: "02",
      title: "On-Time Delivery",
      desc: "Our logistics network ensures timely pickup and delivery of your bike across cities and states.",
      score: "98% DELIVERY SCORE",
    },
  ];

  const faqs = [
    {
      question: "Is my bike safe during transportation?",
      answer:
        "Yes, your bike is packed using premium protective materials and handled by trained professionals to ensure complete safety during transit.",
    },
    {
      question: "How long does bike transportation take?",
      answer:
        "Delivery time depends on distance and destination, but we always aim for fast and on-time delivery with regular updates.",
    },
    {
      question: "Can I track my bike shipment?",
      answer:
        "Yes, tracking details are provided so you can monitor your bike shipment in real time.",
    },
    {
      question: "What documents are required for bike transport?",
      answer:
        "Usually, a copy of the bike RC, insurance, and ID proof are required. Our team will guide you throughout the process.",
    },
  ];

  return (
    <div className="flex-1 p-8">
      {/* ===== HERO IMAGE ===== */}
      <div className="bg-slate-700 rounded-lg overflow-hidden mb-8 h-64">
        <img
          src={pageContent.heroImage}
          alt="Bike Transportation"
          className="w-full h-full object-cover opacity-80"
        />
      </div>

      {/* ===== TITLE & DESCRIPTION ===== */}
      <div className="bg-white rounded-lg p-8 mb-6">
        <h1 className="h2 font-bold text-slate-800 mb-4">
          {pageContent.title}
        </h1>

        {pageContent.description.map((text, index) => (
          <p
            key={index}
            className="text-gray-600 h6 mb-4 leading-relaxed"
          >
            {text}
          </p>
        ))}
      </div>

      {/* ===== SERVICE CARDS ===== */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {serviceCards.map((card) => (
          <div key={card.id} className="bg-white rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-gray-300 mb-4">
              {card.number}
            </div>
            <h3 className="h4 font-bold text-slate-800 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-600 h6 mb-4">{card.desc}</p>
            <div className="text-red-500 font-bold h5">{card.score}</div>
          </div>
        ))}
      </div>

      {/* ===== EXTRA DESCRIPTION ===== */}
      <div className="bg-white rounded-lg p-8 mb-6">
        <p className="text-gray-600 h6 leading-relaxed">
          {pageContent.extraDescription}
        </p>
      </div>

      {/* ===== FAQ SECTION ===== */}
    <div className="bg-white rounded-lg">
  {faqs.map((faq, index) => {
    const isOpen = openFaq === index;

    return (
      <div
        key={index}
        className="border-b border-gray-200 last:border-b-0"
      >
        <button
          onClick={() => setOpenFaq(isOpen ? null : index)}
          className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
        >
          <span className="text-sm font-medium text-gray-700">
            {faq.question}
          </span>

          <span
            className={`transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isOpen ? (
              <Minus className="w-5 h-5 text-gray-400" />
            ) : (
              <Plus className="w-5 h-5 text-gray-400" />
            )}
          </span>
        </button>

        {/* Animated Answer */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      </div>
    );
  })}
</div>

    </div>
  );
}

export default Bikepage;
