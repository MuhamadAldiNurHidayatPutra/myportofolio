import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { motion } from "framer-motion";

const projectData = {
  project1: {
    name: "Website Sparepart Sepeda Motor",
    desc: "Racing Ciawitali Banget is a static product catalog website for RCB motorcycle parts, built using HTML and CSS. It features a homepage slideshow, detailed product table, company profile, contact form, and social media icons",
    tech: "HTML, CSS",
    year: "2023",
    github: "#",
    demo: "#",
    img: [
        "/images/project1/1.PNG",
        "/images/project1/2.PNG",
        "/images/project1/3.PNG",
        "/images/project1/4.PNG"
    ]
  },
  project2: {
    name: "Simulasi Penjualan Motor & Pembayaran Listrik",
    desc: "This project includes two web-based simulations: motorcycle sales and electricity billing. It features interactive forms, automatic calculations (including discounts, interest, or electricity charges by kWh), and user-selectable options like accessories and payment methods.",
    tech: "HTML, CSS & JavaScript",
    year: "2023",
    github: "#",
    demo: "#",
    img: [
        "/images/project2/1.PNG",
        "/images/project2/2.PNG",
    ]
  },
  project3: {
    name: "Showroom Sepeda Motor Berbasis Web",
    desc: "A dynamic motorcycle showroom website developed using PHP and MySQL, with JavaScript for interactive features. Core functionalities include navigation (Home, About, Contact Us), a motorbike data input form, and an admin-only login system for data management.",
    tech: "HTML, PHP, CSS & JavaScript",
    year: "2024",
    github: "#",
    demo: "#",
    img: [
        "/images/project3/1.PNG",
        "/images/project3/2.PNG",
        "/images/project3/3.PNG",
        "/images/project3/4.PNG",
        "/images/project3/5.PNG",
    ]
  },
  project4: {
    name: "Sistem Posyandu Berbasis Web",
    desc: "A web application for managing Posyandu (community health post) data, built with PHP, CSS, and JavaScript. Key features include user login and full CRUD functionality for managing records such as children, mothers, and activity schedules.",
    tech: "PHP, CSS & JavaScript",
    year: "2025",
    github: "#",
    demo: "#",
    img: [
        "/images/project4/1.PNG",
        "/images/project4/2.PNG",
        "/images/project4/3.PNG",
        "/images/project4/4.PNG",
        "/images/project4/5.PNG",
    ]
  },
  project5: {
    name: "Sistem Informasi Manajemen Restoran",
    desc: "A desktop-based restaurant application developed using Java with NetBeans IDE 20, JDK 1.8, and MySQL as the database. The system is designed to support efficient restaurant operations through CRUD features for managing menu items, orders, customers, users, and transactions. It also includes an automated receipt printing feature using JasperReports to streamline customer service and reporting.",
    tech: "Java, MySQL, JasperReports",
    year: "2025",
    github: "#",
    demo: "#",
    img: [
        "/images/project5/1.PNG",
        "/images/project5/2.PNG",
        "/images/project5/3.PNG",
        "/images/project5/4.PNG",
        "/images/project5/5.PNG",
    ]
  },
  project6: {
    name: "Sistem Informasi Manajemen Toko Baju",
    desc: "A desktop-based clothing store management system developed using Java with NetBeans IDE 20 and JDK 21. It utilizes MySQL for database management and integrates with Jaspersoft Studio for generating automated receipts and reports. Key features include CRUD operations, automatic receipt printing, and the ability to generate daily, monthly, and yearly sales reports.",
    tech: "Java, MySQL, Jaspersoft Studio",
    year: "2025",
    github: "#",
    demo: "#",
    img: [
        "/images/project6/1.PNG",
        "/images/project6/2.PNG",
        "/images/project6/3.PNG",
        "/images/project6/4.PNG",
        "/images/project6/5.PNG",
        "/images/project6/6.PNG",
        "/images/project6/7.PNG",
    ]
  },
};

function ProjectDetail() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode((prev) => !prev);
  const { id } = useParams();
  const data = projectData[id];

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#1e1e1e" : "#f5f5f5";
    document.body.style.color = darkMode ? "#fff" : "#000";
  }, [darkMode]);

  const handleBack = () => {
    window.history.back();
  };

  if (!data) return <div>Project tidak ditemukan.</div>;

  return (
    <>
      <Navbar title={data.name} onBack={handleBack} darkMode={darkMode} toggleTheme={toggleTheme} />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <div style={{ padding: "40px", display: "flex", justifyContent: "center" ,alignItems: "center", minHeight: "75vh"}}>
        <div style={{
            backgroundColor: "#2a2a2a",
            padding: "32px",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "row",
            gap: "32px",
            maxWidth: "900px",
            width: "100%",
            boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
            alignItems: "flex-start"
        }}>
            <div style={{ width: "500px", height: "300px" }}>
            {Array.isArray(data.img) ? (
                <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                emulateTouch
                useKeyboardArrows
                >
                {data.img.map((src, i) => (
                    <div
                    key={i}
                    style={{
                        width: "100%",
                        height: "300px",
                        overflow: "hidden",
                        borderRadius: "12px",
                        position: "relative"
                    }}
                    onMouseMove={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        const rect = e.currentTarget.getBoundingClientRect();
                        const x = ((e.clientX - rect.left) / rect.width) * 100;
                        const y = ((e.clientY - rect.top) / rect.height) * 100;
                        img.style.transformOrigin = `${x}% ${y}%`;
                    }}
                    onMouseEnter={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        img.style.transform = "scale(1.8)";
                    }}
                    onMouseLeave={(e) => {
                        const img = e.currentTarget.querySelector("img");
                        img.style.transform = "scale(1)";
                        img.style.transformOrigin = "center center";
                    }}
                    >
                    <img
                        src={src}
                        alt={`Slide ${i + 1}`}
                        style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "contain",
                        borderRadius: "12px"
                        }}
                    />
                    </div>
                ))}
                </Carousel>
            ) : (
                <img
                src={data.img}
                alt={data.name}
                style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "contain",
                    borderRadius: "12px"
                }}
                />
            )}
            </div>

          <div style={{ flex: 1 }}>
            <h2 style={{ margin: -5, color: "#00bcd4" }}>{data.name}</h2>
            <p style={{ marginTop: "15px", marginBottom: "16px", color: "#fff",}}>{data.desc}</p>
            <div style={{ marginBottom: "8px", color: "#fff", }}><strong>Build with :</strong> {data.tech}</div>
            <div style={{ marginBottom: "8px", color: "#fff", }}><strong>Year :</strong> {data.year}</div>
            <div style={{ display: "flex", gap: "12px" , marginTop: "38px"}}>
              <a href={data.github} target="_blank" rel="noopener noreferrer">
                <button style={{
                  backgroundColor: "#333",
                  color: "#fff",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}>
                  Github
                </button>
              </a>
              <a href={data.demo} target="_blank" rel="noopener noreferrer">
                <button style={{
                  backgroundColor: "#00bcd4",
                  color: "#fff",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "8px",
                  cursor: "pointer"
                }}>
                  Live Demo 🔗
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </>
  );
}

export default ProjectDetail;