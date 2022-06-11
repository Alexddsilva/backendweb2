const express = require("express");
const sequelize = require("./connection");
const routes = require("./routes");

sequelize.sync({ force: true });

const app = express();

app.use(express.json());

app.use(routes);

const PORT = 3333;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
