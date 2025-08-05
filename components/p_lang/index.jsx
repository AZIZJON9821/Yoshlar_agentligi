import React, { useRef } from "react";
import cls from "./lang.module.css";
import { useAuth } from "@/context";
import { useCategories } from "@/hook/useCategories";
import { useRouter } from "next/router";

const LanguageSelector = () => {
  const router = useRouter();

  const { selected, setSelected } = useAuth();
  const containerRef = useRef(null);
  const { data: languages } = useCategories();

  const toggleSelection = (lang) => {
    const isSelected = selected.some((item) => item.id === lang.id);

    if (isSelected) {
      const updatedSelection = selected.filter((item) => item.id !== lang.id);
      setSelected(updatedSelection);
    } else {
      const updatedSelection = [...selected, lang];
      setSelected(updatedSelection);
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

  const hasFewButtons = languages?.length <= 4;

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
        {languages?.map((lang) => (
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
