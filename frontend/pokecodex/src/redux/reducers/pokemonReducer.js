import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export function pokemonReducer(state = initialState.pokemon, action) {
  switch (action.type) {
    case types.LOAD_POKEMON_SUCCESS:
      return action.pokemon;
    default:
      return state;
  }
}

export function pokemonsReducer(state = initialState.pokemons, action) {
  switch (action.type) {
    case types.LOAD_POKEMONS_SUCCESS:
      return action.pokemons;
    default:
      return state;
  }
}
