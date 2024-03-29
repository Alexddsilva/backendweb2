const express = require("express");
const sequelize = require("./connection");
const routes = require("./routes");
const cors = require("cors");

// sequelize.sync({ force: true });

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

const PORT = 3333;

app.listen(PORT, () => console.log(`Servidor iniciado na porta ${PORT}`));
