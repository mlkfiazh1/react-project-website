import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass =
    "block rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800";

  return (
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold text-slate-900 dark:text-slate-100"
        >
          YourName.dev
        </a>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="rounded-md bg-brand-600 px-3 py-2 text-white hover:bg-brand-700 dark:bg-brand-500 dark:hover:bg-brand-600"
            >
              Contact
            </a>
          </li>
        </ul>

        <ThemeToggle />
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          className="space-y-1 border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-950 md:hidden"
        >
          <li>
            <a
              href="#about"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Navbar;
