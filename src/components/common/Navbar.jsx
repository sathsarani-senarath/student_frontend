import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white font-semibold">
        <div className="text-2xl font-bold">SAHANA</div>
        <div className="space-x-6 text-lg flex">
          <Link href="/pages/home" className="hover:text-yellow-200 transition">Home</Link>
          <Link href="/pages/Teacher" className="hover:text-yellow-200 transition">Teachers</Link>
          <Link href="/pages/ClassSchedule" className="hover:text-yellow-200 transition">Class Schedule</Link>
          <Link href="/pages/contactus" className="hover:text-yellow-200 transition">Contact Us</Link>
          {/*<Link href="/pages/payment" className="hover:text-yellow-200 transition">Payment</Link>*/}
          <Link href="/pages/signin" className="hover:text-yellow-200 transition">Signin</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



