import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

import parcel13 from "../../assets/parcel13.jpg";

function PackagePage() { 
  const [openFaq, setOpenFaq] = useState(null);

  const pageContent = {
  heroImage: parcel13,
  title: "Packing & Moving Services",
  description: [
    "Our Packing & Moving Services are designed to ensure safe, organized, and hassle-free relocation of your belongings. Whether it is household goods, office equipment, or individual packages, we handle every item with care and precision.",
    "Using high-quality packing materials and professional handling techniques, we protect your valuables from damage during transit. Our experienced team ensures timely pickup, secure transportation, and smooth delivery to your destination.",
  ],
  extraDescription:
    "We follow a systematic packing and moving process that includes assessment, labeling, professional packing, safe loading, transportation, unloading, and optional unpacking. Our goal is to deliver a reliable and damage-free moving experience.",
};

const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "Professional Packing Materials",
    desc: "We use sturdy boxes, bubble wrap, stretch film, and protective coverings to secure items of all sizes.",
    score: "98% DAMAGE-FREE PACKING",
  },
  {
    id: 2,
    number: "02",
    title: "Safe Transportation",
    desc: "Our fleet of well-maintained vehicles ensures secure and timely movement of your packages and goods.",
    score: "99% ON-TIME DELIVERY",
  },
];

const faqs = [
  {
    question: "What items can be packed and moved?",
    answer:
      "We handle household goods, office items, furniture, electronics, and general packages. Hazardous and restricted items are excluded.",
  },
  {
    question: "Do you provide packing materials?",
    answer:
      "Yes, we provide high-quality packing materials suitable for fragile, heavy, and valuable items.",
  },
  {
    question: "Is insurance available for packing and moving?",
    answer:
      "Yes, transit insurance options are available to protect your belongings against unexpected damage or loss.",
  },
  {
    question: "Can I choose only packing or only moving services?",
    answer:
      "Absolutely. You can opt for packing-only, moving-only, or complete packing and moving services as per your needs.",
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

export default PackagePage;
