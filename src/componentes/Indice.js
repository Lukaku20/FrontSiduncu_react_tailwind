import React from 'react';

const Indice = () => {
  return (
    <div className="p-6 bg-white">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">Índice del Proyecto Web</h1>
      <table className="table-auto w-full text-left border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100">Parte del Proyecto</th>
            <th className="px-4 py-2 border border-gray-300 bg-gray-100">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Header</td>
            <td className="px-4 py-2 border border-gray-300">Encabezado del sitio con la barra de navegación.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Footer</td>
            <td className="px-4 py-2 border border-gray-300">Pie de página con enlaces y derechos de autor.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Layout</td>
            <td className="px-4 py-2 border border-gray-300">Contenedor principal que incluye Header, Footer y el contenido central.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">Carrusel</td>
            <td className="px-4 py-2 border border-gray-300">Sección de imágenes en movimiento en la página principal.</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border border-gray-300">BorderScreen</td>
            <td className="px-4 py-2 border border-gray-300">Sección de la pizarra interactiva con botones de navegación.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Indice;
