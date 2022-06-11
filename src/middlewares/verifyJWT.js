const jwt = require("jsonwebtoken");
module.exports = async function (request, response, next) {
  const { authorization } = request.headers;

  if (authorization) {
    const [, token] = authorization.split(" ");

    const msg = jwt.verify(token.getDataValue("token"), TOKEN_SECRET, (err) => {
      if (err) {
        return err.message;
      }
    });

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

    return response.status(401).json({
      error: "Você não tem autorização para criar um registro de criança",
    });
  }
};
