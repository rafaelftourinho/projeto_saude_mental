import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InfoFetch from '../axios/config';
import './Register.css';

const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
  'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];

function Register() {
  const [infos, setInfos] = useState({});

  const navigate = useNavigate();

  const createNewInfo = async (event) => {
    event.preventDefault();
    const {
      nome,
      preco,
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      email,
      telefone,
      whatsapp,
    } = infos;

    try {
      await InfoFetch.post('/infos', {
        nome,
        preco,
        cep,
        rua,
        numero,
        complemento,
        bairro,
        cidade,
        estado,
        email,
        telefone,
        whatsapp,
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
      <form onSubmit={(e) => createNewInfo(e)}>
        <fieldset>
          <legend>Novo Cadastro</legend>
          <div>
            <div className="form-group" id="form-1">
              <label htmlFor="input_name">
                Nome do(a) profissional ou Clínica
                <input
                  type="text"
                  name="nome"
                  className="form-control"
                  id="input_name"
                  placeholder="Nome do(a) profissional ou Clínica"
                  onChange={handleChange}
                />
              </label>
            </div>
          </div>
          <div className="form-group" id="form-2">
            <div className="row">
              <label htmlFor="input_price">
                Valor:
                <input
                  type="text"
                  name="preco"
                  className="form-control"
                  id="input_price"
                  placeholder="100,00"
                  onChange={handleChange}
                />
              </label>
            </div>
            <label id="label_cep" htmlFor="input_cep">
              CEP:
              <input
                type="text"
                name="cep"
                className="form-control"
                id="input_cep"
                placeholder="05012-000"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group" id="form-3">
            <div className="row">
              <label htmlFor="input_street">
                Rua:
                <input
                  type="text"
                  name="rua"
                  className="form-control"
                  id="input_street"
                  placeholder="Rua Cardoso de Almeida"
                  onChange={handleChange}
                />
              </label>
            </div>
            <label id="label_cep" htmlFor="input_cep">
              Número:
              <input
                type="text"
                name="numero"
                className="form-control"
                id="input_cep"
                placeholder="547"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group" id="form-4">
            <div className="row">
              <label htmlFor="input_street">
                Complemento:
                <input
                  type="text"
                  name="complemento"
                  className="form-control"
                  id="input_street"
                  placeholder="Rua Cardoso de Almeida"
                  onChange={handleChange}
                />
              </label>
            </div>
            <label id="label_cep" htmlFor="input_cep">
              Bairro:
              <input
                type="text"
                name="bairro"
                className="form-control"
                id="input_cep"
                placeholder="547"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group" id="form-5">
            <div className="row">
              <label htmlFor="input_street">
                Cidade:
                <input
                  type="text"
                  name="cidade"
                  className="form-control"
                  id="input_street"
                  placeholder="Rua Cardoso de Almeida"
                  onChange={handleChange}
                />
              </label>
            </div>
            <label id="label_estado" htmlFor="input_cep">
              Estado:
              <select
                name="estado"
                onChange={handleChange}
              >
                {
                  estados.map((item) => (
                    <option
                      value={item}
                      key={item}
                    >
                      {item}
                    </option>
                  ))
                }
              </select>
            </label>
          </div>
          <div className="form-group" id="form-6">
            <label htmlFor="input_name">
              Email:
              <input
                type="text"
                name="email"
                className="form-control"
                id="input_name"
                placeholder="email@email.com"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group" id="form-7">
            <div className="row">
              <label htmlFor="input_tel">
                Telefone:
                <input
                  type="text"
                  name="telefone"
                  className="form-control"
                  id="input_tel"
                  placeholder="(11) 91234-5678"
                  onChange={handleChange}
                />
              </label>
            </div>
            <label id="label_whats" htmlFor="input_whats">
              WhatsApp:
              <input
                type="text"
                name="whatsapp"
                className="form-control"
                id="input_whats"
                placeholder="(11) 98541-5623"
                onChange={handleChange}
              />
            </label>
          </div>
        </fieldset>

        {/* {arr.map((info) => (
          <div key={info}>
            <label htmlFor={info}>
              {info}
            </label>
            <input
              type="text"
              name={info.toLowerCase()}
              id={info}
              placeholder={`Digite o ${info}`}
              onChange={handleChange}
            />
          </div>
        ))} */}

        <input type="submit" value="Enviar informações" className="btn" />
      </form>
    </div>
  );
}

export default Register;
