import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Projeto Saúde Mental</h1>
      <Outlet />
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
