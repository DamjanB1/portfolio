import { Suspense } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import ContactForm from './ContactForm';

// Metadata for SEO
export const metadata = {
  title: 'Contact Damjan - Full-Stack Developer',
  description: 'Get in touch with Damjan for your next web development project.',
};

export default function Contact() {
  return (
    <div className="contact-section">
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>

      {/* Floating WhatsApp Icon */}
      <div className="whatsapp-float">
        <a
          href="https://wa.me/385919223331" // Your Croatian WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="whatsapp-icon" />
        </a>
        {/* Chat Popup */}
        <div className="whatsapp-popup">
          <p>Contact me on WhatsApp!</p>
        </div>
      </div>
    </div>
  );
}
