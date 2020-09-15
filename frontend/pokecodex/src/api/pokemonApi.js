import { handleResponse, handleError } from "./apiUtils";
import * as base from "./apiUrl";
const baseUrl = base.API_URL + "/pokemon/";

function encodeQueryString(params) {
  return Object.keys(params)
    .map((key) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(params[key]);
    })
    .join("&");
}

export function getPokemons(page, filter) {
  let params = {
    format: "json",
  };
  if (page !== undefined) {
    params["page"] = page;
  }
  if (filter !== undefined) {
    params["search"] = filter;
  }
  return fetch(baseUrl + "?" + encodeQueryString(params))
    .then(handleResponse)
    .catch(handleError);
}

export function getPokemonById(id) {
  let params = {
    format: "json",
  };
  return fetch(baseUrl + id + "/?" + encodeQueryString(params))
    .then(handleResponse)
    .catch(handleError);
}
