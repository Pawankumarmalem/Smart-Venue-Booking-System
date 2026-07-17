import { useEffect, useState } from "react";
import { getBookingsByUserId } from "../services/bookingService";
import "../styles/MyBookings.css";

function MyBookings() {

    const [bookings, setBookings] = useState([]);

    const userId = localStorage.getItem("userId");

    useEffect(() => {
        loadBookings();
    }, []);

    const loadBookings = async () => {

        try {

            const response = await getBookingsByUserId(userId);

            setBookings(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="my-bookings">

            <h1>📅 My Bookings</h1>

            {bookings.length === 0 ? (

                <h2>No Bookings Found</h2>

            ) : (

                <div className="booking-grid">

                    {bookings.map((booking) => (

                        <div className="booking-card" key={booking.id}>

                            <h2>{booking.venue.venueName}</h2>

                            <p>📍 {booking.venue.location}</p>

                            <p>📅 {booking.bookingDate}</p>

                            <p>🕒 {booking.bookingTime}</p>

                            <p>⏱ {booking.hours} Hour(s)</p>

                            <p>💰 ₹ {booking.totalAmount}</p>

                            <span
                                className={
                                    booking.status === "BOOKED"
                                        ? "booked"
                                        : "pending"
                                }
                            >
                                {booking.status}
                            </span>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );
}

export default MyBookings;