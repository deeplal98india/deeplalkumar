import { useEffect, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  GitFork,
  Star,
  RefreshCw,
  Code2,
  Users,
  BookOpen,
  AlertCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const USERNAME = "deeplal98india";
const PROFILE_URL = `https://github.com/${USERNAME}`;
const API_URL = `https://api.github.com/users/${USERNAME}`;
const panel =
  "rounded-2xl border border-slate-200/80 bg-white/80 shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/65";

function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <div
      className={`${panel} group p-5 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-950/5 sm:p-6`}
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
          {label}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
          <Icon size={17} aria-hidden="true" />
        </span>
      </div>
      <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white">
        {value}
      </p>
      <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{hint}</p>
    </div>
  );
}

export default function GitHubActivity() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    const controller = new AbortController();
    async function loadGitHub() {
      try {
        const options = {
          signal: controller.signal,
          headers: { Accept: "application/vnd.github+json" },
        };
        const [profileResponse, repoResponse] = await Promise.all([
          fetch(API_URL, options),
          fetch(
            `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
            options,
          ),
        ]);
        if (!profileResponse.ok || !repoResponse.ok)
          throw new Error("GitHub API is temporarily unavailable.");
        const [profileData, repoData] = await Promise.all([
          profileResponse.json(),
          repoResponse.json(),
        ]);
        const ownRepos = repoData
          .filter((repo) => !repo.fork && !repo.archived)
          .sort(
            (a, b) =>
              new Date(b.pushed_at || b.updated_at) -
              new Date(a.pushed_at || a.updated_at),
          );
        setProfile(profileData);
        setRepos(ownRepos.slice(0, 4));
        setStatus("ready");
      } catch (error) {
        if (error.name !== "AbortError") setStatus("error");
      }
    }
    loadGitHub();
    return () => controller.abort();
  }, []);

  return (
    <section
      id="github-activity"
      aria-labelledby="github-heading"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.07),transparent_55%)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/[0.06] px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
              <Activity size={14} /> Open source
            </p>
            <h2
              id="github-heading"
              className="text-3xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-4xl lg:text-5xl"
            >
              GitHub{" "}
              <span className="bg-gradient-to-r from-cyan-600 via-sky-500 to-violet-500 bg-clip-text text-transparent dark:from-cyan-300 dark:via-sky-400 dark:to-violet-400">
                activity
              </span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base">
              A live snapshot of my public profile and recently updated
              projects.
            </p>
          </div>
          <a
            href={PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-cyan-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400 sm:self-auto"
          >
            <FaGithub size={17} aria-hidden="true" /> View GitHub{" "}
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        {status === "loading" && (
          <div
            className={`${panel} flex items-center gap-3 p-6 text-sm text-slate-600 dark:text-slate-300`}
          >
            <RefreshCw
              className="animate-spin text-cyan-600 dark:text-cyan-300"
              size={18}
            />{" "}
            Loading public GitHub data…
          </div>
        )}
        {status === "error" && (
          <div className={`${panel} flex items-start gap-3 p-5 sm:p-6`}>
            <AlertCircle
              className="mt-0.5 shrink-0 text-amber-600 dark:text-amber-300"
              size={19}
            />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">
                GitHub data is temporarily unavailable
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                The public API may be rate-limited. You can still explore
                repositories directly on GitHub.
              </p>
              <a
                href={PROFILE_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-cyan-700 dark:text-cyan-300"
              >
                Open profile <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        )}

        {status === "ready" && (
          <>
            <div className="mb-5 flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm dark:border-white/10 dark:bg-slate-900/65 sm:flex-row sm:items-center sm:p-6">
              <img
                src={profile.avatar_url}
                alt={`${profile.login} GitHub avatar`}
                loading="lazy"
                className="h-16 w-16 rounded-2xl border border-slate-200 object-cover dark:border-white/10"
              />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-extrabold text-slate-950 dark:text-white">
                    {profile.name || profile.login}
                  </h3>
                  <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                    Public profile
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {profile.bio ||
                    "Full-Stack Developer building practical web applications."}
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  @{profile.login}
                  {profile.location ? ` · ${profile.location}` : ""}
                </p>
              </div>
              <a
                href={profile.html_url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-bold text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-300"
              >
                View profile <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <StatCard
                icon={BookOpen}
                label="Public repositories"
                value={profile.public_repos}
                hint="Repositories on GitHub"
              />
              <StatCard
                icon={Users}
                label="Followers"
                value={profile.followers}
                hint="People following my work"
              />
              <StatCard
                icon={Code2}
                label="Projects shown"
                value={repos.length}
                hint="Recently updated, non-fork repos"
              />
            </div>

            <div className="mt-8 flex items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-extrabold text-slate-950 dark:text-white sm:text-2xl">
                  Recently updated repositories
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  A selection of public projects from my profile.
                </p>
              </div>
              <span className="hidden rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-400 sm:inline-flex">
                Live API data
              </span>
            </div>
            {repos.length > 0 ? (
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {repos.map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className={`${panel} group flex min-w-0 flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-950/5 sm:p-6`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700 dark:bg-white/[0.06] dark:text-slate-200">
                          <FaGithub size={19} />
                        </span>
                        <div className="min-w-0">
                          <h4 className="truncate font-bold text-slate-900 transition group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-300">
                            {repo.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {repo.private ? "Private" : "Public"} repository
                          </p>
                        </div>
                      </div>
                      <ArrowUpRight
                        size={17}
                        className="shrink-0 text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600"
                      />
                    </div>
                    <p className="mt-4 line-clamp-2 min-h-12 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {repo.description ||
                        "A public project from my GitHub profile."}
                    </p>
                    <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200/80 pt-4 text-xs font-medium text-slate-500 dark:border-white/10 dark:text-slate-400">
                      {repo.language && (
                        <span className="inline-flex items-center gap-1.5">
                          <span className="h-2 w-2 rounded-full bg-cyan-500" />
                          {repo.language}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Star size={13} />
                        {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork size={13} />
                        {repo.forks_count}
                      </span>
                      <span className="ml-auto">
                        Updated{" "}
                        {new Date(
                          repo.pushed_at || repo.updated_at,
                        ).toLocaleDateString(undefined, {
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div
                className={`${panel} mt-4 p-6 text-sm text-slate-600 dark:text-slate-400`}
              >
                No public non-fork repositories were found. Visit the profile to
                explore all repositories.
              </div>
            )}
            <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-500">
              Data comes from GitHub’s public REST API. Contribution totals are
              not displayed because they are not available from these endpoints.
            </p>
          </>
        )}
      </div>
    </section>
  );
}
