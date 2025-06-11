/*'use client';

import React, { useState, useEffect } from 'react';
import MainLayout from "@/components/Layouts/MainLayout";
import axios from "axios";
import { useRouter } from "next/navigation";
import BASE_URL from '@/API/config';

const Payment = () => {
  const router = useRouter();
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    subject: '',
    amount: '',
    paymentMethod: 'Card',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      router.push('/login');
    } else {
      setAuthenticated(true);
    }
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await axios.post(`${BASE_URL}/payment`, formData);
      if (response.status === 200 || response.status === 201) {
        setSubmitted(true);
        setSuccessMessage('Payment successful!');
      } else {
        setErrorMessage('Unexpected response from server.');
      }
    } catch (error) {
      console.error('Payment submission failed:', error.response?.data || error.message);
      setErrorMessage(error.response?.data?.message || 'Payment failed. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <MainLayout>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
        <div className="bg-white p-8 rounded-3xl shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Student Payment</h2>
          {errorMessage && (
            <div className="text-red-500 text-center mb-4">{errorMessage}</div>
          )}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}
                placeholder="Student Name"
                className="w-full p-3 border-2 border-purple-200 rounded-xl"
              />

              <select
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-xl"
              >
                <option value="">Select Grade</option>
                {[6, 7, 8, 9, 10, 11].map((g) => (
                  <option key={g} value={`Grade ${g}`}>Grade {g}</option>
                ))}
              </select>

              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-xl"
              >
                <option value="">Select Subject</option>
                <option value="Maths">Maths</option>
                <option value="Science">Science</option>
                <option value="English">English</option>
              </select>

              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount (LKR)"
                className="w-full p-3 border-2 border-purple-200 rounded-xl"
              />

              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="w-full p-3 border-2 border-purple-200 rounded-xl"
              >
                <option value="Card">Card Payment</option>
              </select>

              {formData.paymentMethod === 'Card' && (
                <>
                  <input
                    type="text"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder="Card Number"
                    className="w-full p-3 border-2 border-purple-200 rounded-xl"
                  />

                  <div className="flex gap-4">
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full p-3 border-2 border-purple-200 rounded-xl"
                    />
                    <input
                      type="text"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder="CVV"
                      className="w-full p-3 border-2 border-purple-200 rounded-xl"
                    />
                  </div>
                </>
              )}

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition"
              >
                Make Payment
              </button>
            </form>
          ) : (
            <div className="text-center text-green-600">
              <h3 className="text-2xl font-bold mb-2">{successMessage}</h3>
              <p>Thank you, <strong>{formData.studentName}</strong></p>
              <p>Subject: <strong>{formData.subject}</strong></p>
              <p>Grade: <strong>{formData.grade}</strong></p>
              <p>Amount: <strong>LKR {formData.amount}</strong></p>
              <p>Payment Method: <strong>{formData.paymentMethod}</strong></p>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    studentName: '',
                    grade: '',
                    subject: '',
                    amount: '',
                    paymentMethod: 'Card',
                    cardNumber: '',
                    expiry: '',
                    cvv: '',
                  });
                  setSuccessMessage('');
                }}
                className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-4 py-2 rounded-xl"
              >
                Make Another Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Payment;*/
'use client';
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import MainLayout from '@/components/Layouts/MainLayout'



const schedule = {
  Monday: [
    { grade: 6, subject: 'English', time: '3PM - 5PM' },
    { grade: 6, subject: 'Maths', time: '5PM - 7PM' },
    { grade: 7, subject: 'Science', time: '3PM - 5PM' },
  ],
  Tuesday: [
    { grade: 6, subject: 'Science', time: '3PM - 5PM' },
    { grade: 7, subject: 'English', time: '5PM - 7PM' },
    { grade: 7, subject: 'Maths', time: '3PM - 5PM' },
  ],
  Wednesday: [
    { grade: 8, subject: 'Science', time: '3PM - 5PM' },
    { grade: 8, subject: 'English', time: '5PM - 7PM' },
    { grade: 9, subject: 'Maths', time: '3PM - 5PM' },
  ],
  Thursday: [
    { grade: 9, subject: 'Science', time: '3PM - 5PM' },
    { grade: 9, subject: 'English', time: '5PM - 7PM' },
    { grade: 8, subject: 'Maths', time: '3PM - 5PM' },
  ],
  Friday: [
    { grade: 10, subject: 'Science', time: '3PM - 5PM' },
    { grade: 10, subject: 'Maths', time: '5PM - 7PM' },
    { grade: 11, subject: 'Maths', time: '3PM - 5PM' },
  ],
  Saturday: [
    { grade: 11, subject: 'Science', time: '8AM - 10AM' },
    { grade: 11, subject: 'English', time: '10AM - 12PM' },
    { grade: 10, subject: 'English', time: '8AM - 10AM' },
  ]
};

// Function to organize schedule by grade
const organizeByGrade = (schedule) => {
  const grades = {};
  
  // Iterate through each day
  Object.keys(schedule).forEach(day => {
    // Iterate through each class of the day
    schedule[day].forEach(classItem => {
      const { grade, subject, time } = classItem;
      
      // Initialize grade if not exists
      if (!grades[grade]) {
        grades[grade] = [];
      }
      
      // Add class to grade with day information
      grades[grade].push({
        day,
        subject,
        time
      });
    });
  });
  
  return grades;
};

const ClassSchedule = () => {
  const gradeWiseSchedule = organizeByGrade(schedule);
  const gradeColors = {
    6: 'from-blue-400 to-blue-600',
    7: 'from-green-400 to-green-600',
    8: 'from-purple-400 to-purple-600',
    9: 'from-yellow-400 to-yellow-600',
    10: 'from-red-400 to-red-600',
    11: 'from-indigo-400 to-indigo-600'
  };

  const subjectColors = {
    'English': 'bg-blue-100 text-blue-800',
    'Maths': 'bg-green-100 text-green-800',
    'Science': 'bg-purple-100 text-purple-800'
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-tr from-blue-50 to-purple-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Grade-wise Class Schedule
          </h1>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            View your classes organized by grade level with day and time information
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(gradeWiseSchedule)
              .sort((a, b) => parseInt(a) - parseInt(b))
              .map((grade) => (
                <div 
                  key={grade} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
                >
                  <div className={`bg-gradient-to-r ${gradeColors[grade]} py-4 px-6`}>
                    <h2 className="text-2xl font-bold text-white">Grade {grade}</h2>
                  </div>
                  
                  <div className="p-6">
                    <ul className="space-y-4">
                      {gradeWiseSchedule[grade].map((item, index) => (
                        <li key={index} className="flex flex-col">
                          <div className="flex justify-between items-center mb-1">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${subjectColors[item.subject]}`}>
                              {item.subject}
                            </span>
                            <span className="text-sm font-medium text-gray-500">
                              {item.time}
                            </span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm font-medium">{item.day}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-500">
                        Total classes: {gradeWiseSchedule[grade].length} per week
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          
          <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Subject Legend</h3>
            <div className="flex flex-wrap gap-3">
              {Object.keys(subjectColors).map(subject => (
                <span 
                  key={subject} 
                  className={`px-4 py-2 rounded-lg ${subjectColors[subject]} font-medium`}
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ClassSchedule;