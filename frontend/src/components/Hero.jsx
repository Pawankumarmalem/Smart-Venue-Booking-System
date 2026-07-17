import "../styles/Hero.css";
import heroImage from "../assets/images/hero.jpg";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      {/* Left Side - Text */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      >
        <h1>
          Book Campus Venues
          <br />
          in Seconds
        </h1>

        <p>
          Reserve seminar halls, auditoriums, conference rooms and classrooms
          with our secure and modern online booking platform.
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
            y: -3,
          }}
          whileTap={{
            scale: 0.96,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          Explore Venues
        </motion.button>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.2,
          ease: "easeOut",
        }}
      >
        <img src={heroImage} alt="Modern Auditorium" />
      </motion.div>

    </section>
  );
}

export default Hero;