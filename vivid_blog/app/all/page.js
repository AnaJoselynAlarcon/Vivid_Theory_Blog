"use client";
import { useState, useEffect } from "react";
import items from "/app/create/items.json";
import ItemList from "/app/create/item-list";
import Link from "next/link";

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/blogs");
      const data = await res.json();
      console.log(data);
      setUsers(data);
    };
    fetchData();
    console.log(users);
  }, []);

  useEffect(() => {
    const filterBlogs = () => {
      const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      filteredItems.sort((a, b) => {
        return new Date(b.published_at) - new Date(a.published_at);
      });

      setSearchResults(filteredItems);
    };

    filterBlogs();
  }, [searchTerm]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate Start and ending index
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = searchResults.slice(indexOfFirstBlog, indexOfLastBlog);

  return (
    <main>
      <h1 className="text-center text-2xl font-bold">ALL POSTS PAGE</h1>
      <div className="border border-gray-300 p-4 rounded-lg text-center">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="text-black w-full py-2 px-4 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div>
        <ItemList items={currentBlogs} />
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Prev
        </button>
        {Array.from({
          length: Math.ceil(searchResults.length / blogsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`mx-2 px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-500 text-white"
            }`}>
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          disabled={currentBlogs.length < blogsPerPage}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md">
          Next
        </button>
      </div>
    </main>
  );
}
