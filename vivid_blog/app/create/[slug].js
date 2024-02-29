import { useRouter } from "next/router";

const postSlug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Post: {slug}</h1>
    </div>
  );
};

export default postSlug;
