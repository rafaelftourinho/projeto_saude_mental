const insertInfo = async (cidade, estado, endereco, telefone, contatos, preco) => {
  const [{ insertId }] = await conn.execute('INSERT INTO local (cidade, estado, endereco, telefone, contatos, preco) VALUES (?, ?, ?, ?, ?, ?)', [cidade, estado, endereco, telefone, contatos, preco]);

  console.log(insertId);
};

insertInfo('Rio de Janeiro', 'RJ', 'aaa', 'aaaa', 'aaaa', 'gratuito');