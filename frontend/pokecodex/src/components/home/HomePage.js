import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as pokemonActions from "../../redux/actions/pokemonActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import PokemonList from "./PokemonList";
import Spinner from "../common/Spinner";
import Pagination from "@material-ui/lab/Pagination";
import "./HomePage.css";

const HomePage = ({ pokemons, actions, loading, count }) => {
  const [searchName, setSearchName] = useState("");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);

  const pageSizes = [10];

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  const searchPokemons = () => {
    actions.loadPokemons(1, searchName).catch((error) => {
      alert("Loading pokemons failed" + error);
    });
  };

  const retrievePokemons = () => {
    actions.loadPokemons(page, searchName).catch((error) => {
      alert("Loading pokemons failed" + error);
    });
  };

  useEffect(retrievePokemons, [page, pageSize]);

  const handlePageChange = (event, value) => {
    event.preventDefault();
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    event.preventDefault();
    setPageSize(event.target.value);
    setPage(1);
  };

  return (
    <>
      <img src="/pikachu.png" className="App-logo" alt="logo" />
      <h1>PokeCodex</h1>
      <p>React, Redux and React Router for ultra-responsive web apps.</p>

      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by name or id"
              value={searchName}
              onChange={onChangeSearchName}
            />
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button" onClick={searchPokemons}>
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Pokemon List</h4>

          <div className="mt-3">
            {"Items per Page: "}
            <select onChange={handlePageSizeChange} value={pageSize}>
              {pageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-3">
            <Pagination
              className="pagination"
              count={count}
              page={page}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          <PokemonList pokemons={pokemons} />
        </>
      )}
    </>
  );
};

HomePage.propTypes = {
  pokemons: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return {
    pokemons:
      state.pokemons.length === 0
        ? []
        : state.pokemons.results.map((pokemon) => {
            return {
              ...pokemon,
            };
          }),

    count: state.pokemons.length === 0 ? 0 : Math.ceil(state.pokemons.count / 10),
    loading: state.apiCallsInProgress > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPokemons: bindActionCreators(pokemonActions.loadPokemons, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
