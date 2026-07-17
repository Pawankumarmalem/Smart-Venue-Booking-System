import { Link, useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

function AdminDashboard() {

    const navigate = useNavigate();

    const name = localStorage.getItem("name");
    const role = localStorage.getItem("role");

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (

        <div className="admin-dashboard">

            <h1>🏢 Smart Venue Admin Panel</h1>

            <div className="profile-card">

                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="Admin"
                />

                <h2>{name}</h2>

                <p>{role}</p>

            </div>

            <div className="cards">

                <div className="card">
                    <h2>🏢</h2>
                    <h3>Venues</h3>
                    <p>Manage Venue Details</p>
                </div>

                <div className="card">
                    <h2>📅</h2>
                    <h3>Bookings</h3>
                    <p>Approve / Reject</p>
                </div>

                <div className="card">
                    <h2>👀</h2>
                    <h3>View</h3>
                    <p>Available Venues</p>
                </div>

            </div>

            <div className="actions">

                <Link className="btn" to="/manage-venues">
                    🏢 Manage Venues
                </Link>

                <Link className="btn" to="/manage-bookings">
                    📅 Manage Bookings
                </Link>

                <Link className="btn" to="/venues">
                    👀 View Venues
                </Link>

                <button
                    className="btn logout"
                    onClick={logout}
                >
                    🚪 Logout
                </button>

            </div>

        </div>

    );

}

export default AdminDashboard;