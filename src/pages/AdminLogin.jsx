import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "csk@management.com" &&
      formData.password === "cskadmin123"
    ) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem(
        "currentUser",
        JSON.stringify({
          name: "Franchise Admin",
          email: formData.email,
          role: "admin",
        }),
      );
      navigate("/admin-dashboard");
    } else {
      alert("Wrong email or password. Please try again.");
    }
  };
  
  return (
    <AuthShell
      eyebrow="Admin access"
      title="Restricted access for franchise leadership."
      description="For operators who manage approvals, records, and organization-wide settings across the franchise workspace."
      footer={
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="minimal-link text-sm"
        >
          Back to workspace login
        </button>
      }
    >
      <div className="mb-8">
        <p className="font-script text-2xl text-[var(--color-accent-strong)]">
          Admin
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--color-ink)]">
          Admin Login
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm text-black/60">Email</span>
          <input
            type="email"
            name="email"
            placeholder="csk@management.com"
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
            placeholder="Enter admin password"
            onChange={handleChange}
            className="minimal-input"
            required
          />
        </label>

        <button className="minimal-button w-full justify-center">
          Login
        </button>
      </form>
    </AuthShell>
  );
};

export default AdminLogin;
