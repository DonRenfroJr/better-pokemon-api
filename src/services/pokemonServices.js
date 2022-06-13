const { v4: uuid } = require("uuid");
const Pokemon = require("../database/Pokemon");



const getAllPokemon = (filterParams) => {
    try {
        const allPokemon = Pokemon.getAllPokemon(filterParams);
        return allPokemon;
    }   catch (error) {
        throw error;
    }
};

const getOnePokemon = (pokemonId) => {
    const pokemon = Pokemon.getOnePokemon(pokemonId);
    return pokemon;
};

const createNewPokemon = (newPokemon) => {
    const pokemonToInsert = {
        ...newPokemon,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    try {
        const createdPokemon = Pokemon.createNewPokemon(pokemonToInsert);
        return createdPokemon;
    }   catch (error) {
        throw error;
    } 
};

const updateOnePokemon = (pokemonId, changes) => {
    const updatedPokemon = Pokemon.updateOnePokemon(pokemonId, changes);
    return updatedPokemon;
};

const deleteOnePokemon = (pokemonId) => {
    Pokemon.deleteOnePokemon(pokemonId);
};

module.exports = {
getAllPokemon,
getOnePokemon,
createNewPokemon,
updateOnePokemon,
deleteOnePokemon,
};