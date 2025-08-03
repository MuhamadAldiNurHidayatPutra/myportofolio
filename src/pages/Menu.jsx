import React, { useState, useEffect} from "react";
import Navbar from "../components/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import { FaProjectDiagram, FaUserAlt, FaEnvelope} from "react-icons/fa";
import { motion } from "framer-motion";

function Menu() {
    const [darkMode, setDarkMode] = useState(true);
    const toggleTheme = () => setDarkMode(prev => !prev);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#2a2a2a" : "#f0f0f0";
        document.body.style.color = darkMode ? "#f5f5f5" : "#222";
    }, [darkMode]);

    const handleBack = () => {
        window.history.back();
    };

    const location = useLocation();
    const navigate = useNavigate();
    const username = location.state?.username || "user";
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const menuItems = [
        { id: 1, title: "Project", icon: <FaProjectDiagram />, path: "/project" },
        { id: 3, title: "About Me", icon: <FaUserAlt />, path: "/about" },
        { id: 4, title: "Contact", icon: <FaEnvelope />, path: "/contact" },
    ];

    return (
        <>
            <Navbar title="Menu" onBack={handleBack} darkMode={darkMode} toggleTheme={toggleTheme} />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
            >
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                <p className={`responsive-text ${darkMode ? "dark-text" : "light-text"}`}>
                    Hello <strong>{username}</strong>, thank you for visiting my portfolio! What would you like to know about me? Click on the menus down below.
                </p>
            </div>

            <div style={{ marginTop: '20px', padding: '0 16px' }}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="menu-item"
                        onClick={() => navigate(item.path)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: darkMode ? '#1f1f1f' : '#ffffff',
                            color: darkMode ? 'white' : 'black',
                            border: darkMode ? '1px solid #444' : '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '12px 16px',
                            marginBottom: '5px',
                            cursor: 'pointer',
                            transform: hoveredIndex === index ? 'scale(1.01)' : 'scale(1)',
                            transition: 'transform 0.2s ease-in-out',
                            fontFamily: 'Comfortaa, cursive',
                            fontSize: '15px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{ color: darkMode ? 'white' : 'black' }}>{item.icon}</div>
                            <div style={{ fontWeight: hoveredIndex === index ? 'bold' : 'normal' }}>{item.title}</div>
                        </div>
                        <div style={{ color: darkMode ? '#aaa' : '#444' }}>{'>'}</div>
                    </div>
                ))}
            </div>
            </motion.div>
        </>
    );
}

export default Menu;
