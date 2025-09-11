// src/components/Cursor.jsx
import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth motion with spring
  const springConfig = { damping: 20, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        width: 25,
        height: 25,
        borderRadius: "50%",
        backgroundColor: "#67C090",
        boxShadow: "0 0 10px rgba(29, 78, 216, 0.7), 0 0 20px rgba(29, 78, 216, 0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
      whileHover={{ scale: 1.5 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  );
};

export default Cursor;
