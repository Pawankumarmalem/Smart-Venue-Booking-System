package smartvenue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smartvenue.entity.Venue;
import smartvenue.repository.VenueRepository;

@Service
public class VenueService {

    @Autowired
    private VenueRepository venueRepository;

    // Add Venue
    public Venue addVenue(Venue venue) {
        return venueRepository.save(venue);
    }

    // Get All Venues
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    // Get Venue By ID
    public Venue getVenueById(Long id) {
        return venueRepository.findById(id).orElse(null);
    }

    // Update Venue
    public Venue updateVenue(Long id, Venue updatedVenue) {

        Venue venue = venueRepository.findById(id).orElse(null);

        if (venue != null) {
            venue.setVenueName(updatedVenue.getVenueName());
            venue.setLocation(updatedVenue.getLocation());
            venue.setCapacity(updatedVenue.getCapacity());
            venue.setPricePerHour(updatedVenue.getPricePerHour());
            venue.setStatus(updatedVenue.getStatus());

            return venueRepository.save(venue);
        }

        return null;
    }

    // Delete Venue
    public void deleteVenue(Long id) {
        venueRepository.deleteById(id);
    }
}