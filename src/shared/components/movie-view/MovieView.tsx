import { memo, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../../shared/assets/hero/default-img.jpg";

interface Props {
  data: any;
}

const MovieView: FC<Props> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        {data?.map((movie: any) => (
          <div key={movie.id} className="">
            <div onClick={() => navigate(`/movie/${movie.id}`)}>
              <img
                loading="lazy"
                src={
                  movie.poster_path
                    ? `${IMAGE_URL}${movie.poster_path}`
                    : defaultImg
                }
                alt={movie.title}
                className="h-[400px] w-full"
              />
            </div>
            <div className="pt-[12px]">
              <h3
                className="font-medium text-[23px] line-clamp-1"
                title={movie.title}
              >
                {movie.title}
              </h3>
              <p>⭐ {movie.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(MovieView);
