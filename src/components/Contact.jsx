import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">

      <div className="max-w-5xl mx-auto text-center">

        <p className="text-blue-400 mb-3">
          06 — Contact
        </p>

        <h2 className="text-4xl md:text-6xl font-bold">
          Let's build something
          <span className="gradient-text"> meaningful.</span>
        </h2>

        <p className="text-gray-400 max-w-xl mx-auto mt-6">
          Have a project, opportunity or idea you'd like to discuss?
          Feel free to get in touch.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-12">

          <a
            href="mailto:harshilthakkar0102@gmail.com"
            className="glass rounded-2xl p-6 hover:border-blue-500/30 transition"
          >
            <Mail className="mx-auto text-blue-400" />

            <p className="text-gray-400 text-sm mt-4">
              Email
            </p>

            <p className="mt-1 text-sm">
              harshilthakkar0102@gmail.com
            </p>
          </a>

          <div className="glass rounded-2xl p-6">
            <Phone className="mx-auto text-blue-400" />

            <p className="text-gray-400 text-sm mt-4">
              Phone
            </p>

            <p className="mt-1">
              +91 XXXXX XXXXX
            </p>
          </div>

          <div className="glass rounded-2xl p-6">
            <MapPin className="mx-auto text-blue-400" />

            <p className="text-gray-400 text-sm mt-4">
              Location
            </p>

            <p className="mt-1">
              Gujarat, India
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}