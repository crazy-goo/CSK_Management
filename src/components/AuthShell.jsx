import { Link } from "react-router-dom";
import BrandMark from "./BrandMark";

const AuthShell = ({ eyebrow, title, description, children, footer }) => {
  return (
    <div className="min-h-screen bg-[var(--color-cream)] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between py-4">
        <BrandMark />
        <Link to="/" className="minimal-link hidden sm:inline-flex">
          Back Home
        </Link>
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-6xl items-center gap-6 lg:grid-cols-[1fr_480px]">
        <div className="minimal-panel hidden min-h-[520px] flex-col justify-between lg:flex">
          <div className="space-y-5">
            <p className="font-script text-2xl text-[var(--color-accent-strong)]">
              {eyebrow}
            </p>
            <h1 className="max-w-lg text-5xl font-semibold leading-tight text-[var(--color-ink)]">
              {title}
            </h1>
            <p className="max-w-lg leading-8 text-black/65">{description}</p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-3xl border border-black/10 bg-white/60 px-5 py-4">
              <p className="text-sm text-black/55">Interface style</p>
              <p className="mt-1 text-base text-[var(--color-ink)]">
                Minimal, warm, and easy to trust.
              </p>
            </div>
            <div className="rounded-3xl border border-black/10 bg-white/60 px-5 py-4">
              <p className="text-sm text-black/55">Built for</p>
              <p className="mt-1 text-base text-[var(--color-ink)]">
                Fast access without visual clutter.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-[0_24px_60px_rgba(32,24,12,0.08)] sm:p-8">
          <div className="mb-8 space-y-3 lg:hidden">
            <p className="font-script text-2xl text-[var(--color-accent-strong)]">
              {eyebrow}
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-[var(--color-ink)]">
              {title}
            </h1>
            <p className="leading-7 text-black/65">{description}</p>
          </div>

          {children}

          {footer ? <div className="mt-6">{footer}</div> : null}
        </div>
      </div>
    </div>
  );
};

export default AuthShell;
