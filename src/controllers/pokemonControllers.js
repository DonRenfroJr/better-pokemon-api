const pokemonService = require("../services/pokemonServices");

const getAllPokemon = (req, res) => {
    const allPokemon = pokemonService.getAllPokemon();
    res.send("Get all Pokemon");
};

const getOnePokemon = (req, res) => {
    const pokemon = pokemonService.getOnePokemon();
    res.send("Get an existing Pokemon");
};

const createNewPokemon = (req, res) => {
    const createdPokemon = pokemonService.createNewPokemon();
    res.send("Create a new Pokemon");
};

const updateOnePokemon = (req, res) => {
    const updatePokemon = pokemonService.updateOnePokemon();
    res.send("Update an existing Pokemon");
};

const deleteOnePokemon = (req, res) => {
    pokemonService.deleteOnePokemon();
    res.send("Delete an existing Pokemon");
};

module.exports = {
getAllPokemon,
getOnePokemon,
createNewPokemon,
updateOnePokemon,
deleteOnePokemon,
};