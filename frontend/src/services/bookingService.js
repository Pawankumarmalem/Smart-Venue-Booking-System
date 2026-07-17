import api from "./api";

// Add Booking
export const addBooking = (booking) => {
    return api.post("/bookings/add", booking);
};

// Student - My Bookings
export const getBookingsByUserId = (userId) => {
    return api.get(`/bookings/user/${userId}`);
};

// Admin - All Bookings
export const getAllBookings = () => {
    return api.get("/bookings/all");
};

// Update Complete Booking
export const updateBooking = (id, booking) => {
    return api.put(`/bookings/${id}`, booking);
};

// Update Only Status
export const updateBookingStatus = async (id, status) => {

    // Fetch existing booking
    const response = await api.get(`/bookings/${id}`);
    const booking = response.data;

    // Change status
    booking.status = status;

    // Save updated booking
    return api.put(`/bookings/${id}`, booking);
};