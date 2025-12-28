



import { Menu, X, Phone, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../assets/logo.png'

export default function Navbar() {
  
  const [open, setOpen] = useState(false);
const [openService, setOpenService] = useState(false);


const [openMenu, setOpenMenu] = useState(null); 



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
    <header  className=" z-50 isolate   ">

   <div
  className={`fixed top-0 left-0 w-full z-50 isolate   transition-all duration-500
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
                       translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50 isolate  ">

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
    ${showTopBar ? "top-7" : "-top-10"}
    backdrop-blur-sm bg-white/10
  `}
>
          <div className="flex items-center justify-between px-4 py-3  shadow-sm w-full mt-10 ">
            {/* Logo / Title */}
            <div className=" ">
              <img
                src={logo}
                alt="Hi-Safe Packers"
                className="h-14 lg:h-20 w-full object-cover "
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
        className={`${ showTopBar ? "top-35" : "top-20" }  z-50 isolate    transition-all duration-500    bg-primary text-white text-sm ml-auto w-full  lg:w-[70%] clip-md2 fixed `}
        style={{
        }}
      >


        {/* MOBILE MENU */}
     <div
  className={`lg:hidden overflow-auto transition-all rounded-lg duration-300 ease-in-out z-50 isolate  
    ${open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}
  `}
>
  <div className="bg-white shadow-lg rounded-b-2xl border-t border-amber-200 mt-1 z-50 isolate  ">
    <ul className="flex flex-col divide-y divide-amber-100 z-50 isolate  ">

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
  onClick={() =>
    setOpenMenu(openMenu === item.name ? null : item.name)
  }
  className="w-full flex justify-between items-center px-6 py-4 font-medium
             text-gray-700 hover:bg-amber-50 hover:text-amber-600 transition"
>
  {item.name}
  <span
    className={`transform transition-transform duration-300 ${
      openMenu === item.name ? "rotate-180" : ""
    }`}
  >
    ▼
  </span>
</button>


              {/* ===== SUB MENU ===== */}
            <div
  className={`overflow-hidden transition-all duration-300
    ${openMenu === item.name ? "max-h-96" : "max-h-0"}
  `}
>
  <ul className="bg-amber-50">
    {item.child.map((child) => (
      <li key={child.path}>
        <NavLink
          to={child.path}
          onClick={() => {
            setOpen(false);
            setOpenMenu(null);
          }}
          className="block px-10 py-3 text-sm text-gray-700
                     hover:text-amber-600 hover:bg-amber-100 transition"
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
    
      <div className="h-0.5 bg-primary w-full " >

      </div>
      <div className="fixed left-5 md:left-10 bottom-5 md:bottom-20 z-50 isolate  " >
<a href="tel:9586343232" className="relative inline-block">
  {/* Ping animation */}
  <div className="absolute inset-0 rounded-full bg-red animate-ping"></div>

  {/* Button */}
  <div className="relative h-12 w-12 rounded-full bg-red flex justify-center items-center cursor-pointer">
    <Phone className="text-white" />
  </div>
</a>


      </div>
       <div className="fixed right-5  md:right-10 bottom-5 md:bottom-20 cursor-pointer  z-50 isolate  " >
   <a
  href="https://wa.me/919586343232"
  target="_blank"
  rel="noopener noreferrer"
  className="relative inline-block"
>
  {/* Ping animation */}
  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping"></div>

  {/* WhatsApp button */}
  <div className="relative h-12 w-12 rounded-full bg-green-400 flex justify-center items-center cursor-pointer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill="white"
        d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
      />
    </svg>
  </div>
</a>

      </div>

      <Outlet />
    </header>
  );
}
