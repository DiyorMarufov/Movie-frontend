import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "./services/useMovieDetail";
import { IMAGE_URL } from "../../shared/const";
import { Star } from "lucide-react";
import Title from "../../shared/components/ui/title";
import userLogo from "../../shared/assets/hero/user-icon.png";
import TopWeeks from "../../shared/components/top-weeks/TopWeeks";
import MovieView from "../../shared/components/movie-view/MovieView";
import { useFullMovieData } from "../../shared/hooks";

const MovieDetail = () => {
  const { id } = useParams();
  const { getMovieById, getMovieItems } = useMovieDetail();
  const { data, isLoading } = getMovieById(id || "");
  const { data: imagesData } = getMovieItems(id || "", "images");
  const { data: creditsData } = getMovieItems(id || "", "credits");
  const { data: movieViews } = useFullMovieData();

  if (isLoading) {
    return (
      <div className="container">
        <div className="w-full h-[650px] bg-gray-300 animate-pulse"></div>
        <div className="my-3 w-[30%] h-10 bg-gray-300 animate-pulse"></div>
        <div className="my-3 w-[10%] h-10 bg-gray-300 animate-pulse"></div>
      </div>
    );
  }

  return (
    <section className="pt-[10px] dark:bg-[#000000] dark:transition-all transition-all">
      <div className="container flex flex-col">
        <div className="flex gap-[30px] max-[1200px]:flex-col">
          <div className="w-[50%] max-[1200px]:w-full">
            <div>
              <img src={`${IMAGE_URL}${data?.backdrop_path}`} alt="" />
            </div>
          </div>
          <div className="w-[50%] bg-white rounded-lg shadow-lg px-6 pt-2 max-[1200px]:w-full max-[1200px]:pb-3 dark:bg-[#111111] dark:transition-all transition-all">
            <h2 className="text-2xl font-semibold mb-4 text-center border-b pb-2 dark:text-[#A1A1A1] dark:transition-all transition-all">
              About Movie
            </h2>

            <div className="space-y-3 text-gray-700 dark:text-[#A1A1A1]">
              <p>
                <span className="font-semibold">Title:</span> {data?.title}
              </p>
              <p>
                <span className="font-semibold">Release Date:</span>{" "}
                {data?.release_date}
              </p>
              <p>
                <span className="font-semibold">Rating:</span>
                <span className="inline-flex ml-2 text-yellow-500">
                  <Star className="w-5 h-5 fill-current mr-1" />{" "}
                  {data?.vote_average.toFixed(1)} / 10
                </span>
                <span className="ml-2 text-sm text-gray-500 dark:text-[#A1A1A1]">
                  ({data?.vote_count} votes)
                </span>
              </p>
              <p>
                <span className="font-semibold">Runtime:</span> {data?.runtime}{" "}
                minutes
              </p>
              <p>
                <span className="font-semibold">Genres:</span>{" "}
                {data?.genres?.map((g: any) => g.name).join(", ")}
              </p>
              <p>
                <span className="font-semibold">Original Language:</span>{" "}
                {data?.original_language.toUpperCase()}
              </p>
              <div className="flex justify-between max-[500px]:flex-col max-[550px]:gap-2">
                <p>
                  <span className="font-semibold">Adult Content:</span>{" "}
                  {data?.adult ? "Yes" : "No"}
                </p>

                {data?.homepage && (
                  <p>
                    <span className="font-semibold">Homepage:</span>{" "}
                    <a
                      href={data.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Visit Official Site
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <span className="font-semibold">Overview:</span> {data?.overview}
        </div>

        <div className="flex gap-[20px] overflow-x-auto mt-10 h-[220px] images">
          {imagesData?.backdrops?.slice(0, 20).map((item: any, inx: number) => (
            <div key={inx} className="flex-shrink-0">
              <img
                src={IMAGE_URL + item.file_path}
                alt=""
                className="h-full object-cover rounded"
                width={380}
              />
            </div>
          ))}
        </div>

        <div className="mt-[30px]">
          <Title text="Actors" />

          <div className="flex gap-[20px] overflow-auto mt-[20px] actors">
            {creditsData?.cast?.map((user: any) => (
              <div
                key={user.id}
                className="flex-shrink-0 w-[100px] text-center"
              >
                <div>
                  <img
                    src={
                      user.profile_path
                        ? IMAGE_URL + user.profile_path
                        : userLogo
                    }
                    width={100}
                    height={150}
                    className="h-[150px] w-[100px] object-cover rounded-full mx-auto"
                    alt={user.name}
                    loading="lazy"
                  />
                </div>

                <div className="mt-2">
                  <h3
                    title={user.name}
                    className="line-clamp-1 text-sm font-medium dark:text-[#A1A1A1]"
                  >
                    {user.name}
                  </h3>
                  <p
                    title={user.character}
                    className="line-clamp-1 text-xs text-gray-500"
                  >
                    {user.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TopWeeks />
        <MovieView data={movieViews} />
      </div>
    </section>
  );
};

export default memo(MovieDetail);
