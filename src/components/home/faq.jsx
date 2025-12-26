import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for enterprise clients. All payments are processed securely through industry-standard encryption."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping options are also available at checkout. International shipping times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day money-back guarantee on all products. Items must be unused and in original packaging. Return shipping is free for defective items, and we'll process refunds within 5-7 business days of receiving your return."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Our support team is available 24/7 via live chat, email, and phone. We typically respond to inquiries within 2 hours during business days and 4 hours on weekends."
    },
    // {
    //   question: "Can I upgrade or downgrade my plan?",
    //   answer: "Absolutely! You can change your plan at any time from your account settings. Upgrades take effect immediately, while downgrades will apply at the start of your next billing cycle. No cancellation fees."
    // },
    // {
    //   question: "Is my data secure?",
    //   answer: "Security is our top priority. We use bank-level 256-bit SSL encryption, regular security audits, and comply with GDPR, CCPA, and SOC 2 standards. Your data is never shared with third parties without explicit consent."
    // }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our product and services
          </p>
        </div>
        {/* FAQ Items */}
<div className="relative bg-slate-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Image Section */}
      <div className="relative">
        <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-3xl blur-2xl"></div>

        <img
          src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
          alt="FAQ"
          className="relative z-10 w-full rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] object-cover"
        />
      </div>

      {/* FAQ Section */}
    <div className="space-y-6">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className={`relative overflow-hidden rounded-2xl border transition-all duration-300
        ${
          openIndex === index
            ? "border-primary shadow-xl"
            : "border-slate-200 shadow-sm hover:shadow-lg"
        } bg-white`}
    >
      {/* Left Accent Bar */}
      <span
        className={`absolute left-0 top-0 h-full w-1 transition-all duration-300
          ${openIndex === index ? "bg-primary" : "bg-transparent"}`}
      />

      {/* Header */}
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full flex items-center gap-5 px-6 py-5 text-left"
      >
        {/* Icon Circle */}
        <div
          className={`flex items-center justify-center w-10 h-10 rounded-full text-sm font-bold
            ${
              openIndex === index
                ? "bg-primary text-white"
                : "bg-primary/10 text-primary"
            } transition-colors`}
        >
          {index + 1}
        </div>

        {/* Question */}
        <h3 className="flex-1 text-slate-900 font-semibold text-base sm:text-lg">
          {faq.question}
        </h3>

        {/* Arrow */}
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 text-primary
            ${openIndex === index ? "rotate-180" : ""}`}
        />
      </button>

      {/* Answer */}
      <div
        className={`transition-all duration-300 ease-in-out origin-top
          ${
            openIndex === index
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-95"
          }`}
      >
        <div className="px-6 pb-6 pl-[4.75rem] text-slate-600 leading-relaxed text-sm sm:text-base">
          {faq.answer}
        </div>
      </div>
    </div>
  ))}
</div>


    </div>
  </div>
</div>

   
      </div>
    </div>
  );
}