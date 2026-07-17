import "../styles/Features.css";
import { FaCalendarCheck, FaClock, FaShieldAlt } from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaCalendarCheck />,
      title: "Easy Booking",
      description: "Reserve auditoriums, seminar halls and classrooms within seconds."
    },
    {
      icon: <FaClock />,
      title: "Real-Time Availability",
      description: "Instantly check venue availability before booking."
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Authentication",
      description: "JWT-based authentication with Student, Faculty and Admin roles."
    }
  ];

  return (
    <section className="features">

      <h2>Why Choose SmartVenue?</h2>

      <div className="feature-container">

        {features.map((feature, index) => (

          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Features;