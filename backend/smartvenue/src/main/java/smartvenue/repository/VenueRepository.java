package smartvenue.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import smartvenue.entity.Venue;

public interface VenueRepository extends JpaRepository<Venue, Long> {

}