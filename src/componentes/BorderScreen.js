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
      <div className="mb-4 bg-[url('https://scontent.fcor2-2.fna.fbcdn.net/v/t1.18169-9/1378784_534884139914976_1991061525_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=b895b5&_nc_ohc=zCvaUSZisMAQ7kNvgHH8-_j&_nc_ht=scontent.fcor2-2.fna&oh=00_AYATVGmZ14SpsqIKT9vLUGBmbxuNHUBxytz8JghKZVUKXA&oe=66F4856A')] bg-cover bg-center">
    <div className="border border-azulMarino p-5 bg-white rounded-lg shadow-lg"
    >
        <button onClick={() => setCurrentSection('novedades')} className="btn bg-azulMarino text-white">Novedades</button>
        <button onClick={() => setCurrentSection('beneficios')} className="btn bg-azulMarino text-white ml-2">Beneficios</button>
        <button onClick={() => setCurrentSection('recursos')} className="btn bg-azulMarino text-white ml-2">Recursos</button>
      </div>
      <div className="text-azulMarino">
        {sections[currentSection]}
      </div>
    </div>
  );
}

export default BorderScreen;

