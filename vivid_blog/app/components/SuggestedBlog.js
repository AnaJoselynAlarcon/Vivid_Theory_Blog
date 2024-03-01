"use client";
import BlogPost from "../create/blogPost";
import { useEffect, useState } from "react";

import React from "react";

const SuggestedBlog = ({ blogs }) => {
  const [randomBlogs, setRandomBlogs] = useState([]);

  useEffect(() => {
    function selectRandomObjects(array) {
      const shuffledArray = array.slice().sort(() => Math.random() - 0.5);
      const random = shuffledArray.slice(0, 4);
      setRandomBlogs(random);
    }
    selectRandomObjects(blogs);
  }, [blogs]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {randomBlogs.map((item) => (
          <div className="flex justify-between w-full" key={item.id}>
            <BlogPost
              title={item.title}
              published_at={item.published_at}
              content={item.content}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SuggestedBlog;
