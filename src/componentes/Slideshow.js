import React, { useState, useEffect } from "react";
import "./Slideshow.css";
import imagem1 from "../images/imagem1-slideshow.jpg";
import imagem2 from "../images/imagem2-slideshow.jpg";
import imagem3 from "../images/imagem3-slideshow.jpg";
import imagem4 from "../images/imagem4.jpg";
import imagemEstatica from "../images/channel.gif";

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [showStatic, setShowStatic] = useState(false);
  const slides = [imagem1, imagem2, imagem3, imagem4];
  const handleContextMenu = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setShowStatic(true);
      setTimeout(() => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setShowStatic(false);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setShowStatic(true);
    setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setShowStatic(false);
    }, 100);
  };

  const prevSlide = () => {
    setShowStatic(true);
    setTimeout(() => {
      setSlideIndex(
        (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
      );
      setShowStatic(false);
    }, 100);
  };

  return (
    <div className="slideshow">
      <div className="slides">
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className={index === slideIndex ? "active" : ""}
            onContextMenu={handleContextMenu}
          />
        ))}
        {showStatic && (
          <img
            src={imagemEstatica}
            alt="Estática"
            className="static"
            onContextMenu={handleContextMenu}
          />
        )}
      </div>
      <a className="prev" onClick={prevSlide}>
        <i className="fas fa-chevron-left"></i>
      </a>
      <a className="next" onClick={nextSlide}>
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
};

export default Slideshow;
