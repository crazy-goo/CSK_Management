import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "./AuthShell";

const Signup = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.find(
      (u) => u.email.toLowerCase() === data.email.toLowerCase(),
    );

    if (userExists) {
      alert("User already exists");
      return;
    }

    const newUser = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(newUser));

    alert("Signup successful!");

    navigate("/dashboard");
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
        <p className="font-script text-2xl text-[var(--color-accent-strong)]">
          Signup
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">
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

        <button className="minimal-button w-full cursor-pointer justify-center">
          Sign Up
        </button>
      </form>
    </AuthShell>
  );
};

export default Signup;
