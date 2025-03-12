import React, { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Category({ handelCategory }) {
  const [categoryName, setCategoryName] = useState([]);

  useEffect(() => {
    fetch("Category.json")
      .then((res) => res.json())
      .then((data) => setCategoryName(data));
  }, []);

  // const categoryList = categoryName.map(name)
  return (
    <div className="w-[20%] bg-white shadow-lg rounded-2xl py-10 pt-0 hidden md:block">
      <div className="flex items-center gap-6 justify-center bg-[#ff5671] py-2 text-white font-Inter font-semibold">
        <MdMenu size={35} />
        <h1 className="text-3xl">Category</h1>
        <MdOutlineKeyboardArrowDown size={37} />
      </div>

      <div>
        {categoryName.map((category) => (
          <div className="flex items-center gap-4 mt-6 px-8 cursor-pointer">
            <img
              onClick={() => handelCategory(category.category)}
              className="w-[28px]"
              src={category.icon}
              alt=""
            />
            <h1
              onClick={() => handelCategory(category.category)}
              className="text-2xl font-Inter text-gray-600"
            >
              {category.category}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
