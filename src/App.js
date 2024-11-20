import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Proveedores from './components/Proveedores';
import Articulos from './components/Articulos';
import Ventas from './components/Ventas';

const App = () => {
  return (
    <Router>
      <div>
        {/* Menú de navegación */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Ejer4</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/proveedores">Proveedores</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/articulos">Artículos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ventas">Ventas</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Rutas */}
        <div className="container mt-4">
          <Routes>
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/" element={<h1>Bienvenido a la aplicación</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
