import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import CustomSelect from './CustomSelect';
import parcel10 from '../../assets/parcel10.jpg'
 

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'SEO Services',
    'Cloud Solutions',
    'Other'
  ];

  const locations = [
    'Salem, Tamil Nadu',
    'Chennai, Tamil Nadu',
    'Coimbatore, Tamil Nadu',
    'Bangalore, Karnataka',
    'Mumbai, Maharashtra',
    'Other'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.service && formData.location && formData.message) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          phone: '',
          service: '',
          location: '',
          message: ''
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 mt-10">
      {/* Header */}
    <div
  className="relative bg-cover bg-center h-[400px] flex  text-center items-center"
  style={{
    backgroundImage: `url(${parcel10})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h1 className="h1 font-bold text-white">
      Get In Touch
    </h1>
 
  </div>
</div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className=" bg-gradient-to-b  rounded-lg from-primary via-secondary to-primary  backdrop-blur-3xl text-white shadow-xl">
            
             <div className='backdrop-blur-3xl p-8 rounded-md' >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <p className="text-blue-100 mb-8">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-blue-100">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-blue-100">contact@company.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-blue-100">123 Business Street<br />Salem, Tamil Nadu 636001</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t-2 border-primary text-center h5 font-bold">
                <div>
                    Your Service is our first priority
                </div>
                {/* <div className="flex space-x-4">
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
                    <span className="text-sm font-bold">f</span>
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
                    <span className="text-sm font-bold">𝕏</span>
                  </div>
                  <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition cursor-pointer">
                    <span className="text-sm font-bold">in</span>
                  </div>
                </div> */}
              </div>
            </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you soon.</p>
                </div>
              ) : (
                <div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="
                            w-full flex items-center justify-between
          px-4 py-3
          border border-gray-300
          rounded-xl
          bg-white
          text-gray-700
          shadow-sm
          hover:border-red-500
          focus:outline-none focus:ring-2 focus:ring-red-500
          transition "
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                         className="
                            w-full flex items-center justify-between
          px-4 py-3
          border border-gray-300
          rounded-xl
          bg-white
          text-gray-700
          shadow-sm
          hover:border-red-500
          focus:outline-none focus:ring-2 focus:ring-red-500
          transition "
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Required *
                      </label>

                      <CustomSelect services={services} formData={formData} setFormData={setFormData} thisOne="service" />
                        
                    </div>

                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Location *
                      </label>
                           <CustomSelect services={locations} formData={formData} setFormData={setFormData} thisOne="location" />
                        
                      {/* <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="">Select your location</option>
                        {locations.map((location) => (
                          <option key={location} value={location}>
                            {location}
                          </option>
                        ))}
                      </select> */}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mt-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                     className="
                            w-full flex items-center justify-between
          px-4 py-3
          border border-gray-300
          rounded-xl
          bg-white
          text-gray-700
          shadow-sm
          hover:border-red-500
          focus:outline-none focus:ring-2 focus:ring-red-500
          transition "
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="mt-8">
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-gradient-to-r bg-primary/90 hover:bg-primary text-white font-semibold py-4 px-6 rounded-lg  transition duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>


                <iframe
  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125042.34611180524!2d78.0558950787394!3d11.653723377452316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52cba0b%3A0xee9989007068ca47!2sSalem%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1766763614830!5m2!1sen!2sin`}
  width="100%"
  height="350"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>
  );
}