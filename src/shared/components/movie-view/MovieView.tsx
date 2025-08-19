import { memo, type FC } from "react";
import { IMAGE_URL } from "../../const";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../../shared/assets/hero/default-img.jpg";
import Skeleton from "../ui/Skeleton";

interface Props {
  data: any;
  className?: string;
  isLoading: boolean;
}

const MovieView: FC<Props> = ({ data, className, isLoading }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`dark:bg-[#000000] dark:transition-all transition-all ${className}`}
    >
      <div className="container">
        {isLoading && <Skeleton />}
        <div className="grid grid-cols-4 gap-5 max-[1000px]:grid-cols-3 max-[850px]:grid-cols-2 max-[520px]:grid-cols-1">
          {data?.map((movie: any) => (
            <div key={movie.id} className="cursor-pointer">
              <div onClick={() => navigate(`/movie/${movie.id}`)}>
                <img
                  loading="lazy"
                  src={
                    movie.poster_path
                      ? `${IMAGE_URL}${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                  className="h-[450px] w-full max-sm:w-full"
                />
              </div>
              <div className="pt-[12px]">
                <h3
                  className="font-medium text-[23px] line-clamp-1 dark:text-[#ffffff] dark:transition-all transition-all"
                  title={movie.title}
                >
                  {movie.title}
                </h3>
                <p>
                  <span className="dark:text-[#4D4D4D] dark:transition-all transition-all">
                    {movie?.genres.join(", ")}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(MovieView);
