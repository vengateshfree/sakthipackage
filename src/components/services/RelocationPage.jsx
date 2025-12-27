import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function RelocationPage() {
  const [openFaq, setOpenFaq] = useState(null);

const pageContent = {
  heroImage:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=400&fit=crop",
  title: "Relocation Services",
  description: [
    "Our Relocation Services are designed to provide a smooth and well-managed moving experience for individuals, families, and businesses. Whether you are relocating locally or moving to another city, we take care of every detail from start to finish.",
    "With professional planning, careful handling, and reliable transportation, we ensure your belongings reach the new location safely and on time. Our dedicated relocation team focuses on comfort, efficiency, and complete customer satisfaction.",
  ],
  extraDescription:
    "We follow a structured relocation process that includes survey and planning, professional packing, secure transportation, unloading, and systematic arrangement at the destination. Our goal is to make your relocation stress-free and well-organized.",
};

const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "End-to-End Relocation Support",
    desc: "From initial planning to final setup, we manage the entire relocation process with precision and care.",
    score: "98% SUCCESSFUL RELOCATIONS",
  },
  {
    id: 2,
    number: "02",
    title: "Safe & Reliable Transit",
    desc: "We use modern vehicles and secure handling methods to ensure safe transportation of all belongings.",
    score: "99% ON-TIME EXECUTION",
  },
];

const faqs = [
  {
    question: "What types of relocation services do you offer?",
    answer:
      "We offer home relocation, office relocation, intercity relocation, and corporate relocation services.",
  },
  {
    question: "Do you provide relocation planning assistance?",
    answer:
      "Yes, our experts assist with planning, scheduling, and coordination to ensure a smooth relocation experience.",
  },
  {
    question: "Is insurance included in relocation services?",
    answer:
      "Transit insurance options are available to protect your belongings during the relocation process.",
  },
  {
    question: "Can you handle long-distance relocation?",
    answer:
      "Yes, we specialize in both local and long-distance relocation with professional handling and tracking support.",
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

export default RelocationPage;

