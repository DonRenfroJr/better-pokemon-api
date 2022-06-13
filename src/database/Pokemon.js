const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllPokemon = (filterParams) => {
    try {
        let pokemon = DB.Pokemon;
        if (filterParams.ability) {
            return DB.Pokemon.filter((Pokemon) =>
            Pokemon.ability.toLowerCase().includes(filterParams.ability)
            );
        }
        return pokemon;
    }   catch (error) {
        throw { status: 500, message: error };
    }
};

const getOnePokemon = (pokemonId) => {
    const pokemon = DB.Pokemon.find((Pokemon) => Pokemon.id === pokemonId);
    if (!pokemon) {
        return;
    }
    return pokemon;
};

const createNewPokemon = (newPokemon) => {
    const isAlreadyAdded =
        DB.Pokemon.findIndex((Pokemon) => Pokemon.name === newPokemon.name) > -1;
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
    const indexForUpdate = DB.Pokemon.findIndex(
        (Pokemon) => Pokemon.id === pokemonId
    );
    if (indexForUpdate === -1) {
        return;
    }
    const updatedPokemon = {
        ...DB.Pokemon[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.Pokemon[indexForUpdate] = updatedPokemon;
    saveToDatabase(DB);
    return updatedPokemon;
};

const deleteOnePokemon = (pokemonId) => {
    const indexForDeletion = DB.Pokemon.findIndex(
        (Pokemon) => Pokemon.id === pokemonId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.Pokemon.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = { 
    getAllPokemon,
    createNewPokemon,
    getOnePokemon,
    updateOnePokemon,
    deleteOnePokemon,
};
