// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout';
import Navegacion from './componentes/Navegacion';
import Historia from './componentes/Historia';
import Recursos from './componentes/Recursos';
import Actualidad from './componentes/Actualidad';
import Informacion from './componentes/Informacion';
import Indice from './componentes/Indice';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Actualidad />} /> {/* "Actualidad" por defecto */}
          <Route path='indice' element={<Indice />} />
          <Route path="informacion-local" element={<Informacion/>} />
          <Route path="navegacion" element={<Navegacion />} />
          <Route path="historia" element={<Historia />} />
          <Route path="recursos" element={<Recursos />} />
          <Route path="actualidad" element={<Actualidad />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
