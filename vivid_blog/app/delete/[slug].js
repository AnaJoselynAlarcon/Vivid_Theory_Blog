import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";

export default function DeleteBlogPage({ slug }) {
  const router = useRouter();
  const { slug } = router.query;
  const [deleted, setDeleted] = useState(false);

  const handleDelete = () => {
    console.log(`Delete blog with slug: ${slug}`);
    setDeleted(true);
  };

  //once its deleted, redirect to all
  if (deleted) {
    router.push("/all");
    return null;
  }

  return (
    <div>
      <h1>Delete Blog</h1>

      <div>
        <p>Are you sure you want to delete this blog?</p>
        <button onClick={handleDelete}>Delete</button>
        <Link href="/all">Cancel</Link>
      </div>
    </div>
  );
}
