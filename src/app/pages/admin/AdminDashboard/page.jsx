'use client'

import React from 'react'
import Link from 'next/link'
import AdminLayout from '@/components/Layouts/AdminLayout'
import { FiHome, FiUser, FiCreditCard, FiBook, FiCalendar, FiAward, FiUsers, FiSettings, FiClock } from 'react-icons/fi'

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white p-6 space-y-6 rounded-r-3xl shadow-xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <FiUser className="text-xl" />
            </div>
            <h2 className="text-2xl font-bold">Admin Panel</h2>
          </div>
          <nav className="space-y-2">
            <SidebarItem 
              label="Dashboard" 
              href="/pages/admin/AdminDashboard" 
              icon={<FiHome />}
              active
            />
            <SidebarItem 
              label="Class Schedules" 
              href="/pages/admin/AdminClassSchedule" 
              icon={<FiClock />}
            />
            <SidebarItem 
              label="Payments" 
              href="/pages/admin/AdminPayment" 
              icon={<FiCreditCard />}
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

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUser className="text-3xl text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome to your administration portal</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <DashboardCard 
                title="Class Schedules" 
                description="Manage all class schedules and timings"
                icon={<FiClock className="text-2xl text-indigo-600" />}
                href="/pages/admin/AdminClassSchedule"
                color="bg-blue-100"
              />
              <DashboardCard 
                title="Payments" 
                description="View and manage payment records"
                icon={<FiCreditCard className="text-2xl text-indigo-600" />}
                href="/pages/admin/AdminPayment"
                color="bg-green-100"
              />
              <DashboardCard 
                title="Teachers" 
                description="Manage teacher accounts and profiles"
                icon={<FiUsers className="text-2xl text-indigo-600" />}
                href="/pages/admin/AdminTeachers"
                color="bg-purple-100"
              />
              <DashboardCard 
                title="Students" 
                description="Manage student accounts and profiles"
                icon={<FiUser className="text-2xl text-indigo-600" />}
                href="/pages/admin/AdminStudent"
                color="bg-yellow-100"
              />
              
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

const DashboardCard = ({ title, description, icon, href, color }) => (
  <Link href={href}>
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-8 border-indigo-400 group">
      <div className="flex items-start space-x-4">
        <div className={`${color} p-3 rounded-lg`}>
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">{title}</h2>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  </Link>
)

export default AdminDashboard



