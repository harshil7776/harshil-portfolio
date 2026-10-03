import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import useActiveSection from "../hooks/useActiveSection";

const sectionIds = navLinks.map(([, id]) => id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  const linkClass = (id) =>
    `text-sm transition ${
      active === id ? "text-white" : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-5 py-4"
    >
      <div className="max-w-6xl mx-auto glass rounded-2xl px-4 sm:px-5 py-3 shadow-2xl shadow-blue-950/10">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            aria-label="Go to top"
            onClick={() => setOpen(false)}
            className="text-xl font-bold tracking-tight"
          >
            H<span className="text-blue-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={linkClass(id)}
              >
                {name}
              </a>
            ))}

            {profile.resume && (
              <a
                href={profile.resume}
                download
                className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm font-medium"
              >
                Resume
              </a>
            )}
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="md:hidden text-gray-200"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div
            id="mobile-menu"
            className="md:hidden flex flex-col gap-4 pt-5 pb-2"
          >
            {navLinks.map(([name, id]) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => setOpen(false)}
                className={`transition ${
                  active === id ? "text-white" : "text-gray-300 hover:text-white"
                }`}
              >
                {name}
              </a>
            ))}

            {profile.resume && (
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="w-fit px-4 py-2 rounded-full bg-blue-600 text-sm font-medium"
              >
                Download Resume
              </a>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
