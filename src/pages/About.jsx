import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { motion } from "framer-motion";

function ProfileSection() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#2a2a2a" : "#f0f0f0";
    document.body.style.color = darkMode ? "#f5f5f5" : "#222";
  }, [darkMode]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <Navbar title="About Me" onBack={handleBack} darkMode={darkMode} toggleTheme={toggleTheme} />
      <section className="bg-gradient-to-b from-[#2a2a2a] to-[#006666] text-white py-16 px-6 text-center min-h-[90vh]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 rounded-full p-[1px] shadow-lg">
            <img
              src="images/urg.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white"
            />
          </div>

          <h2 className="text-2xl font-bold mt-6" >Muhamad Aldi Nur Hidayat Putra</h2>

          <p className="mt-4 max-w-xl text-sm text-gray-200" style={{ fontFamily: 'Comfortaa, cursive' }}>
            I'm Muhamad Aldi, a developer with experience in PHP, Java, and MySQL. I'm currently learning React and Next.js to improve my frontend skills. 
            I don’t consider myself the smartest person, but I have strong curiosity and passion for learning. I enjoy exploring new things and finding out how they work recently, I've also started learning video editing using Adobe Premiere Pro.
          </p>

          <div className="flex items-center justify-center gap-2 mt-6 text-gray-300 text-xl">
            <a href="https://github.com/MuhamadAldiNurHidayatPutra" className="hover:text-white transition"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/muhamad-aldi-nur-hidayat-putra-b35195378/" className="hover:text-white transition"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/sonofsep_?igsh=MXYxczJxbGR4MGszbw%3D%3D&utm_source=qr" className="hover:text-white transition"><i className="fab fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@sonofsep_?_t=ZS-8yZYhXjkP2o&_r=1" className="hover:text-white transition"><i className="fab fa-tiktok"></i></a>
            <a href="mailto:kembarangetret@gmail.com" className="hover:text-white transition"><i className="fas fa-envelope"></i></a>
          </div>

          <p className="text-sm mt-4 text-gray-400">📍 Bandung, ID</p>
        </div>
      </motion.div>
            </section>
    </>
  );
}

export default ProfileSection;
