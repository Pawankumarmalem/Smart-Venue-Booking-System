import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { addBooking } from "../services/bookingService";
import "../styles/Booking.css";

function Booking() {

    const location = useLocation();
    const navigate = useNavigate();

    const venue = location.state?.venue;

    const [booking, setBooking] = useState({
        bookingDate: "",
        bookingTime: "",
        hours: 1
    });

    if (!venue) {
        return <h2>No Venue Selected</h2>;
    }

    const handleChange = (e) => {
        setBooking({
            ...booking,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const bookingData = {
            bookingDate: booking.bookingDate,
            bookingTime: booking.bookingTime,
            hours: booking.hours,

           user: {
    id: Number(localStorage.getItem("userId"))
},

            venue: {
                id: venue.id
            }
        };

        try {

            await addBooking(bookingData);

            toast.success("Booking Successful!");

            setTimeout(() => {
                navigate("/student-dashboard");
            }, 1500);

        } catch (error) {

            toast.error("Booking Failed!");

            console.log(error);

        }

    };

    return (

        <div className="booking-container">

            <form className="booking-form" onSubmit={handleSubmit}>

                <h2>Book Venue</h2>

                <h3>{venue.venueName}</h3>

                <p>📍 {venue.location}</p>

                <p>₹ {venue.pricePerHour} / hour</p>

                <input
                    type="date"
                    name="bookingDate"
                    value={booking.bookingDate}
                    onChange={handleChange}
                    required
                />

                <input
                    type="time"
                    name="bookingTime"
                    value={booking.bookingTime}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="hours"
                    min="1"
                    value={booking.hours}
                    onChange={handleChange}
                    required
                />

                <h3>
                    Total : ₹ {venue.pricePerHour * booking.hours}
                </h3>

                <button type="submit">
                    Confirm Booking
                </button>

            </form>

        </div>

    );

}

export default Booking;