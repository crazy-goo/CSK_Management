import BrandMark from "./BrandMark";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[rgba(246,241,232,0.92)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <BrandMark />

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-xs uppercase tracking-[0.24em] text-black/40">
              Active workspace
            </p>
            <p className="text-sm text-[var(--color-ink)]">
              {currentUser.name || currentUser.email || "Franchise user"}
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="minimal-button-secondary cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
