import { memo, type FC } from "react";

interface Props {
  count?: number;
}

const Skeleton: FC<Props> = ({ count = 20 }) => {
  return (
    <div className="container grid grid-cols-4 gap-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
      {Array(count)
        .fill(" ")
        ?.map((_, index) => (
          <div key={index}>
            <div className="h-[450px] bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="pt-2">
              <div className="w-[70%] h-7 bg-gray-300 rounded-lg animate-pulse"></div>
              <div className="w-[80%] h-5 bg-gray-300 mt-2 rounded-lg animate-pulse"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default memo(Skeleton);
