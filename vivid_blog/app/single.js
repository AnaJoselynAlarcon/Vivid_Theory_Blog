import { useRouter } from "next/router";
import items from "/app/create/items.json";

export default function SinglePost() {
  const router = useRouter();
  const { postTitle } = router.query;

  // Buscar el post correspondiente por titulo
  const post = items.find((item) => item.title === postTitle);

  // Manejar el caso cuando el post no se encuentra
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      {/* Renderizar el resto del contenido del post */}
    </div>
  );
}
