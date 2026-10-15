import React from 'react';
import { Search, Bell, Sun, ShoppingBag } from 'lucide-react';
import './Topbar.css'; // Asegúrate de importar el .css, no el .js

function Topbar() {
  return (
    <header className="topbar">
      <div className="search-box">
        <Search size={18} className="search-icon" />
        <input 
          type="text" 
          placeholder="Buscar estudiantes, módulos..." 
          className="search-input"
        />
      </div>

      <div className="topbar-actions">
        <button className="icon-btn"><Sun size={18} /></button>
        <button className="icon-btn"><ShoppingBag size={18} /></button>
        <button className="icon-btn badge-btn">
          <Bell size={18} />
          <span className="dot"></span>
        </button>

        <div className="profile-badge">
          <img 
            src="https://api.dicebear.com/7.x/bottts/svg?seed=Tony" 
            alt="Usuario" 
            className="avatar-img" 
          />
        </div>
      </div>
    </header>
  );
}

export default Topbar;