import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as apiStatusActions from "./actions/apiStatusActions";

it("Should apiCallsInProgress increase 1", function () {
  // arrange
  const store = createStore(rootReducer, initialState);

  // act
  const action = apiStatusActions.beginApiCall();
  store.dispatch(action);

  // assert
  const progress = store.getState().apiCallsInProgress;
  expect(progress).toEqual(1);
});
