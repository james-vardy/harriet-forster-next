"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname()?.split("/").pop();

  return (
    <nav className="flex flex-col md:flex-row text-center justify-between px-4 py-4 md:px-8 md:py-8">
      <h1 className="text-3xl lg:text-5xl">
        <Link href={"/harriet"}>Harriet India De Ferranti Forster</Link>
      </h1>

      <div className="py-2">
        <div className="text-m">
          <Link
            href="/about"
            className={
              pathname == "about"
                ? "underline px-2 py-2"
                : "px-2 py-2 hover:underline decoration-slate-400"
            }
          >
            about
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
