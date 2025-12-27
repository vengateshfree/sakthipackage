import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import Car from './components/Car'
import Footer from './components/Footer'
import Home from './components/home/Home'
import Branches from './components/branches/Branches'
import ContactPage from './components/contact/ContactPage'
import OurWorks from './components/works/OurWorks'
import Service from './components/home/Service'
import ServicePage from './components/services/ServicePage'
import CarPage from './components/services/CarPage'
import Bikepage from './components/services/BikePage'
import HomePage from './components/services/HomePage'
import OfficePage from './components/services/OfficePage'
import PackagePage from './components/services/PackagePage'
import RelocationPage from './components/services/RelocationPage'
import WarHousePage from './components/services/WarHousePage'
import LoadingPage from './components/services/LoadingPage'
import CompanyBlog from './components/blog/CompanyBlog'
import ScrollToTop from './ScrollToTop'
import VisionPage from './components/about/VisionPage'
import ProfilePage from './components/about/ProfilePage'
import HowItWorkPage from './components/about/HowItWorkPage'

function App() {
  return (

    <BrowserRouter>
      {/* <Navbar /> */}
      {/* <Outlet /> */}

      {/* <div className="" >
                   <Navbar />
                </div> */}
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Navbar />} >
          <Route index element={<Home />} />
          <Route path="/branches" element={<Branches />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/works" element={<OurWorks />} />

          <Route path="/blogs" element={<CompanyBlog />} />
          <Route path="/about" element={<ServicePage />} />

            <Route path="/vision" element={<VisionPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/howitwork" element={<HowItWorkPage />} />
          <Route path="/services" element={<ServicePage />}>

            <Route path="car" element={<CarPage />} />
            <Route path="bike" element={<Bikepage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="office" element={<OfficePage />} />
            <Route path="package" element={<PackagePage />} />
            <Route path="location" element={<RelocationPage />} />
            <Route path="warhouse" element={<WarHousePage />} />
            <Route path="loading" element={<LoadingPage />} />
          </Route>




        </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
    // <div className='underline'>
    //       <section className="relative w-full h-screen overflow-hidden">
    //   <div className="flex h-full">

    //     {/* LEFT SECTION */}
    //     <div className="relative w-1/2 flex items-center">
    //       {/* Background Image */}
    //       <div
    //         className="absolute inset-0 bg-cover bg-center"
    //         style={{
    //           backgroundImage:
    //             "url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7')",
    //         }}
    //       />

    //       {/* Overlay */}
    //       <div className="absolute inset-0 bg-purple-800/80" />

    //       {/* Content */}
    //       <div className="relative z-10 px-16 text-white">
    //         <p className="text-lg mb-2">Great Moving</p>
    //         <h1 className="text-6xl font-bold mb-6">Company</h1>

    //         <p className="mb-10 text-lg">
    //           If you have any Move need, simply call our 24 hour
    //         </p>

    //         <p className="text-xl mb-2">Emergency Number</p>
    //         <h2 className="text-4xl font-bold mb-6">+91 96550 99911</h2>

    //         <p className="mb-6">OR</p>

    //         <button className="bg-orange-500 hover:bg-orange-600 transition px-10 py-4 rounded-full font-semibold">
    //           CONTACT US
    //         </button>
    //       </div>
    //     </div>

    //     {/* RIGHT SECTION */}
    //     <div className="relative w-1/2 bg-orange-500 flex items-center">
    //       {/* Diagonal Shape */}
    //       <div className="absolute left-0 top-0 h-full w-32 bg-purple-800 transform -skew-x-12 origin-top-left" />

    //       <div className="relative z-10 px-20 text-white">
    //         <h2 className="text-5xl font-bold mb-6">About Company</h2>

    //         <p className="mb-8 text-lg">
    //           Hi-safe Packers & Movers are provide fast, cost-effective
    //           moving & providing services.
    //         </p>

    //         <ul className="space-y-4 text-lg">
    //           {[
    //             "Bike & Car Transportation",
    //             "Loading & Unloading",
    //             "Warehouse Services",
    //             "Insurance Services",
    //             "All Shifting Services",
    //           ].map((item, i) => (
    //             <li key={i} className="flex items-center gap-3">
    //               <span className="text-2xl">›</span>
    //               {item}
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Floating Call Button */}
    //   <button className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-5 rounded-full shadow-lg">
    //     📞
    //   </button>
    // </section>
    //   </div>
  )
}

export default App