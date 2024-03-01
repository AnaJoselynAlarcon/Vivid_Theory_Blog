"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import items from "/app/create/items.json";
import MyModal from "../components/MyModal";
import BlogPost from "../create/blogPost";

export default function Page() {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [posts, setPosts] = useState(items);
  const [selectedPost, setSelectedPost] = useState(null);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleModal = (post) => {
    setSelectedPost(post);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmDelete(false);
    router.push("/all");
  };

  const handleDelete = (e) => {
    console.log(" delete", selectedPost);
    const remainingPosts = posts.filter((post) => post.id !== selectedPost.id);
    setPosts(remainingPosts);
    closeModal();
  };

  return (
    <main>
      <h1 className="text-sky-500  p-4 text-center-xl text-center font-bold">
        DELETE PAGE
      </h1>
      <div>
        {posts.map((post) => (
          <div key={post.id} className=" hover:bg-slate-700">
            <BlogPost
              title={post.title}
              published_at={post.published_at}
              slug={post.slug}
              content={post.content}
              image={post.image}
            />

            <div className="w-full h-full flex justify-center items-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                onClick={() => handleModal(post)}>
                Delete
              </button>
            </div>
          </div>
        ))}

        {isOpen && (
          <MyModal isOpen={isOpen} onClose={closeModal}>
            <div className="bg-white p-8 rounded-lg z-50">
              <p className="mb-4 text-black">Are you sure to delete?</p>
              <div className="flex justify-center">
                <button
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mr-4 rounded"
                  onClick={handleDelete}>
                  Yes, delete
                </button>
                <button
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  onClick={(e) => handleCancelDelete(e)}>
                  Cancel
                </button>
              </div>
            </div>
          </MyModal>
        )}
      </div>
    </main>
  );
}
