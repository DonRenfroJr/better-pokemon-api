const pokemonService = require("../services/pokemonServices");

const getAllPokemon = (req, res) => {
    const { ability } = req.query;
    try {
        const allPokemon = pokemonService.getAllPokemon({ ability });
        res.send({ status: "OK", data: allPokemon});
    }   catch (error){
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOnePokemon = (req, res) => {    
    const {
        params: {pokemonId},
    } = req;
    if (!pokemonId) {
        return;
    }    
    const pokemon = pokemonService.getOnePokemon();
    res.send({ status: "Ok", data: pokemon});
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
        res
            .status(400)
            .send({
                status: "FAILED",
                data: {
                    error:
                    "One of the following keys is missing or empty in the request body: 'id', 'name', 'ability', 'base_experienc', 'url'",
                },
            });
        return;
    }
    const newPokemon = {
        id: body.id,
        name: body.name,
        ability: body.ability,
        base_experience: body.base_experience,
        url: body.url,
    };
    try {   
        const createdPokemon = pokemonService.createNewPokemon(newPokemon);
        res.status(201).send({ status: "OK", data: createdPokemon});
    }   catch (error) {
        res
            .status(error?.status || 500)
            .send({ lstatus: "FAILED", data: {error: error?.message || error} });
    }
};

const updateOnePokemon = (req, res) => {
    const {
        params: {pokemonId},
    } = req;
    if (!pokemonId) {
        return;
    }    
    const updatedPokemon = pokemonService.updateOnePokemon(pokemonId, body);
    res.send({ status: "Ok", data: updatedPokemon });
};

const deleteOnePokemon = (req, res) => {
    const {
        params: {pokemonId},
    } = req;
    if (!pokemonId) {
        return;
    }    
    pokemonService.deleteOnePokemon(pokemonId);
    res.status(204).send({ status: "Ok"});
};

module.exports = {
getAllPokemon,
getOnePokemon,
createNewPokemon,
updateOnePokemon,
deleteOnePokemon,
};