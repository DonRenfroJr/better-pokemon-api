const express = require("express"); 

const bodyParser = require("body-parser");

const apicache = require("apicache")

const v1PokemonRouter = require("./v1/routes/pokemonRoutes");

const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");

const app = express(); 

const cache = apicache.middleware

const PORT = process.env.PORT || 3000; 


app.use(bodyParser.json());

app.use(cache("2 minutes"));

app.use("/pokemon", v1PokemonRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
    V1SwaggerDocs(app, PORT);
});