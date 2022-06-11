const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Get all Pokemon");
});

router.get("/:pokemonId", (req, res) => {
    res.send("Get an existing Pokemon");
});

router.post("/", (req, res) => {
    res.send("Create a new Pokemon");
});

router.patch("/:pokemonId", (req, res) => {
    res.send("Update an existing Pokemon");
});

router.delete("/:pokemonId", (req, res) => {
    res.send("Delete an existing Pokemon");
});

module.exports = router;