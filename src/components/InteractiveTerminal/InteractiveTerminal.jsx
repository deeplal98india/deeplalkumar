import { useEffect, useMemo, useRef, useState } from "react";
import {
  Terminal as TerminalIcon,
  RotateCcw,
  ArrowUpRight,
  ChevronRight,
  Command,
  Copy,
  Check,
} from "lucide-react";
import resume from "../../assets/resume/resume.pdf";

const USERNAME = "deeplal98india";
const GITHUB_URL = `https://github.com/${USERNAME}`;

const COMMANDS = [
  "help",
  "about",
  "skills",
  "projects",
  "contact",
  "github",
  "resume",
  "clear",
];

const outputFor = (command) => {
  switch (command.trim().toLowerCase()) {
    case "help":
      return [
        { text: "Available commands", tone: "accent" },
        { text: "about      — developer introduction" },
        { text: "skills     — core technology stack" },
        { text: "projects   — jump to selected projects" },
        { text: "contact    — jump to contact form" },
        { text: "github     — open GitHub profile" },
        { text: "resume     — open resume PDF" },
        { text: "clear      — clear terminal output" },
      ];
    case "about":
      return [
        { text: "Deeplal Kumar | Full-Stack Developer", tone: "accent" },
        {
          text: "I build responsive React experiences and dependable Node.js APIs.",
        },
        {
          text: "My focus: clean architecture, accessible UI, and maintainable code.",
        },
      ];
    case "skills":
      return [
        { text: "Frontend: React.js, JavaScript, Tailwind CSS" },
        { text: "Backend: Node.js, Express.js, REST APIs, JWT" },
        { text: "Database: MongoDB, Mongoose" },
        { text: "Tools: Git, GitHub, Vite, Postman" },
      ];
    case "projects":
      return [{ text: "Navigating to projects…", tone: "accent" }];
    case "contact":
      return [{ text: "Navigating to contact…", tone: "accent" }];
    case "github":
      return [{ text: "Opening GitHub profile…", tone: "accent" }];
    case "resume":
      return [{ text: "Opening resume PDF…", tone: "accent" }];
    case "":
      return [{ text: "Type help to see available commands.", tone: "muted" }];
    default:
      return [
        { text: `Command not found: ${command}`, tone: "error" },
        { text: "Type help to list available commands.", tone: "muted" },
      ];
  }
};

const lineTone = (tone) => {
  if (tone === "accent") return "text-cyan-300";
  if (tone === "error") return "text-rose-300";
  if (tone === "muted") return "text-slate-500";
  return "text-slate-300";
};

export default function InteractiveTerminal() {
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState([
    { command: "help", output: outputFor("help") },
  ]);
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef(null);
  const outputRef = useRef(null);
  const terminalId = useRef(
    `terminal-${Math.random().toString(36).slice(2, 9)}`,
  );

  const suggestions = useMemo(() => {
    const value = command.trim().toLowerCase();
    if (!value) return [];
    return COMMANDS.filter((item) => item.startsWith(value)).slice(0, 5);
  }, [command]);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  function runCommand(event, overrideCommand) {
    event?.preventDefault();
    const value = (overrideCommand ?? command).trim();
    const normalized = value.toLowerCase();

    if (!value) {
      setHistory((current) =>
        [...current, { command: "(empty)", output: outputFor("") }].slice(-8),
      );
      setCommand("");
      return;
    }

    if (normalized === "clear") {
      setHistory([]);
      setCommand("");
      setActiveSuggestion(0);
      inputRef.current?.focus();
      return;
    }

    if (["projects", "contact", "about", "skills"].includes(normalized)) {
      const targetId = normalized;
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        setHistory((current) =>
          [
            ...current,
            {
              command: value,
              output: [
                {
                  text: `Section #${targetId} was not found on this page.`,
                  tone: "muted",
                },
                {
                  text: "Check that the corresponding section has a matching id.",
                  tone: "muted",
                },
              ],
            },
          ].slice(-8),
        );
        setCommand("");
        return;
      }
    }

    if (normalized === "github") {
      window.open(GITHUB_URL, "_blank", "noopener,noreferrer");
    }

    if (normalized === "resume") {
      window.open(resume, "_blank", "noopener,noreferrer");
    }

    setHistory((current) =>
      [...current, { command: value, output: outputFor(value) }].slice(-8),
    );
    setCommand("");
    setActiveSuggestion(0);
  }

  function handleKeyDown(event) {
    if (event.key === "ArrowDown" && suggestions.length) {
      event.preventDefault();
      setActiveSuggestion((current) => (current + 1) % suggestions.length);
    } else if (event.key === "ArrowUp" && suggestions.length) {
      event.preventDefault();
      setActiveSuggestion(
        (current) => (current - 1 + suggestions.length) % suggestions.length,
      );
    } else if (event.key === "Tab" && suggestions.length) {
      event.preventDefault();
      setCommand(suggestions[activeSuggestion] || suggestions[0]);
    } else if (event.key === "Escape") {
      setCommand("");
      setActiveSuggestion(0);
    }
  }

  function clearHistory() {
    setHistory([]);
    setCommand("");
    inputRef.current?.focus();
  }

  async function copyLastOutput() {
    const latest = history[history.length - 1];
    if (!latest) return;

    const text = [
      `$ ${latest.command}`,
      ...latest.output.map((line) => line.text),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section
      id="terminal"
      aria-labelledby="terminal-heading"
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.10),transparent_58%)]"
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/[0.07] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-violet-700 dark:text-violet-300">
              <TerminalIcon size={14} aria-hidden="true" />
              Interactive playground
            </p>
            <h2
              id="terminal-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl"
            >
              Developer{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                terminal
              </span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              Explore my work, skills, and links with a few simple commands.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-xs text-slate-500 shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400 sm:self-auto">
            <Command size={14} aria-hidden="true" />
            <span>Enter to run</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span>Tab to complete</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700/80 bg-[#070b13] shadow-2xl shadow-slate-950/20 ring-1 ring-black/5">
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#111722] px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <span className="ml-2 truncate font-mono text-xs text-slate-400">
                deeplal@portfolio{" "}
                <span className="text-cyan-400">~/workspace</span>
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={copyLastOutput}
                aria-label="Copy latest terminal output"
                title="Copy latest output"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
              </button>
              <button
                type="button"
                onClick={clearHistory}
                aria-label="Clear terminal"
                title="Clear terminal"
                className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <RotateCcw size={15} />
              </button>
            </div>
          </div>

          <div
            ref={outputRef}
            id={terminalId.current}
            aria-live="polite"
            aria-label="Terminal output"
            className="max-h-[340px] min-h-[220px] space-y-4 overflow-y-auto p-4 font-mono text-[11px] leading-6 sm:max-h-[380px] sm:p-6 sm:text-xs"
          >
            {history.length === 0 && (
              <p className="text-slate-500">
                Terminal cleared. Type{" "}
                <button
                  type="button"
                  onClick={() => {
                    setCommand("help");
                    inputRef.current?.focus();
                  }}
                  className="font-semibold text-cyan-300 underline-offset-4 hover:underline"
                >
                  help
                </button>{" "}
                to begin.
              </p>
            )}

            {history.map((entry, index) => (
              <div key={`${entry.command}-${index}`}>
                <p className="break-words">
                  <span className="text-emerald-400">deeplal@portfolio</span>
                  <span className="text-slate-500">:~$ </span>
                  <span className="text-white">{entry.command}</span>
                </p>
                {entry.output.map((line, lineIndex) => (
                  <p
                    key={`${line.text}-${lineIndex}`}
                    className={`whitespace-pre-wrap break-words ${lineTone(line.tone)}`}
                  >
                    {line.text}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <form
            onSubmit={runCommand}
            className="relative border-t border-white/[0.08] bg-white/[0.025] p-3 sm:p-4"
          >
            {suggestions.length > 0 && (
              <div
                className="mb-3 flex flex-wrap gap-2"
                aria-label="Command suggestions"
              >
                {suggestions.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setCommand(item);
                      inputRef.current?.focus();
                    }}
                    className={`rounded-lg border px-2.5 py-1 font-mono text-[11px] transition ${
                      index === activeSuggestion
                        ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-200"
                        : "border-white/10 text-slate-400 hover:border-cyan-400/30 hover:text-cyan-200"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}

            <div className="flex items-center gap-2">
              <ChevronRight
                size={16}
                className="shrink-0 text-emerald-400"
                aria-hidden="true"
              />
              <label htmlFor="terminal-command" className="sr-only">
                Enter a terminal command
              </label>
              <input
                ref={inputRef}
                id="terminal-command"
                value={command}
                onChange={(event) => {
                  setCommand(event.target.value);
                  setActiveSuggestion(0);
                }}
                onKeyDown={handleKeyDown}
                autoComplete="off"
                spellCheck="false"
                aria-describedby="terminal-help"
                placeholder="Type a command, e.g. skills…"
                className="min-w-0 flex-1 border-0 bg-transparent py-2 font-mono text-xs text-white outline-none placeholder:text-slate-600 focus:ring-0 sm:text-sm"
              />
              <button
                type="submit"
                className="inline-flex min-h-9 shrink-0 items-center gap-1.5 rounded-lg bg-cyan-500 px-3.5 py-2 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070b13]"
              >
                Run <ArrowUpRight size={13} aria-hidden="true" />
              </button>
            </div>
            <p
              id="terminal-help"
              className="mt-2 pl-6 text-[10px] text-slate-600"
            >
              Try: help, skills, projects, github
            </p>
          </form>
        </div>

        <p className="mt-3 text-xs leading-5 text-slate-500">
          A safe portfolio demo. Commands only navigate this website or open
          public links; they never execute operating-system commands.
        </p>
      </div>
    </section>
  );
}
