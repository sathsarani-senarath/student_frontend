'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/Layouts/AdminLayout';
import Modal from '@/components/common/Modal';
import {
  FiEdit,
  FiTrash2,
  FiPlus,
  FiClock,
  FiCalendar,
  FiBook,
  FiCreditCard,
  FiUser,
  FiHome,
  FiUsers,
  FiSettings
} from 'react-icons/fi';



import { toast } from 'react-toastify';
import Link from 'next/link';

const AdminClassSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeDay, setActiveDay] = useState('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const grades = [6, 7, 8, 9, 10, 11];
  const subjects = ['English', 'Maths', 'Science'];

  const [formData, setFormData] = useState({
    day: 'Monday',
    grade: '',
    subject: '',
    time: ''
  });

  // Fetch schedule data
  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await axios.get('/api/schedule');
        setSchedule(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to fetch schedule');
        setLoading(false);
      }
    };
    fetchSchedule();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const openAddModal = (day = 'Monday') => {
    setCurrentClass(null);
    setFormData({
      day,
      grade: '',
      subject: '',
      time: ''
    });
    setIsModalOpen(true);
  };

  const openEditModal = (classItem) => {
    setCurrentClass(classItem);
    setFormData({
      day: classItem.day,
      grade: classItem.grade,
      subject: classItem.subject,
      time: classItem.time
    });
    setIsModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (currentClass) {
        // Update existing class
        await axios.put(`/api/schedule/${currentClass._id}`, formData);
        toast.success('Class updated successfully');
      } else {
        // Add new class
        await axios.post('/api/schedule', formData);
        toast.success('Class added successfully');
      }
      // Refresh data
      const response = await axios.get('/api/schedule');
      setSchedule(response.data);
      setIsModalOpen(false);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this class?')) {
      try {
        await axios.delete(`/api/schedule/${id}`);
        toast.success('Class deleted successfully');
        // Refresh data
        const response = await axios.get('/api/schedule');
        setSchedule(response.data);
      } catch (error) {
        toast.error('Failed to delete class');
      }
    }
  };

  // Filter classes by active day
  const filteredClasses = schedule.filter(cls => cls.day === activeDay);

  // Color schemes
  const gradeColors = {
    6: 'bg-blue-100 text-blue-800',
    7: 'bg-green-100 text-green-800',
    8: 'bg-purple-100 text-purple-800',
    9: 'bg-yellow-100 text-yellow-800',
    10: 'bg-red-100 text-red-800',
    11: 'bg-indigo-100 text-indigo-800'
  };

  const subjectColors = {
    'English': 'border-blue-300',
    'Maths': 'border-green-300',
    'Science': 'border-purple-300'
  };

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
            <Link href="/pages/admin/AdminDashboard" className="flex items-center p-3 rounded-xl hover:bg-indigo-700/50 text-indigo-100">
              <FiHome className="mr-3" />
              <span>Dashboard</span>
            </Link>
            <Link href="/pages/admin/AdminClassSchedule" className="flex items-center p-3 rounded-xl bg-indigo-700 text-white shadow-md">
              <FiClock className="mr-3" />
              <span>Class Schedules</span>
            </Link>
            <Link href="/pages/admin/AdminPayment" className="flex items-center p-3 rounded-xl hover:bg-indigo-700/50 text-indigo-100">
              <FiCreditCard className="mr-3" />
              <span>Payments</span>
            </Link>
            <Link href="/pages/admin/AdminTeachers" className="flex items-center p-3 rounded-xl hover:bg-indigo-700/50 text-indigo-100">
              <FiUsers className="mr-3" />
              <span>Teachers</span>
            </Link>
            <Link href="/pages/admin/AdminStudent" className="flex items-center p-3 rounded-xl hover:bg-indigo-700/50 text-indigo-100">
              <FiUser className="mr-3" />
              <span>Students</span>
            </Link>
            
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
                <FiClock className="text-3xl text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Class Schedule Management</h1>
              <p className="text-gray-600 mt-2">Manage and organize class schedules for all grades</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">Weekly Schedule</h2>
                <button
                  onClick={() => openAddModal()}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl flex items-center transition shadow hover:shadow-md"
                >
                  <FiPlus className="mr-2" />
                  Add Class
                </button>
              </div>

              {/* Day Navigation */}
              <div className="mb-6">
                <div className="flex overflow-x-auto pb-2">
                  {days.map(day => (
                    <button
                      key={day}
                      onClick={() => setActiveDay(day)}
                      className={`px-4 py-2 mr-2 rounded-xl font-medium whitespace-nowrap transition ${
                        activeDay === day
                          ? 'bg-indigo-600 text-white shadow-md'
                          : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                      }`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>

              {/* Schedule Table */}
              <div className="rounded-xl overflow-hidden border border-gray-200">
                {loading ? (
                  <div className="p-8 text-center text-gray-500">Loading schedule data...</div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {filteredClasses.length > 0 ? (
                          filteredClasses.map((classItem) => (
                            <tr key={classItem._id} className="hover:bg-gray-50 transition">
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${gradeColors[classItem.grade]}`}>
                                  Grade {classItem.grade}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className={`border-l-4 pl-3 ${subjectColors[classItem.subject]}`}>
                                  <div className="text-sm font-medium text-gray-900">{classItem.subject}</div>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <FiClock className="text-gray-400 mr-2" />
                                  <span className="text-sm text-gray-500">{classItem.time}</span>
                                </div>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button
                                  onClick={() => openEditModal(classItem)}
                                  className="text-indigo-600 hover:text-indigo-900 mr-4 transition"
                                >
                                  <FiEdit className="inline mr-1" /> Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(classItem._id)}
                                  className="text-red-600 hover:text-red-900 transition"
                                >
                                  <FiTrash2 className="inline mr-1" /> Delete
                                </button>
                              </td>
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                              No classes scheduled for {activeDay}
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {days.map(day => {
                const dayClasses = schedule.filter(cls => cls.day === day);
                return (
                  <div key={day} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-indigo-400 hover:shadow-xl transition">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">{day}</h3>
                    <p className="text-3xl font-bold text-indigo-600 mb-2">{dayClasses.length}</p>
                    <p className="text-sm text-gray-500">Classes scheduled</p>
                    <button
                      onClick={() => {
                        setActiveDay(day);
                        openAddModal(day);
                      }}
                      className="mt-4 text-sm text-indigo-600 hover:text-indigo-800 flex items-center transition"
                    >
                      <FiPlus className="mr-1" /> Add class
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </main>

        {/* Add/Edit Modal */}
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="bg-white rounded-2xl p-6 max-w-md w-full border-l-4 border-indigo-400">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              {currentClass ? 'Edit Class Schedule' : 'Add New Class Schedule'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Day</label>
                <select
                  name="day"
                  value={formData.day}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Grade</label>
                <select
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Grade</option>
                  {grades.map(grade => (
                    <option key={grade} value={grade}>Grade {grade}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                >
                  <option value="">Select Subject</option>
                  {subjects.map(subject => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2">Time</label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  placeholder="e.g. 3PM - 5PM"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition shadow"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition"
                >
                  {currentClass ? 'Update Class' : 'Add Class'}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </AdminLayout>
  );
};

export default AdminClassSchedule;

