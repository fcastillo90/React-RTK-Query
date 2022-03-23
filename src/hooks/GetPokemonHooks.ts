import { pokemonApi } from "config/reducers"
import { useGetPokemonListQuery } from "services"
import { Pokemon, PokemonList } from "types"

export function useGetPokemonList({offset, limit}: {offset: number, limit: number}): [PokemonList | undefined, boolean] {
  const { data, isFetching } = useGetPokemonListQuery({offset, limit})
  return [
    data,
    isFetching
  ]
}

export function useGetPokemonByName(name: string = "pikachu"): [Pokemon | undefined, boolean] {
  if (!name) return [ undefined, false ]
  
  const { data, isFetching } = pokemonApi.endpoints.getPokemonByName.useQuery(name)

  return [ data, isFetching ] 
  
}
