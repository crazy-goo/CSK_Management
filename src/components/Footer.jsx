
const Footer = () => {
  return (
    <footer className="border-t border-black/10 bg-(--color-cream)">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-black/60 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-(--color-ink)">
            FranchiseFlow
          </p>
          <p className="mt-1">
            Franchise operations, supporter data, and internal workflows in one place.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="/" className="transition hover:text-black">
            Home
          </a>
          <a href="/login" className="transition hover:text-black">
            Login
          </a>
          <a href="/admin" className="transition hover:text-black">
            Workspace
          </a>
        </div>
        <p>Copyright © {new Date().getFullYear()} FranchiseFlow</p>
      </div>
    </footer>
  );
};

export default Footer;
