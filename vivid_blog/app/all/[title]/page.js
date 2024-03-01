"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import items from "/app/create/items.json";
import SuggestedBlog from "../../components/SuggestedBlog";

import BlogPost from "@/app/create/blogPost";
export default function Page() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const filterBlogs = () => {
      const myBlog = items.find((item) => item.slug === slug);
      setBlog(myBlog);
    };

    filterBlogs();
  }, [slug]);

  return (
    <main>
      {blog && (
        <div className="text-green-300">
          <BlogPost
            title={blog.title}
            content={blog.content}
            published_at={blog.published_at}
            image={blog.image}
          />
        </div>
      )}
      <div>
        <h2 className="text-2xl font-bold text-center">
          Something else that might be interesting...
        </h2>
        <div className="flex flex-wrap justify-between">
          <SuggestedBlog blogs={items} />
        </div>
      </div>
    </main>
  );
}
