import { Phone, ChevronRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1f2326] text-gray-300 pt-14">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <img
            src="/logo.png" // replace with your logo path
            alt="Hi-Safe Packers & Movers"
            className="h-14 mb-4"
          />
          <p className="text-sm leading-6">
            Hi-Safe Packers & Movers, the specialist in Packing & Moving of
            Household, Office, and Industrial goods anywhere in Erode,
            Tiruppur, Coimbatore, Namakkal & Salem.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Bike transportation",
              "Packing & moving",
              "Car transportation",
              "Loading & unloading",
              "Warehouse services",
              "Insurance services",
              "Home shifting",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <ChevronRight size={14} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Address</h3>
          <p className="text-sm leading-6 mb-4">
            #1181, Annapoorni Maligai Upstar, Mettur Road,
            <br />
            Erode – 638 011.
            <br />
            <br />
            15/8, Sidhambaranar Street, Karattadi Palayam,
            <br />
            Near Gobi arts college, Gobichettipalayam,
            <br />
            Erode – 638 453
          </p>
          <p className="flex items-center gap-2 text-white text-sm">
            <Phone size={16} />
            +91 96550 99911
          </p>
        </div>

        {/* Service Hours */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">
            Service Hours
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <li
                key={day}
                className="flex justify-between border-b border-gray-700 pb-1"
              >
                <span>{day}</span>
                <span>8:00 - 20:30</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* City Wise Links */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <h3 className="text-white text-lg font-semibold mb-6">
          City Wise Links:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
          {Array(3)
            .fill([
              "Packers and Movers in Erode",
              "Packers and Movers in Tirupur",
              "Packers and Movers in Gobichettipalayam",
              "Packers and Movers in Salem",
              "Packers and Movers in Coimbatore",
              "Packers and Movers in Namakkal",
              "Packers and Movers in Bhavani",
            ])
            .map((col, i) => (
              <ul key={i} className="space-y-2">
                {col.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ChevronRight size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-14 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-400">
          <p>©2023 Hi-Safe Packers & Movers. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
