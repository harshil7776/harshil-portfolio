import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>
          <p className="text-gray-300 text-sm font-medium">
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="text-gray-400 text-xs mt-1">
            {profile.role} • {profile.roleSecondary}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-400">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>
          )}

          <a
            href={`mailto:${profile.email}`}
            className="hover:text-white transition"
          >
            Email
          </a>

          <a href="#home" className="hover:text-blue-400 transition">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
