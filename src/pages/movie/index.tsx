import { memo } from "react";
import MovieView from "../../shared/components/movie-view/MovieView";
import { useFullMovieData } from "../../shared/hooks";

const Movie = () => {
  const { data } = useFullMovieData();

  return (
    <div className="Index">
      <MovieView data={data} />
    </div>
  );
};

export default memo(Movie);
