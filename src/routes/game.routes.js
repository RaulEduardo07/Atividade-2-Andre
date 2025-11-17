const express = require("express");
const {
  createGame,
  listGames,
  getGameById,
  updateGame,
  patchGame,
  deleteGame
} = require("../controllers/game.controller");

const router = express.Router();

router.get("/", listGames);           
router.get("/:id", getGameById);      
router.post("/", createGame);         
router.put("/:id", updateGame);       
router.patch("/:id", patchGame);      
router.delete("/:id", deleteGame);    

module.exports = router;
