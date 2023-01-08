import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Projeto Saúde Mental</h1>
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
