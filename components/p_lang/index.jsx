


import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { customAxios } from "@/api";

const LanguageSelector = () => {
  const [languages, setLanguages] = useState([]);
  const [selected, setSelected] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    customAxios.get("/languages") 
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setLanguages(data);
        } else {
          console.error("API noto‘g‘ri formatda:", data);
        }
      })
      .catch((err) => console.error("API xatosi:", err));
  }, []);

  const toggleSelection = (lang) => {
    if (selected.includes(lang)) {
      setSelected(selected.filter((item) => item !== lang));
    } else {
      setSelected([...selected, lang]);
    }
  };

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 150;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="scroll-wrapper">
      <button className="scroll-btn" onClick={() => scrollContainer("left")}>❮</button>

      <div className="container" ref={containerRef}>
        {languages.map((lang) => (
          <button
            key={lang}
            className={`lang-button ${selected.includes(lang) ? "active" : ""}`}
            onClick={() => toggleSelection(lang)}
          >
            {lang}
          </button>
        ))}
      </div>

      <button className="scroll-btn" onClick={() => scrollContainer("right")}>❯</button>
    </div>
  );
};

export default LanguageSelector;
