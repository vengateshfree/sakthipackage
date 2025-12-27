import React from 'react';

export default function CompanyBlog() {
  const blogPosts = [
    {
      id: 1,
      date: '24',
      month: 'SEP',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      title: 'The advantages of a digital supply strategy',
      author: 'ADMIN',
      comments: 13
    },
    {
      id: 2,
      date: '21',
      month: 'SEP',
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
      title: 'How will you know success when it show up?',
      author: 'ADMIN',
      comments: 8
    },
    {
      id: 3,
      date: '17',
      month: 'SEP',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
      title: 'We carefully handle the valueable goods',
      author: 'ADMIN',
      comments: 1
    }
  ];

  return (
    <div className="bg-gray-50 mt-10 ">
                  <div
  className="relative bg-cover bg-center h-[400px] flex  text-center items-center"
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
   BLOG & POST
    </h1>
    <p className="mt-3 text-gray-200 max-w-2xl h3">
        Company recent news
    </p>
  </div>
</div>
      <div className="max-w-7xl mx-auto mt-10">
        {/* Header */}
      
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                {/* Date Badge */}
                <div className="absolute bottom-4 right-4 bg-orange-500 text-white rounded-lg p-3 text-center shadow-lg">
                  <div className="text-3xl font-bold leading-none">{post.date}</div>
                  <div className="text-xs font-semibold mt-1">{post.month}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta Info */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="font-semibold text-gray-700">{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.comments < 10 ? '0' : ''}{post.comments} Comments</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 hover:text-orange-500 transition-colors cursor-pointer">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Badge */}
      <div className="fixed bottom-8 right-8 bg-gray-900 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-orange-500 transition-colors cursor-pointer">
        <span className="text-sm font-bold">12%</span>
      </div>
    </div>
  );
}