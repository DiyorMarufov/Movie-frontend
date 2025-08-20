import { memo } from "react";
import { useParams } from "react-router-dom";
import { useMovieDetail } from "../../services/useMovieDetail";
import { IMAGE_URL } from "../../../../shared/const";
import userLogo from "../../../../shared/assets/hero/user-icon.png";

const Crew = () => {
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();
  const { data: creditsData } = getMovieItems(id || "", "credits");
  return (
    <div className="flex gap-[20px] overflow-auto mt-[20px] actors">
      {creditsData?.crew?.map((user: any) => (
        <div key={user.id} className="flex-shrink-0 w-[100px] text-center">
          <div>
            <img
              src={user.profile_path ? IMAGE_URL + user.profile_path : userLogo}
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
  );
};

export default memo(Crew);
