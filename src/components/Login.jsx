import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-[#fdb913] via-[#ffcc33] to-[#1c3f94]">
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4 sm:space-y-5">
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base"
            required
          />

          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg text-sm sm:text-base"
            required
          />

          <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm sm:text-base hover:bg-blue-700 cursor-pointer">
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-xs sm:text-sm">
          <Link to="/signup" className="text-blue-600">
            Create account
          </Link>
          <Link to="/admin" className="text-red-600">
            Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;