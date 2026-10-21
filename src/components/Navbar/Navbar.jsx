import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

import { navLinks } from "./navbarData";
import dkLogo from "../../assets/company/dkLogo.webp";

const getSectionId = (href = "") => href.replace(/^#/, "").trim().toLowerCase();

export default function Navbar({ theme = "dark", onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isLight = theme === "light";

  useEffect(() => {
    let animationFrame = null;

    const updateNavbar = () => {
      setScrolled(window.scrollY > 16);

      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 72;
      const activationLine = window.scrollY + headerHeight + 100;

      // Sort by actual page position, not by the order in navbarData.
      const sections = navLinks
        .map((item) => {
          const id = getSectionId(item.href);
          const element =
            document.getElementById(id) ||
            (id === "skills" ? document.getElementById("skill") : null);

          if (!element) return null;

          return {
            id: id === "skill" ? "skills" : id,
            top: element.getBoundingClientRect().top + window.scrollY,
          };
        })
        .filter(Boolean)
        .sort((a, b) => a.top - b.top);

      let currentId = "home";

      for (const section of sections) {
        if (section.top <= activationLine) {
          currentId = section.id;
        } else {
          break;
        }
      }

      setActiveSection(currentId);
    };

    const handleScroll = () => {
      if (animationFrame !== null) return;

      animationFrame = window.requestAnimationFrame(() => {
        updateNavbar();
        animationFrame = null;
      });
    };

    updateNavbar();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  const headerClass = isLight
    ? scrolled
      ? "border-slate-200/80 bg-white/95 shadow-lg shadow-slate-900/[0.06]"
      : "border-transparent bg-white/85"
    : scrolled
      ? "border-white/10 bg-slate-950/95 shadow-lg shadow-black/20"
      : "border-transparent bg-slate-950/80";

  const iconButtonClass = isLight
    ? "border-slate-200 bg-white text-slate-700 hover:border-cyan-300 hover:bg-cyan-50"
    : "border-white/10 bg-white/[0.04] text-slate-100 hover:border-cyan-400/40 hover:bg-white/[0.08]";

  const closeMenu = () => setMenuOpen(false);

  const handleNavClick = (event, href) => {
    const id = getSectionId(href);
    const target =
      document.getElementById(id) ||
      (id === "skills" ? document.getElementById("skill") : null);

    // Let the browser follow the regular anchor if no target exists.
    if (!target) {
      closeMenu();
      return;
    }

    event.preventDefault();
    closeMenu();
    setActiveSection(id);

    const headerHeight =
      document.querySelector("header")?.getBoundingClientRect().height ?? 72;
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      12;

    window.history.replaceState(null, "", `#${target.id}`);
    window.scrollTo({
      top: Math.max(0, top),
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const ThemeToggle = ({ mobile = false }) => (
    <button
      type="button"
      onClick={onToggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      title={isLight ? "Switch to dark mode" : "Switch to light mode"}
      className={`inline-flex h-10 items-center justify-center gap-2 rounded-xl border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
        mobile ? "w-full px-3" : "w-10"
      } ${iconButtonClass}`}
    >
      {isLight ? <Moon size={18} /> : <Sun size={18} />}
      {mobile && (
        <span className="text-sm font-medium">
          {isLight ? "Dark mode" : "Light mode"}
        </span>
      )}
    </button>
  );

  const renderNavLink = (item, mobile = false) => {
    const id = getSectionId(item.href);
    const active = activeSection === id;

    return (
      <li key={item.id ?? item.href}>
        <a
          href={item.href}
          onClick={(event) => handleNavClick(event, item.href)}
          aria-current={active ? "location" : undefined}
          className={`relative inline-flex items-center text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${
            mobile
              ? "w-full rounded-xl px-4 py-3.5"
              : "py-2"
          } ${
            active
              ? isLight
                ? "text-cyan-700"
                : "text-cyan-300"
              : isLight
                ? "text-slate-600 hover:text-cyan-700"
                : "text-slate-300 hover:text-cyan-300"
          }`}
        >
          <span>{item.title}</span>
          {active && (
            <span
              aria-hidden="true"
              className={`absolute h-0.5 rounded-full ${
                mobile ? "bottom-2 left-4 right-4" : "bottom-0 left-0 right-0"
              } ${isLight ? "bg-cyan-600" : "bg-cyan-300"}`}
            />
          )}
        </a>
      </li>
    );
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-2xl transition-colors duration-200 ${headerClass}`}
    >
      <div className="mx-auto flex h-[72px] w-full items-center justify-between gap-3 px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <a
          href="#home"
          onClick={(event) => handleNavClick(event, "#home")}
          className="group flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          aria-label="Deeplal Kumar home"
        >
          <img
            src={dkLogo}
            alt="Deeplal Kumar"
            className="h-10 w-10 rounded-full border border-slate-300/80 object-cover dark:border-slate-700"
          />
          <span
            className={`text-base font-bold tracking-tight sm:text-lg ${
              isLight ? "text-slate-950" : "text-white"
            }`}
          >
            Deeplal Kumar<span className="text-cyan-500">.</span>
          </span>
        </a>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((item) => renderNavLink(item))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href="#contact"
            onClick={(event) => handleNavClick(event, "#contact")}
            className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          >
            Contact me
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${iconButtonClass}`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          className={`border-t px-4 pb-5 pt-4 sm:px-8 lg:hidden ${
            isLight
              ? "border-slate-200/80 bg-white"
              : "border-white/10 bg-slate-950"
          }`}
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1.5">
            {navLinks.map((item) => renderNavLink(item, true))}
          </ul>

          <div className="mt-4 border-t border-slate-500/15 pt-4">
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "#contact")}
              className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              Contact me
              <ArrowUpRight size={16} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
