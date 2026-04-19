import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Dashboard = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
  const isAdmin = currentUser.role === "admin";

  const quickActions = isAdmin
    ? [
        "Review organization activity",
        "Manage team access",
        "Coordinate franchise operations",
      ]
    : [
        "Review squad and staff records",
        "Check supporter and ticketing activity",
        "Track upcoming campaign work",
      ];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[var(--color-cream)] px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl space-y-6">
          <section className="minimal-panel">
            <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="font-script text-2xl text-[var(--color-accent-strong)]">
                  {isAdmin ? "Admin workspace" : "Operations workspace"}
                </p>
                <h1 className="text-4xl font-semibold leading-tight text-[var(--color-ink)] sm:text-5xl">
                  Welcome {currentUser.name ? currentUser.name.split(" ")[0] : "back"}.
                </h1>
                <p className="leading-8 text-black/65">
                  {isAdmin
                    ? "This area gives franchise leadership a calmer place to oversee records, permissions, and operational updates."
                    : "This dashboard is designed for cricket franchise teams that need one focused place for data, planning, and supporter engagement."}
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate("/")}
                className="minimal-button-secondary w-fit cursor-pointer"
              >
                View Landing Page
              </button>
            </div>
          </section>

          <section className="grid gap-5 md:grid-cols-3">
            {quickActions.map((item) => (
              <article key={item} className="minimal-card">
                <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                  Next step
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-[var(--color-ink)]">
                  {item}
                </h2>
              </article>
            ))}
          </section>

          <section className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <article className="minimal-card">
              <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                Workspace snapshot
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="text-sm text-black/50">Name</p>
                  <p className="mt-1 text-lg text-[var(--color-ink)]">
                    {currentUser.name || "Franchise user"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50">Email</p>
                  <p className="mt-1 text-lg text-[var(--color-ink)]">
                    {currentUser.email || "Not available"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50">Role</p>
                  <p className="mt-1 text-lg capitalize text-[var(--color-ink)]">
                    {currentUser.role || "team"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-black/50">Status</p>
                  <p className="mt-1 text-lg text-[var(--color-ink)]">Active</p>
                </div>
              </div>
            </article>

            <article className="minimal-card">
              <p className="text-xs uppercase tracking-[0.28em] text-black/40">
                Product direction
              </p>
              <h2 className="mt-4 text-2xl font-semibold text-[var(--color-ink)]">
                Built to sell across franchises
              </h2>
              <p className="mt-4 leading-7 text-black/65">
                The interface now presents itself as a reusable cricket
                franchise management product rather than a single-team portal.
              </p>
            </article>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Dashboard;
