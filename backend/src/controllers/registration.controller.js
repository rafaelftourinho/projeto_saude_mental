const { registrationService } = require('../services');

const getAllInfos = async (_req, res) => {
  const infos = await registrationService.getAllInfos();
  res.status(200).json(infos);
};

const getInfoById = async (req, res) => {
  const { id } = req.params;

  const info = await registrationService.getInfoById(id);

  if (!info) return res.status(400).json('Informação não encontrada');

  return res.status(200).json(info);
};

const insertInfo = async (req, res) => {
  const {
    cidade,
    estado,
    endereco,
    telefone,
    contatos,
    preco,
  } = req.body;

  const info = await registrationService
    .insertInfo(cidade, estado, endereco, telefone, contatos, preco);

  return res.status(201).json(info);
};

const deleteInfo = async (req, res) => {
  const { id } = req.params;
  const info = await registrationService.deleteInfo(id);

  if (info) return res.status(info.type).json(info.message);
  return null;
};

module.exports = {
  getAllInfos,
  getInfoById,
  insertInfo,
  deleteInfo,
};
