const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllPokemon = (filterParams) => {
    try {
        let pokemon = DB.Pokemon;
        if (filterParams.ability) {
            return DB.Pokemon.filter((workout) =>
            pokemon.ability.toLowerCase().includes(filterParams.ability)
            );
        }
        return DB.Pokemon;
    }   catch (error) {
        throw { status: 500, message: error };
    }
};

const getOnePokemon = (pokemonId) => {
    const pokemon = DB.pokemon.find((pokemon) => pokemon.id === pokemonId);
    if (!pokemon) {
        return;
    }
    return pokemon;
};

const createNewPokemon = (newPokemon) => {
    const isAlreadyAdded =
        DB.Pokemon.findIndex((pokemon) => pokemon.name === newPokemon.name) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Pokemon with the name '${newPokemon.name} already exists`,
        };        
    }
    try {
        DB.Pokemon.push(newPokemon);
        saveToDatabase(DB);
        return newPokemon;
    }   catch (error) {
        throw { status: 500, message: error?.message || error};
    }
};

const updateOnePokemon = (pokemonId, changes) => {
    const indexForUpdate = DB.pokemon.findIndex(
        (pokemon) => pokemon.id === pokemonId
    );
    if (indexForUpdate === -1) {
        return;
    }
    const updatedPokemon = {
        ...DB.pokemon[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.pokemon[indexForUpdate] = updatedPokemon;
    saveToDatabase(DB);
    return updatedPokemon;
};

const deleteOnePokemon = (pokemonId) => {
    const indexForDeletion = DB.pokemon.findIndex(
        (pokemon) => pokemon.id === pokemonId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.pokemon.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = { 
    getAllPokemon,
    createNewPokemon,
    getOnePokemon,
    updateOnePokemon,
    deleteOnePokemon,
};
