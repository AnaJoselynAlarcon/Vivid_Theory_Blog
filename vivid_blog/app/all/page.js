export default function Page() {
  return (
    <main>
      <h1 className="border-sky-500 border-2 p-4 text-center-xl text-center font-bold">
        ALL POSTS PAGE
      </h1>
      <div>
        <BlogList posts={posts} />
      </div>
    </main>
  );
}
