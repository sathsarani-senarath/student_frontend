'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import MainLayout from '@/components/Layouts/MainLayout';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <MainLayout>
      <div className="relative min-h-screen font-sans text-gray-800 bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200">
        {/* Hero Section - Updated with darker colors and more prominent design */}
        <div className="relative py-32 bg-gradient-to-r from-blue-300 to-indigo-400 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.3)_0,_transparent_70%)]"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Get In Touch
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-1.5 bg-yellow-400 mx-auto mb-8"
            ></motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl font-bold text-white  max-w-3xl mx-auto leading-relaxed"
            >
              We're here to answer your questions and welcome your feedback. Reach out to us through any of these channels.
            </motion.p>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-6 py-16 md:px-20">
          {/* Grid Content */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* About Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-50"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-blue-800">SAHANA EDUCATION</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6">
                From classrooms to technology, we ensure the best for our students. Safety, discipline, and learning are our core. We are diverse, welcoming, and committed to excellence.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Opening Hours</h3>
                <div className="flex items-center text-gray-700 mb-2">
                  <FaClock className="text-blue-700 mr-3" />
                  <span>Monday - Friday: 8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <FaClock className="text-blue-700 mr-3" />
                  <span>Saturday: 9:00 AM - 1:00 PM</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-blue-50"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-blue-800">Contact Details</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-700 p-2 rounded-full mr-4 mt-1">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">Address</h4>
                    <p className="text-gray-700">No. 08, Sahana Place, Nugegoda, Sri Lanka</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-700 p-2 rounded-full mr-4 mt-1">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">Email</h4>
                    <p className="text-gray-700">sahanaeducation@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-700 p-2 rounded-full mr-4 mt-1">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-blue-800">Phone</h4>
                    <p className="text-gray-700">011 768 5200 - Hotline</p>
                  </div>
                </li>
              </ul>
              
            </motion.div>
          </div>

          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">Our Location</h2>
            <div className="bg-white p-4 rounded-xl shadow-xl border border-blue-50">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.92523465738!2d79.8892143153264!3d6.822295595078316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25a3a7a3a3a3d%3A0x3a3a3a3a3a3a3a3d!2sSahana%20Place%2C%20Nugegoda!5e0!3m2!1sen!2slk!4v1620000000000!5m2!1sen!2slk" 
                  width="100%" 
                  height="450" 
                  style={{border:0}} 
                  allowFullScreen="" 
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-blue-800 mb-8 text-center">What Our Community Says</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  initials: "JD",
                  name: "John Doe",
                  role: "Current Student",
                  quote: "The facilities at Sahana Education are top-notch. The teachers are very supportive and the environment is perfect for learning."
                },
                {
                  initials: "AS",
                  name: "Alice Smith",
                  role: "Alumni",
                  quote: "I graduated from Sahana Education and I can confidently say it prepared me well for university. The staff truly cares about students' success."
                },
                {
                  initials: "RJ",
                  name: "Robert Johnson",
                  role: "Parent",
                  quote: "As a parent, I appreciate the regular communication and the safe, nurturing environment Sahana Education provides for my child."
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-blue-50"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-800">{testimonial.name}</h4>
                      <p className="text-blue-700 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact; 