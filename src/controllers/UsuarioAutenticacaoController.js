const Usuario = require("../models/Usuario");
const UsuarioAutenticacao = require("../models/UsuarioAutenticacao");
const jwt = require("jsonwebtoken");

const TOKEN_SECRET = "12345";

const criarToken = (payload) => {
  const token = jwt.sign(payload, TOKEN_SECRET);

  UsuarioAutenticacao.create({
    token,
    id_usuario: payload.id,
  });

  return token;
};

const UsuarioAutenticacaoController = {
  findOne: async (request, response) => {
    try {
      const { email = "", senha = "" } = request.body;

      const usuario = await Usuario.findOne({
        where: {
          email,
          senha,
        },
      });

      if (!usuario) {
        return response.status(400).json({
          error: "email inexistente, ou usuario informado incorretamente.",
        });
      }

      const token = await UsuarioAutenticacao.findOne({
        where: {
          id_usuario: usuario.getDataValue("id"),
        },
        order: [["createdAt", "DESC"]],
      });

      if (!token) {
        const createdToken = criarToken(
          {
            email,
            id: usuario.getDataValue("id"),
          },
          TOKEN_SECRET
        );

        return response.status(200).json({ token: createdToken });
      }

      const msg = jwt.verify(
        token.getDataValue("token"),
        TOKEN_SECRET,
        (err) => {
          if (err) {
            return err.message;
          }
        }
      );

      if (msg === "jwt expired") {
        const createdExpiredToken = criarToken(
          {
            email,
            id: usuario.getDataValue("id"),
          },
          TOKEN_SECRET
        );

        return response.status(200).json({ token: createdExpiredToken });
      }

      const { token: jwtToken } = token;

      return response.status(200).json({ token: jwtToken });
    } catch (error) {
      console.log(error);
    }
  },
  create: async (request, response) => {
    const usuario = request.body;
    try {
      const newUsuario = await UsuarioAutenticacao.create(usuario);
      return response.status(201).json(newUsuario);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
  delete: async (request, response) => {
    const { id } = request.params;
    try {
      const deletedUser = await UsuarioAutenticacao.destroy({
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

module.exports = UsuarioAutenticacaoController;
