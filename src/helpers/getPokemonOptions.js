import pokemonApi from "../api/pokemonApi"

//Creo un array con 650 elementos q seran los pokemon q existen en la api
const getPokemons = () => {

    const pokemonsArr = Array.from( Array(650) )

    return pokemonsArr.map(( _ , index ) => index + 1 )
    
}
//Llamamos getPokemonOptions para conseguir 4 elems pokemons aleatorios 
const getPokemonOptions = async() => {

    const mixedPokemons = getPokemons()
                            .sort( ()=>Math.random() - 0.5 )

    const pokemons = await getPokemonNames(mixedPokemons.splice(0,4))

    return pokemons
}
//Llamamos getPokemonNames con sus id para luego conseguir los nombres de los 4 pokemons names
const getPokemonNames = async ( [a, b, c, d] = [] ) => {

      //const resp = await pokemonApi.get(`/2`)
      //console.log(resp.data.name, resp.data.id)

    //Aqui definimos las peticiones, no las llamamos
    const promiseArr = [
        pokemonApi.get(`/${ a }`),
        pokemonApi.get(`/${ b }`),
        pokemonApi.get(`/${ c }`),
        pokemonApi.get(`/${ d }`),
    ]
    //Promise.all permite llamar muchas promesas a la vez
    //const { p1, p2, p3, p4 } = await Promise.all(promiseArr)
    const [p1, p2, p3, p4] = await Promise.all( promiseArr )
    return [
        { name: p1.data.name, id: p1.data.id},
        { name: p2.data.name, id: p2.data.id},
        { name: p3.data.name, id: p3.data.id},
        { name: p4.data.name, id: p4.data.id},
    ]
}
export default getPokemonOptions