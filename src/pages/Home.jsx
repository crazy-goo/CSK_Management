import BrandMark from "../components/BrandMark";
import { useState } from "react";
import { Link } from "react-router-dom";

const highlights = [
  {
    title: "Franchise Records",
    description:
      "Manage players, staff, departments, and operational data from a single structured workspace.",
  },
  {
    title: "Supporter and Ticketing Flow",
    description:
      "Keep fan details, campaigns, ticketing activity, and communication cleanly organized.",
  },
  {
    title: "Leadership Control",
    description:
      "Give decision-makers one place to review access, approvals, and franchise-wide operations.",
  },
];

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-(--color-cream) text-(--color-ink)">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(246,241,232,0.92)] backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5">
          <BrandMark />

          <nav className="hidden items-center gap-8 text-sm text-black/65 md:flex">
            <a href="#features" className="transition hover:text-black">
              Features
            </a>
            <a href="#experience" className="transition hover:text-black">
              Experience
            </a>
            <a href="#access" className="transition hover:text-black">
              Access
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link to="/login" className="minimal-link hidden sm:inline-flex">
              Member Login
            </Link>
            <Link to="/signup" className="minimal-button">
              Get Started
            </Link>
          </div>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1"
          >
            <span className="block w-5 h-0.5 bg-black"></span>
            <span className="block w-5 h-0.5 bg-black"></span>
            <span className="block w-5 h-0.5 bg-black"></span>
          </button>
        </div>
      </header>

      <div
        className={`minimal-drawer-overlay md:hidden ${menuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
      />
      <aside
        className={`minimal-drawer md:hidden ${menuOpen ? "is-open" : ""}`}
      >
        <div className="flex items-center justify-between md:hidden">
          <p className="font-script text-2xl text-(--color-accent-strong)">
            Menu
          </p>
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={closeMenu}
            className="minimal-icon-close"
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-5 text-lg text-(--color-ink)">
          <a
            href="#features"
            onClick={closeMenu}
            className="minimal-drawer-link"
          >
            Features
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="minimal-drawer-link"
          >
            Experience
          </a>
          <a href="#access" onClick={closeMenu} className="minimal-drawer-link">
            Access
          </a>
          <Link to="/login" onClick={closeMenu} className="minimal-drawer-link">
            Member Login
          </Link>
          <Link
            to="/signup"
            onClick={closeMenu}
            className="minimal-button mt-3 justify-center"
          >
            Get Started
          </Link>
        </nav>
      </aside>

      <main>
        <section className="mx-auto grid max-w-6xl gap-8 px-3 py-6 sm:px-4 md:grid-cols-[1.15fr_0.85fr] md:py-12">
          {/* <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.15fr_0.85fr] md:py-24"> */}
          <div className="space-y-8">
            <p className="font-script text-3xl text-(--color-accent-strong)">
              Built for modern cricket franchises
            </p>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Sell one clean franchise platform to any cricket club.
              </h1>
              <p className="max-w-2xl text-base leading-8 text-black/65 sm:text-lg">
                FranchiseFlow is designed as a reusable operations product for
                cricket organizations. It brings supporter records, internal
                teams, ticketing data, and admin control into one polished,
                minimal interface.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/signup" className="minimal-button">
                Create Account
              </Link>
              <Link to="/login" className="minimal-button-secondary">
                Explore Member Access
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="minimal-stat">
                <span>One platform</span>
                <strong>For every franchise</strong>
              </div>
              <div className="minimal-stat">
                <span>Clear workflows</span>
                <strong>For operations teams</strong>
              </div>
              <div className="minimal-stat">
                <span>Better visibility</span>
                <strong>For leadership</strong>
              </div>
            </div>
          </div>

          <div className="minimal-panel flex flex-col justify-between gap-10">
            <div className="space-y-5">
              <p className="font-script text-2xl text-(--color-accent-strong)">
                Why this sells better
              </p>
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold leading-tight">
                  Generic enough to scale, polished enough to impress.
                </h2>
                <p className="leading-8 text-black/65">
                  The product is no longer tied to one franchise identity. It
                  now reads like a SaaS platform you can present to any cricket
                  organization looking for a better management system.
                </p>
              </div>
            </div>

            <div className="space-y-4 border-t border-black/10 pt-6">
              <div className="flex items-center justify-between text-sm text-black/55">
                <span>Fan and ticket data</span>
                <span>Centralized</span>
              </div>
              <div className="flex items-center justify-between text-sm text-black/55">
                <span>Staff and player records</span>
                <span>Organized</span>
              </div>
              <div className="flex items-center justify-between text-sm text-black/55">
                <span>Admin oversight</span>
                <span>Controlled</span>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          id="features"
          className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-10"
        > */}
        <section
          id="features"
          className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-10 scroll-mt-24"
        >
          <div className="mb-10 max-w-2xl space-y-3">
            <p className="font-script text-2xl text-(--color-accent-strong)">
              Core modules
            </p>
            <h2 className="text-3xl font-semibold">
              A product view, not just a pretty page.
            </h2>
            <p className="leading-8 text-black/65">
              The landing page now speaks to franchise buyers and shows a clear
              management use case behind the design.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="minimal-card">
                <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                  Feature
                </p>
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 leading-7 text-black/65">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* <section
          id="experience"
          className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20"
        > */}
        <section
          id="experience"
          className="mx-auto max-w-6xl px-4 py-6 sm:px-6 md:py-10 scroll-mt-24"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div className="minimal-card">
              <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                Design direction
              </p>
              <h3 className="mt-5 text-2xl font-semibold">Quietly premium</h3>
              <p className="mt-4 leading-7 text-black/65">
                Outfit keeps the product sharp and current, while small Caveat
                accents add personality without turning the UI into a fashion
                piece.
              </p>
            </div>
            <div className="minimal-card">
              <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                Built for use
              </p>
              <h3 className="mt-5 text-2xl font-semibold">Faster to scan</h3>
              <p className="mt-4 leading-7 text-black/65">
                Sticky navigation, quieter cards, and clear copy make the site
                feel stronger for demos, sales conversations, and daily use.
              </p>
            </div>
          </div>
        </section>

        <section
          id="access"
          className="mx-auto max-w-6xl px-4 pb-16 pt-2 sm:px-6 md:pb-24"
        >
          <div className="minimal-panel flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="font-script text-2xl text-(--color-accent-strong)">
                Entry points
              </p>
              <h2 className="text-3xl font-semibold">
                Separate views for teams and leadership.
              </h2>
              <p className="leading-8 text-black/65">
                Staff can enter the shared workspace, while leadership gets a
                restricted management path with the same visual system.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/login" className="minimal-button-secondary">
                Member Login
              </Link>
              <Link to="/admin" className="minimal-button">
                Admin Login
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
