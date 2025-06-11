'use client';
import React from "react";
import axios from 'axios';
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaGraduationCap, FaBook, FaQuoteLeft } from "react-icons/fa";
import MainLayout from "@/components/Layouts/MainLayout";

const teachers = [
  {
    name: 'Ms. H.B. Nisansala',
    introduction: 'An enthusiastic educator with over 10 years of experience in modern mathematics teaching.',
    university: '',
    subject: 'Mathematics',
    photo: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg',
  },
  {
    name: 'Mr. D.K. Kumara',
    introduction: 'Passionate about science and inspiring students to explore the natural world.',
    university: '',
    subject: 'Science',
    photo: 'https://img.freepik.com/vecteurs-premium/icone-profil-avatar-dans-style-plat-illustration-vectorielle-du-profil-utilisateur-masculin-fond-isole-signature-profil-masculin-concept-entreprise_157943-38764.jpg',
  },
  {
    name: 'Mr. K.K. Sunil',
    introduction: 'Dedicated to developing strong communication skills through literature and grammar.',
    university: 'peradeniya',
    subject: 'English',
    photo: 'https://img.freepik.com/vecteurs-premium/icone-profil-avatar-dans-style-plat-illustration-vectorielle-du-profil-utilisateur-masculin-fond-isole-signature-profil-masculin-concept-entreprise_157943-38764.jpg',
  },
];


const Teacher = () => {
  return (
    <MainLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-16">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            <FaChalkboardTeacher className="text-5xl text-blue-600" />
          </div>
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Dedicated Teachers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our passionate educators bring knowledge and inspiration to every classroom
          </p>
        </motion.div>

        {/* Teachers Grid with Animations */}
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              {/* Teacher Image with Gradient Overlay */}
              <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <img
                  src={teacher.photo}
                  alt={teacher.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md transform group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Teacher Info */}
              <div className="p-6 text-center">
                <div className="flex justify-center mb-2">
                  {teacher.subject === 'Mathematics' && <FaBook className="text-blue-500 text-xl" />}
                  {teacher.subject === 'Science' && <FaGraduationCap className="text-green-500 text-xl" />}
                  {teacher.subject === 'English' && <FaQuoteLeft className="text-purple-500 text-xl" />}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{teacher.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{teacher.introduction}</p>
                
                <div className="bg-blue-50 rounded-lg p-3">
                  <p className="text-purple-700 font-medium text-sm">Subject: <span className="font-bold">{teacher.subject}</span></p>
                  {teacher.university && (
                    <p className="text-blue-600 text-sm mt-1">University: {teacher.university}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        
        >
          
        </motion.div>
      </div>
    </MainLayout>
  );
};

export default Teacher;


