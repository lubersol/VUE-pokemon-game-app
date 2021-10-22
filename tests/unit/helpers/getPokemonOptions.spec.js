import getPokemonOptions, {getPokemons, getPokemonNames} from '@/helpers/getPokemonOptions'

describe('getPokemonOptions helpers', () => {
    test('debe de regresar un arreglo de números', () => {

        const pokemons = getPokemons()

        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    })

    test('debe de retornar un array de 4 elems con nombres pokemons', async() => {
        const pokemons = await getPokemonNames([1,2,3,4])

        expect(pokemons).toStrictEqual([
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 },
        ])
    })

    test('getPokemonsOptions debe de retornar un arreglo mexclado', async() => {

        const pokemons = await getPokemonOptions()
        //console.log(pokemons)

        expect( pokemons.length ).toBe(4)
        expect( pokemons ).toEqual([
            { name: expect.any(String),
              id: expect.any(Number) 
            },
            { name: expect.any(String),
              id: expect.any(Number) 
            },
            { name: expect.any(String),
              id: expect.any(Number) 
            },
            { name: expect.any(String),
              id: expect.any(Number) 
            }
        ])
    })
})