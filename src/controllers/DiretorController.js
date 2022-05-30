const Diretor = require("../models/Diretor");

Diretor;

const DiretorController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const diretor = await Diretor.findByPk(id);

    return response.status(200).json(diretor);
  },
};

module.exports = DiretorController;
