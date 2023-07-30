import React, { useEffect, useRef } from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  const botirjonRef = useRef([]);
  const portfolioRef = useRef([]);

  useEffect(() => {
    const botirjonText = "Botirjon Shokirov";
    const portfolioText = "Portfolio";

    // Clear the loadingContainer before appending letters
    const loadingContainer = document.getElementById("loading-container");
    loadingContainer.innerHTML = "";

    const botirjonLetters = botirjonText.split("");
    botirjonLetters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.color = "#ffc107"; // Yellow color for Botirjon Shokirov letters
      loadingContainer.appendChild(span);
      span.classList.add("vanish-botirjon"); // Use the correct class name for Botirjon letters
      botirjonRef.current.push(span);
    });

    const portfolioLetters = portfolioText.split("");
    portfolioLetters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.color = "#ffffff"; // White color for Portfolio letters
      loadingContainer.appendChild(span);
      span.classList.add("vanish-portfolio"); // Use the correct class name for Portfolio letters
      portfolioRef.current.push(span);
    });

    // Start the vanishing animation for Botirjon Shokirov and Portfolio letters
    const botirjonAnimationTimeout = setTimeout(() => {
      botirjonRef.current.forEach((letterSpan) => {
        letterSpan.style.opacity = 0;
        letterSpan.style.color = "#000"; // Change the letter color to black when vanishing
      });
    }, 3000); // Adjust the delay before starting the Botirjon Shokirov vanishing animation (3000 milliseconds)

    const portfolioAnimationTimeout = setTimeout(() => {
      portfolioRef.current.forEach((letterSpan) => {
        letterSpan.style.opacity = 0;
        letterSpan.style.color = "#000"; // Change the letter color to black when vanishing
      });
    }, 2000); // Adjust the delay before starting the Portfolio vanishing animation (4500 milliseconds)

    // Clean up
    return () => {
      clearTimeout(botirjonAnimationTimeout);
      clearTimeout(portfolioAnimationTimeout);
    };
  }, []);

  return (
    <div className="loading-container" id="loading-container">
      {/* Initial container without letters */}
    </div>
  );
};

export default LoadingScreen;
