'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import { sendEmail } from './actions';
import './contact.css';

interface FormData {
  name: string;
  email: string;
  projectDetails: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectDetails: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const { width, height } = useWindowSize();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.projectDetails) {
      setFormError('Please fill in all fields');
      return;
    }

    setFormError('');
    const result = await sendEmail(formData);
    if (result.success) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', projectDetails: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setFormError(result.error || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="contact-section">
      {isSubmitted && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={300}
          gravity={0.1}
        />
      )}
      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        onSubmit={handleSubmit}
        className="contact-form"
      >
        <h1>Let’s Build Something Amazing!</h1>
        {formError && <p className="error-message">{formError}</p>}
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          className={`form-input ${formError && !formData.name ? 'error' : ''}`}
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          className={`form-input ${formError && !formData.email ? 'error' : ''}`}
        />
        <motion.textarea
          name="projectDetails"
          placeholder="Tell me about your project..."
          value={formData.projectDetails}
          onChange={handleChange}
          whileFocus={{ scale: 1.02 }}
          className={`form-input ${formError && !formData.projectDetails ? 'error' : ''}`}
          rows={5}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="submit-btn"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}