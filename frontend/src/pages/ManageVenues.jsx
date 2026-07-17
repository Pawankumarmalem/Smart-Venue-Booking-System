import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
    getAllVenues,
    addVenue,
    deleteVenue
} from "../services/venueService";

import "../styles/ManageVenues.css";

function ManageVenues() {

    const [venues, setVenues] = useState([]);

    const [venue, setVenue] = useState({
        venueName: "",
        location: "",
        capacity: "",
        pricePerHour: "",
        status: "AVAILABLE"
    });

    useEffect(() => {
        loadVenues();
    }, []);

    const loadVenues = async () => {

        const response = await getAllVenues();

        setVenues(response.data);

    };

    const handleChange = (e) => {

        setVenue({
            ...venue,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await addVenue(venue);

            toast.success("Venue Added Successfully");

            setVenue({
                venueName: "",
                location: "",
                capacity: "",
                pricePerHour: "",
                status: "AVAILABLE"
            });

            loadVenues();

        } catch {

            toast.error("Failed to Add Venue");

        }

    };

    const handleDelete = async (id) => {

    if (!window.confirm("Delete this venue?")) return;

    try {

        const response = await deleteVenue(id);

        console.log(response);

        toast.success("Venue Deleted Successfully");

        loadVenues();

    } catch (error) {

        console.log("Status:", error.response?.status);
        console.log("Response:", error.response?.data);
        console.log(error);

        toast.error("Unable to Delete Venue");

    }

};
    return (

        <div className="manage-venues">

            <h1>🏢 Venue Management</h1>

            <form onSubmit={handleSubmit} className="venue-form">

                <input
                    name="venueName"
                    placeholder="Venue Name"
                    value={venue.venueName}
                    onChange={handleChange}
                    required
                />

                <input
                    name="location"
                    placeholder="Location"
                    value={venue.location}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="capacity"
                    placeholder="Capacity"
                    value={venue.capacity}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="pricePerHour"
                    placeholder="Price / Hour"
                    value={venue.pricePerHour}
                    onChange={handleChange}
                    required
                />

                <button>Add Venue</button>

            </form>

            <table>

                <thead>

                    <tr>

                        <th>Name</th>
                        <th>Location</th>
                        <th>Capacity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Action</th>

                    </tr>

                </thead>

                <tbody>

                    {venues.map((v) => (

                        <tr key={v.id}>

                            <td>{v.venueName}</td>
                            <td>{v.location}</td>
                            <td>{v.capacity}</td>
                            <td>₹ {v.pricePerHour}</td>
                            <td>{v.status}</td>

                            <td>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(v.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default ManageVenues;