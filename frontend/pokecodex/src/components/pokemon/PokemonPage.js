import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as pokemonActions from "../../redux/actions/pokemonActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner";

const HomePage = ({ pokemon, actions, loading, id }) => {
  const retrievePokemons = () => {
    actions.loadPokemonById(id).catch((error) => {
      alert("Loading pokemons failed" + error);
    });
  };

  useEffect(retrievePokemons, []);

  return (
    <>
      <h1>Pokemon Details</h1>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <img src={pokemon.img_url_big} className="App-logo" alt="logo" />
          <p>ID:{pokemon.id}</p>
          <p>Name:{pokemon.name}</p>
          <p>Type:{pokemon.types}</p>
          <p>Total:{pokemon.total}</p>
          <p>HP:{pokemon.hp}</p>
          <p>Attack:{pokemon.attack}</p>
          <p>Defense:{pokemon.defense}</p>
          <p>Sp. Atk:{pokemon.sp_atk}</p>
          <p>Sp. Def:{pokemon.sp_def}</p>
          <p>Speed:{pokemon.speed}</p>
          <p>Info:{pokemon.info}</p>
        </>
      )}
    </>
  );
};

HomePage.propTypes = {
  pokemon: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state, ownProps) {
  const paramId = ownProps.match.params.id;
  return {
    pokemon: state.pokemon.length > 0 ? {} : state.pokemon,
    loading: state.apiCallsInProgress > 0,
    id: paramId,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPokemonById: bindActionCreators(pokemonActions.loadPokemonById, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
