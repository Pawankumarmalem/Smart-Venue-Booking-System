import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    getAllBookings,
    updateBookingStatus
} from "../services/bookingService";

import "../styles/ManageBookings.css";

function ManageBookings() {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {

        try {

            const response = await getAllBookings();

            setBookings(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const changeStatus = async (id, status) => {

    try {

        await updateBookingStatus(id, status);

        toast.success("Booking Updated Successfully");

        loadBookings();

    } catch (error) {

        toast.error("Failed to Update Booking");

        console.log(error);

    }

};

    return (

        <div className="manage-bookings">

            <h1>📅 Manage Bookings</h1>

            <table>

                <thead>

                    <tr>

                        <th>Student</th>
                        <th>Venue</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Hours</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {bookings.map((booking) => (

                        <tr key={booking.id}>

                            <td>{booking.user.name}</td>

                            <td>{booking.venue.venueName}</td>

                            <td>{booking.bookingDate}</td>

                            <td>{booking.bookingTime}</td>

                            <td>{booking.hours}</td>

                            <td>₹ {booking.totalAmount}</td>

                            <td>{booking.status}</td>

                           <td>

    <button
        className="approve"
        onClick={() => changeStatus(booking.id, "BOOKED")}
    >
        Approve
    </button>

    <button
        className="reject"
        onClick={() => changeStatus(booking.id, "REJECTED")}
    >
        Reject
    </button>

</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );
}

export default ManageBookings;