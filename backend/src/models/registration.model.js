const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getAllInfos = async () => {
  const infos = await prisma.local.findMany({
    // select: {
    //   id: true,
    //   nome: true,
    // address: {
    //   select: {
    //     cep: true,
    //     rua: true,
    //     numero: true,
    //     complemento: true,
    //     bairro: true,
    //     cidade: true,
    //     estado: true,
    //   },
    // },
    // contacts: {
    //   select: {
    //     email: true,
    //     telefone: true,
    //     whatsapp: true,
    //   },
    // },
    //   preco: true,
    // },
    include: {
      address: true,
      contacts: true,
    },
  });

  return infos;
};

const getInfoById = async (id) => {
  const result = await prisma.local.findFirst({
    where: { id },
    // select: {
    //   id: true,
    //   nome: true,
    // address: {
    //   select: {
    //     cep: true,
    //     rua: true,
    //     numero: true,
    //     complemento: true,
    //     bairro: true,
    //     cidade: true,
    //     estado: true,
    //   },
    // },
    // contacts: {
    //   select: {
    //     email: true,
    //     telefone: true,
    //     whatsapp: true,
    //   },
    // },
    //   preco: true,
    // },
    include: {
      address: true,
      contacts: true,
    },
  });

  return result;
};

const insertInfo = async ({
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
}) => {
  const newInfo = await prisma.local.create({
    data: {
      nome,
      preco,
    },
  });
  await prisma.address.create({
    data: {
      cep,
      rua,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      localId: newInfo.id,
    },
  });
  await prisma.contacts.create({
    data: {
      email,
      telefone,
      whatsapp,
      localId: newInfo.id,
    },
  });
  return newInfo;
};

// const deleteInfo = async (id) => {
//   await conn.execute('DELETE FROM local WHERE id = ?', [id]);
// };

module.exports = {
  getAllInfos,
  insertInfo,
  getInfoById,
  // deleteInfo,
};
