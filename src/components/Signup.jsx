import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import api, { setAccessToken } from "../utils/api";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const res = await api.post("/api/auth/users/register", {
        name: data.name,
        email: data.email,
        password: data.password,
      });

      const { user, token } = res.data;

  
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));

      setAccessToken(token);

      alert("Signup successful!");

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Signup failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell
      eyebrow="New workspace"
      title="Create access for your franchise team."
      description="Set up a clean account for daily operations, supporter records, and internal coordination."
      footer={
        <p className="text-sm text-black/60">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="minimal-link"
          >
            Login
          </button>
        </p>
      }
    >
      <div className="mb-8">
        <p className="font-script text-2xl text-(--color-accent-strong)">
          Signup
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-(--color-ink)">
          Create Account
        </h2>
      </div>

      <form onSubmit={handleSignup} className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm text-black/60">Name</span>
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Your full name"
            onChange={handleChange}
            className="minimal-input"
            required
          />
        </label>

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
            placeholder="Create a password"
            onChange={handleChange}
            className="minimal-input"
            required
          />
        </label>

        <label className="block space-y-2">
          <span className="text-sm text-black/60">Confirm Password</span>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            placeholder="Re-enter your password"
            onChange={handleChange}
            className="minimal-input"
            required
          />
        </label>

        <button className="minimal-button w-full justify-center">
          {loading ? "Creating account..." : "Sign Up"}
        </button>
      </form>
    </AuthShell>
  );
};

export default Signup;