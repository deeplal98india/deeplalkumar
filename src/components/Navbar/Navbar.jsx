import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "./navbarData";
import dkLogo from "../../assets/company/dkLogo.webp";

export default function Navbar({ theme = "dark", onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isLight = theme === "light";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 16);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -60% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const headerClass = isLight
    ? scrolled
      ? "border-slate-200 bg-white/95 shadow-sm"
      : "border-transparent bg-white/90"
    : scrolled
      ? "border-slate-800 bg-slate-950/95 shadow-lg"
      : "border-transparent bg-slate-950/75";

  const linkClass = (sectionId) => {
    if (activeSection === sectionId) {
      return "text-cyan-600 dark:text-cyan-300";
    }

    return isLight
      ? "text-slate-600 hover:text-slate-950"
      : "text-slate-300 hover:text-white";
  };

  const iconButtonClass = isLight
    ? "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
    : "border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800";

  const toggleLabel = isLight
    ? "Switch to dark mode"
    : "Switch to light mode";

  const ThemeToggle = ({ mobile = false }) => (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={toggleLabel}
      title={toggleLabel}
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-lg border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
        mobile ? "w-full px-3" : "w-10"
      } ${iconButtonClass}`}
    >
      {isLight ? <Moon size={19} /> : <Sun size={19} />}

      {mobile && (
        <span className="text-sm font-medium">
          {isLight ? "Dark mode" : "Light mode"}
        </span>
      )}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-200 ${headerClass}`}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-none items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Logo and Name */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
          aria-label="Deeplal Kumar home"
        >
          <img
            src={dkLogo}
            alt=""
            className="h-10 w-10 rounded-full border border-slate-300 object-cover dark:border-slate-700"
          />

          <span
            className={`text-base font-semibold tracking-tight sm:text-lg ${
              isLight ? "text-slate-950" : "text-white"
            }`}
          >
            Deeplal Kumar
            <span className="text-cyan-500">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-7">
            {navLinks.map((item) => {
              const sectionId = item.href.substring(1);

              return (
                <li key={item.id ?? item.href}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(sectionId)}
                    aria-current={
                      activeSection === sectionId ? "location" : undefined
                    }
                    className={`text-sm font-medium transition-colors ${linkClass(
                      sectionId
                    )}`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <a
            href="#contact"
            className="inline-flex rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-400"
          >
            Contact me
          </a>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors ${iconButtonClass}`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav
          className={`border-t px-4 py-4 lg:hidden ${
            isLight
              ? "border-slate-200 bg-white"
              : "border-slate-800 bg-slate-950"
          }`}
          aria-label="Mobile navigation"
        >
          <ul className="w-full space-y-1">
            {navLinks.map((item) => {
              const sectionId = item.href.substring(1);

              return (
                <li key={item.id ?? item.href}>
                  <a
                    href={item.href}
                    onClick={() => {
                      setActiveSection(sectionId);
                      closeMenu();
                    }}
                    aria-current={
                      activeSection === sectionId ? "location" : undefined
                    }
                    className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      activeSection === sectionId
                        ? "bg-cyan-500/10 text-cyan-700 dark:text-cyan-300"
                        : isLight
                          ? "text-slate-600 hover:bg-slate-100 hover:text-slate-950"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}

            <li className="pt-2">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block rounded-lg bg-cyan-500 px-3 py-3 text-center text-sm font-semibold text-slate-950 hover:bg-cyan-400"
              >
                Contact me
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
