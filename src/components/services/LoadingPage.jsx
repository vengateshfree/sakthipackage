import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

import parcel11 from "../../assets/parcel11.png";
function LoadingPage() {
  const [openFaq, setOpenFaq] = useState(null);

const pageContent = {
  heroImage: parcel11,
  title: "Loading & Unloading Services",
  description: [
    "Our Loading & Unloading Services are designed to ensure the safe handling of goods during transportation and relocation. Whether it is household items, office equipment, or commercial cargo, our trained workforce manages every item with care and efficiency.",
    "Using proper tools, techniques, and safety measures, we minimize the risk of damage and ensure smooth movement of goods at both origin and destination points. Our team focuses on precision, speed, and safety.",
  ],
  extraDescription:
    "We follow a systematic loading and unloading process that includes item assessment, proper lifting methods, secure placement, and careful handling. Our goal is to ensure damage-free movement and complete customer satisfaction.",
};

const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "Trained Handling Staff",
    desc: "Our experienced professionals are trained in safe lifting, stacking, and handling techniques.",
    score: "99% SAFE HANDLING",
  },
  {
    id: 2,
    number: "02",
    title: "Proper Tools & Equipment",
    desc: "We use trolleys, straps, lifts, and protective gear to ensure efficient and secure handling of goods.",
    score: "98% DAMAGE-FREE OPERATIONS",
  },
];

const faqs = [
  {
    question: "What items can you load and unload?",
    answer:
      "We handle household goods, furniture, appliances, office equipment, and commercial materials.",
  },
  {
    question: "Do you provide loading and unloading as a standalone service?",
    answer:
      "Yes, our loading and unloading services can be booked independently or combined with moving services.",
  },
  {
    question: "Is safety equipment used during loading and unloading?",
    answer:
      "Yes, our team uses safety gear and proper equipment to ensure safe and damage-free handling.",
  },
  {
    question: "Can you handle heavy and bulky items?",
    answer:
      "Absolutely. We are equipped and trained to handle heavy, oversized, and delicate items safely.",
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

export default LoadingPage;


