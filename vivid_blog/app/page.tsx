import Link from "next/link";
import Image from "next/image";

const pages = [
  { title: "All Posts", url: "/all" },
  { title: "Add Post", url: "/create" },
  { title: "Delete Post", url: "/delete" },
];
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-between p-24">
      <div className="relative bg-gray-900 w-full h-96">
        <Image
          className="object-cover w-full h-full"
          src="/assets/homepage.jpg"
          alt="Homepage"
          width={1920}
          height={1080}
        />
      </div>
      <p className="relative top-8 left-0 right-0 text-slate-200 text-center text-3xl">
        <span className="border-b-4 border-slate-600 pb-1 z-20 w-full">
          Welcome to the Blog
        </span>
      </p>
      <div className="flex justify-between mt-8 w-full">
        {pages.map((page, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-1/3 h-64 p-4 m-3 rounded-md shadow-lg">
            <Link href={page.url} className="text-orange-300 text-center">
              {page.title}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
