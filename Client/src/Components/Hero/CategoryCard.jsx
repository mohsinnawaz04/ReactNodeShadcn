import { MoveRight } from "lucide-react";

const CategoryCard = () => {
  return (
    <div className="category-card col-span-1 w-fit lg:w-[90%] flex items-center gap-2 bg-[#5DBDAC] bg-opacity-40 px-14 ps-3 py-2 rounded-md">
      <p className="font-semibold">Lorem Ipsum Dolor</p>
      <span>
        <MoveRight size={14} />
      </span>
    </div>
  );
};

export default CategoryCard;
