package smartvenue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import smartvenue.entity.Booking;
import smartvenue.entity.Venue;
import smartvenue.repository.BookingRepository;
import smartvenue.repository.VenueRepository;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private VenueRepository venueRepository;

    // Add Booking
    public Booking addBooking(Booking booking) {

        // Fetch complete venue from database
        Venue venue = venueRepository.findById(
                booking.getVenue().getId()
        ).orElseThrow(() -> new RuntimeException("Venue not found"));

        booking.setVenue(venue);

        // Calculate Total Amount
        booking.setTotalAmount(
                venue.getPricePerHour() * booking.getHours()
        );

        // Default Status
        booking.setStatus("PENDING");

        return bookingRepository.save(booking);
    }

    // View All Bookings
    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    // View Bookings By User ID
    public List<Booking> getBookingsByUserId(Long userId) {
        return bookingRepository.findByUserId(userId);
    }

    // View Booking By ID
    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    // Update Booking
    public Booking updateBooking(Long id, Booking updatedBooking) {

        Booking booking = bookingRepository.findById(id).orElse(null);

        if (booking != null) {

            Venue venue = venueRepository.findById(
                    updatedBooking.getVenue().getId()
            ).orElseThrow(() -> new RuntimeException("Venue not found"));

            booking.setBookingDate(updatedBooking.getBookingDate());
            booking.setBookingTime(updatedBooking.getBookingTime());
            booking.setHours(updatedBooking.getHours());

            booking.setVenue(venue);

            booking.setTotalAmount(
                    venue.getPricePerHour() * updatedBooking.getHours()
            );

            booking.setStatus(updatedBooking.getStatus());
            booking.setUser(updatedBooking.getUser());

            return bookingRepository.save(booking);
        }

        return null;
    }
    // Update Booking Status
public Booking updateBookingStatus(Long id, String status) {

    Booking booking = bookingRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Booking Not Found"));

    booking.setStatus(status);

    return bookingRepository.save(booking);
}
    // Delete Booking
    public void deleteBooking(Long id) {
        bookingRepository.deleteById(id);
    }
}