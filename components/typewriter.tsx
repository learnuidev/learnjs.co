"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBetween?: number;
  displayCursor?: boolean;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  texts,
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseBetween = 1500,
  displayCursor = true,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const currentText = texts[currentTextIndex];

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (isDeleting) {
      if (displayedText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        return;
      }

      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, deletingSpeed);

      return () => clearTimeout(timer);
    } else {
      if (displayedText === currentText) {
        const timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseBetween);

        return () => clearTimeout(timer);
      }

      const timer = setTimeout(() => {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }, typingSpeed);

      return () => clearTimeout(timer);
    }
  }, [
    currentTextIndex,
    displayedText,
    isDeleting,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseBetween,
  ]);

  console.log("displayedText !== currentText", displayedText !== currentText);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (displayedText !== currentText) {
        setShowCursor(() => true);
      } else {
        setShowCursor((prev) => !prev);
      }
    }, 530); // Blink every 530ms

    return () => clearInterval(cursorInterval);
  }, [currentText, displayedText]);

  return (
    <span className="relative text-pink-400 font-bold">
      {displayedText}
      {displayCursor && (
        <span
          className={`absolute ${showCursor ? "opacity-100" : "opacity-0"} transition-opacity duration-100 text-gray-300`}
          style={{ marginLeft: "1px" }}
        >
          |
        </span>
      )}
    </span>
  );
};
