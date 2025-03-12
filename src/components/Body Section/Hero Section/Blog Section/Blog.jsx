import React from "react";
import { GrFormView } from "react-icons/gr";
import { IoTimeOutline } from "react-icons/io5";

function Blog({ blog, categoryName }) {
  return (
   <div>
     <div className="md:w-[948px] h-[340px] border-l-8 border-amber-300 mb-8 rounded-xl shadow-md">
      <div className="py-8 px-6">
        <div className="flex gap-4">
          <img
            className="w-[160px] h-[160px] rounded-2xl object-cover hover:animate-pulse duration-500"
            src={blog.image}
            alt=""
          />
          <div>
            <h1 className="text-[26px] cursor-pointer font-Inter font-semibold text-gray-800 hover:text-[#fe5672] hover:duration-75">
              {blog.title}
            </h1>
            <div className="flex items-center gap-6 mt-4">
              <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src={blog.author_img}
                alt=""
              />
              <h6 className="text-xl font-Inter text-gray-700">By {blog.author}</h6>
              <h6 className="text-xl font-Inter text-gray-700">{blog.comments} Comments</h6>
            </div>
            <p className="text-[20px] w-[600px] mt-6 font-Inter text-gray-600">
              {blog.excerpt}...
            </p>
          </div>
        </div>
        <h6 className="text-gray-500 mt-8">
          ------------------------------------------------------------------------------------------------------------------------------------------
        </h6>
        <div className="flex items-center justify-between mt-6 text-gray-600">
          <div className="flex gap-6">
            <h3>
              <span>#</span>{blog.tags[0]}
            </h3>
            <h3>
              <span>#</span>{blog.tags[1]}
            </h3>
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <GrFormView size={22} />
              <h6>{blog.views} Views</h6>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeOutline size={15} />
              <h6>{blog.read_time}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Blog;
