'use client'
import React, { useState, useEffect } from 'react'
import AdminLayout from '@/components/Layouts/AdminLayout'
import { 
  FiHome,
  FiCreditCard, 
  FiDollarSign, 
  FiUser, 
  FiBook, 
  FiSearch,
  FiEdit,
  FiTrash2,
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiUsers,
  FiSettings,
  FiCalendar,
  FiPlus
} from 'react-icons/fi'
import axios from 'axios'
import BASE_URL from '@/API/config'
import Link from 'next/link'

const AdminPayment = () => {
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true)
        const response = await axios.get(`${BASE_URL}api/AdminPayment`, )
        setPayments(response.data)
      } catch (error) {
        console.error('Error fetching payments:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPayments()
  }, [])

  const filteredPayments = payments
    .filter(payment => {
      const matchesSearch = 
        payment.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.grade.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.subject.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = 
        filter === 'all' || 
        (filter === 'completed' && payment.status === 'Completed') ||
        (filter === 'pending' && payment.status === 'Pending') ||
        (filter === 'failed' && payment.status === 'Failed')
      
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  const statusColors = {
    Completed: 'bg-green-100 text-green-800',
    Pending: 'bg-yellow-100 text-yellow-800',
    Failed: 'bg-red-100 text-red-800'
  }

  const subjectColors = {
    Maths: 'bg-blue-100 text-blue-800',
    Science: 'bg-purple-100 text-purple-800',
    English: 'bg-green-100 text-green-800'
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  const totalRevenue = payments
    .filter(p => p.status === 'Completed')
    .reduce((sum, payment) => sum + parseFloat(payment.amount), 0)

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white p-6 space-y-6 rounded-r-3xl shadow-xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <FiCreditCard className="text-xl" />
            </div>
            <h2 className="text-2xl font-bold">Admin Panel</h2>
          </div>
          <nav className="space-y-2">
            <SidebarItem 
              label="Dashboard" 
              href="/pages/admin/AdminDashboard" 
              icon={<FiHome />}
            />
            <SidebarItem 
              label="Class Schedules" 
              href="/pages/admin/AdminClassSchedule" 
              icon={<FiCalendar />}
            />
            <SidebarItem 
              label="Payments" 
              href="/pages/admin/AdminPayment" 
              icon={<FiCreditCard />}
              active
            />
            <SidebarItem 
              label="Teachers" 
              href="/pages/admin/AdminTeachers" 
              icon={<FiUsers />}
            />
            <SidebarItem 
              label="Students" 
              href="/pages/admin/AdminStudent" 
              icon={<FiUser />}
            />
            
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Header with buttons */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Payment Management</h1>
                <p className="text-gray-600">View and manage all payment records</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="/pages/home" 
                  className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition shadow hover:shadow-md order-1 sm:order-2"
                >
                  <FiHome className="mr-2" />
                  Home
                </Link>
                <Link 
                  href="/pages/admin/payments/add" 
                  className="flex items-center justify-center bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition shadow order-2 sm:order-1"
                >
                  <FiPlus className="mr-2" />
                  Add Payment
                </Link>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <StatCard 
                title="Total Revenue" 
                value={`LKR ${totalRevenue.toFixed(2)}`} 
                icon={<FiDollarSign className="text-2xl" />}
                color="bg-indigo-100 text-indigo-800"
              />
              <StatCard 
                title="Completed" 
                value={payments.filter(p => p.status === 'Completed').length} 
                icon={<FiCheckCircle className="text-2xl" />}
                color="bg-green-100 text-green-800"
              />
              <StatCard 
                title="Pending" 
                value={payments.filter(p => p.status === 'Pending').length} 
                icon={<FiClock className="text-2xl" />}
                color="bg-yellow-100 text-yellow-800"
              />
              <StatCard 
                title="Failed" 
                value={payments.filter(p => p.status === 'Failed').length} 
                icon={<FiXCircle className="text-2xl" />}
                color="bg-red-100 text-red-800"
              />
            </div>

            {/* Filters */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="relative flex-1">
                  <FiSearch className="absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search payments..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  <FilterButton 
                    active={filter === 'all'}
                    onClick={() => setFilter('all')}
                    label="All"
                    count={payments.length}
                  />
                  <FilterButton 
                    active={filter === 'completed'}
                    onClick={() => setFilter('completed')}
                    label="Completed"
                    count={payments.filter(p => p.status === 'Completed').length}
                    color="bg-green-100 text-green-800"
                  />
                  <FilterButton 
                    active={filter === 'pending'}
                    onClick={() => setFilter('pending')}
                    label="Pending"
                    count={payments.filter(p => p.status === 'Pending').length}
                    color="bg-yellow-100 text-yellow-800"
                  />
                  <FilterButton 
                    active={filter === 'failed'}
                    onClick={() => setFilter('failed')}
                    label="Failed"
                    count={payments.filter(p => p.status === 'Failed').length}
                    color="bg-red-100 text-red-800"
                  />
                </div>
              </div>
            </div>

            {/* Payments Table */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {loading ? (
                <div className="p-8 text-center text-gray-500">Loading payments...</div>
              ) : filteredPayments.length === 0 ? (
                <div className="p-8 text-center text-gray-500">No payments found</div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Info</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredPayments.map((payment) => (
                        <tr key={payment._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center">
                                <FiUser className="text-indigo-600" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{payment.studentName}</div>
                                <div className="text-sm text-gray-500">Grade {payment.grade.split(' ')[1]}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col space-y-1">
                              <span className={`px-2 py-1 text-xs rounded-full ${subjectColors[payment.subject]} w-fit`}>
                                {payment.subject}
                              </span>
                              <span className="text-sm text-gray-900">LKR {payment.amount}</span>
                              <span className="text-xs text-gray-500">{formatDate(payment.date)}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{payment.paymentMethod}</div>
                            {payment.paymentMethod === 'Card' && (
                              <div className="text-xs text-gray-500">•••• •••• •••• {payment.cardNumber?.slice(-4)}</div>
                            )}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full font-medium ${statusColors[payment.status]}`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-4">
                              <FiEdit />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <FiTrash2 />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Legend */}
            <div className="mt-6 bg-white rounded-xl shadow-md p-4">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">Legend</h3>
              <div className="flex flex-wrap gap-3">
                {Object.entries(subjectColors).map(([subject, color]) => (
                  <div key={subject} className="flex items-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${color}`}>{subject}</span>
                  </div>
                ))}
                {Object.entries(statusColors).map(([status, color]) => (
                  <div key={status} className="flex items-center">
                    <span className={`px-2 py-1 text-xs rounded-full ${color}`}>{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminLayout>
  )
}

const SidebarItem = ({ label, href, icon, active = false }) => (
  <Link href={href}>
    <div className={`flex items-center p-3 rounded-xl transition ${active ? 'bg-indigo-700 text-white shadow-md' : 'hover:bg-indigo-700/50 text-indigo-100'}`}>
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </div>
  </Link>
)

const StatCard = ({ title, value, icon, color }) => (
  <div className={`bg-white rounded-xl shadow-md p-4 ${color}`}>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
      <div className="p-2 rounded-lg bg-white bg-opacity-30">
        {icon}
      </div>
    </div>
  </div>
)

const FilterButton = ({ active, onClick, label, count, color = 'bg-gray-100 text-gray-800' }) => (
  <button
    onClick={onClick}
    className={`flex items-center px-3 py-2 rounded-xl text-sm font-medium transition ${active ? 'bg-indigo-600 text-white' : color}`}
  >
    {label}
    <span className={`ml-2 px-1.5 py-0.5 rounded-full text-xs ${active ? 'bg-white bg-opacity-20' : 'bg-white'}`}>
      {count}
    </span>
  </button>
)

export default AdminPayment