import React from "react";

export default function Blog({
  title,
  slug,
  content,
  image,
  published_at,
  created_at,
  updated_at,
  deleted_at,
}) {
  return (
    <div className="border-yellow-500 border-2 p-3 m-5 hover:bg-slate-700">
      <h1>{title}</h1>
      <p>{slug}</p>
      <p>{content}</p>
      <img src={image} alt={title} />
      <p>Published at: {published_at}</p>
      <p>Created at: {created_at}</p>
      <p>Updated at: {updated_at}</p>
      <p>Deleted at: {deleted_at}</p>
    </div>
  );
}
