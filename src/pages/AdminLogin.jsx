import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthShell from "../components/AuthShell";
import api, { setAccessToken } from "../utils/api";

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await api.post("/api/auth/admin/login", formData);

      const { user, token } = res.data;

      if (user.role !== "admin") {
        alert("Access denied. Not an admin.");
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", JSON.stringify(user));
      setAccessToken(token);

      navigate("/admin-dashboard");
    } catch (err) {
      console.error(err);
      alert(
        err.response?.data?.message ||
          "Wrong email or password. Please try again.",
      );
    } finally {
      setLoading(false);
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
        <p className="font-script text-2xl text-(--color-accent-strong)">
          Admin
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-(--color-ink)">
          Admin Login
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <label className="block space-y-2">
          <span className="text-sm text-black/60">Email</span>
          <input
            type="email"
            name="email"
            placeholder="admin@example.com"
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
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthShell>
  );
};

export default AdminLogin;