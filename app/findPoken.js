const pokemons = require('../db/pokeDB.json')

const pokemonNum = process.argv[2] //DIGITA Numero

function getPokemonId(){
    return process.argv[2] || null
}

function findPokenID(pokemon){
    return pokemon.id == getPokemonId()
}

const pokemon = pokemons.find(findPokenID)

module.exports = {
    getPokemonStatus(id){
        let pokemon = pokemons.find(pokemon => pokemon.id == id) //(pokemon = parametro => corpo da função(return))
    }
}