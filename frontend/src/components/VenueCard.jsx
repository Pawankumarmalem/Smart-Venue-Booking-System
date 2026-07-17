import "../styles/VenueCard.css";

function VenueCard({ image, name, capacity, price }) {
  return (
    <div className="venue-card">

      <img src={image} alt={name} />

      <div className="venue-content">
        <h3>{name}</h3>

        <p>👥 Capacity: {capacity}</p>

        <p>💰 ₹{price}/hour</p>

        <button>Book Now</button>
      </div>

    </div>
  );
}

export default VenueCard;