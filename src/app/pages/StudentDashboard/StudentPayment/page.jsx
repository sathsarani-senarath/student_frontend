'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AdminLayout from '@/components/Layouts/AdminLayout'
import { FiHome, FiUser, FiCreditCard, FiBook, FiCalendar, FiAward } from 'react-icons/fi'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import BASE_URL from '@/API/config'

const StudentDashboard = () => {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const [formData, setFormData] = useState({
    studentName: '',
    grade: '',
    subject: '',
    amount: '',
    paymentMethod: 'Card',
    cardNumber: '',
    expiry: '',
    cvv: '',
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (!user) {
      router.push('/login')
    } else {
      setAuthenticated(true)
    }
  }, [router])

  const validateField = (name, value) => {
    let message = ''

    switch (name) {
      case 'studentName':
        if (value && value.trim().length < 2) message = 'Name must be at least 2 characters.'
        break
      case 'grade':
        if (value && !value.startsWith('Grade')) message = 'Invalid grade.'
        break
      case 'subject':
        if (value && !['Maths', 'Science', 'English'].includes(value)) message = 'Invalid subject.'
        break
      case 'amount':
        if (value && (isNaN(value) || value <= 0)) message = 'Enter a valid amount.'
        break
      case 'cardNumber':
        if (value && !/^\d{16}$/.test(value)) message = 'Card number must be 16 digits.'
        break
      case 'expiry':
        if (value && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) message = 'Use MM/YY format.'
        break
      case 'cvv':
        if (value && !/^\d{3}$/.test(value)) message = 'CVV must be 3 digits.'
        break
      default:
        break
    }

    setErrors(prev => ({ ...prev, [name]: message }))
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))

    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const isFormValid = () => {
    const requiredFields = ['studentName', 'grade', 'subject', 'amount', 'cardNumber', 'expiry', 'cvv']
    let valid = true
    requiredFields.forEach(field => {
      validateField(field, formData[field])
      if (formData[field].trim() === '' || errors[field]) {
        valid = false
      }
    })
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')

    if (!isFormValid()) {
      setErrorMessage('Please correct the errors in the form.')
      return
    }

    try {
      const response = await axios.post(`${BASE_URL}/payment`, formData)
      if (response.status === 200 || response.status === 201) {
        setSubmitted(true)
        setSuccessMessage('Payment successful!')
      } else {
        setErrorMessage('Unexpected response from server.')
      }
    } catch (error) {
      console.error('Payment submission failed:', error.response?.data || error.message)
      setErrorMessage(error.response?.data?.message || 'Payment failed. Please try again.')
    }
  }

  if (!isAuthenticated) return null

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white p-6 space-y-6 rounded-r-3xl shadow-xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <FiUser className="text-xl" />
            </div>
            <h2 className="text-2xl font-bold">Student Panel</h2>
          </div>
          <nav className="space-y-2">
            <div 
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center p-3 rounded-xl transition cursor-pointer ${activeTab === 'dashboard' ? 'bg-indigo-700 text-white shadow-md' : 'hover:bg-indigo-700/50 text-indigo-100'}`}
            >
              <span className="mr-3"><FiHome /></span>
              <span>Dashboard</span>
            </div>
            <div 
              onClick={() => setActiveTab('profile')}
              className={`flex items-center p-3 rounded-xl transition cursor-pointer ${activeTab === 'profile' ? 'bg-indigo-700 text-white shadow-md' : 'hover:bg-indigo-700/50 text-indigo-100'}`}
            >
              <span className="mr-3"><FiUser /></span>
              <span>My Profile</span>
            </div>
            <div 
              onClick={() => setActiveTab('payments')}
              className={`flex items-center p-3 rounded-xl transition cursor-pointer ${activeTab === 'payments' ? 'bg-indigo-700 text-white shadow-md' : 'hover:bg-indigo-700/50 text-indigo-100'}`}
            >
              <span className="mr-3"><FiCreditCard /></span>
              <span>Payments</span>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 relative">
          {/* Go Home Button */}
          <div className="absolute top-6 right-8">
            <Link 
              href="/pages/home" 
              className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition shadow hover:shadow-md"
            >
              <FiHome className="mr-2" />
              Home
            </Link>
          </div>

          {activeTab === 'dashboard' && (
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUser className="text-3xl text-indigo-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Student Dashboard</h1>
                <p className="text-gray-600 mt-2">Welcome to your learning portal</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div 
                  onClick={() => setActiveTab('profile')}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-8 border-indigo-400 group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <FiUser className="text-2xl text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">My Profile</h2>
                      <p className="text-sm text-gray-600 mt-1">View and update your personal information</p>
                    </div>
                  </div>
                </div>
                <div 
                  onClick={() => setActiveTab('payments')}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-8 border-indigo-400 group cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <FiCreditCard className="text-2xl text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">Payments</h2>
                      <p className="text-sm text-gray-600 mt-1">Manage your payments and invoices</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-8 border-indigo-400 group cursor-pointer">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <FiCalendar className="text-2xl text-indigo-600" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">Schedule</h2>
                      <p className="text-sm text-gray-600 mt-1">Check your class timetable</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'payments' && (
            <div className="max-w-md mx-auto">
              <div className="bg-white p-8 rounded-3xl shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-indigo-700">Student Payment</h2>
                {errorMessage && (
                  <div className="text-red-500 text-center mb-4">{errorMessage}</div>
                )}
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Student Name"
                        className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                      />
                      {touched.studentName && errors.studentName && (
                        <p className="text-red-500 text-sm">{errors.studentName}</p>
                      )}
                    </div>

                    <div>
                      <select
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                      >
                        <option value="">Select Grade</option>
                        {[6, 7, 8, 9, 10, 11].map((g) => (
                          <option key={g} value={`Grade ${g}`}>Grade {g}</option>
                        ))}
                      </select>
                      {touched.grade && errors.grade && (
                        <p className="text-red-500 text-sm">{errors.grade}</p>
                      )}
                    </div>

                    <div>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                      >
                        <option value="">Select Subject</option>
                        <option value="Maths">Maths</option>
                        <option value="Science">Science</option>
                        <option value="English">English</option>
                      </select>
                      {touched.subject && errors.subject && (
                        <p className="text-red-500 text-sm">{errors.subject}</p>
                      )}
                    </div>

                    <div>
                      <input
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleChange}
                        placeholder="Amount (LKR)"
                        className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                      />
                      {touched.amount && errors.amount && (
                        <p className="text-red-500 text-sm">{errors.amount}</p>
                      )}
                    </div>

                    <div>
                      <select
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                      >
                        <option value="Card">Card Payment</option>
                      </select>
                    </div>

                    {formData.paymentMethod === 'Card' && (
                      <>
                        <div>
                          <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            placeholder="Card Number"
                            className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                          />
                          {touched.cardNumber && errors.cardNumber && (
                            <p className="text-red-500 text-sm">{errors.cardNumber}</p>
                          )}
                        </div>

                        <div className="flex gap-4">
                          <div className="w-1/2">
                            <input
                              type="text"
                              name="expiry"
                              value={formData.expiry}
                              onChange={handleChange}
                              placeholder="MM/YY"
                              className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                            />
                            {touched.expiry && errors.expiry && (
                              <p className="text-red-500 text-sm">{errors.expiry}</p>
                            )}
                          </div>
                          <div className="w-1/2">
                            <input
                              type="text"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleChange}
                              placeholder="CVV"
                              className="w-full p-3 border-2 border-indigo-200 rounded-xl"
                            />
                            {touched.cvv && errors.cvv && (
                              <p className="text-red-500 text-sm">{errors.cvv}</p>
                            )}
                          </div>
                        </div>
                      </>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-violet-600 text-white font-bold py-3 rounded-xl hover:bg-violet-700 transition"
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
                        setSubmitted(false)
                        setFormData({
                          studentName: '',
                          grade: '',
                          subject: '',
                          amount: '',
                          paymentMethod: 'Card',
                          cardNumber: '',
                          expiry: '',
                          cvv: '',
                        })
                        setTouched({})
                        setErrors({})
                        setSuccessMessage('')
                      }}
                      className="mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded-xl"
                    >
                      Make Another Payment
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </main>
      </div>
    </AdminLayout>
  )
}

export default StudentPayment




