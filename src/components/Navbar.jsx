// import { Menu, X, Phone, Mail } from "lucide-react";
// import { useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import logo from '../assets/logo.png'

// export default function Navbar() {
//   const [open, setOpen] = useState(false);


//   const menuItems = [
//   { name: "Home", path: "/" },
//   { name: "Branches", path: "/branches" },
//   { name: "Services", path: "/services" },
//   { name: "About Us", path: "/about" },
//   { name: "Blogs", path: "/blogs" },
//   { name: "Our Works", path: "/works" },
//   { name: "Contact Us", path: "/contact" },
// ];


//   return (
//     <header className="w-full font-sans">

//         <div className="h-0.5 bg-orange-500 w-full" >

//         </div>

//       {/* ================= TOP ORANGE BAR ================= */}
//       <div
//         className="bg-orange-500 text-white text-sm ml-auto w-full  md:w-[70%] clip-md "

//       >
//         <div className="max-w-7xl mx-auto px-4 py-2 flex justify-center gap-1 lg:gap-8 text-sm font-semibold flex-wrap " >
//           <span>GSTIN - 33AAPFH0887B1ZG</span>
//           <span className="mx-5" >COMPANY PAN - AAPFH0887B</span>
//           <span>MSME - TN-14-0028967</span>
//         </div>
//       </div>

//       {/* ================= LOGO + CONTACT ================= */}
//       <div className="bg-white relative z-10">
//         <div
//           className="max-w-full mx-auto flex flex-col  md:flex-row items-center justify-around "
//           style={{
//             // clipPath: "polygon(0 0, 92% 0, 100% 100%, 0% 100%)",
//           }}
//         >
//           {/* LOGO */}
//           <div className="flex items-center   justify-between  my-3 md:my-0">
//             <img
//               src={logo}
//               alt="Hi-Safe Packers"
//               className= "h-20 lg:h-30 w-full object-cover "
//             />
//           </div>

//           {/* CONTACT */}
//           <div className="flex flex-col  text-center md:flex-row  items-center gap-2  md:gap-10">
//             <div className="flex items-center gap-3">
//               <Phone className="text-red-600" />
//               <div>
//                 <p className="text-sm font-semibold hidden md:block">Call Us</p>
//                 <p className="font-bold">+91 96550 99911</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <Mail className="text-red-600" />
//               <div>
//                 <p className="text-sm font-semibold hidden md:block">Send us mail</p>
//                 <p className="font-bold">
//                   info@hisafepackersandmovers.com
//                 </p>
//               </div>
//             </div>
//           </div>



//         </div>

//                   {/* MOBILE MENU ICON */}
//           <div className="flex items-center justify-between px-4 py-3 bg-amber-100 shadow-sm w-full mt-2 lg:hidden">
//   {/* Logo / Title */}
//   <div className="text-lg font-semibold text-amber-900">
//     Menu
//   </div>

//   {/* Mobile Menu Button */}
//   <button
//     className="lg:hidden p-2 rounded-lg hover:bg-amber-200 transition"
//     onClick={() => setOpen(!open)}
//   >
//     {open ? <X size={24} /> : <Menu size={24} />}
//   </button>
// </div>
//       </div>

//       {/* ================= PURPLE MENU BAR ================= */}
//       <nav
//         className="bg-primary text-white text-sm ml-auto w-full  lg:w-[70%] clip-md2 "
//         style={{
//         //   clipPath: "polygon(3% 0, 100% 0, 100% 100%, 0% 100%)",
//         }}
//       >
//         <div className="max-w-7xl mx-auto px-4 pl-15">

// <ul className="hidden lg:flex gap-10 py-4 font-semibold">
//   {menuItems.map((item, i) => (
//     <li key={i}>
//       <NavLink
//         to={item.path}
//         className={({ isActive }) =>
//           `cursor-pointer transition ${
//             isActive
//               ? "text-yellow-400"
//               : "text-white hover:text-orange-400"
//           }`
//         }
//       >
//         {item.name}
//       </NavLink>
//     </li>
//   ))}
// </ul>

//           {/* <ul className="hidden md:flex gap-10 py-4 font-semibold">
//             {[
//               "Home",
//               "About Us",
//               "Services",
//               "Bill for Claim",
//               "Branches",
//               "Blogs",
//               "Our Works",
//               "Contact Us",
//             ].map((item, i) => (
//               <li
//                 key={i}
//                 className={`cursor-pointer transition ${
//                   item === "Home"
//                     ? "text-orange-400"
//                     : "hover:text-orange-400"
//                 }`}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul> */}
//         </div>

//         {/* MOBILE MENU */}
// <div
//   className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out
//     ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
//   `}
// >
//   <div className="bg-white shadow-lg rounded-b-2xl border-t border-amber-200 mt-2">
//     <ul className="flex flex-col divide-y divide-amber-100">
//    {menuItems.map((item) => (
//   <li key={item.path}>
//     <NavLink
//       to={item.path}
//       onClick={() => setOpen(false)} // close menu on click
//       className={({ isActive }) =>
//         `block px-6 py-4 font-medium transition-all duration-200
//          ${
//            isActive
//              ? "text-amber-600 bg-amber-50"
//              : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
//          }`
//       }
//     >
//       {item.name}
//     </NavLink>
//   </li>
// ))}
//     </ul>
//   </div>
// </div>


//       </nav>
//          <div className="h-0.5 bg-primary w-full" >

//         </div>

//         <Outlet />
//     </header>
//   );
// }



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

useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if(currentScrollY <= 50){
      setControlTopBar(false);
      
    }

    if (currentScrollY > lastScrollY && currentScrollY > 50 ) {
      // scrolling DOWN
      setShowTopBar(false);
    } else {
      // scrolling UP
      setShowTopBar(true);
    }

    setLastScrollY(currentScrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Branches", path: "/branches" }, 
    { name: "Services", path: "/services", 
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
    { name: "About Us", path: "/about" },
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
  <div className={`${showTopBar   ? "" : "bg-white"} duration-500 flex justify-between items-center px-10 py-2`}>
    
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
              ? "text-white hover:text-orange-400"
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
