"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const visibleHandler = () => {
      window.scrollY > 120 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener("scroll", visibleHandler);

    return () => window.removeEventListener("scroll", visibleHandler);
  }, []);

  const scrollToTopHanlder = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`bottom-4 fixed right-4 ${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-all`}
    >
      <button
        onClick={scrollToTopHanlder}
        className="rounded-full shadow-gray-400 shadow w-14 h-14 bg-white flex justify-center items-center duration-500"
      >
        <IoIosArrowUp size={24} />
      </button>
    </div>
  );
}

export default ScrollToTop;
