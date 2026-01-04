import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
 
import parcel11 from "../../assets/parcel11.png";

function WarHousePage() {
  const [openFaq, setOpenFaq] = useState(null);


const pageContent = { 
  heroImage: parcel11,
  title: "Warehouse Services",
  description: [
    "Our Warehouse Services provide secure, organized, and flexible storage solutions for household goods, commercial inventory, and business assets. Whether you need short-term or long-term storage, we offer reliable warehousing facilities to meet your requirements.",
    "Equipped with modern infrastructure and security systems, our warehouses ensure safe storage, easy access, and efficient inventory management. We focus on cleanliness, safety, and systematic handling of stored goods.",
  ],
  extraDescription:
    "We follow a well-managed warehousing process that includes item inspection, labeling, safe stacking, inventory tracking, and controlled access. Our goal is to provide cost-effective and secure storage solutions with complete peace of mind.",
};

const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "Secure Storage Facilities",
    desc: "Our warehouses are monitored with CCTV, fire safety systems, and controlled access for maximum protection.",
    score: "99% STORAGE SAFETY",
  },
  {
    id: 2,
    number: "02",
    title: "Flexible Storage Plans",
    desc: "We offer customizable storage options including short-term and long-term warehousing solutions.",
    score: "98% CUSTOMER SATISFACTION",
  },
];

const faqs = [
  {
    question: "What items can be stored in your warehouse?",
    answer:
      "We store household goods, office equipment, furniture, commercial inventory, and non-perishable items.",
  },
  {
    question: "Is my stored goods insured?",
    answer:
      "Yes, insurance options are available to protect stored items against fire, theft, and other unforeseen risks.",
  },
  {
    question: "Can I access my goods while they are in storage?",
    answer:
      "Yes, access can be arranged with prior notice based on warehouse policies and security procedures.",
  },
  {
    question: "Do you provide short-term and long-term storage?",
    answer:
      "Absolutely. We offer flexible storage durations to suit temporary and extended warehousing needs.",
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

export default WarHousePage;

