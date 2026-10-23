import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const EMAIL = "deeplalkumar1400036@gmail.com";
const SUBJECT = "Portfolio feedback / collaboration";

const principles = [
  {
    icon: ShieldCheck,
    title: "Authenticity comes first",
    eyebrow: "REAL PEOPLE · REAL FEEDBACK",
    description:
      "This section is reserved for honest recommendations from teammates, mentors, and collaborators—with their permission.",
    accent: "cyan",
  },
  {
    icon: Users,
    title: "Built through collaboration",
    eyebrow: "COMMUNICATION · OWNERSHIP",
    description:
      "I value clear communication, thoughtful engineering, and taking responsibility for the details that make a product dependable.",
    accent: "violet",
  },
];

const accentStyles = {
  cyan: {
    icon: "bg-cyan-500/10 text-cyan-700 ring-cyan-500/15 dark:text-cyan-300",
    glow: "group-hover:shadow-cyan-950/5 dark:group-hover:shadow-cyan-950/20",
    border:
      "group-hover:border-cyan-500/35 dark:group-hover:border-cyan-400/30",
    eyebrow: "text-cyan-700 dark:text-cyan-300",
  },
  violet: {
    icon: "bg-violet-500/10 text-violet-700 ring-violet-500/15 dark:text-violet-300",
    glow: "group-hover:shadow-violet-950/5 dark:group-hover:shadow-violet-950/20",
    border:
      "group-hover:border-violet-500/35 dark:group-hover:border-violet-400/30",
    eyebrow: "text-violet-700 dark:text-violet-300",
  },
};

export default function Testimonials() {
  const subject = encodeURIComponent(SUBJECT);
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL
  )}&su=${subject}`;
  const mailtoUrl = `mailto:${EMAIL}?subject=${subject}`;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_58%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 -z-10 h-56 w-56 rounded-full bg-cyan-400/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 -z-10 h-56 w-56 rounded-full bg-violet-400/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-500/20 bg-white/80 text-cyan-700 shadow-lg shadow-cyan-950/5 ring-1 ring-white/60 dark:bg-slate-900/80 dark:text-cyan-300 dark:ring-white/10">
            <MessageCircle size={24} aria-hidden="true" />
          </div>

          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-300">
            <Sparkles size={12} aria-hidden="true" />
            Professional references
          </p>

          <h2
            id="testimonials-heading"
            className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
          >
            Good work starts with{" "}
            <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
              good collaboration.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
            Great products are built with trust, thoughtful communication, and
            shared ownership. I’m keeping this space genuine—recommendations
            will be added only with the contributor’s approval.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-2 md:gap-5">
          {principles.map((item) => {
            const Icon = item.icon;
            const style = accentStyles[item.accent];

            return (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/65 sm:p-6 ${style.border} ${style.glow}`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-0 transition group-hover:opacity-100"
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ring-1 ${style.icon}`}
                  >
                    <Icon size={21} aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p
                      className={`text-[10px] font-extrabold uppercase tracking-[0.16em] ${style.eyebrow}`}
                    >
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                <div className="mt-5 h-px bg-gradient-to-r from-slate-200 via-slate-200/70 to-transparent dark:from-white/10 dark:via-white/5" />

                <p className="mt-4 text-xs font-medium text-slate-500 dark:text-slate-500">
                  {item.accent === "cyan"
                    ? "No fabricated quotes or ratings."
                    : "Thoughtful work. Respectful teamwork."}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-5 flex max-w-5xl flex-col gap-5 rounded-2xl border border-slate-200/80 bg-white/75 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-700 dark:text-violet-300">
              <Mail size={19} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                Worked together?
              </h3>
              <p className="mt-1 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                I’d be glad to hear your feedback, reconnect, or discuss a
                future opportunity.
              </p>
              <a
                href={mailtoUrl}
                className="mt-2 inline-flex text-xs font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-cyan-700 dark:text-slate-400 dark:decoration-slate-600 dark:hover:text-cyan-300"
              >
                Email not opening? Use your default mail app
              </a>
            </div>
          </div>

          <a
            href={gmailComposeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Start an email to ${EMAIL} in Gmail`}
            className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-950/10 transition hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-2 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 dark:focus-visible:ring-offset-slate-950"
          >
            Start a conversation
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
