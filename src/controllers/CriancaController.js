const Crianca = require("../models/Crianca");

const CriancaController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const crianca = await Crianca.findByPk(id);

    return response.status(200).json(crianca);
  },
  create: async (request, response) => {
    const crianca = request.body;

    if (!crianca.id_pais) {
      return response
        .status(400)
        .json({ error: "a criança deve conter o id de um dos pais" });
    }

    if (!crianca.id_creche) {
      return response
        .status(400)
        .json({ error: "a criança deve ser cadastrada em uma creche" });
    }

    try {
      const newCrianca = await Crianca.create(crianca);
      return response.status(201).json(newCrianca);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attCrianca = request.body;
    try {
      const updatedCrianca = await Crianca.update(attCrianca);
      return response.status(200).json(updatedCrianca);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedCrianca = await Crianca.destroy({
        where: {
          id,
        },
      });
      return response.status(200).json(deletedCrianca);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  findAll: async (_, response) => {
    try {
      const criancas = await Crianca.findAll();
      return response.status(200).json({ creches: criancas });
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = CriancaController;
