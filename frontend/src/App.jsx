import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Venues from "./pages/Venues";
import Booking from "./pages/Booking";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import MyBookings from "./pages/MyBookings";
import ManageVenues from "./pages/ManageVenues";
import ManageBookings from "./pages/ManageBookings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/venues" element={<Venues />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/manage-venues" element={<ManageVenues />} />
        <Route path="/manage-bookings" element={<ManageBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;