import { useNavigate } from "react-router-dom";
import Navbar from "..//components/Navbar";
import Footer from "../components/Footer"
const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-linear-to-br from-[#fdb913] via-[#ffcc33] to-[#1c3f94]">
          <h1 className="text-2xl sm:text-3xl text-white mb-4">
            Welcome, Chennai Super Kings Fan! 🏏
          </h1>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 cursor-pointer"
          >
            Logout
          </button>
        </div>
        <Footer />
      </>
    );
};

export default Dashboard;