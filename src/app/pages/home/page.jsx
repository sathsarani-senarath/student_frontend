'use client';


import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUserGraduate, FaChartLine, FaArrowRight } from 'react-icons/fa';
import MainLayout from '@/components/Layouts/MainLayout';

const Home = () => {
  useEffect(() => {
    const scrollAnimations = () => {
      const elements = document.querySelectorAll('.scroll-animate');
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
          element.classList.add('animate-fade-up');
        }
      });
    };

    window.addEventListener('scroll', scrollAnimations);
    return () => window.removeEventListener('scroll', scrollAnimations);
  }, []);

  return (
    <MainLayout>
      {/* Hero Section */}
      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-200 overflow-hidden">
        {/* Left Side: Image with animation */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-80 md:h-screen relative"
        >
          <img
            src="https://www.schoolcues.com/blog/wp-content/uploads/2021/11/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Untitled-49.png"
            alt="Students"
            className="object-cover w-full h-full"

            sizes="(max-width: 768px) 500vw, 50vw"
          />
          <div className="absolute inset-0 bg-blue-900 opacity-10 rounded-lg"></div>
        </motion.div>

        {/* Right Side: Text with animation */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 md:p-20"
        >
          <div className="text-center max-w-xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-blue-900 mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">Sahana Education Center</span>
            </h1>
            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8">
              Our comprehensive platform simplifies school management, enhances learning experiences, 
              and connects educators with students seamlessly.
            </p>
            
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-16"
          >
            Why Choose Sahana?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <FaChalkboardTeacher className="text-4xl text-sky-500" />,
                title: "Expert Educators",
                description: "Our certified teachers provide personalized attention to each student.",
                color: "bg-sky-50"
              },
              {
                icon: <FaUserGraduate className="text-4xl text-blue-500" />,
                title: "Student Success",
                description: "Proven track record of student achievements and growth.",
                color: "bg-blue-50"
              },
              {
                icon: <FaChartLine className="text-4xl text-indigo-500" />,
                title: "Progress Tracking",
                description: "Comprehensive analytics to monitor and enhance learning outcomes.",
                color: "bg-indigo-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.color} p-8 rounded-2xl shadow-md hover:shadow-lg transition-all scroll-animate`}
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-center text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Educational Experience?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of educators and students who are already benefiting from our platform.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto "
             
            >
              <Link  href="pages/register">
              Register Now  <FaArrowRight /></Link>
            </motion.button>
          </motion.div>
          
        </div>
        
      </div>
    </MainLayout>
  );
};

export default Home;

