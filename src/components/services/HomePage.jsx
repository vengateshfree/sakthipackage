import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

function HomePage() {
  const [openFaq, setOpenFaq] = useState(null);

const pageContent = {
  heroImage:
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=400&fit=crop",
  title: "Home Shifting Services",
  description: [
    "Our Home Shifting Service is designed to make your relocation smooth, safe, and stress-free. Whether you are moving within the city or relocating to another state, we handle every aspect of your household move with care and professionalism.",
    "From packing fragile items to transporting furniture and appliances, our experienced team ensures your belongings are moved securely and delivered on time. We focus on organized planning, careful handling, and complete customer satisfaction.",
  ],
  extraDescription:
    "We follow a systematic home shifting process that includes pre-move inspection, professional packing, safe loading, transportation, unloading, and unpacking. Every item is handled with attention to detail to ensure a damage-free relocation experience.",
};

const serviceCards = [
  {
    id: 1,
    number: "01",
    title: "Professional Packing",
    desc: "High-quality packing materials are used to protect furniture, electronics, kitchen items, and fragile goods.",
    score: "98% DAMAGE-FREE MOVES",
  },
  {
    id: 2,
    number: "02",
    title: "Safe & Timely Delivery",
    desc: "Our trained relocation team ensures secure transport and on-time delivery of all household belongings.",
    score: "99% CUSTOMER TRUST",
  },
];

const faqs = [
  {
    question: "Do you provide packing and unpacking services?",
    answer:
      "Yes, we offer complete packing and unpacking services to ensure your household items are handled safely from start to finish.",
  },
  {
    question: "Is my household goods insured during shifting?",
    answer:
      "Yes, transit insurance is available to cover your belongings against any unexpected damage or loss during relocation.",
  },
  {
    question: "How long does home shifting take?",
    answer:
      "The duration depends on the size of your home and distance of the move, but we always provide a clear timeline in advance.",
  },
  {
    question: "What items should not be moved during home shifting?",
    answer:
      "We recommend not transporting perishable food items, hazardous materials, and valuables such as cash or important documents.",
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

export default HomePage;
