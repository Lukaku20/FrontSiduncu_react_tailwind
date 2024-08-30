// componentes/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white bg-cover bg-center mx-1 w-100" >
      <Header />
      <main className="md:container md:mx-auto flex-grow bg-cover bg-center" style={{ backgroundImage: `url('https://scontent.fcor2-2.fna.fbcdn.net/v/t1.18169-9/1378784_534884139914976_1991061525_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=b895b5&_nc_ohc=zCvaUSZisMAQ7kNvgHH8-_j&_nc_ht=scontent.fcor2-2.fna&oh=00_AYATVGmZ14SpsqIKT9vLUGBmbxuNHUBxytz8JghKZVUKXA&oe=66F4856A')` }}>
        
        <Outlet /> {/* Aquí se renderizarán los componentes según la ruta */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
