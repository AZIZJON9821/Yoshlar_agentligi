import React, { useRef, useState, useEffect } from "react";
import "./style.css";
import { customAxios } from "@/api";

const LanguageSelector = () => {
  const [languages, setLanguages] = useState([]);
  const [selected, setSelected] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    customAxios.get("/categories")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setLanguages(res.data);
        } else {
          console.error("API noto‘g‘ri formatda:", res.data);
        }
      })
      .catch((err) => console.error("API xatosi:", err));
  }, []);

  const toggleSelection = (lang) => {
    const isSelected = selected.some((item) => item.id === lang.id);

    if (isSelected) {
      const updated = selected.filter((item) => item.id !== lang.id);
      setSelected(updated);
      console.log("Tanlanmagan categoryId:", lang.id);
    } else {
      const updated = [...selected, lang];
      setSelected(updated);
      console.log("Tanlangan categoryId:", lang.id);
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
            key={lang.id}
            className={`lang-button ${selected.some((item) => item.id === lang.id) ? "active" : ""}`}
            onClick={() => toggleSelection(lang)}
          >
            {lang.name}
          </button>
        ))}
      </div>

      <button className="scroll-btn" onClick={() => scrollContainer("right")}>❯</button>
    </div>
  );
};

export default LanguageSelector;
