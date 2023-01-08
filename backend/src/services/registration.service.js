const { registrationModel } = require('../models');

const getAllInfos = async () => {
  const infos = await registrationModel.getAllInfos();
  return infos;
};

const getInfoById = async (id) => {
  const info = await registrationModel.getInfoById(id);

  return info;
};

const insertInfo = async (cidade, estado, endereco, telefone, contatos, preco) => {
  const insertId = await registrationModel
    .insertInfo(cidade, estado, endereco, telefone, contatos, preco);

  if (!insertId) return { type: '', message: '' };

  const infos = await registrationModel.getInfoById(insertId);

  return infos;
};

const deleteInfo = async (id) => {
  await registrationModel.deleteInfo(id);
  const deletedInfo = await registrationModel.getInfoById(id);

  if (!deletedInfo) return { type: 204, message: 'Excluído com sucesso' };

  return null;
};

module.exports = {
  getAllInfos,
  insertInfo,
  getInfoById,
  deleteInfo,
};
