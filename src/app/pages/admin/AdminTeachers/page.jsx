'use client'

/*import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import AdminLayout from '@/components/Layouts/AdminLayout'
import { FiHome, FiUser, FiCreditCard, FiBook, FiCalendar, FiUsers, FiSettings, FiEdit2, FiTrash2 } from 'react-icons/fi'

const AdminTeacher = () => {
  const [teachers, setTeachers] = useState([
    {
      id: 1,
      name: 'Ms. H.B. Nisansala',
      introduction: 'An enthusiastic educator with over 10 years of experience in modern mathematics teaching.',
      university: 'University of Colombo',
      subject: 'Mathematics',
      photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg',
    },
    {
      id: 2,
      name: 'Mr. D.K. Kumara',
      introduction: 'Passionate about science and inspiring students to explore the natural world.',
      university: 'University of Peradeniya',
      subject: 'Science',
      photo: 'https://img.freepik.com/vecteurs-premium/icone-profil-avatar-dans-style-plat-illustration-vectorielle-du-profil-utilisateur-masculin-fond-isole-signature-profil-masculin-concept-entreprise_157943-38764.jpg',
    },
    {
      id: 3,
      name: 'Mr. K.K. Sunil',
      introduction: 'Dedicated to developing strong communication skills through literature and grammar.',
      university: 'University of Colombo',
      subject: 'English',
      photo: 'https://img.freepik.com/vecteurs-premium/icone-profil-avatar-dans-style-plat-illustration-vectorielle-du-profil-utilisateur-masculin-fond-isole-signature-profil-masculin-concept-entreprise_157943-38764.jpg',
    }
  ])

  const [form, setForm] = useState({
    id: null,
    name: '',
    introduction: '',
    university: '',
    subject: '',
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
      setTeachers(teachers.map((t) => (t.id === editingId ? { ...form, id: editingId } : t)))
      setEditingId(null)
    } else {
      const newTeacher = { ...form, id: Date.now() }
      setTeachers([...teachers, newTeacher])
    }
    setForm({ id: null, name: '', introduction: '', university: '', subject: '', photo: '' })
  }

  const handleEdit = (teacher) => {
    setForm(teacher)
    setEditingId(teacher.id)
  }

  const handleDelete = (id) => {
    setTeachers(teachers.filter((t) => t.id !== id))
    if (editingId === id) {
      setForm({ id: null, name: '', introduction: '', university: '', subject: '', photo: '' })
      setEditingId(null)
    }
  }

  return (
    <AdminLayout>
      <div className="flex min-h-screen bg-gradient-to-br from-indigo-50 via-white to-violet-100">*/
        {/* Sidebar */}
        /*<aside className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white p-6 space-y-6 rounded-r-3xl shadow-xl">
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
            />
            <SidebarItem 
              label="Teachers" 
              href="/pages/admin/AdminTeachers" 
              icon={<FiUsers />}
              active
            />
            <SidebarItem 
              label="Students" 
              href="/pages/admin/AdminStudent" 
              icon={<FiUser />}
            />
            
          </nav>
        </aside>*/

        {/* Main Content */}
        /*<main className="flex-1 p-8 relative">*/
          {/* Go Home Button */}
          /*<div className="absolute top-6 right-8">
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
                <FiUsers className="text-3xl text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Manage Teachers</h1>
              <p className="text-gray-600 mt-2">View and manage all teacher profiles</p>
            </div>*/

            {/* Add/Edit Form */}
            /*<form
              onSubmit={handleAddOrUpdate}
              className="bg-white p-6 rounded-2xl shadow-md mb-8 border-l-8 border-indigo-400"
            >
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                {editingId ? 'Edit Teacher' : 'Add New Teacher'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Teacher's name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
                  <input
                    name="university"
                    value={form.university}
                    onChange={handleChange}
                    placeholder="University"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Subject taught"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Photo URL</label>
                  <input
                    name="photo"
                    value={form.photo}
                    onChange={handleChange}
                    placeholder="Profile photo URL"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Introduction</label>
                  <textarea
                    name="introduction"
                    value={form.introduction}
                    onChange={handleChange}
                    placeholder="Brief introduction"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow hover:shadow-md"
              >
                {editingId ? 'Update Teacher' : 'Add Teacher'}
              </button>
            </form>*/

            {/* Teacher List */}
           /* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher) => (
                <div
                  key={teacher.id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-8 border-indigo-400"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={teacher.photo}
                      alt={teacher.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 mb-4"
                    />
                    <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">{teacher.introduction}</p>
                    <div className="mt-4 w-full">
                      <div className="bg-blue-50 p-3 rounded-lg mb-2">
                        <p className="text-sm text-blue-800 font-medium">University</p>
                        <p className="text-blue-600">{teacher.university}</p>
                      </div>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-800 font-medium">Subject</p>
                        <p className="text-purple-600">{teacher.subject}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => handleEdit(teacher)}
                        className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition"
                      >
                        <FiEdit2 className="mr-2" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(teacher.id)}
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

export default <AdminTeacher>*/


import React, { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import AdminLayout from "@/components/Layouts/AdminLayout";
import {
  FiHome,
  FiUser,
  FiCreditCard,
  FiCalendar,
  FiUsers,
  FiEdit2,
  FiTrash2,
  FiMail,
  FiPhone,
} from "react-icons/fi";

const AdminTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    id: null,
    name: "",
    introduction: "",
    university: "",
    subject: "",
    photo: null,
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Base API URL - Updated to match your backend route
  const API_BASE_URL = "http://localhost:5000/api/admin/AdminTeachers";

  // Fetch teachers on mount
  useEffect(() => {
    fetchTeachers();
  }, []);

  const fetchTeachers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_BASE_URL);
      setTeachers(response.data);
      setError(null);
    } catch (err) {
      console.error("Error fetching teachers:", err);
      setError("Failed to fetch teachers");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleAddOrUpdate = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Validation
    if (!form.name.trim() || !form.subject.trim()) {
      setError("Name and Subject are required fields");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("name", form.name.trim());
    formData.append("introduction", form.introduction.trim());
    formData.append("university", form.university.trim());
    formData.append("subject", form.subject.trim());
    
    if (form.photo) {
      formData.append("photo", form.photo);
    }

    // Debug: Log form data
    console.log("Form data being sent:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      let response;
      if (editingId) {
        response = await axios.put(`${API_BASE_URL}/${editingId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      } else {
        response = await axios.post(API_BASE_URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      console.log("Success response:", response.data);

      // Reset form
      setForm({
        id: null,
        name: "",
        introduction: "",
        university: "",
        subject: "",
        photo: null,
      });
      setEditingId(null);
      
      // Clear file input
      const fileInput = document.querySelector('input[type="file"]');
      if (fileInput) fileInput.value = '';

      await fetchTeachers();
    } catch (err) {
      console.error("Full error object:", err);
      console.error("Error response:", err.response?.data);
      console.error("Error status:", err.response?.status);
      
      const errorMessage = err.response?.data?.error 
        || err.response?.data?.details 
        || err.response?.data?.message 
        || "Failed to save teacher";
      
      setError(`Error: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (teacher) => {
    setForm({
      id: teacher._id,
      name: teacher.name,
      introduction: teacher.introduction || "",
      university: teacher.university || "",
      subject: teacher.subject,
      photo: null,
    });
    setEditingId(teacher._id);
    setError(null);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this teacher?")) {
      try {
        setLoading(true);
        await axios.delete(`${API_BASE_URL}/${id}`);
        await fetchTeachers();
        setError(null);
      } catch (err) {
        console.error("Error deleting teacher:", err);
        setError("Failed to delete teacher");
      } finally {
        setLoading(false);
      }
    }
  };

  const cancelEdit = () => {
    setForm({
      id: null,
      name: "",
      introduction: "",
      university: "",
      subject: "",
      photo: null,
    });
    setEditingId(null);
    setError(null);
    
    // Clear file input
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) fileInput.value = '';
  };

  // Helper function to get image URL
  const getImageUrl = (photoPath) => {
    if (!photoPath) return "/default-avatar.png";
    // If it's already a full URL, return as is
    if (photoPath.startsWith('http')) return photoPath;
    // Otherwise, construct the URL
    return `http://localhost:5000/${photoPath}`;
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
            />
            <SidebarItem
              label="Teachers"
              href="/pages/admin/AdminTeachers"
              icon={<FiUsers />}
              active
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
                <FiUsers className="text-3xl text-indigo-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                Manage Teachers
              </h1>
              <p className="text-gray-600 mt-2">
                View and manage all teacher profiles
              </p>
            </div>

            {/* Loading Indicator */}
            {loading && (
              <div className="text-center mb-6">
                <div className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-indigo-500 bg-indigo-100">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Loading...
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded flex justify-between">
                <span>{error}</span>
                <button
                  onClick={() => setError(null)}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </div>
            )}

            {/* Form */}
            <form
              onSubmit={handleAddOrUpdate}
              className="bg-white p-6 rounded-2xl shadow-md mb-8 border-l-8 border-indigo-400"
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {editingId ? "Edit Teacher" : "Add New Teacher"}
                </h2>
                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="text-gray-500 hover:text-gray-700 px-3 py-1 border border-gray-300 rounded-lg"
                  >
                    Cancel
                  </button>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  label="Name *"
                  placeholder="Teacher's name"
                  required
                />
                <Input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  label="Subject *"
                  placeholder="Subject taught"
                  required
                />
                <Input
                  name="university"
                  value={form.university}
                  onChange={handleChange}
                  label="University"
                  placeholder="University"
                />
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Photo
                  </label>
                  <input
                    name="photo"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Introduction
                  </label>
                  <textarea
                    name="introduction"
                    value={form.introduction}
                    onChange={handleChange}
                    placeholder="Brief introduction"
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading 
                  ? (editingId ? "Updating..." : "Adding...") 
                  : (editingId ? "Update Teacher" : "Add Teacher")
                }
              </button>
            </form>

            {/* Teacher Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {teachers.map((teacher) => (
                <div
                  key={teacher._id}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-8 border-indigo-400"
                >
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={getImageUrl(teacher.photo)}
                      alt={teacher.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 mb-4"
                      onError={(e) => {
                        e.target.src = "/default-avatar.png";
                      }}
                    />
                    <h3 className="text-xl font-semibold text-gray-800">
                      {teacher.name}
                    </h3>
                    {teacher.introduction && (
                      <p className="text-sm text-gray-600 mt-2">
                        {teacher.introduction}
                      </p>
                    )}
                    <div className="mt-4 w-full space-y-2">
                      {teacher.university && (
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm text-blue-800 font-medium">
                            University
                          </p>
                          <p className="text-blue-600">{teacher.university}</p>
                        </div>
                      )}
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-sm text-purple-800 font-medium">
                          Subject
                        </p>
                        <p className="text-purple-600">{teacher.subject}</p>
                      </div>
                    </div>
                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => handleEdit(teacher)}
                        className="flex items-center px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition"
                        disabled={loading}
                      >
                        <FiEdit2 className="mr-2" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(teacher._id)}
                        className="flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
                        disabled={loading}
                      >
                        <FiTrash2 className="mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {teachers.length === 0 && !loading && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiUsers className="text-4xl text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-500">No Teachers Found</h3>
                <p className="text-gray-400 mt-2">Add your first teacher to get started</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </AdminLayout>
  );
};

const SidebarItem = ({ label, href, icon, active = false }) => (
  <Link href={href}>
    <div
      className={`flex items-center p-3 rounded-xl transition ${
        active
          ? "bg-indigo-700 text-white shadow-md"
          : "hover:bg-indigo-700/50 text-indigo-100"
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </div>
  </Link>
);

const Input = ({
  name,
  value,
  onChange,
  label,
  placeholder,
  type = "text",
  required = false,
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      type={type}
      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500"
    />
  </div>
);

export default AdminTeachers;