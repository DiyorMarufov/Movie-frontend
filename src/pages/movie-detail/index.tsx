import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "./services/useMovieDetail";
import { IMAGE_URL } from "../../shared/const";
import Title from "../../shared/components/ui/title";
import userLogo from "../../shared/assets/hero/user-icon.png";
import TopWeeks from "../../shared/components/top-weeks/TopWeeks";
import MovieView from "../../shared/components/movie-view/MovieView";
import { useFullMovieData } from "../../shared/hooks/getGenres";
import { Image } from "antd";

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
          <div className="w-[50%] bg-[#F5F5F5] rounded-lg shadow-lg px-6 pt-2 max-[1200px]:w-full max-[1200px]:pb-3">
            <div className="text-[#333] p-4 rounded-md space-y-3.5">
              <div className="flex">
                <div className="w-1/3 bg-[#E0E0E0] text-[#666] px-2 py-1 font-semibold text-sm">
                  Name
                </div>
                <div className="w-2/3 bg-[#FAFAFA] text-[#333] px-3 py-1 text-sm">
                  {data?.title}
                </div>
              </div>

              <div className="flex">
                <div className="w-1/3 bg-[#E0E0E0] text-[#666] px-2 py-1 font-semibold text-sm">
                  Genre
                </div>
                <div className="w-2/3 bg-[#FAFAFA] text-[#333] px-3 py-1 text-sm">
                  {data?.genres?.map((g: any) => g.name).join(" / ")}
                </div>
              </div>

              <div className="flex">
                <div className="w-1/3 bg-[#E0E0E0] text-[#666] px-2 py-1 font-semibold text-sm">
                  Country
                </div>
                <div className="w-2/3 bg-[#FAFAFA] text-[#333] px-3 py-1 text-sm">
                  {data?.production_countries?.[0]?.name || "Noma'lum"}
                </div>
              </div>

              <div className="flex">
                <div className="w-1/3 bg-[#E0E0E0] text-[#666] px-2 py-1 font-semibold text-sm">
                  Release year
                </div>
                <div className="w-2/3 bg-[#FAFAFA] text-[#333] px-3 py-1 text-sm">
                  {data?.release_date?.slice(0, 4)}
                </div>
              </div>

              <div className="flex">
                <div className="w-1/3 bg-[#E0E0E0] text-[#666] px-2 py-1 font-semibold text-sm">
                  Language
                </div>
                <div className="w-2/3 bg-[#FAFAFA] text-[#333] px-3 py-1 text-sm">
                  {data?.original_language === "uz"
                    ? "O'zbekcha"
                    : data?.original_language?.toUpperCase()}
                </div>
              </div>

              <div className="flex">
                <div className="w-1/3 bg-[#E0E0E0] text-[#666] px-2 py-1 font-semibold text-sm">
                  Duration
                </div>
                <div className="w-2/3 bg-[#FAFAFA] text-[#333] px-3 py-1 text-sm">
                  {Math.floor(data?.runtime / 60)}hour {data?.runtime % 60}min
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-1/3 bg-[#E0E0E0] text-[#666] px-2 py-1 font-semibold text-sm">
                  Age limit
                </div>
                <div className="w-2/3 bg-[#FAFAFA] text-[#333] px-3 py-1 text-sm">
                  <span className="bg-red-600 px-2 py-1 rounded text-white font-bold text-xs">
                    {data?.adult ? "18+" : "16+"}
                  </span>
                </div>
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
              <Image
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
                    className={`h-[150px] w-[100px] object-cover rounded-full mx-auto ${
                      !user.profile_path ? "fill-black bg-[white]" : ""
                    }`}
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
