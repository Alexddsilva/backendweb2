const Creche = require("../models/Creche");
const Endereco = require("../models/Endereco");
const utils = require("../utils/jwtUtils");

const CrecheController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const creche = await Creche.findByPk(id);

    return response.status(200).json(creche);
  },
  create: async (request, response) => {
    const { creche, endereco } = request.body;
    try {
      const newEndereco = await Endereco.create(endereco);
      const newCreche = await Creche.create(creche);
      Creche.update(
        {
          id_endereco: newEndereco.getDataValue("id"),
        },
        {
          where: {
            id: newCreche.getDataValue("id"),
          },
        }
      );

      newCreche.id_endereco = newEndereco.getDataValue("id");

      return response.status(201).json({ ...newCreche.dataValues });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attCreche = request.body;
    try {
      const updatedCreche = await Creche.update(attCreche);
      return response.status(200).json(updatedCreche);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedCreche = await Creche.destroy({
        where: {
          id,
        },
      });
      return response.status(200).json(deletedCreche);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  findAll: async (request, response) => {
    const {
      headers: { authorization },
    } = request;

    const { id } = utils.verify(authorization);

    console.log("");
    try {
      const creches = await Creche.findAll();
      return response.status(200).json({ creches });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = CrecheController;
