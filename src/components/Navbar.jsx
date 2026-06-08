import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import {
  RiUser3Line,
  RiCodeSSlashLine,
  RiFolderLine,
  RiBriefcaseLine,
  RiBookLine,
  RiMailLine,
} from "react-icons/ri";

const links = [
  { name: "About", icon: <RiUser3Line /> },
  { name: "Skills", icon: <RiCodeSSlashLine /> },
  { name: "Projects", icon: <RiFolderLine /> },
  { name: "Experience", icon: <RiBriefcaseLine /> },
  { name: "Education", icon: <RiBookLine /> },
  { name: "Contact", icon: <RiMailLine /> },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  // Scroll background
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Scroll spy (active section)
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 px-6 md:px-16 lg:px-24 py-4 flex justify-between items-center
        ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <span className="font-semibold text-lg text-blue-600 dark:text-blue-400">
          Ahmed.dev
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const id = link.name.toLowerCase();
            const isActive = active === id;

            return (
              <a
                key={link.name}
                href={`#${id}`}
                className={`relative text-sm transition-colors
                  ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                {link.name}

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 dark:bg-blue-400 transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}`}
                />
              </a>
            );
          })}

          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 w-full md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex justify-around py-2 z-50">
        {links.map((link) => {
          const id = link.name.toLowerCase();
          const isActive = active === id;

          return (
            <a
              key={link.name}
              href={`#${id}`}
              className={`flex flex-col items-center text-xs transition-colors
                ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-slate-500 dark:text-slate-400"
                }`}
            >
              <span className="text-xl">{link.icon}</span>
              <span className="text-[10px]">{link.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}