import { tmdbURL } from "./consts";

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
          favoriteGenres: [],
          favoriteMovies: [],
        },
        {
          email: "Database@mail.ru",
          password: "password1",
          favoriteGenres: [],
          favoriteMovies: [],
        },
      ])
    );
  }
}

export async function getGenres(language) {
  const URL = [
    tmdbURL,
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

export async function addFavoriteMovies() {
  let popularMovies = await getPopularMovies();
  const favoriteMovies = popularMovies.results.map((current) => ({
    id: current.id,
    isViewed: false,
  }));
  setUserData("favoriteMovies", favoriteMovies);
  return favoriteMovies;
}

export function markAsViewed(favoriteMovies, id) {
  const updatedMovies = favoriteMovies.map((current) => {
    if (current.id === Number(id)) current.isViewed = !current.isViewed;
    return current;
  });
  setUserData("favoriteMovies", updatedMovies);
  return updatedMovies;
}

export function setFavoriteGenres(genre, isFavorite) {
  let favoriteGenres = isFavorite
    ? getFavorite("favoriteGenres").filter((item) => genre !== item)
    : getFavorite("favoriteGenres").concat(genre);
  setUserData("favoriteGenres", favoriteGenres);
}

export function deleteFavoriteMovie(favoriteMovies, targetValue) {
  const updatedMovies = favoriteMovies.filter(
    (current) => current.id !== Number(targetValue)
  );
  setUserData("favoriteMovies", updatedMovies);
  return updatedMovies;
}

async function getPopularMovies() {
  const URL = [
    tmdbURL,
    "movie/popular?api_key=",
    key,
    "&language=en-US&page=1",
  ].join("");
  return getResponse(URL);
}

export async function getMovieById(id, language) {
  const URL = [
    tmdbURL,
    "movie/",
    id,
    "?api_key=",
    key,
    "&language=",
    language,
  ].join("");
  return getResponse(URL);
}
