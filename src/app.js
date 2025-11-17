const express = require("express");
const cors = require("cors");
const gamesRoutes = require("./routes/game.routes");
const logger = require("./middlewares/logger");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger); 

app.use("/games", gamesRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API de Games 🎮 está rodando" });
});

app.use((req, res) => {
  res.status(404).json({ message: "Rota não encontrada" });
});


app.use(errorHandler);

module.exports = app;
