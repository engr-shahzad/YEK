"use client";
import { useEffect, useState } from "react";

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [shouldHide, setShouldHide] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
      setTimeout(() => {
        setShouldHide(true);
      }, 900);
    };
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (shouldHide) return null;

  return (
    <div
      id="preloader"
      className={`preloader ${isLoaded ? "loaded" : ""}`}
      style={{
        opacity: isLoaded ? 0 : 1,
        transition: "opacity 600ms ease-in-out",
      }}
    >
      <div className="animation-preloader" style={{ textAlign: "center" }}>
        <h2 style={{ color: "#fff", fontSize: "28px", fontWeight: "bold", marginBottom: "12px" }}>
          Yaran e Khair.org
        </h2>
        <p style={{ color: "#ccc", fontSize: "16px" }}>Loading</p>
      </div>
    </div>
  );
};

export default Preloader;
