require('isomorphic-fetch')

const obtenerPokemonPorNombre = async(pokenombre) => {
    try {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const data = await res.json()
        const pokemon = data.results.filter(poke => poke.name === pokenombre)
        console.log(pokemon)
    } catch (error) {
        console.log(error)
    }
}

obtenerPokemonPorNombre('bulbasaur')