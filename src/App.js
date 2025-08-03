import React, {useState} from "react";
import { ReactTyped } from "react-typed";
import ParticlesComponent from "./components/particles";
import "./App.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function App() {
  const navigate = useNavigate();
  const [showtext, setShowText] = useState(false);
  const [showInput, setshowInput] = useState(false);
  const [name, setName] = useState("");
  const [showButton, setshowButton] = useState(false);
  const [animation, setAnimation] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.trim() !== ""){
      setshowButton(true);
      setAnimation("slideUp");
    } else {
      setAnimation("slideDown");
      setTimeout(() => setshowButton(false), 500);
    }
  };

  return (
    <>
      <ParticlesComponent id="particles" />
      <motion.div
        className="App"
        initial={{ opacity: 0}}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6 }}
      >
        <div>
        <h1 style={{ userSelect: "none", pointerEvents: "none", fontWeight: 'bold', fontSize: '35px'}}>
          <ReactTyped
            strings={["HI, My name is Muhamad Aldi Nur Hidayat Putra"]}
            typeSpeed={50}
            backSpeed={40}
            showCursor={false}
            onComplete={() => setShowText(true)}
          />
        </h1>

        {showtext && (
          <p style={{ userSelect: "none", pointerEvents: "none", fontFamily: 'Comfortaa, cursive' }}>
            <ReactTyped
              strings={["before we get started. what is your name?"]}
              typeSpeed={50}
              backSpeed={30}
              showCursor={false}
              onComplete={() => setshowInput(true)}
            />
          </p>
        )}

        {showInput && (
          <div className="input-box">
            <input 
              type="text"
              placeholder="insert your name here..."
              value={name}
              onChange={handleChange}
            />

            <div style={{height: "60px", marginTop: "10px"}}>
              {showButton && (
                <button
                  className={`btn ${animation}`}
                  onClick={() => navigate("/menu", {state: {username: name}})}
                >
                  Let's Go!
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      </motion.div>     
    </>
  )
}

export default App;
