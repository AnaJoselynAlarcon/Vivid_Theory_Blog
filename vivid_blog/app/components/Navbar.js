import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src="/assets/logo.png"
          alt="Vivid Theory"
          width={200}
          height={200}
          className="rounded-full"
        />

        <Link href="/">Home</Link>
        <div className="flex space-x-4">
          <Link href="/">About</Link>
          <Link href="/">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
