import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "./AuthShell";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (u) =>
        u.email.toLowerCase().trim() === data.email.toLowerCase().trim() &&
        u.password.trim() === data.password.trim(),
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(validUser));

      navigate("/dashboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <AuthShell
      eyebrow="Team access"
      title="Sign into the franchise operations workspace."
      description="Use your account to access franchise records, supporter data, and internal workflows from one clean dashboard."
      footer={
        <div className="flex flex-col gap-3 text-sm text-black/60 sm:flex-row sm:items-center sm:justify-between">
          <Link to="/signup" className="minimal-link">
            Create workspace account
          </Link>
          <Link to="/admin" className="minimal-link">
            Admin login
          </Link>
        </div>
      }
    >
      <div className="mb-8">
        <p className="font-script text-2xl text-[var(--color-accent-strong)]">
          Login
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">
          Workspace Sign In
        </h2>
      </div>

      <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
        <label className="block space-y-2">
          <span className="text-sm text-black/60">Email</span>
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="you@example.com"
            onChange={handleChange}
            className="minimal-input"
            required
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm text-black/60">Password</span>
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter your password"
            onChange={handleChange}
            className="minimal-input"
            required
          />
        </label>

        <button className="minimal-button w-full cursor-pointer justify-center">
          Login
        </button>
      </form>
    </AuthShell>
  );
};

export default Login;
