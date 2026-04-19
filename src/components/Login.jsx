import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import api, { setAccessToken } from "../utils/api";

const Login = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const user = localStorage.getItem("currentUser");

    if (isLoggedIn === "true" && user) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/api/auth/users/login", data);

      const { user, token } = res.data;

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));

      setAccessToken(token);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed. Check credentials.");
    } finally {
      setLoading(false);
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
        <p className="font-script text-2xl text-(--color-accent-strong)">
          Login
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-(--color-ink)">
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

        <button className="minimal-button w-full justify-center">
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthShell>
  );
};

export default Login;