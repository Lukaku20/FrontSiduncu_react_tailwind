import React, { useEffect, useState } from 'react';

const ListaNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Llamada a la API utilizando fetch
    fetch('http://localhost:8080/noticias/lista')
      .then(response => response.json())
      .then(data => setNoticias(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {noticias.map(noticia => (
        <div key={noticia.id} className="noticia">
          <h2>{noticia.titulo}</h2>
          <img src={noticia.imagenUrl} alt={noticia.titulo} />
          <p>{noticia.contenido}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaNoticias;