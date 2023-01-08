const conn = require('./connection');

const getAllInfos = async () => {
  const [infos] = await conn.execute('SELECT * FROM local');

  return infos;
};

const getInfoById = async (id) => {
  const [[result]] = await conn.execute('SELECT * FROM local WHERE id = ?', [id]);

  return result;
};

const insertInfo = async (cidade, estado, endereco, telefone, contatos, preco) => {
  const [{ insertId }] = await conn.execute('INSERT INTO local (cidade, estado, endereco, telefone, contatos, preco) VALUES (?, ?, ?, ?, ?, ?)', [cidade, estado, endereco, telefone, contatos, preco]);

  return insertId;
};

const deleteInfo = async (id) => {
  await conn.execute('DELETE FROM local WHERE id = ?', [id]);
};

module.exports = {
  getAllInfos,
  insertInfo,
  getInfoById,
  deleteInfo,
};
