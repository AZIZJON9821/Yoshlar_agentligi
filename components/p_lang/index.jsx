import React, { useRef, useState, useEffect } from "react";
import cls from "./lang.module.css";
import { customAxios } from "@/api";

const LanguageSelector = ({ onSelect }) => {
  const [languages, setLanguages] = useState([]);
  const [selected, setSelected] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    customAxios
      .get("/categories")
      .then((res) => {

        if (Array.isArray(res.data.data)) {
          setLanguages(res.data.data);
        } else {
          console.error("API noto‘g‘ri formatda:", res.data);
        }

        setLanguages(res.data);

      })
      .catch((err) => console.error("API xatosi:", err));
  }, []);

  const toggleSelection = (lang) => {
    const isSelected = selected.some((item) => item.id === lang.id);

    let updated;
    if (isSelected) {
      updated = selected.filter((item) => item.id !== lang.id);
    } else {
      updated = [...selected, lang];
    }

    setSelected(updated);

    if (onSelect) {
      onSelect(updated.map((item) => item.id));
    }
  };

  const scrollContainer = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 150;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={cls["scroll-wrapper"]}>
      <button
        className={cls["scroll-btn"]}
        onClick={() => scrollContainer("left")}
      >
        ❮
      </button>

      <div className={cls["container"]} ref={containerRef}>
        {languages.data?.map((lang) => (
          <button
            key={lang.id}
            className={`${cls["lang-button"]} ${

              selected.some((item) => item.id === lang.id) ? cls["active"] : ""

            }`}
            onClick={() => toggleSelection(lang)}
          >
            {lang.name}
          </button>
        ))}
      </div>

      <button
        className={cls["scroll-btn"]}
        onClick={() => scrollContainer("right")}
      >
        ❯
      </button>
    </div>
  );
};

export default LanguageSelector;
