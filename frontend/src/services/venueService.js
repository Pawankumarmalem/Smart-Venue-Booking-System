import api from "./api";

// Get All Venues
export const getAllVenues = () => {
    return api.get("/venues/all");
};

// Add Venue
export const addVenue = (venue) => {
    return api.post("/venues/add", venue);
};

// Update Venue
export const updateVenue = (id, venue) => {
    return api.put(`/venues/${id}`, venue);
};

// Delete Venue
export const deleteVenue = (id) => {
    return api.delete(`/venues/${id}`);
};