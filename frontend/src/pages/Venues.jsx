import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllVenues } from "../services/venueService";
import "../styles/Venues.css";

function Venues() {

    const [venues, setVenues] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        loadVenues();

    }, []);

   const loadVenues = async () => {

  try {

    const response = await getAllVenues();

    console.log("Response:", response);
    console.log("Data:", response.data);

    setVenues(response.data);

  } catch (error) {

    console.log(error);

  }

};

    return (

        <div className="venues-page">

            <h1>Available Venues</h1>

            <div className="venues-grid">

                {venues.map((venue) => (

                    <div className="venue-card" key={venue.id}>

                        <h2>{venue.venueName}</h2>

                        <p>📍 {venue.location}</p>

                        <p>👥 Capacity : {venue.capacity}</p>

                        <p>💰 ₹ {venue.pricePerHour} / hour</p>

                        <p>Status : {venue.status}</p>

                        <button
                            onClick={() =>
                                navigate("/booking", {
                                    state: { venue }
                                })
                            }
                        >
                            Book Now
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Venues;