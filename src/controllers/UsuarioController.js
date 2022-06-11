const sequelize = require("../connection");
const Administrador = require("../models/Administrador");
const Diretor = require("../models/Diretor");
const Pais = require("../models/Pais");
const Usuario = require("../models/Usuario");
const jwtUtils = require("../utils/jwtUtils");

const UsuarioController = {
  findOne: async (request, response) => {
    const { id } = request.params;
    const usuario = await Usuario.findByPk(id);

    return response.status(200).json(usuario);
  },
  create: async (request, response) => {
    const { nome, email, senha, cpf, id_usuario_tipo, id_creche } =
      request.body;

    const transaction = await sequelize.transaction();

    const { authorization } = request.headers;

    const [, token] = authorization.split(" ");

    try {
      const newUsuario = await Usuario.create(
        {
          nome,
          email,
          senha,
          cpf,
          id_usuario_tipo,
        },
        {
          transaction,
        }
      );

      switch (id_usuario_tipo) {
        case 1: {
          if (!authorization) {
            throw Error(
              "É necessário estar logado como admin para criar outro."
            );
          }
          const { id } = jwtUtils.verify(token);
          const usuario = await Usuario.findByPk(id);
          if (usuario.getDataValue("id_usuario_tipo") !== 1) {
            throw Error("Você não tem permissão para criar um administrador.");
          }
          await Administrador.create(
            {
              id_usuario: newUsuario.getDataValue("id"),
            },
            {
              transaction,
            }
          );
          break;
        }
        case 2: {
          if (!id_creche) throw Error("É obrigatório um id creche");
          await Diretor.create(
            {
              id_usuario: newUsuario.getDataValue("id"),
              id_creche,
            },
            {
              transaction,
            }
          );
          break;
        }
        case 3: {
          await Pais.create(
            {
              id_usuario: newUsuario.getDataValue("id"),
            },
            {
              transaction,
            }
          );
          break;
        }
      }

      await transaction.commit();
      return response.status(201).json(newUsuario);
    } catch (error) {
      await transaction.rollback();
      return response.status(400).json({ error: error.message });
    }
  },
  edit: async (request, response) => {
    const attUsuario = request.body;

    try {
      const updatedUsuario = await Usuario.update(attUsuario);
      return response.status(200).json(updatedUsuario);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedUser = await Usuario.destroy({
        where: {
          id,
        },
      });
      return response.status(200).json(deletedUser);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};

module.exports = UsuarioController;
