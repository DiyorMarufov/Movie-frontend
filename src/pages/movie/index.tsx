import { memo, useEffect, useState } from "react";
import MovieView from "../../shared/components/movie-view/MovieView";
import { getGenres, useFullMovieData } from "../../shared/hooks/getGenres";
import { Pagination, Select, type PaginationProps } from "antd";
import { useParamsHooks } from "../../shared/hooks/useParams";
import { useMovie } from "./services/useMovie";

const Movie = () => {
  const [movieGenres, setMovieGenres] = useState<any>([]);

  const { getParam, setParam, removeParam } = useParamsHooks();
  const with_genres = getParam("genre") || "";
  const page = getParam("page") || "1";

  const { getMovies } = useMovie();
  const { data: totalMovies } = getMovies();
  const { data } = useFullMovieData({ page, with_genres });

  useEffect(() => {
    getGenres().then((res) => setMovieGenres(res));
  }, []);
  const genres = movieGenres?.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const handleChange = (value: string) => {
    setParam("genre", value);
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    if (page === 1) {
      removeParam("page");
    } else {
      setParam("page", page);
    }
  };

  return (
    <>
      <div className="container">
        <h1 className="font-bold text-[16px] text-[#A1A1A1] pb-1 select-none ">
          Filter by genre
        </h1>
        <Select
          onChange={handleChange}
          placeholder="Select genre"
          style={{ width: 120 }}
          options={genres}
        />
      </div>
      <MovieView data={data} className="pt-5" />;
      <div className="flex justify-center">
        <Pagination
          current={Number(page)}
          total={
            totalMovies?.total_results > 10000
              ? 10000
              : totalMovies?.total_results
          }
          showSizeChanger={false}
          defaultPageSize={20}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default memo(Movie);
