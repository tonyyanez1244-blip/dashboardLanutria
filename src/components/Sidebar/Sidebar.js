import React from 'react';
import { 
  Layers, 
  LayoutGrid, 
  Users, 
  BarChart3, 
  FolderKanban, 
  Calendar, 
  Mail, 
  Settings 
} from 'lucide-react';
import './Sidebar.css';

function Sidebar() {
  const menuItems = [
    { title: 'Dashboard', active: true },
    { title: 'Estudiantes', active: false },
    { title: 'Calificaciones', active: false },
    { title: 'Asistencias', active: false },
    { title: 'Reportes', active: false },
  ];

  return (
    <aside className="double-sidebar">
      {/* Columna estrecha de navegación primaria */}
      <div className="rail-sidebar">
        <div className="logo-badge">LN</div>
        <div className="rail-icons">
          <button className="rail-btn active"><LayoutGrid size={20} /></button>
          <button className="rail-btn"><Layers size={20} /></button>
          <button className="rail-btn"><Users size={20} /></button>
          <button className="rail-btn"><BarChart3 size={20} /></button>
        </div>
        <div className="rail-footer">
          <button className="rail-btn"><Settings size={20} /></button>
        </div>
      </div>

      {/* Columna secundaria con enlaces de texto */}
      <div className="menu-sidebar">
        <div className="menu-header">
          <span className="section-label">PORTAL</span>
          <h2 className="brand-title">La Nutria</h2>
        </div>

        <nav className="nav-group">
          <span className="group-title">GESTIÓN</span>
          {menuItems.map((item, index) => (
            <button 
              key={index} 
              className={`nav-link ${item.active ? 'selected' : ''}`}
            >
              <FolderKanban size={16} />
              <span>{item.title}</span>
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;