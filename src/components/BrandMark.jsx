import { Link } from "react-router-dom";

const BrandMark = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-semibold tracking-[0.24em] text-[var(--color-ink)] shadow-[0_12px_24px_rgba(32,24,12,0.08)]">
        FC
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.28em] text-black/45">
          Cricket Franchise Platform
        </p>
        <p className="text-lg font-semibold text-[var(--color-ink)]">
          FranchiseFlow
        </p>
      </div>
    </Link>
  );
};

export default BrandMark;
