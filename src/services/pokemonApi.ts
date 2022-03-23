import { pokemonApi } from "config/reducers"

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi