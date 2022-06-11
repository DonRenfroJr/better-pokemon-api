const pokemonService = require("../services/pokemonServices");

const getAllPokemon = (req, res) => {
    const allPokemon = pokemonService.getAllPokemon();
    res.send({ status: "OK", data: allPokemon});
};

const getOnePokemon = (req, res) => {    
    const pokemon = pokemonService.getOnePokemon();
    res.send("Get an existing Pokemon");
};

const createNewPokemon = (req, res) => {
    const { body } = req;
    if (
        !body.id ||
        !body.name ||
        !body.ability ||
        !body.base_experience ||
        !body.url
    ) {
        return;
    }
    const newPokemon = {
        id: body.id,
        name: body.name,
        ability: body.ability,
        base_experience: body.base_experience,
        url: body.url,
    };
    const createdPokemon = pokemonService.createNewPokemon(newPokemon);
    res.status(201).send({ status: "OK", data: createdPokemon});
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