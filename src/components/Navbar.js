import React from "react";

function Navbar({ title, onBack, darkMode, toggleTheme }) {
    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 16px",
                backgroundColor: darkMode ? "#1f1f1f" : "#e0e0e0",
                color: darkMode ? "white" : "black",
                borderBottom: "1px solid #333",
                height: "65px",
            }}
        >
            <button
                onClick={onBack}
                style={{
                    background: "none",
                    border: "none",
                    color: darkMode ? "white" : "black",
                    fontSize: "16px",
                    cursor: "pointer",
                    padding: "6px 10px",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                &lt; Back
            </button>

            <h1 style={{
                fontSize: "18px",
                fontWeight: "500",
                textAlign: "center",
                margin: 0,
                flex: 1,
            }}>
                {title}
            </h1>

            <div
                onClick={toggleTheme}
                style={{
                    width: "60px",
                    height: "30px",
                    backgroundColor: darkMode ? "#4a90e2" : "#999",
                    borderRadius: "20px",
                    display: "flex",
                    alignItems: "center",
                    padding: "3px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    justifyContent: "flex-start",
                }}
            >
                <div
                    style={{
                        width: "22px",
                        height: "22px",
                        backgroundColor: "#fff",
                        borderRadius: "50%",
                        transform: darkMode ? "translateX(30px)" : "translateX(2px)",
                        transition: "transform 0.3s ease",
                        fontSize: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    {darkMode ? "🌙" : "☀️"}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
