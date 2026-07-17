import { Link, useNavigate } from "react-router-dom";
import "../styles/StudentDashboard.css";
import { toast } from "react-toastify";

function StudentDashboard() {
  const navigate = useNavigate();
  const name = localStorage.getItem("name");

  const logout = () => {
    localStorage.clear();
    toast.success("Logged out successfully!");

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  };

  return (
    <div className="dashboard">

      <aside className="sidebar">

        <div className="logo">
          <h2>SmartVenue</h2>
        </div>

        <nav className="menu">
          <Link to="/venues">🏢 Browse Venues</Link>
          <Link to="/my-bookings">📅 My Bookings</Link>
          <Link to="/profile">👤 Profile</Link>
        </nav>

        <button className="logout-btn" onClick={logout}>
          🚪 Logout
        </button>

      </aside>

      <main className="main-content">

        <h1>Welcome, {name} 👋</h1>

        <p className="role">Role : STUDENT</p>

        <div className="cards">

          <div className="card">
            <h3>Available Venues</h3>
            <h1>15</h1>
          </div>

          <div className="card">
            <h3>My Bookings</h3>
            <h1>4</h1>
          </div>

          <div className="card">
            <h3>Pending Requests</h3>
            <h1>1</h1>
          </div>

        </div>

      </main>

    </div>
  );
}

export default StudentDashboard;