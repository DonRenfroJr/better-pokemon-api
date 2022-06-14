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
        if (filterParams.name) {
            return DB.Pokemon.filter((Pokemon) =>
            Pokemon.name.toLowerCase().includes(filterParams.name)
            );
        }
        if (filterParams.base_experience) {
            return DB.Pokemon.filter((Pokemon) =>
            Pokemon.base_experience.toLowerCase().includes(filterParams.base_experience)
            );
        }
        return pokemon;
    }   catch (error) {
        throw { status: 500, message: error };
    }
};

const getOnePokemon = (pokemonId) => {
    try{
        const pokemon = DB.Pokemon.find((Pokemon) => Pokemon.id === pokemonId);
        if (!pokemon) {
            throw {
                status: 400,
                message: `Can't find pokemon with the id '${pokemonId}'`,
            };
        }
        return pokemon;
    }   catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    } 
};

const createNewPokemon = (newPokemon) => {
    try {
        const isAlreadyAdded =    
        DB.Pokemon.findIndex((Pokemon) => Pokemon.name === newPokemon.name) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Pokemon with the name '${newPokemon.name} already exists`,
        };        
    }    
        DB.Pokemon.push(newPokemon);
        saveToDatabase(DB);
        return newPokemon;
    }   catch (error) {
        throw { status: 500, message: error?.message || error};
    }
};

const updateOnePokemon = (pokemonId, changes) => {
    try {
        const isAlreadyAdded =    
        DB.Pokemon.findIndex((Pokemon) => Pokemon.name === newPokemon.name) > -1;
    if (isAlreadyAdded) {
        throw {
            status: 400,
            message: `Pokemon with the name '${newPokemon.name} already exists`,
        };
    }    
    if (indexForUpdate === -1) {
        throw {
            status: 400,
            message: `Can't finds pokemon with the id '${pokemonId}'`,
        };
    }
    const updatedPokemon = {
        ...DB.Pokemon[indexForUpdate],
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };
    DB.Pokemon[indexForUpdate] = updatedPokemon;
    saveToDatabase(DB);
    return updatedPokemon;
    }   catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

const deleteOnePokemon = (pokemonId) => {
    try {
    const indexForDeletion = DB.Pokemon.findIndex(
        (Pokemon) => Pokemon.id === pokemonId
    );
    if (indexForDeletion === -1) {
        throw {
            status: 400,
            message: `Can't find pokemon with the id '${pokemonId}'`,
        };
    }
    DB.Pokemon.splice(indexForDeletion, 1);
    saveToDatabase(DB);
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

module.exports = { 
    getAllPokemon,
    createNewPokemon,
    getOnePokemon,
    updateOnePokemon,
    deleteOnePokemon,
};
