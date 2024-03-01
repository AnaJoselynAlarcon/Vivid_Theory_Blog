"use client";
import Link from "next/link";

import React from "react";

import ItemList from "./item-list";

import NewItem from "./new-item";

import itemsData from "./items.json";

import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (item) => {
    console.log(
      `Submitting ${item.title} ${item.content} ${item.published_at} ${item.image}`
    );
    console.log(items);
    setItems([...items, item]);
  };

  return (
    <main>
      <div
        className="flex flex-col items-center justify-center bg-gray-900 min-h-screen "
        style={{
          backgroundImage: `url('/assets/car1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <h1 className="text-blue-100 text-4xl font-bold mt-auto">
          <span className="border-b-4 border-blue-200 pb-1 z-20">
            Feeling inspired? Add a new Blog
          </span>
        </h1>
      </div>

      <div className="m-10">
        <NewItem onAddItem={handleAddItem} />
      </div>

      <div>
        <ItemList items={items} />
      </div>
    </main>
  );
}
