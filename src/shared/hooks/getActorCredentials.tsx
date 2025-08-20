import { useQuery } from "@tanstack/react-query";
import { api } from "../api";

export const getGenres = () =>
  api.get("genre/movie/list").then((res) => res.data.genres);

const getActorsCredentials = (id: number, path: string, actor_type: any) =>
  api.get(`person/${id}/${path}`).then((res) => res.data[`${actor_type}`]);

const fetchMoviesWithActorsData = async (
  id: number,
  path: string,
  actor_type: any
) => {
  const [genres, movies] = await Promise.all([
    getGenres(),
    getActorsCredentials(id, path, actor_type),
  ]);

  const genreMap = Object.fromEntries(genres.map((g: any) => [g.id, g.name]));

  return movies.map((movie: any) => ({
    ...movie,
    genres: movie.genre_ids.map((id: any) => genreMap[id] || "Unknown"),
  }));
};

export const useFullActorsData = (id: number, path: string, actor_type: any) =>
  useQuery({
    queryKey: ["movies-with-genres", id, path, actor_type],
    queryFn: () => fetchMoviesWithActorsData(id, path, actor_type),
  });
