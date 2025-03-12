import React, { useEffect, useState } from "react";
import Blog from "./Blog";

function Blogs({ categoryName }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const filteredBlogs =
    categoryName && categoryName !== "All"
      ? blogs.filter((blog) => blog.category === categoryName)
      : blogs;

  return (
    <div className="w-[60%] rounded-2xl">
      <div className="w-full h-[650px] overflow-y-auto scrollbar-hide">
        {filteredBlogs.map((blog) => (
          <Blog blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
