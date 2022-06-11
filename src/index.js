const express = require("express"); 

const bodyParser = require("body-parser");
const v1PokemonRouter = require("./v1/routes/pokemonRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 


app.use(bodyParser.json());
app.use("/api/v1/pokemon", v1PokemonRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});