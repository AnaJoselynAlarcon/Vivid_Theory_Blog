import React from "react";
import Link from "next/link";

export default function BlogPost({
  title,
  content,
  published_at,
  slug,
  image,
}) {
  return (
    <div className="bg-white shadow-md p-4 mb-4 rounded-md m-10">
      <Link href={`/all/${slug}`}>
        <h2 className="text-2xl font-bold text-blue-500">{title}</h2>
      </Link>
      <p className="text-gray-600 text-sm mb-4">Published: {published_at}</p>
      <div>
        <img src={image} alt={title} className="w-full h-64 object-cover" />
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
