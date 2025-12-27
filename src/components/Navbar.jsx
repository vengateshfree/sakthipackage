



import { Menu, X, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Navbar() {
  
  const [open, setOpen] = useState(false);
const [openService, setOpenService] = useState(false);





  const [controlTopBar, setControlTopBar] = useState(true);
  const [showTopBar, setShowTopBar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

console.log("showTopBar:", controlTopBar, showTopBar);

useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // CONTROL TOP BAR (only depends on position)
    if (currentScrollY < 50) {
      setControlTopBar(false);
    } else {
      setControlTopBar(true);
    }

    // SHOW / HIDE BASED ON SCROLL DIRECTION
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      // scrolling DOWN
      setShowTopBar(false);
    } else {
      // scrolling UP
      setShowTopBar(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Branches", path: "/branches" }, 
    { name: "Services", path: "/services/bike", 
       child: [{
        name: "Bike Transport", path: "/services//bike",
      },
      {
        name: "Car Transport", path: "/services/car",
      },
      {
        name: "Home Shifting", path: "/services/home",
      },
      {
        name: "Office Shifting", path: "/services/office",
      },
      {
        name: "Package Moving", path: "/services/package",
      },   
         {
        name: "Relocation Service", path: "/services/location",
      },  
           {
        name: "Warhouse Service", path: "/services/warhouse",
      },   
          {
        name: "Loading & Unloading", path: "/services/loading",
      },   
      

    ] },
       { name: "About us", path: "/vision", 
       child: [{
        name: "Vision & Mission", path: "/vision",
      },
      {
        name: "Profile", path: "/profile",
      },
      {
        name: "How It Works", path: "/howitwork",
      },
     
      

    ] },
  { name: "Blogs", path: "/blogs" },
    { name: "Our Works", path: "/works" },
    { name: "Contact Us", path: "/contact" },
  ];


  return (
    <header  className=" z-50 ">

   <div
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
    ${showTopBar ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
  `}
>
  <div className="flex items-center flex-col sm:flex-row md:justify-end gap-2 sm:gap-10 pr-10 py-2 bg-primary">
    
    <div className="flex items-center gap-3">
      <Phone className="text-white" />
      <p className="font-bold text-white">+91 96550 99911</p>
    </div>

    <div className="flex items-center gap-3">
      <Mail className="text-white" />
      <p className="font-bold text-white">
        info@hisafepackersandmovers.com
      </p>
    </div>

  </div>
</div>

    <div
  className={`hidden lg:block fixed w-full z-40 transition-all duration-500
    ${showTopBar ? "top-10" : "top-0"}
    backdrop-blur-sm bg-white/10
  `} 
>

  {/* target */}
  <div className={`${showTopBar ? controlTopBar ? "bg-white" : "" : "bg-white"} duration-500 flex justify-between items-center px-10 py-2`}>
    
    <img
      src={logo}
      alt="Hi-Safe Packers"
      className="h-16 object-cover"
    />

 <ul className="hidden lg:flex gap-10 font-semibold">
  {menuItems.map((item, i) => (
    <li key={i} className="relative group">
      {/* Main Menu Link */}
      <NavLink
        to={item.path}
        className={({ isActive }) =>
    `transition flex items-center gap-1 ${
      isActive
        ? "text-yellow-400"
        : showTopBar
        ? controlTopBar
          ? "text-gray-600 hover:text-orange-400"
          : "text-white hover:text-orange-400"
        : "text-gray-600 hover:text-orange-400"
    }`
  }
      >
        {item.name}

        {/* Dropdown Arrow */}
        {item.child && (
          <svg
            className="w-4 h-4 mt-1 transition-transform group-hover:rotate-180"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </NavLink>

      {/* ===== DROPDOWN ===== */}
      {item.child && (
        <ul className="absolute left-0 top-full mt-4 w-56 bg-white shadow-xl rounded-xl 
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                       translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">

          {item.child.map((sub, idx) => (
            <li key={idx}>
              <NavLink
                to={sub.path}
                className="block px-5 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition rounded-xl"
              >
                {sub.name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </li>
  ))}
</ul>


    <div className="bg-primary py-2 px-5 text-white font-semibold rounded-md">
      Get Started
    </div>

  </div>
</div>



      {/* ================= LOGO + CONTACT ================= */}

      <div className="bg-colo relative z-10">
      

        {/* MOBILE MENU ICON */}
        <div className="lg:hidden">
            <div
  className={`block lg:hidden fixed w-full z-40 transition-all duration-500
    ${showTopBar ? "top-0" : "-top-10"}
    backdrop-blur-sm bg-white/10
  `}
>
          <div className="flex items-center justify-between px-4 py-3  shadow-sm w-full mt-10 ">
            {/* Logo / Title */}
            <div className=" ">
              <img
                src={logo}
                alt="Hi-Safe Packers"
                className="h-20 lg:h-20 w-full object-cover "
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-amber-200 transition"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          </div>
        </div>
          <nav
        className={`${ showTopBar ? "top-35" : "top-25" } transition-all duration-500    bg-primary text-white text-sm ml-auto w-full  lg:w-[70%] clip-md2 fixed  z-50`}
        style={{
        }}
      >


        {/* MOBILE MENU */}
     <div
  className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
    ${open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <div className="bg-white shadow-lg rounded-b-2xl border-t border-amber-200 mt-1">
    <ul className="flex flex-col divide-y divide-amber-100">

      {menuItems.map((item) => (
        <li key={item.name}>
          {/* ===== MENU WITHOUT CHILD ===== */}
          {!item.child && (
            <NavLink
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 font-medium transition-all
                ${
                  isActive
                    ? "text-amber-600 bg-amber-50"
                    : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          )}

          {/* ===== MENU WITH CHILD (SERVICES) ===== */}
          {item.child && (
            <>
              <button
                onClick={() => setOpenService(!openService)}
                className="w-full flex justify-between items-center px-6 py-4 font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
              >
                {item.name}
                <span
                  className={`transform transition-transform duration-300 ${
                    openService ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* ===== SUB MENU ===== */}
              <div
                className={`overflow-hidden transition-all duration-300
                ${openService ? "max-h-96" : "max-h-0"}
              `}
              >
                <ul className="bg-amber-50">
                  {item.child.map((child) => (
                    <li key={child.path}>
                      <NavLink
                        to={child.path}
                        onClick={() => {
                          setOpen(false);
                          setOpenService(false);
                        }}
                        className="block px-10 py-3 text-sm text-gray-700 hover:text-amber-600 hover:bg-amber-100 transition"
                      >
                        {child.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>



      </nav>
      </div>

      {/* ================= PURPLE MENU BAR ================= */}
    
      <div className="h-0.5 bg-primary w-full" >

      </div>

      <Outlet />
    </header>
  );
}
