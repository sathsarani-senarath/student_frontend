import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import ClassSchedule from './pages/ClassSchedule';
//import Payment from './pages/Payment';//
import Contact from './pages/Contact';
import Signin from '/pages/Signin'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <Navbar />
        <Link>
          <Link href="/" element={<Home />} />
          <Link href="/teachers" element={<Teachers />} />
          <Link href="/class-schedule" element={<ClassSchedule />} />
          <Link href="/contact" element={<Contact />} />
          <Link href="/signin" element={<Signin />}/>
        </Link>
      </div>

  );
}

export default App;