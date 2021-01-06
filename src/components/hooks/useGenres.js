import { useQuery } from "@apollo/client";
import { GET_GENRES } from "api/queries/genre";

export default function useGenres(language = "en-US") {
  const { loading, data } = useQuery(GET_GENRES, {
    variables: { language },
  });
  return loading ? [] : data.genres;
}
