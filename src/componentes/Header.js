import React from 'react';

const Header = () => {
  return (
<nav className="bg-white/90 shadow-lg p-4 flex flex-col items-center md:flex-row md:justify-between"     style={{ backgroundImage: 'url(https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/348249255_629802565378444_5217605022699242259_n.jpg?stp=dst-jpg_s960x960&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=5f20-MIlkfMQ7kNvgGk1vfs&_nc_ht=scontent.fcor2-2.fna&oh=00_AYATfL0PTvH8UpqqxHS88r5eLHzyllPCqS85ga61KFMZ8Q&oe=66D26645)', backgroundSize: 'cover', opacity: '0.8' }}>

      <img
        src="https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/348432627_990531595645637_4832006329602695718_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TPPyLqmj014Q7kNvgFn7DQ3&_nc_ht=scontent.fcor2-2.fna&oh=00_AYAgHx3zCJmMl1NHOKxTuE0RkB0kANyfcd9JiGZDFFFiGg&oe=66D26DDB"
        alt="Logo de la empresa"
        className="w-40 h-auto mb-4 md:mb-0 border-4 border-blue-900 rounded-full transition duration-500 ease-in-out transform hover:scale-105 shadow-lg" // Ancho máximo de 200px con borde azul marino y brillo
      />

      {/* Botones de navegación */}
      <div className="flex flex-wrap justify-center gap-4">
  <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
    Índice
  </button>
  <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
    Información Local
  </button>
  <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
    Navegación
  </button>
  <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
    Historia
  </button>
  <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
    Recursos
  </button>
  <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
    Actualidad
  </button>
</div>

    </nav>
  );
};

export default Header;


