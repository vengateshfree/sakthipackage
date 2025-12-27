import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";
import parcel22 from "../../assets/parcel22.jpg";

function CarPage() {
  const [openFaq, setOpenFaq] = useState(null);

  // ===== PAGE CONTENT DATA =====
 const pageContent = {
  heroImage: parcel22,
  title: "Car Transportation Services",
  description: [
    "Our Car Transportation Service ensures the safe and efficient movement of your vehicle across cities and states. Whether you are relocating, purchasing a new car, or moving for work, we provide secure door-to-door car transport with complete care.",
    "Using specialized car carriers and experienced handling teams, we minimize transit risks and ensure your vehicle reaches its destination in pristine condition. Our transparent pricing and real-time tracking make car relocation simple and stress-free.",
  ],
  extraDescription:
    "From inspection and documentation to safe loading, transit monitoring, and final delivery, our car transportation process is designed for maximum safety and reliability. Every vehicle is handled with advanced equipment and strict quality checks.",
};

const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "Covered Car Carriers",
    desc: "We use enclosed and open car carriers to protect your vehicle from weather conditions and road damage.",
    score: "97% VEHICLE SAFETY",
  },
  {
    id: 2,
    number: "02",
    title: "Professional Handling",
    desc: "Our trained drivers and logistics experts ensure careful loading, secure transit, and damage-free delivery.",
    score: "99% CUSTOMER SATISFACTION",
  },
];

const faqs = [
  {
    question: "Is my car insured during transportation?",
    answer:
      "Yes, all car shipments are covered under transit insurance to protect your vehicle against unforeseen circumstances.",
  },
  {
    question: "How long does car transportation take?",
    answer:
      "Delivery time varies based on distance and route, but we provide accurate timelines and regular shipment updates.",
  },
  {
    question: "Can I track my car shipment?",
    answer:
      "Yes, real-time tracking details are shared so you can monitor your car’s movement throughout the journey.",
  },
  {
    question: "What documents are required for car transport?",
    answer:
      "You will need a copy of the vehicle RC, insurance papers, and a valid ID proof. Our team will assist you at every step.",
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

export default CarPage;
