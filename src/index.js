const express = require("express"); 
//const v1Router = require("./v1/routes");
const v1PokemonRouter = require("./v1/routes/pokemonRoutes");

const app = express(); 
const PORT = process.env.PORT || 3000; 

//app.use("/api/v1", v1Router);

app.use("/api/v1/workouts", v1PokemonRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});