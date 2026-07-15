import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaRegClock } from "react-icons/fa";
import { navLinks } from "./navbarData";
import dkLogo from "../../assets/company/dkLogo.webp";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
      );

      setCurrentDate(
        now.toLocaleDateString("en-IN", {
          weekday: "short",
          day: "2-digit",
          month: "short",
        }),
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
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
        threshold: 0.6,
        rootMargin: "-90px 0px -35% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[max-height] duration-500 ease-in-out ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/70 shadow-2xl backdrop-blur-3xl"
          : "bg-gradient-to-b from-slate-950/70 to-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] sm:h-[78px] lg:h-[88px] w-full max-w-[1920px] items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* LEFT - Logo (slightly right) */}
        <div className="flex min-w-0 flex-1 lg:w-[290px] lg:flex-shrink-0 lg:flex-none lg:translate-x-4">
          <a href="#home" className="group flex items-center gap-4">
            <div className="relative h-11 w-11 sm:h-12 sm:w-12 lg:h-14 lg:w-14 overflow-hidden rounded-full border border-cyan-400/30 bg-slate-900 shadow-xl transition-all duration-500 group-hover:scale-105 group-hover:border-cyan-400 group-hover:shadow-[0_0_30px_rgba(34,211,238,.35)]">
              <img
                src={dkLogo}
                alt="Deeplal Kumar"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-cyan-400/10 transition-all duration-500 group-hover:bg-cyan-400/20" />
            </div>

            <div className="leading-tight">
              <h1 className="text-lg sm:text-xl lg:text-[22px] font-extrabold tracking-tight text-white">
                Deeplal Kumar
                <span className="text-cyan-400">.</span>
              </h1>

              <p className="mt-0.5 hidden sm:block text-[11px] uppercase tracking-[0.25em] text-slate-400">
                Software Engineer
              </p>
            </div>
          </a>
        </div>

        {/* CENTER */}
        <div className="hidden flex-1 justify-center lg:flex">
          <nav>
            <ul className="flex items-center gap-10 xl:gap-12">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(item.href.substring(1))}
                    className={`relative px-1 py-2 text-[15px] font-medium tracking-wide transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "text-cyan-400"
                        : "text-slate-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.title}

                    <span
                      className={`absolute left-0 -bottom-2 h-[2px] rounded-full bg-cyan-400 transition-all duration-300 ${
                        activeSection === item.href.substring(1)
                          ? "w-full"
                          : "w-0"
                      }`}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* RIGHT - Clock (slightly left) */}
        <div className="hidden w-[290px] flex-shrink-0 justify-end lg:flex lg:-translate-x-4">
          <div className="flex w-[260px] items-center gap-4 rounded-2xl border border-cyan-500/20 bg-white/[0.05] px-4 py-3 shadow-[0_10px_35px_rgba(0,0,0,.35)] backdrop-blur-2xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(34,211,238,.18)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-500/10 shadow-[0_0_18px_rgba(34,211,238,.15)]">
              <FaRegClock className="text-xl text-cyan-400" />
            </div>

            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cyan-200 drop-shadow-[0_0_8px_rgba(103,232,249,0.45)]">
  🇮🇳 INDIA
</span>

              <span className="font-mono text-lg font-bold tabular-nums text-white">
                {currentTime}
              </span>

              <span className="text-xs text-slate-400">
                UTC +05:30 • {currentDate}
              </span>
            </div>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="flex flex-none items-center justify-end lg:hidden">
          <button
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle navigation menu"
  className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-slate-900/70 text-white shadow-lg backdrop-blur-xl transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500/10 active:scale-95"
>
  {menuOpen ? (
    <FaTimes className="text-[20px] transition-transform duration-300 group-hover:rotate-90" />
  ) : (
    <FaBars className="text-[20px]" />
  )}
</button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {/* ================= MOBILE DRAWER ================= */}

<>
  {/* Overlay */}
  <div
    onClick={() => setMenuOpen(false)}
    className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
      menuOpen
        ? "pointer-events-auto opacity-100"
        : "pointer-events-none opacity-0"
    }`}
  />

  {/* Drawer */}
  <div
    className={`fixed right-0 top-0 z-50 flex h-screen w-[320px] max-w-[85vw] flex-col border-l border-white/10 bg-slate-950/95 shadow-2xl backdrop-blur-3xl transition-transform duration-500 ease-out lg:hidden ${
      menuOpen ? "translate-x-0" : "translate-x-full"
    }`}
  >
    {/* Header */}
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
      <div>
        <h3 className="text-xl font-bold text-white">
          Deeplal Kumar
        </h3>

        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-cyan-400">
          Navigation
        </p>
      </div>

      <button
        onClick={() => setMenuOpen(false)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-400 hover:bg-cyan-500/10"
      >
        <FaTimes />
      </button>
    </div>

    {/* Links */}
    <div className="flex-1 overflow-y-auto px-5 py-6">
      <ul className="space-y-3">
        {navLinks.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              onClick={() => {
                setActiveSection(item.href.substring(1));
                setMenuOpen(false);
              }}
              className={`block rounded-2xl px-5 py-4 text-[15px] font-medium transition-all duration-300 ${
                activeSection === item.href.substring(1)
                  ? "border border-cyan-500/30 bg-cyan-500/10 text-cyan-400"
                  : "border border-transparent text-slate-300 hover:border-cyan-500/20 hover:bg-cyan-500/10 hover:text-cyan-400"
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="my-6 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      {/* Clock */}
      <div className="flex items-center gap-4 rounded-2xl border border-cyan-500/20 bg-white/[0.05] p-5 backdrop-blur-xl">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10">
          <FaRegClock className="text-2xl text-cyan-400" />
        </div>

        <div>
          <span className="text-[10px] uppercase tracking-[0.25em] text-cyan-300">
            Local Time
          </span>

          <div className="font-mono text-xl font-bold text-white">
            {currentTime}
          </div>

          <div className="text-sm text-slate-400">
            UTC +05:30 • {currentDate}
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    </header>
  );
}
