import { CheckCircle } from "lucide-react";

const Welcome = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-lg text-gray-600 mb-2">Welcome to</p>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Packers and Movers
          </h1>

          <p className="text-gray-600 leading-7 mb-6">
            Hi-Safe Packers & Movers, the specialist in Packing & Moving of
            Household, Office, and Industrial goods anywhere in Erode, Tiruppur,
            Coimbatore, Namakkal & Salem.
          </p>

          <p className="text-gray-600 leading-7 mb-8">
            Office shifting service is a very challenging job that is why, we
            have deployed professionals, who are well-trained, enthusiastic,
            customer-friendly, and tireless. They provide you with exceptional
            relocation services and make sure you shifting of goods are going
            to be simple and safe.
          </p>

          {/* CHECK LIST */}
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-gray-800">
              <CheckCircle className="text-red-500" size={22} />
              Complex long-distance transportation
            </li>
            <li className="flex items-center gap-3 text-gray-800">
              <CheckCircle className="text-red-500" size={22} />
              Fast and quility delivery
            </li>
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* 24/7 SERVICE */}
          <div className="text-left">
            <img
              src="/24hr-service.png" // replace with your image path
              alt="24/7 Service"
              className="mb-5 w-full max-w-[260px]"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              24/7 Emergency Service
            </h3>
            <p className="text-gray-600 text-sm leading-6">
              We provide fast, cost-effective moving & providing services.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="text-left">
            <img
              src="/customer-experience.png" // replace with your image path
              alt="Customer Experience"
              className="mb-3 w-full max-w-[260px]"
            />
            <p className="text-green-600 font-semibold uppercase mb-2">
              Customer Experience
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              08 Years Experience
            </h3>
            <p className="text-gray-600 text-sm leading-6">
              Hi-Safe Packers and Movers are top in south India for Secure and
              Safe Moving.
            </p>
          </div>

        </div>
      </div>

      {/* WhatsApp Floating Button (Optional) */}
      <a
        href="#"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-105 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="white"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path d="M12 2a10 10 0 00-8.7 14.9L2 22l5.3-1.4A10 10 0 1012 2z" />
        </svg>
      </a>
    </section>
  );
};

export default Welcome;
