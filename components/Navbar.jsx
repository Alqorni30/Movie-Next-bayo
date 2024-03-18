"use client";

import { Clapperboard, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Changed from "next/navigation"
import { useRef } from "react";

export default function Navbar() {
  const router = useRouter();
  const searchRef = useRef(null);

  const handleSearch = () => {
    const search = searchRef.current.value;

    router.push(`/search?query=${search}`);

    searchRef.current.value = "";
  };

  const handleKeyDown = (e) => {
    e.preventDefault();

    if (e.key === "Enter" && searchRef.current.value !== "") {
      handleSearch();
    }
  };

  return (
    <header className="w-full fixed top-0 z-10 bg-transparent p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href={"/"} className="flex items-center gap-3">
          <Clapperboard className="h-10 w-10 rounded-md bg-amber-500 p-2 text-white transition duration-100 ease-in-out hover:rotate-[-20deg]" />
          <h2 className=" font-medium text-zinc-800 p-1 rounded-lg bg-amber-500">NetBayo</h2>
        </Link>
        <div className="relative flex gap-3 items-center">
          <h3 className="lg:block hidden font-bold text-zinc-600 bg-amber-400 p-1 rounded-lg">Cari Movie</h3>
          <form onSubmit={handleKeyDown}>
            <input
              type="text"
              placeholder="Search for a movie"
              className="rounded-md border border-[##C4C4C4] p-2 px-4"
              ref={searchRef}
            />
            <button onClick={handleSearch}>
              <Search className="absolute right-2 top-2 h-6 w-6 text-zinc-400 hover:text-zinc-600" />
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
