import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetPokemonListQuery, Pokemon, PokemonList } from 'types'

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<PokemonList, GetPokemonListQuery>({
      query: ({offset, limit}) => `pokemon?offset=${offset}&limit=${limit}`
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
})