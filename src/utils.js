import { TMDB_URL } from "consts";

const key = require("./api.json").API_KEY;

function findUser(email) {
  return parseLsUsers().find((user) => user.email === email);
}
async function getResponse(URL) {
  let response = await fetch(URL);
  if (response.ok) return response.json();
}

function parseLsUsers() {
  return JSON.parse(localStorage.getItem("users"));
}

export function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function checkUserData(email, password) {
  const user = findUser(email);
  if (!user) return "unknownUser";
  if (user.password !== password) return "wrongPassword";
}

export function htmlLocalization(t) {
  document.title = t("title");
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", t("content"));
  document.querySelector("noscript").textContent = t("noscript");
}

export function addUsers() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem(
      "users",
      JSON.stringify([
        {
          email: "Kazancev@yandex.ru",
          password: "password",
          favoriteGenres: {},
          favoriteMovies: {},
        },
        {
          email: "Database@mail.ru",
          password: "password1",
          favoriteGenres: {},
          favoriteMovies: {},
        },
      ])
    );
  }
}

export async function getGenres(language) {
  const URL = [
    TMDB_URL,
    "genre/movie/list?api_key=",
    key,
    "&language=",
    language,
  ].join("");
  return getResponse(URL);
}

export function getFavorite(key) {
  return findUser(localStorage.getItem("currentUser"))[key];
}

function setUserData(key, value) {
  const users = parseLsUsers().map((current) => {
    if (current.email === localStorage.getItem("currentUser"))
      current[key] = value;
    return current;
  });
  localStorage.setItem("users", JSON.stringify(users));
}

export function addFavoriteMovie(id) {
  const favoriteMovies = getFavorite("favoriteMovies");
  favoriteMovies[id] = false;
  setUserData("favoriteMovies", favoriteMovies);
}

export function setFavoriteMoviesHelper(favoriteMovies, id, deleteMovie) {
  const updatedMovies = Object.assign({}, favoriteMovies);
  if (deleteMovie) delete updatedMovies[id];
  else updatedMovies[id] = !updatedMovies[id];
  setUserData("favoriteMovies", updatedMovies);
  return updatedMovies;
}

export function setFavoriteGenres(id, text, isFavorite) {
  const favoriteGenres = getFavorite("favoriteGenres");
  if (isFavorite) delete favoriteGenres[id];
  else favoriteGenres[id] = text;
  setUserData("favoriteGenres", favoriteGenres);
}

export async function getMovieById(id, language) {
  const URL = [
    TMDB_URL,
    "movie/",
    id,
    "?api_key=",
    key,
    "&language=",
    language,
  ].join("");
  return getResponse(URL);
}

export async function getFilteredMovies(language, page, queryKeys) {
  const formatedGenres = queryKeys.selectedGenres.join("%2C%20");
  const URL = [
    TMDB_URL,
    "discover/movie/?api_key=",
    key,
    "&language=",
    language,
    "&include_adult=true&sort_by=popularity.desc&page=",
    page,
    "&primary_release_year=",
    queryKeys.releaseYear,
    "&vote_average.gte=",
    queryKeys.rating,
    "&with_genres=",
    formatedGenres,
  ].join("");
  return getResponse(URL);
}

export function makeYearsList() {
  const array = [];
  for (let i = 2020; i >= 1950; i--) array.push({ value: i, label: i });
  return array;
}

export function setFilteredGenres(selectedGenres, id, isActive) {
  const updatedSelectedGenres = isActive
    ? selectedGenres.filter((current) => current !== id)
    : selectedGenres.concat([id]);
  return updatedSelectedGenres;
}

export function formatingGenres(moviesInfo, genresFromAPI) {
  return moviesInfo.map((current) => {
    current["genres"] = current.genre_ids.map((actual) => ({
      name: genresFromAPI[actual],
    }));
    return current;
  });
}
