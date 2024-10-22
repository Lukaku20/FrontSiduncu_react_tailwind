
import React, { useEffect, useState } from 'react';

const ListaNoticias = () => {
    const [noticias, setNoticias] = useState([]);
  
    useEffect(() => {
      // Llamada a la API utilizando fetch
      fetch('http://localhost:8080/noticias/lista')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error al obtener las noticias');
          }
          return response.json();
        })
        .then(data => {
          setNoticias(data); 
          console.log(data)// Actualizamos el estado con las noticias obtenidas
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []); // Este array vacío e array vacío asegura que e



  return (
    <div>
    <h1>Lista de Noticias!!!!!!!!!!!!!!!!!</h1>
      <ul>
        {noticias.map((noticia) => (
          <li key={noticia.id}>{noticia.titulo} - {noticia.contenido}</li>
        ))}
      </ul>
    
    </div>
  )
    }
    export default ListaNoticias;
