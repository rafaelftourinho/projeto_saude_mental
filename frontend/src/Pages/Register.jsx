import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoFetch from '../axios/config';
import Footer from '../components/Footer';
import './Register.css';

const arr = ['cidade', 'estado', 'endereco', 'telefone', 'contatos', 'preco'];

function Register() {
  const [infos, setInfos] = useState({});

  const navigate = useNavigate();

  const createNewInfo = async (event) => {
    event.preventDefault();
    const {
      cidade,
      estado,
      endereco,
      telefone,
      contatos,
      preco,
    } = infos;

    try {
      await InfoFetch.post('/infos', {
        cidade,
        estado,
        endereco,
        telefone,
        contatos,
        preco,
      });
    } catch (error) {
      console.log(error);
    }
    navigate('/list');
  };

  const handleChange = ({ target }) => {
    const { name } = target;
    setInfos({
      ...infos,
      [name]: target.value,
    });
  };

  return (
    <div className="new-info">
      <h4>Inserir novas informações</h4>
      <form onSubmit={(e) => createNewInfo(e)}>
        <div className="form-control">
          {arr.map((info) => (
            <div key={info}>
              <label htmlFor={info}>
                {info}
              </label>
              <input
                type="text"
                name={info}
                id={info}
                placeholder={`Digite o ${info}`}
                onChange={handleChange}
              />
            </div>
          ))}
        </div>
        <input type="submit" value="Enviar informações" className="btn" />
      </form>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Register;
