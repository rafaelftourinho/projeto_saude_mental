import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoFetch from '../axios/config';

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
      email,
      preco,
    } = infos;

    await InfoFetch.post('/infos', {
      cidade,
      estado,
      endereco,
      telefone,
      email,
      preco,
    });

    navigate('/');
  };

  const handleChange = ({ target }) => {
    const { name } = target;
    setInfos({
      [name]: target.value,
    });
  };

  const arr = ['cidade', 'estado', 'endereco', 'telefone', 'email', 'preco'];

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
    </div>
  );
}

export default Register;
