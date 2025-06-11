'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/common/Navbar';
import MainLayout from '@/components/Layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
     {/*<div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/book-day-with-group-younf-childre_23-2148445696.jpg?semt=ais_hybrid&w=740')"
        }}
      >*/}
        {/* Centered Content */}
        {/*<div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md p-12 rounded-2xl shadow-2xl text-center max-w-2xl animate-fadeIn">
          <h1 className="text-5xl font-extrabold text-blue-700 mb-4 drop-shadow-md">
            Welcome to <br /> Sahana Education Center
          </h1>
          <p className="text-lg text-gray-800 font-medium mb-6">
            Effortlessly manage classes, schedules, payments, and more!
          </p>
        </div>
      </div>*/}

      <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-sky-100 to-blue-200">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-80 md:h-screen">
          <img
            src="https://www.schoolcues.com/blog/wp-content/uploads/2021/11/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Untitled-49.png"
            alt="Students"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side: Text / Introduction */}
        <div className="w-full md:w-1/2 flex items-center justify-center px-6 py-10 md:p-20 bg-white bg-opacity-70">
          <div className="text-center max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6 animate-fade-in">
              Welcome to <br />
              <span className="text-sky-600">Sahana Education Center</span>
            </h1>
            <p className="text-lg text-gray-700 font-medium leading-relaxed">
              Effortlessly manage classes, schedules, payments, and more! <br />
              Join us in shaping the future of education through streamlined
              management and student-centered tools.
            </p>
          </div>
        </div>
      </div>
  
  </MainLayout>

  );
};

export default Home;