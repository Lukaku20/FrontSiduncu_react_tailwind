import React from 'react';
import { useState } from 'react';
import image1 from '../assets/imagen_1.jpg';
import image2 from '../assets/imagen_2.jpeg';
import image3 from '../assets/imagen_3.jpg';
import image4 from '../assets/imagen_4.jpg';
import image5 from '../assets/imagen_5.jpg';

const images = [image1, image2, image3, image4, image5];

const Carrusel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="p-3 overflow-hidden relative w-full h-[500px]">
      <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="min-w-full h-[500px]">
            <img 
              src={image} 
              alt={`Imagen ${index + 1}`} 
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300 shadow-lg" 
            />
          </div>
        ))}
      </div>
      <button className="absolute top-1/2 left-0 p-4 bg-white text-black transform -translate-y-1/2" onClick={prevSlide}>{"<"}</button>
      <button className="absolute top-1/2 right-0 p-4 bg-white text-black transform -translate-y-1/2" onClick={nextSlide}>{">"}</button>
    </div>
  );
};

export default Carrusel;