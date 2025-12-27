import React, { useState } from 'react';

const OurWorks = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isAnimating, setIsAnimating] = useState(false);

  const filters = ['All', 'Warehouse', 'Transport', 'Logistic', 'Freight'];

  const portfolioItems = [
    {
      id: 1,
      title: 'Warehouse',
      category: 'Warehouse',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      discount: null
    },
    {
      id: 2,
      title: 'Transport',
      category: 'Transport',
      image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80',
      discount: null
    },
    {
      id: 3,
      title: 'Air',
      category: 'Freight',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      discount: '20%'
    }
  ];

  const filteredItems = activeFilter === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFilterChange = (filter) => {
    if (filter !== activeFilter) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveFilter(filter);
        setTimeout(() => setIsAnimating(false), 50);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>


      <div
        className="relative bg-cover bg-center h-[400px] flex  text-center items-center mt-10"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="h1 font-bold text-white">
            Our portfolio
          </h1>
      
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-12">
          <p className="text-red-500 text-sm font-semibold tracking-wider uppercase mb-3">
            01 _ GALLERY
          </p>
          <h1 className="text-5xl font-bold text-gray-900">
            Our portfolio
          </h1>
        </div> */}

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 mt-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-6 py-3 rounded-md font-semibold text-sm transition-all duration-300 transform hover:scale-105 ${activeFilter === filter
                  ? 'bg-red-500 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'
          }`}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />

                {/* Discount Badge */}
                {item.discount && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                    {item.discount}
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white">
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-red-500 mr-3"></div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWorks;