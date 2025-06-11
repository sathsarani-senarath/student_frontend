"use client";
/*import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import MainLayout from "@/components/Layouts/MainLayout";



const Signin = () => {
  const router = useRouter();
const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/pages/admin/dashboard");
    
  };

  
return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-purple-200 to-purple-300">
        <form 
          onSubmit={handleSubmit} 
          className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md"
        >
          <h1 className="text-4xl font-extrabold text-center text-purple-700 mb-6">Sign In</h1>

          <input 
            type="text" 
            placeholder="Email" 
            className="w-full p-3 mb-4 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input 
            type="password" 
            placeholder="Password" 
            className="w-full p-3 mb-4 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-xl transition duration-200"
          >
            Sign In
          </button>

          <p className="text-center mt-6 text-sm text-gray-800 font-medium">
            Don’t have an account?{" "}
            <Link href="/pages/register" className="text-purple-700 font-semibold underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </MainLayout>
  );
};

export default Signin;*/

/*'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import MainLayout from "@/components/Layouts/MainLayout";
import { useAuth } from "@/context/AuthContext"; // Import AuthContext

const Signin = () => {
  const router = useRouter();
  const { SignIn, error, loading } = useAuth(); // Use AuthContext
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    try {
      const user = await SignIn(formData.email, formData.password);
      setSuccessMessage("Sign-in successful! Redirecting...");
      setTimeout(() => {
        // Redirect based on user role
        if (user.role === "admin") {
          router.push("/pages/admin/dashboard");
        } else {
          router.push("/pages/payment"); 
        }
      }, 2000);
    } catch (err) {
      setFormError(error || "Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <MainLayout>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-cyan-950 text-white p-6">*/
{
  /* Video Section */
}
/*<div className="w-[500px] h-[500px] mx-auto py-10">
          <video
            src="/stu1.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>*/

{
  /* Sign In Form */
}
/*<form
          onSubmit={handleSubmit}
          className="bg-white text-gray-900 p-10 rounded-3xl shadow-xl w-full max-w-md md:ml-10"
        >
          <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-6">Sign In</h1>

          {formError && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center ">{formError}</div>
          )}
          {successMessage && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">{successMessage}</div>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-3 mb-4 border-2 border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-400 text-white font-bold py-3 rounded-xl transition duration-200 disabled:bg-blue-600"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-center mt-6 text-sm text-gray-800 font-medium">
            Don’t have an account?{" "}
            <Link href="/pages/register" className="text-purple-700 font-semibold underline">
              Register
            </Link>
          </p>
        </form>
      </div>
    </MainLayout>
  );
};

export default Signin;*/

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MainLayout from "@/components/Layouts/MainLayout";
import { useAuth } from "@/context/AuthContext";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaSignInAlt, FaEye, FaEyeSlash } from "react-icons/fa";

const Signin = () => {
  const router = useRouter();
  const { SignIn, error, loading } = useAuth();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [formError, setFormError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage(null);

    try {
      const user = await SignIn(formData.email, formData.password);
      setSuccessMessage("Sign-in successful! Redirecting...");
      setTimeout(() => {
        if (user.role === "admin") {
          router.push("/pages/admin/AdminDashboard");
        } else {
          router.push("/pages/StudentDashboard");
        }
      }, 2000);
    } catch (err) {
      setFormError(
        error || "Failed to sign in. Please check your credentials."
      );
    }
  };

  return (
    <MainLayout>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-300 p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Left Side - Illustration */}
          <div className="hidden md:flex w-1/2 h-full bg-gradient-to-br from-blue-600 to-blue-500 p-8 items-center justify-center">
            <div className="relative w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-64 h-64">
                  <div className="absolute w-full h-full rounded-full bg-blue-500 opacity-20 animate-pulse"></div>
                  <div
                    className="absolute w-3/4 h-3/4 rounded-full bg-indigo-500 opacity-30 animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  ></div>
                  <div
                    className="absolute w-1/2 h-1/2 rounded-full bg-purple-500 opacity-40 animate-pulse"
                    style={{ animationDelay: "0.6s" }}
                  ></div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="relative z-10 text-center p-8"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  Welcome Back!
                </h2>
                <p className="text-blue-100 mb-8">
                  Sign in to access your personalized dashboard and continue
                  your learning journey.
                </p>
                <div className="flex justify-center">
                  <div className="w-32 h-1 bg-yellow-400 rounded-full"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaSignInAlt className="text-blue-700 text-2xl" />
                </div>
              </div>

              <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
                Sign In
              </h1>
              <p className="text-center text-gray-600 mb-8">
                Enter your credentials to access your account
              </p>

              {formError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-50 text-red-700 p-3 rounded-lg mb-6 text-center border border-red-200"
                >
                  {formError}
                </motion.div>
              )}

              {successMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 text-green-700 p-3 rounded-lg mb-6 text-center border border-green-200"
                >
                  {successMessage}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-gray-400" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="text-gray-400 hover:text-gray-600" />
                    ) : (
                      <FaEye className="text-gray-400 hover:text-gray-600" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      href="/pages/forgot-password"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-70"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Signing In...</span>
                    </>
                  ) : (
                    <>
                      <FaSignInAlt />
                      <span>Sign In</span>
                    </>
                  )}
                </motion.button>
              </form>

              <div className="mt-8">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account?{" "}
                    <Link
                      href="/pages/register"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Register here
                    </Link>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Signin;
