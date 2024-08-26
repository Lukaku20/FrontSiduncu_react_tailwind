// componentes/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow md:container md:mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
