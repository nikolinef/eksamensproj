import React, { useState } from 'react';
import Pil from '../assets/folderpilned.svg';
import noImg from '../assets/noimg.png'; // Make sure to add the file extension

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    noImg,
    "billeder/midterbilledekarusel.jpg",
    "billeder/sidstebilledekarussel.jpg"
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <img
          id="venstrepil"
          src={Pil}
          alt="venstrepil"
          onClick={prevSlide}
          style={{ cursor: 'pointer' }}
        />
        <div className="img-carousel">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`billede ${index + 1}`}
              style={{ display: index === currentIndex ? 'block' : 'none' }}
            />
          ))}
        </div>
        <img
          id="højrepil"
          src={Pil}
          alt="højrepil"
          onClick={nextSlide}
          style={{ cursor: 'pointer' }}
        />
      </div>
    </section>
  );
}