export function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function htmlLocalization(t) {
  document.title = t("title");
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", t("content"));
  document.querySelector("noscript").textContent = t("noscript");
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
    const genres = current.genre_ids.map((actual) =>
      genresFromAPI.find(({ id }) => Number(id) === actual)
    );
    return { genres: genres, ...current };
  });
}
