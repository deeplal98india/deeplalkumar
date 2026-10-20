import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "./navbarData";
import dkLogo from "../../assets/company/dkLogo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-25% 0px -60% 0px" },
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${scrolled ? "border-slate-800 bg-slate-950/95 shadow-lg backdrop-blur" : "border-transparent bg-slate-950/75 backdrop-blur-sm"}`}>
      <div className="mx-auto flex h-[72px] w-full max-w-none items-center justify-between px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3" aria-label="Deeplal Kumar home">
          <img src={dkLogo} alt="" className="h-10 w-10 rounded-full border border-slate-700 object-cover" />
          <span className="text-base font-semibold tracking-tight text-white sm:text-lg">Deeplal Kumar<span className="text-cyan-400">.</span></span>
        </a>

        <nav className="hidden lg:block" aria-label="Main navigation">
          <ul className="flex items-center gap-7">
            {navLinks.map((item) => {
              const sectionId = item.href.substring(1);
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(sectionId)}
                    className={`text-sm font-medium transition-colors ${activeSection === sectionId ? "text-cyan-300" : "text-slate-300 hover:text-white"}`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="#contact" className="hidden rounded-lg bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 lg:inline-flex">
          Contact me
        </a>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-100 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-800 bg-slate-950 px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <ul className="w-full space-y-1">
            {navLinks.map((item) => {
              const sectionId = item.href.substring(1);
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => { setActiveSection(sectionId); closeMenu(); }}
                    className={`block rounded-lg px-3 py-3 text-sm font-medium ${activeSection === sectionId ? "bg-cyan-500/10 text-cyan-300" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
                  >
                    {item.title}
                  </a>
                </li>
              );
            })}
            <li className="pt-2">
              <a href="#contact" onClick={closeMenu} className="block rounded-lg bg-cyan-500 px-3 py-3 text-center text-sm font-semibold text-slate-950">Contact me</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
