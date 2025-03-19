'use client';

import { motion } from 'framer-motion';

const AboutCard = () => {
  return (
    <motion.div
      className="about-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="https://via.placeholder.com/150"
        alt="Damjan"
        className="profile-img"
      />
      <h3>Damjan</h3>
      <p>Full-Stack Developer</p>
    </motion.div>
  );
};

export default AboutCard;