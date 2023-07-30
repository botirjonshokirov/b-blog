import React, { useEffect, useRef } from "react";
import "./CursorAnimation.css";

const CursorAnimation = () => {
  const coords = { x: 0, y: 0 };
  const circlesRef = useRef([]);

  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  useEffect(() => {
    // Get the actual array from the useRef object
    const circles = circlesRef.current.filter((circle) => circle !== null);

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    const handleMouseMove = (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animateCircles() {
      let x = coords.x;
      let y = coords.y;

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.transform = `scale(${
          (circles.length - index) / circles.length
        })`;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [colors]);

  return (
    <>
      {/* Create the circles div elements */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          className="circle"
          key={index}
          ref={(el) => (circlesRef.current[index] = el)}
        ></div>
      ))}
    </>
  );
};

export default CursorAnimation;
