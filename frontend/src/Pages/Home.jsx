import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className="home">
        <p>
          Essa página é dedicada para cadastro de clínicas de saúde mental
          para ajuda de acordo com a sua localidade. Dedicada à alunos da Trybe.
        </p>
        <p>
          Aqui, queremos construir um banco de dados de locais com
          assistência psicológica gratuita ou de custo popular, então sinta-se
          livre para contribuir.
        </p>
        <div className="links">
          <Link to="/list">Clique aqui para ver a lista de locais</Link>
          <Link to="/register">Clique aqui para contribuir e adicionar um local ao nosso banco</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
