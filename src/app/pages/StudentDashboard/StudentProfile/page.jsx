'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/Layouts/AdminLayout';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
  FiUser,
  FiEdit,
  FiSave,
  FiX,
  FiHome,
  FiCalendar,
  FiMail,
  FiBook,
} from 'react-icons/fi';
import Link from 'next/link';

// Replace with your actual backend URL
const BASE_URL = 'http://localhost:5000/api';

const SidebarItem = ({ label, href, icon, active = false }) => (
  <Link href={href}>
    <div
      className={`flex items-center p-3 rounded-xl transition ${
        active
          ? 'bg-indigo-700 text-white shadow-md'
          : 'hover:bg-indigo-700/50 text-indigo-100'
      }`}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </div>
  </Link>
);

function StudentProfile() {
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [selectedFile, setSelectedFile] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/student`, { withCredentials: true });
      setProfile(res.data);
      setFormData(res.data);
    } catch (err) {
      console.error('Fetch profile error:', err);
      setErrorMessage('Unable to fetch profile. Please login again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, val]) => form.append(key, val));
      if (selectedFile) form.append('profilePhoto', selectedFile);

      const res = await axios.put(`${BASE_URL}/student`, form, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });

      setProfile(res.data);
      setFormData(res.data);
      setEditing(false);
      setSelectedFile(null);
      setSuccessMessage('Profile updated successfully!');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      console.error('Update error:', err);
      setErrorMessage('Update failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData(profile);
    setSelectedFile(null);
    setEditing(false);
  };

  return (
    <AdminLayout>
      <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 via-white to-violet-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-900 text-white p-6 space-y-6 rounded-r-3xl shadow-xl">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-2 bg-indigo-600 rounded-lg">
              <FiUser className="text-xl" />
            </div>
            <h2 className="text-2xl font-bold">Student Panel</h2>
          </div>
          <nav className="space-y-2">
            <SidebarItem label="Dashboard" href="/pages/StudentDashboard" icon={<FiHome />} />
            <SidebarItem label="My Profile" href="/pages/StudentDashboard/StudentProfile" icon={<FiUser />} active />
            <SidebarItem label="Payments" href="/pages/StudentDashboard/StudentPayment" icon={<FiBook />} />
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="bg-white p-8 rounded-3xl shadow-xl max-w-4xl border border-indigo-100">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Student Profile</h1>
                <p className="text-gray-600">Manage your personal information</p>
              </div>
              <button
                onClick={() => router.push('/pages/StudentDashboard')}
                className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl shadow"
              >
                <FiHome /> Dashboard
              </button>
            </div>

            {errorMessage && (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded">
                {errorMessage}
              </div>
            )}
            {successMessage && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4 rounded">
                {successMessage}
              </div>
            )}

            {profile ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Image */}
                  <div className="w-full md:w-1/3 flex flex-col items-center">
                    <div className="relative mb-4">
                      <img
                        src={
                          selectedFile
                            ? URL.createObjectURL(selectedFile)
                            : profile.profilePhoto
                            ? `${BASE_URL.replace('/api', '')}/${profile.profilePhoto}`
                            : '/default-avatar.png'
                        }
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-4 object-cover"
                      />
                      {editing && (
                        <label className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full text-white cursor-pointer shadow-md">
                          <FiEdit />
                          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                        </label>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold">{profile.name}</h3>
                    <p className="text-indigo-600">{profile.studentId}</p>
                  </div>

                  {/* Info Fields */}
                  <div className="w-full md:w-2/3 space-y-4">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text' },
                      { label: 'Student ID', name: 'studentId', type: 'text' },
                      { label: 'Grade', name: 'grade', type: 'text' },
                      { label: 'Date of Birth', name: 'dob', type: 'date' },
                      { label: 'Gender', name: 'gender', type: 'select', options: ['', 'Male', 'Female', 'Other'] },
                      { label: 'Email', name: 'email', type: 'email' },
                      { label: 'Phone', name: 'phone', type: 'tel' },
                      { label: 'Address', name: 'address', type: 'textarea' },
                    ].map((field, index) => (
                      <div key={index}>
                        <label className="block text-sm font-medium text-gray-700">{field.label}</label>
                        {field.type === 'select' ? (
                          <select
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            disabled={!editing}
                            className={`w-full p-3 rounded-xl border ${
                              editing ? 'bg-white' : 'bg-gray-100'
                            }`}
                          >
                            {field.options.map((opt, i) => (
                              <option key={i} value={opt}>
                                {opt || 'Select Gender'}
                              </option>
                            ))}
                          </select>
                        ) : field.type === 'textarea' ? (
                          <textarea
                            name={field.name}
                            value={formData[field.name] || ''}
                            onChange={handleInputChange}
                            disabled={!editing}
                            rows={3}
                            className={`w-full p-3 rounded-xl border ${
                              editing ? 'bg-white' : 'bg-gray-100'
                            }`}
                          />
                        ) : (
                          <input
                            type={field.type}
                            name={field.name}
                            value={
                              field.name === 'dob' && formData.dob
                                ? formData.dob.slice(0, 10)
                                : formData[field.name] || ''
                            }
                            onChange={handleInputChange}
                            disabled={!editing}
                            className={`w-full p-3 rounded-xl border ${
                              editing ? 'bg-white' : 'bg-gray-100'
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-end gap-4 pt-4">
                  {editing ? (
                    <>
                      <button
                        type="submit"
                        disabled={isLoading}
                        className="flex items-center gap-2 px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                      >
                        <FiSave />
                        {isLoading ? 'Saving...' : 'Save'}
                      </button>
                      <button
                        type="button"
                        onClick={handleCancel}
                        className="flex items-center gap-2 px-6 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
                      >
                        <FiX /> Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setEditing(true)}
                      className="flex items-center gap-2 px-6 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
                    >
                      <FiEdit /> Edit Profile
                    </button>
                  )}
                </div>
              </form>
            ) : (
              <p>Loading profile...</p>
            )}
          </div>
        </main>
      </div>
    </AdminLayout>
  );
}

export default StudentProfile;

