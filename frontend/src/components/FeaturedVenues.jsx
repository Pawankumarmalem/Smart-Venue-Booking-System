import "../styles/FeaturedVenues.css";
import { motion } from "framer-motion";

import VenueCard from "./VenueCard";

import auditorium from "../assets/images/auditorium.jpg";
import seminar from "../assets/images/seminar.jpg";
import conference from "../assets/images/conference.jpg";

function FeaturedVenues() {

  const venues = [
    {
      image: auditorium,
      name: "Main Auditorium",
      capacity: 500,
      price: 500
    },
    {
      image: seminar,
      name: "Seminar Hall",
      capacity: 150,
      price: 250
    },
    {
      image: conference,
      name: "Conference Room",
      capacity: 60,
      price: 350
    }
  ];

  return (
    <section className="featured-venues">

      <h2>Featured Venues</h2>

      <motion.div
  className="venue-grid"
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>

        {venues.map((venue, index) => (
          <VenueCard
            key={index}
            image={venue.image}
            name={venue.name}
            capacity={venue.capacity}
            price={venue.price}
          />
        ))}

      </motion.div>

    </section>
  );
}

export default FeaturedVenues;