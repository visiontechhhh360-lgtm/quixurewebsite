import { Globe, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Download", to: "/downloads" },
      { label: "Account", to: "/account" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/" },
      { label: "Contact", to: "/support" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help Center", to: "/support" },
      { label: "Privacy Policy", to: "#" },
      { label: "Terms of Service", to: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink-950 border-t border-white/5 px-6 md:px-12 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 text-left">
          <div>
            <div className="flex items-center gap-2 font-display text-xl font-bold text-white mb-4">
              <img src={logo} alt="Quixure VPN" className="h-12 w-12 object-contain" />
              Quixure VPN
            </div>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              Secure, fast, global VPN protection built for everyone, your
              privacy, uncompromised.
            </p>
            <div className="flex gap-3 mt-6">
              {[Globe, MessageCircle, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/50 hover:text-teal-300 hover:border-teal-400/40 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="text-sm text-white/40 hover:text-teal-300 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} Quixure. All rights reserved.</p>
          <p>Built for a private, limitless internet.</p>
        </div>
      </div>
    </footer>
  );
}
