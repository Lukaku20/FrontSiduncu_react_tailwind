// componentes/BorderScreen.js
import React, { useState } from 'react';

const BorderScreen = () => {
  const [currentSection, setCurrentSection] = useState('novedades');

  const sections = {
    novedades: 'Contenido de Novedades',
    beneficios: 'Contenido de Beneficios',
    recursos: 'Contenido de Recursos'
  };

  return (
      <div className="mb-4">
    <div className="flex space-x-4 border border-azulMarino p-5 bg-white rounded-lg shadow-lg"
    >
        <button onClick={() => setCurrentSection('novedades')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">Novedades</button>
        <button onClick={() => setCurrentSection('beneficios')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">Beneficios</button>
        <button onClick={() => setCurrentSection('recursos')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">Recursos</button>
      </div>
      <div className="text-azulMarino">
        {sections[currentSection]}
      </div>
    </div>
  );
}

export default BorderScreen;

