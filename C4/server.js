const { json } = require("express");
const express = require("express");
const pokedex = require("./pokedex");

const app = express();

const pokemonPath = "/pokemon";

//Body Parser middleware
app.use(express.json())

//Create a New Pokemon
app.post(pokemonPath, (req, res) =>{

    res.status(501).end();
});

//Read all Pokemon
app.get(pokemonPath, (req, res) =>{

    res.json(Object.fromEntries(pokedex));
});

//Update Pokemon
app.put(pokemonPath, (req, res) =>{

    const pokemon = Object.keys(req.body)[0];
    const stats = req.body[pokemon];
  
    if (pokedex.get(pokemon) == undefined) {
        res.status(404);
    } else {
        pokedex.set(pokemon, stats);
    }
    
    console.log(pokedex);
    res.end();

});

//Delete Pokemon
app.delete(pokemonPath, (req, res) =>{

    res.status(501).end();
});

app.listen(3500, () =>{//asynch method
    console.log("server is listening on port 3500...");
});


