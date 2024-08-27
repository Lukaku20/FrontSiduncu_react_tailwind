// componentes/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="md:container md:mx-auto flex-grow">
        <Outlet /> {/* Aquí se renderizarán los componentes según la ruta */}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
