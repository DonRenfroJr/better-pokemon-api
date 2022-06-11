const DB = require("./db.json");

const { saveToDatabase } = require("./utils");

const getAllPokemon = () =>{
    return DB.Pokemon;
};

const createNewPokemon = (newPokemon) => {
    const isAlreadyAdded =
        DB.Pokemon.findIndex((pokemon) => pokemon.name === newPokemon.name) > -1;
    if (isAlreadyAdded) {
        return;
    }
    DB.Pokemon.push(newPokemon);
    saveToDatabase(DB);
    return newPokemon;
};

module.exports = { 
    getAllPokemon,
    createNewPokemon,
};
