import React, { useState } from 'react';

const Buscador = ({ data = [] }) => {
  const [query, setQuery] = useState('');

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border border-gray-300 rounded"
      />
      <ul className="mt-2">
        {filteredData.map((item, index) => (
          <li key={index} className="p-2 border-b border-gray-200">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Buscador;
