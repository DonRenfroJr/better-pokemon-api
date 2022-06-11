const getAllPokemon = (req, res) => {
    res.send("Get all Pokemon");
};

const getOnePokemon = (req, res) => {
res.send("Get an existing Pokemon");
};

const createNewPokemon = (req, res) => {
res.send("Create a new Pokemon");
};

const updateOnePokemon = (req, res) => {
res.send("Update an existing Pokemon");
};

const deleteOnePokemon = (req, res) => {
res.send("Delete an existing Pokemon");
};

module.exports = {
getAllPokemon,
getOnePokemon,
createNewPokemon,
updateOnePokemon,
deleteOnePokemon,
};