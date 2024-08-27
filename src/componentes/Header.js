// componentes/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-white shadow-lg p-4 flex flex-col items-center md:flex-row md:justify-between " style={{ backgroundImage: `url('https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/348249255_629802565378444_5217605022699242259_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=5f20-MIlkfMQ7kNvgGk1vfs&_nc_ht=scontent.fcor2-2.fna&oh=00_AYDnm0Cf98J23ayyFwh940jyNl1PKlqX5rsTTNidv3hc3A&oe=66D30F05')` }}>
      <img
        src="https://scontent.fcor2-2.fna.fbcdn.net/v/t39.30808-6/348432627_990531595645637_4832006329602695718_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TPPyLqmj014Q7kNvgFn7DQ3&_nc_ht=scontent.fcor2-2.fna&oh=00_AYAgHx3zCJmMl1NHOKxTuE0RkB0kANyfcd9JiGZDFFFiGg&oe=66D26DDB"
        alt="Logo de la empresa"
        className="w-40 h-auto mb-4 md:mb-0 rounded-lg border-4 border-blue-800 hover:shadow-lg transition-shadow"
      />
      <div className="flex flex-wrap justify-center gap-4">
        <Link to="/indice" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
          Índice
        </Link>
        <Link to="/informacion-local" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
          Información Local
        </Link>
        <Link to="/navegacion" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
          Navegación
        </Link>
        <Link to="/historia" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
          Historia
        </Link>
        <Link to="/recursos" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
          Recursos
        </Link>
        <Link to="/actualidad" className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-sky-500 transition">
          Actualidad
        </Link>
      </div>
    </nav>
  );
};

export default Header;

