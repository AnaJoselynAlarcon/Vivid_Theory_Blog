"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [published_at, setPublishedAt] = useState("");
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleSubmit = (event) => {
    //this function should Prevent the form's default submission behavior.
    event.preventDefault();

    //Create an item object with the current values of name, content, and published_at.
    const newItem = {
      id: `${title}-${content}-${published_at}`,
      title,
      content,
      published_at,
      image: imageURL,
    };

    //Log the item object to the console
    console.log(
      `The item is: ${newItem.title}, the content is ${newItem.content}, and the published_at is ${newItem.published_at}`
    );

    onAddItem(newItem);

    setTitle("");
    setContent(1);
    setPublishedAt("");
    setImage(null);
    setImageURL("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handlePublishedAtChange = (event) => {
    setPublishedAt(event.target.value);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setImage(file);
    setImageURL(imageURL);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="text-white flex-auto justify-center">
      <label className="flex flex-col mb-4">
        <span className="text-lg font-medium mb-1">Title:</span>
        <input
          required
          type="text"
          onChange={handleTitleChange}
          placeholder="Enter title"
          value={title}
          className="border-2 border-blue-500 rounded-md py-2 px-4 text-black"
        />
      </label>

      <label className="flex flex-col mb-4">
        <span className="text-lg font-medium mb-1">Content:</span>
        <input
          required
          type="text"
          placeholder="Enter content"
          value={content}
          onChange={handleContentChange}
          className="border-2 border-blue-500 rounded-md py-2 px-4 text-black"
        />
      </label>

      <label className="flex flex-col mb-4">
        <span className="text-lg font-medium mb-1">Published Date:</span>
        <input
          required
          type="text"
          placeholder="Enter date published"
          value={published_at}
          onChange={handlePublishedAtChange}
          className="border-2 border-blue-500 rounded-md py-2 px-4 text-black"
        />
      </label>

      <label className="flex flex-col mb-4">
        <span className="text-lg font-medium mb-1">Image:</span>
        <input
          required
          type="file"
          onChange={handleImageChange}
          className="border-2 border-blue-500 rounded-md py-2 px-4 text-black"
        />
        {imageURL && (
          <img
            src={imageURL}
            alt="preview"
            className="w-1/4 h-1/4 object-cover"
          />
        )}
      </label>

      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="mb-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
}
