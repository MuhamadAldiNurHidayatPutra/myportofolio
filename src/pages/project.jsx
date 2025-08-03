import react from "react";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const project = [
  {
    title: "Sparepart Sepeda Motor",
    desc: "Website katalog sparepart sepeda motor.",
    img: "https://images.unsplash.com/photo-1649878974663-c9269069bf87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fG1vdG9yY3ljbGUlMjBwYXJ0c3xlbnwwfHwwfHx8MA%3D%3D",
    path: "project1",
  },
  {
    title: "Perhitungan sederhana",
    desc: "Aplikasi pehitungan web sederhana.",
    img: "https://images.unsplash.com/photo-1544761634-dc512f2238a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcmhpdHVuZ2FufGVufDB8fDB8fHww",
    path: "project2",
  },
  {
    title: "Showroom Sepeda Motor",
    desc: "Website Katalog sepeda motor",
    img: "https://images.unsplash.com/photo-1590506093461-7b26beddcb39?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHNob3dyb29tJTIwc2VwZWRhJTIwbW90b3J8ZW58MHx8MHx8fDA%3D",
    path: "project3",
  },
  {
    title: "Posyandu",
    desc: "Website pencatatan data balita & ibu.",
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWx0aCUyMGNhcmV8ZW58MHx8MHx8fDA%3D",
    path: "project4",
  },
  {
    title: "Restoran",
    desc: "Aplikasi pemesanan makanan.",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80",
    path: "project5",
  },
  {
    title: "Toko Baju",
    desc: "Aplikasi penjualan baju.",
    img: "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=600&q=80",
    path: "project6",
  },
];

function Project() {
    const [darkMode, setDarkMode] = useState(true);
    const toggleTheme = () => setDarkMode(prev => !prev);
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#2a2a2a" : "#f0f0f0";
        document.body.style.color = darkMode ? "#f5f5f5" : "#222";
    }, [darkMode]);

    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
        <Navbar title="Project" onBack={handleBack} darkMode={darkMode} toggleTheme={toggleTheme} />
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
        >
          <div style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px",padding: "24px",}}>
        {project.map((p, i) => (
            <div key={i} onClick={() => navigate(`/project/${p.path}`)} style={{
                backgroundImage: `url(${p.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                color: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                minHeight: "200px",
                display: "flex",
                alignItems: "flex-end",
                cursor: "pointer",
                position: "relative",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={e => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.4)";
            }}
            onMouseLeave={e => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)";
            }}
            >
                <div style={{backgroundColor: "rgba(0,0,0,0.5)", width: "100%", padding: "12px", zIndex: 1, }}>
                    <h3 style={{ margin: "0 0 6px", fontSize: "18px" }}>{p.title}</h3>
                    <p style={{ fontSize: "14px", margin: 0 }}>{p.desc}</p>
                </div>
            </div>
        ))}
        </div>
        </motion.div>
        </>
    )
}

export default Project;