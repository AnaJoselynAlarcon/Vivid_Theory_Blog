"use client";
import BlogPost from "./blogPost";
import React from "react";

export default function BlogPostList({ items }) {
  return (
    <main>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <BlogPost
                title={item.title}
                published_at={item.published_at}
                content={item.content}
                image={item.image}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
