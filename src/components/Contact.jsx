import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { profile } from "../data/portfolio";

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  profile.phone && {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
].filter(Boolean);

const cardClass =
  "glass rounded-2xl p-6 hover:border-blue-500/30 hover:-translate-y-1 transition duration-300";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="section-label text-blue-400 mb-3">06 — Contact</p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Let's build something
          <span className="gradient-text"> meaningful.</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-6 leading-7">
          Have a project, opportunity or idea you'd like to discuss? Feel
          free to get in touch.
        </p>

        <div
          className={`grid gap-4 mt-12 ${contactItems.length > 1 ? "md:grid-cols-2" : ""
            }`}
        >
          {contactItems.map((item) => {
            const Icon = item.icon;

            return (
              <a key={item.label} href={item.href} className={cardClass}>
                <Icon className="mx-auto text-blue-400" aria-hidden="true" />
                <p className="text-gray-400 text-sm mt-4">{item.label}</p>
                <p className="mt-2 text-sm break-all">{item.value}</p>
              </a>
            );
          })}
        </div>

        <div
          className={`grid gap-4 mt-4 ${profile.linkedin ? "md:grid-cols-3" : "md:grid-cols-2"
            }`}
        >
          <div className="glass rounded-2xl p-6">
            <MapPin className="mx-auto text-blue-400" aria-hidden="true" />
            <p className="text-gray-400 text-sm mt-4">Location</p>
            <p className="mt-2">{profile.location}</p>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={cardClass}
          >
            <GithubIcon className="mx-auto text-blue-400" />
            <p className="text-gray-400 text-sm mt-4">GitHub</p>
            <p className="mt-2 flex justify-center items-center gap-1">
              {profile.githubHandle}
              <ArrowUpRight size={14} aria-hidden="true" />
            </p>
          </a>

          {profile.linkedin && (
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={cardClass}
            >
              <LinkedinIcon className="mx-auto text-blue-400" />
              <p className="text-gray-400 text-sm mt-4">LinkedIn</p>
              <p className="mt-2 flex justify-center items-center gap-1">
                Connect with me
                <ArrowUpRight size={14} aria-hidden="true" />
              </p>
            </a>
          )}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 mt-10 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-medium transition"
        >
          Let's Work Together
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
