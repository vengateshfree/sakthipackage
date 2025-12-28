import { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';
import parcel21 from '../../assets/parcel21.jpeg'

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
           <div className='border border-primary/50 px-3 mb-2 py-1.5 bg-primary/20 rounded-md inline-flex' >
                        <p class="bg-gradient-to-r from-primary to-primary bg-clip-text text-transparent 
                   uppercase tracking-[0.2em] font-semibold 
                   drop-shadow-[0_0_10px_rgba(172,98,255,0.5)] text-sm   ">
                              <span className="flex items-center gap-2" >
                    
                      <span>
                     Frequently Asked Questions
                      </span>
                      <span className="animate-spin"  style={{ animationDuration: "5s" }} >
                            <Star size={15} className="text-primary"  />
                      </span>
                    </span>
                        </p>
                    </div>
            {/* <h2 className="h2 font-bold text-slate-900 mb-4">
            
            </h2> */}
          <p className="h2 font-extrabold text-gray-900 w-full lg:w-[70%] text-center mx-auto mt-2">
            Everything you need to know about our product and services
          </p>
        </div>
        {/* FAQ Items */}
<div className="relative bg-slate-50 py-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

      {/* Image Section */}
   <section className="relative z-0 overflow-visible">
  <div className="relative">

    {/* Decorative glow */}
    <div className="absolute -top-6 -left-6 w-32 h-32 
                    bg-primary/10 rounded-3xl 
                    blur-2xl z-0 pointer-events-none" />

    {/* Image */}
    <img
      src={parcel21}
      alt="FAQ"
      className="relative w-full rounded-3xl 
                 shadow-[0_20px_50px_rgba(0,0,0,0.15)] 
                 object-cover z-10"
    />

  </div>
</section>


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
        <h3 className={`  ${
              openIndex === index ? "text-yellow-800" : "text-slate-900"
            } h6 transition-colors`}>
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
        <div className="px-6 pb-6 pl-[4.75rem] text-slate-600 leading-relaxed h6">
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