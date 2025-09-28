import React, { useState, useEffect } from "react";

export default function Ai() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleChat = () => setIsOpen(prev => !prev);

  // Responsive width & height
  const getChatSize = () => {
    if (windowWidth < 500) return { width: "90%", height: "50%" };
    if (windowWidth < 1024) return { width: "70%", height: "500px" };
    return { width: "400px", height: "500px" };
  };

  const { width, height } = getChatSize();

  return (
    <>
      {/* Floating button */}
      <button
        onClick={toggleChat}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          width: 60,
          height: 60,
          borderRadius: "50%",
          background: "#9538E2",
          color: "#fff",
          fontSize: 24,
          border: "none",
          cursor: "pointer",
          zIndex: 1100,
        }}
      >
        💬
      </button>

      {/* Webchat iframe */}
      {isOpen && (
        <iframe
          src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/09/09/02/20250909022251-6B0OQB3C.json"
          style={{
            position: "fixed",
            bottom: 90,
            right: 20,
            width,
            height,
            border: "1px solid #ccc",
            borderRadius: 10,
            zIndex: 1000,
            transition: "all 0.3s ease-in-out",
          }}
          title="TechSphere"
        />
      )}
    </>
  );
}
