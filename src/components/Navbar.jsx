import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-5 py-4">
      <div className="max-w-6xl mx-auto glass rounded-2xl px-5 py-3">
        <div className="flex items-center justify-between">

          <a
            href="#home"
            className="text-xl font-bold tracking-tight"
          >
            H<span className="text-blue-500">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(([name, link]) => (
              <a
                key={name}
                href={link}
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition text-sm"
            >
              Let's Talk
            </a>
          </div>

          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col gap-5 pt-5 pb-3">
            {links.map(([name, link]) => (
              <a
                key={name}
                href={link}
                onClick={() => setOpen(false)}
                className="text-gray-300"
              >
                {name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}