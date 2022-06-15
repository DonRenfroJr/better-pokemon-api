const express = require("express");
const apicache = require("apicache");
const pokemonController = require("../../controllers/pokemonControllers");

const router = express.Router();

const cache = apicache.middleware;


/**
 * @openapi
 * /api/v1/pokemon:
 *   get:
 *     tags:
 *       - Pokemon
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get("/", pokemonController.getHomePage);

router.get("/pokemon", pokemonController.getAllPokemon);

router.get("/pokemon/:pokemonId", pokemonController.getOnePokemon);

router.post("/", pokemonController.createNewPokemon);

router.patch("/:pokemonId", pokemonController.updateOnePokemon);

router.delete("/:pokemonId", pokemonController.deleteOnePokemon);

module.exports = router;