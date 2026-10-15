import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';

function PaginaEstudiantes() { return <h2>Sección de Estudiantes</h2>; }
function PaginaCalificaciones() { return <h2>Sección de Calificaciones</h2>; }
function PaginaAsistencias() { return <h2>Sección de Asistencias</h2>; }
function PaginaReportes() { return <h2>Sección de Reportes</h2>; }

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/estudiantes" element={<PaginaEstudiantes />} />
          <Route path="/calificaciones" element={<PaginaCalificaciones />} />
          <Route path="/asistencias" element={<PaginaAsistencias />} />
          <Route path="/reportes" element={<PaginaReportes />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;