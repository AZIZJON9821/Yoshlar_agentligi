import React, { useRef, useState, useEffect } from "react";
import cls from "./lang.module.css";
import { customAxios } from "@/api/instances/codeMuseum";

const LanguageSelector = () => {
  const [languages, setLanguages] = useState({ data: [] });
  const [selected, setSelected] = useState([]);
  const containerRef = useRef(null);

  const fallbackLanguages = {
    data: [
      { id: 1, name: "JavaScript" },
      { id: 2, name: "Python" },
      { id: 3, name: "Java" },
      { id: 4, name: "C++" },
      { id: 5, name: "TypeScript" },
      { id: 6, name: "React" },
      { id: 7, name: "Node.js" },
      { id: 8, name: "PHP" },
      { id: 9, name: "Ruby" },
      { id: 10, name: "Go" },
    ],
  };

  useEffect(() => {
    customAxios
      .get("/categories")
      .then((res) => {
        console.log("API Response:", res.data);
        setLanguages(res.data);
      })
      .catch((err) => {
        console.error("API xatosi:", err);
        setLanguages(fallbackLanguages);
      });
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

      customAxios
        .get(`/categories/${lang.id}`)
        .then((res) => {
          console.log("Backenddan kelgan ma'lumot:", res.data);
        })
        .catch((err) => {
          console.error("So'rov xatosi:", err);
        });
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

  const hasFewButtons = languages.data?.length <= 5;

  return (
    <div className={cls["scroll-wrapper"]}>
      <button
        className={cls["scroll-btn"]}
        onClick={() => scrollContainer("left")}
      >
        ❮
      </button>

      <div
        className={`${cls["container"]} ${
          hasFewButtons ? cls["few-buttons"] : ""
        }`}
        ref={containerRef}
      >
        {languages.data?.map((lang) => (
          <button
            key={lang.id}
            className={`${cls["lang-button"]} ${
              selected.some((item) => item.id === lang.id) ? cls["active"] : ""
            } ${hasFewButtons ? cls["stretched"] : ""}`}
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
