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
            href="/selected-works"
            className={
              pathname == "selected-works"
                ? "underline px-2 py-2"
                : "px-2 py-2 hover:underline decoration-slate-400"
            }
          >
            selected works
          </Link>
          <Link
            href="/exhibitions"
            className={
              pathname == "exhibitions"
                ? "underline px-2 py-2"
                : "px-2 py-2 hover:underline decoration-slate-400"
            }
          >
            exhibitions
          </Link>
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
          <Link
            href="/projects-and-residencies"
            className={
              pathname == "projects-and-residencies"
                ? "underline px-2 py-2"
                : "px-2 py-2 hover:underline decoration-slate-400"
            }
          >
            projects and residencies
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
