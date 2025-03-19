"use client";

import React, { useEffect, useState } from "react";
import { cardio } from "ldrs";
import "./FullScreenLoader.css";

const FullScreenLoader: React.FC = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Register cardio only in the browser environment
    if (typeof window !== "undefined") {
      cardio.register();
    }

    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // Start fade-out after 2.8s
    }, 2800);

    const removeTimer = setTimeout(() => {
      setShowLoader(false); // Remove loader after 3.3s
    }, 3300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!showLoader) return null;

  return (
    <div className={`landing-loader ${fadeOut ? "fade-out" : ""}`}>
      <l-cardio size="80" stroke="4" speed="2" color="white"></l-cardio>
    </div>
  );
};

export default FullScreenLoader;