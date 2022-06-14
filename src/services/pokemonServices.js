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
    try {
        const pokemon = Pokemon.getOnePokemon(pokemonId);
        return pokemon;
    }   catch (error) {
        throw error;
    }
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
    try {
        const updatedPokemon = Pokemon.updateOnePokemon(pokemonId, changes);
        return updatedPokemon;
    }   catch (error) {
        throw error;
    }
};

const deleteOnePokemon = (pokemonId) => {
    try {
        Pokemon.deleteOnePokemon(pokemonId);
    }   catch (error) {
        throw error;
    }
};

module.exports = {
getAllPokemon,
getOnePokemon,
createNewPokemon,
updateOnePokemon,
deleteOnePokemon,
};