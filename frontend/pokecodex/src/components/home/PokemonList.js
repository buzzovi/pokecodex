import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PokemonList = ({ pokemons, onDeleteClick }) => (
  <table className="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Image</th>
        <th>Name</th>
        <th>Type</th>
        <th>Total</th>
        <th>Attack</th>
        <th>Defense</th>
        <th>Sp. Atk</th>
        <th>Sp. Def</th>
        <th>Speed</th>
        <th>Info</th>
      </tr>
    </thead>
    <tbody>
      {pokemons.map((pokemon) => {
        return (
          <tr key={pokemon.id}>
            <td>{pokemon.id}</td>
            <td>
              <img src={pokemon.img_url_small} alt={pokemon.name} />
            </td>
            <td>
              <Link to={"/pokemon/" + pokemon.id}>{pokemon.name}</Link>
            </td>
            <td>{pokemon.types}</td>
            <td>{pokemon.total}</td>
            <td>{pokemon.attack}</td>
            <td>{pokemon.defense}</td>
            <td>{pokemon.sp_atk}</td>
            <td>{pokemon.sp_def}</td>
            <td>{pokemon.speed}</td>
            <td>{pokemon.info}</td>
          </tr>
        );
      })}
    </tbody>
  </table>
);

PokemonList.propTypes = {
  pokemons: PropTypes.array.isRequired,
};

export default PokemonList;
