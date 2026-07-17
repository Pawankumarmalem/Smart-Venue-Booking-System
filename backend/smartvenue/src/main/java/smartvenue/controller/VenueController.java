package smartvenue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import smartvenue.entity.Venue;
import smartvenue.service.VenueService;

@RestController
@RequestMapping("/venues")
public class VenueController {

    @Autowired
    private VenueService venueService;

    // Add Venue
    @PostMapping("/add")
    public Venue addVenue(@RequestBody Venue venue) {
        return venueService.addVenue(venue);
    }

    // View All Venues
    @GetMapping("/all")
    public List<Venue> getAllVenues() {
        return venueService.getAllVenues();
    }

    // View Venue By ID
    @GetMapping("/{id}")
    public Venue getVenueById(@PathVariable Long id) {
        return venueService.getVenueById(id);
    }

    // Update Venue
    @PutMapping("/{id}")
    public Venue updateVenue(@PathVariable Long id,
                             @RequestBody Venue venue) {

        return venueService.updateVenue(id, venue);
    }

    // Delete Venue
    @DeleteMapping("/{id}")
    public String deleteVenue(@PathVariable Long id) {

        venueService.deleteVenue(id);

        return "Venue Deleted Successfully";
    }
}