"use client";

import { IoChevronUp } from "react-icons/io5";
import "./ScrollToTop.scss";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isScroll, setIsScroll] = useState(false);

  const handleScroll = () => {
    const scroll = window.scrollY;
    const shouldBeVisible = scroll > 600;
    setIsScroll(shouldBeVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 return (
  <a
    href="#"
    className={`voltar-para-o-topo ${isScroll ? "visible" : ""}`}
  >
    <span style={{ display: "none" }}>.</span>
    <IoChevronUp size={30} />
  </a>
  );
}
