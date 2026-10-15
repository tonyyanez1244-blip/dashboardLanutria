import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import './Layout.css';

function Layout({ children }) {
  return (
    <div className="dashboard-container">
      {/* 1. Barra Lateral */}
      <Sidebar />

      {/* 2. Área Central (Topbar + Contenido dinámico) */}
      <div className="main-wrapper">
        <Topbar />
        <main className="content-area">
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;