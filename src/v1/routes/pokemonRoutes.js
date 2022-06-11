const express = require("express");
const pokemonController = require("../../controllers/pokemonControllers");

const router = express.Router();

router.get("/", pokemonController.getAllPokemon);

router.get("/:pokemonId", pokemonController.getOnePokemon);

router.post("/", pokemonController.createNewPokemon);

router.patch("/:pokemonId", pokemonController.updateOnePokemon);

router.delete("/:pokemonId", pokemonController.deleteOnePokemon);

module.exports = router;