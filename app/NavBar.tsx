"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname()?.split("/").pop();

  return (
    <header>
      <div className="flex mx-8 my-2 justify-between items-center">
        <div className="text-2xl">
          <Link href="/" className="px-2 py-2">
            <h1>Harriet India De Ferranti Forster</h1>
          </Link>
        </div>

        <Bars3Icon className="h-8 w-8 cursor-pointer md:hidden"></Bars3Icon>

        <div className="hidden md:inline">
          <div className="text-m">
            <Link
              href="/collections"
              className={
                pathname == "collections"
                  ? "underline px-4 py-2"
                  : "px-4 py-2 hover:underline decoration-slate-400"
              }
            >
              collections
            </Link>
            <Link
              href="/exhibitions"
              className={
                pathname == "exhibitions"
                  ? "underline px-4 py-2"
                  : "px-4 py-2 hover:underline decoration-slate-400"
              }
            >
              exhibitions
            </Link>
            <Link
              href="/about"
              className={
                pathname == "about"
                  ? "underline px-4 py-2"
                  : "px-4 py-2 hover:underline decoration-slate-400"
              }
            >
              about
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
