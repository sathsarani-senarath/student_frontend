'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import AdminLayout from '@/components/Layouts/AdminLayout'
import { FiHome, FiUser, FiCreditCard, FiBook, FiCalendar, FiUsers, FiSettings, FiEdit2, FiTrash2 } from 'react-icons/fi'

const AdminStudent = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Nimal Perera',
      grade: 'Grade 10',
      dob: '2009-04-15',
      gender: 'Male',
      photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4755.jpg',
    },
    {
      id: 2,
      name: 'Kamalika Silva',
      grade: 'Grade 9',
      dob: '2010-06-22',
      gender: 'Female',
      photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon_188544-4756.jpg',
    },
  ])

  const [form, setForm] = useState({
    id: null,
    name: '',
    grade: '',
    dob: '',
    gender: '',
    photo: '',
  })

  const [editingId, setEditingId] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleAddOrUpdate = (e) => {
    e.preventDefault()
    if (editingId !== null) {
      setStudents(students.map((s) => (s.id === editingId ? { ...form, id: editingId } : s)))
      setEditingId(null)
    } else {
      const newStudent = { ...form, id: Date.now() }
      setStudents([...students, newStudent])
    }
    setForm({ id: null, name: '', grade: '', dob: '', gender: '', photo: '' })
  }

  const handleEdit = (student) => {
    setForm(student)
    setEditingId(student.id)
  }

  const handleDelete = (id) => {
    setStudents(students.filter((s) => s.id !== id))
    if (editingId === id) {
      setForm({ id: null, name: '', grade: '', dob: '', gender: '', photo: '' })
      setEditingId(null)
    }
  }

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
            <SidebarItem label="Dashboard" href="/pages/admin/AdminDashboard" icon={<FiHome />} />
            <SidebarItem label="Class Schedules" href="/pages/admin/AdminClassSchedule" icon={<FiCalendar />} />
            <SidebarItem label="Payments" href="/pages/admin/AdminPayment" icon={<FiCreditCard />} />
            <SidebarItem label="Teachers" href="/pages/admin/AdminTeachers" icon={<FiUsers />} />
            <SidebarItem label="Students" href="/pages/admin/AdminStudent" icon={<FiUser />} active />
            
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 relative">
          {/* Go Home Button */}
          <div className="absolute top-6 right-8">
            <Link href="/pages/home" className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700 transition shadow hover:shadow-md">
              <FiHome className="mr-2" />
              Home
            </Link>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUser className="text-3xl text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Manage Students</h1>
              <p className="text-gray-600 mt-2">View and manage all student records</p>
            </div>

            {/* Add/Edit Form */}
            <form
              onSubmit={handleAddOrUpdate}
              className="bg-white p-6 rounded-2xl shadow-md mb-8 border-l-8 border-indigo-400"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {editingId ? 'Edit Student' : 'Add New Student'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Student name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
                  <input
                    name="grade"
                    value={form.grade}
                    onChange={handleChange}
                    placeholder="Grade"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                  <input
                    type="date"
                    name="dob"
                    value={form.dob}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                  <input
                    name="photo"
                    value={form.photo}
                    onChange={handleChange}
                    placeholder="Profile photo URL"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow hover:shadow-md"
              >
                {editingId ? 'Update Student' : 'Add Student'}
              </button>
            </form>

            {/* Student List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-8 border-indigo-400"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={student.photo}
                      alt={student.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                    <div className="mt-4 w-full">
                      <div className="bg-blue-50 p-3 rounded-lg mb-2">
                        <p className="text-sm text-blue-800 font-medium">Grade</p>
                        <p className="text-blue-600">{student.grade}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg mb-2">
                        <p className="text-sm text-purple-800 font-medium">DOB</p>
                        <p className="text-purple-600">{student.dob}</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm text-green-800 font-medium">Gender</p>
                        <p className="text-green-600">{student.gender}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => handleEdit(student)}
                        className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition"
                      >
                        <FiEdit2 className="mr-2" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(student.id)}
                        className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                      >
                        <FiTrash2 className="mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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

export default AdminStudent


