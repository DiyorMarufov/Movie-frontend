import { memo } from "react";
import Title from "../ui/title";
import ShowAll from "../ui/showAll";

const TopWeeks = () => {
  return (
    <div className="container mt-[50px] mb-[20px]">
      <div className="flex justify-between">
        <Title
          text="На неделе"
          className="dark:text-[var(--color-py)] dark:transition-all transition-all"
        />
        <ShowAll
          text="Показать все"
          className="dark:text-[var(--color-py)] dark:transition-all transition-all"
        />
      </div>
    </div>
  );
};

export default memo(TopWeeks);
