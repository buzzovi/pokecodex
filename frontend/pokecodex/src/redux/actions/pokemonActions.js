import * as types from "./actionTypes";
import * as pokemonApi from "../../api/pokemonApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadPokemonSuccess(pokemon) {
  return { type: types.LOAD_POKEMON_SUCCESS, pokemon };
}

export function loadPokemonsSuccess(pokemons) {
  return { type: types.LOAD_POKEMONS_SUCCESS, pokemons };
}

export function loadPokemons(page, filter) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return pokemonApi
      .getPokemons(page, filter)
      .then((pokemons) => {
        dispatch(loadPokemonsSuccess(pokemons));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}

export function loadPokemonById(id) {
  return function (dispatch) {
    dispatch(beginApiCall());
    return pokemonApi
      .getPokemonById(id)
      .then((pokemon) => {
        dispatch(loadPokemonSuccess(pokemon));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
