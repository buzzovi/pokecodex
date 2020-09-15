import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import PokemonPage from "./pokemon/PokemonPage";
import PageNotFound from "./PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/pokemon/:id" component={PokemonPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
