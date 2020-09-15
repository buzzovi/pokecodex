import * as pokemonActions from "../../redux/actions/pokemonActions";
import * as types from "../../redux/actions/actionTypes";
import { pokemons } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

// Test an async action
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async Actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("Load Pokemons Thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_POKEMONS_SUCCESS when loading pokemons", () => {
      fetchMock.mock("*", {
        body: pokemons,
        headers: { "content-type": "application/json" },
      });
      const expectedActions = [{ type: types.BEGIN_API_CALL }, { type: types.LOAD_POKEMONS_SUCCESS, pokemons }];

      const store = mockStore({ pokemons: {} });
      return store.dispatch(pokemonActions.loadPokemons(1, "")).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
