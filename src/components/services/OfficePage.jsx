import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

import parcel20 from "../../assets/parcel20.jpg";
function OfficePage() {
  const [openFaq, setOpenFaq] = useState(null);


  const pageContent = {
  heroImage: parcel20,
  title: "Office Shifting Services",
  description: [
    "Our Office Shifting Service is designed to relocate your workspace efficiently with minimal downtime. Whether you are moving a small office or a large corporate setup, we ensure a smooth and well-coordinated transition.",
    "From IT equipment and office furniture to confidential files and workstations, our trained professionals handle every item with precision. We focus on organized execution, timely delivery, and business continuity throughout the relocation process.",
  ],
  extraDescription:
    "We follow a structured office relocation process that includes planning, labeling, secure packing, safe transportation, and systematic setup at the new location. Our goal is to help your business resume operations quickly and seamlessly.",
};

const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "IT & Equipment Handling",
    desc: "Sensitive IT assets, servers, and electronics are packed and transported using anti-static and protective materials.",
    score: "99% DATA SAFETY",
  },
  {
    id: 2,
    number: "02",
    title: "Minimal Business Downtime",
    desc: "Our planned relocation approach ensures faster setup and reduced operational disruption.",
    score: "98% ON-TIME COMPLETION",
  },
];

const faqs = [
  {
    question: "Do you handle IT equipment and servers?",
    answer:
      "Yes, we specialize in safely relocating computers, servers, networking equipment, and other sensitive IT assets.",
  },
  {
    question: "How do you minimize office downtime?",
    answer:
      "We plan the move in phases, use proper labeling, and coordinate closely with your team to ensure a fast and organized setup.",
  },
  { 
    question: "Is office equipment insured during shifting?",
    answer:
      "Yes, transit insurance options are available to protect office assets against unforeseen damage during relocation.",
  },
  {
    question: "Can you handle large corporate office moves?",
    answer:
      "Absolutely. We have the expertise and resources to manage small, medium, and large-scale office relocations efficiently.",
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

export default OfficePage;
