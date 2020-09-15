import { combineReducers } from "redux";
import { pokemonReducer as pokemon, pokemonsReducer as pokemons } from "./pokemonReducer";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  pokemon,
  pokemons,
  apiCallsInProgress,
});

export default rootReducer;
