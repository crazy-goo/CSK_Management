import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/admin-dashboard");
    } else {
      alert("Wrong email or password. Please try again.");
    }
  };
  
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-linear-to-br from-[#fdb913] via-[#ffcc33] to-[#1c3f94]">
        <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full p-2 border rounded-lg"
            />
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
              Login
            </button>
          </form>
          <p className="text-center mt-4 text-sm">
            <span
         onClick={() => navigate("/login")}
         className="text-red-600 cursor-pointer"
       >
         Back to Login
       </span>
     </p> 
        </div>
      </div>
    );
  }
  export default AdminLogin;