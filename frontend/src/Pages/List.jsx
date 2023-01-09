import React, { useState, useEffect } from 'react';
import InfoFetch from '../axios/config';

function List() {
  const [info, setInfo] = useState([]);

  const getInfos = async () => {
    try {
      const response = await InfoFetch.get('/infos');
      const { data } = response;

      setInfo(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getInfos();
  });

  return (
    <div>
      {info.map((post) => (
        <div className="info" key={post.id}>
          <p>{post.cidade}</p>
          <p>{post.estado}</p>
          <p>{post.endereco}</p>
          <p>{post.telefone}</p>
          <p>{post.contatos}</p>
          <p>{post.preco}</p>
          <br />
          {/* SÓ ESTÁ AQUI PRA MELHOR VISUALIZAÇÃO */}
        </div>
      ))}
    </div>
  );
}

export default List;
