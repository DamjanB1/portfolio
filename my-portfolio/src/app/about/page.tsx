import Link from 'next/link'; // Import Link from next/link
import './about.css';

const About: React.FC = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-card">
          <img
            src="images/about3.webp"
            alt="Damjan"
            className="profile-img"
          />
        </div>

        <div className="about-info">
          <h2 className="about-title">Hi, I'm Damjan!</h2>
          <p>
            I’m a passionate and dedicated developer with experience in building modern websites, web apps, and e-commerce solutions. I specialize in both front-end and back-end technologies, working to deliver user-friendly and performance-oriented applications.
          </p>
          <p>
            I’m constantly learning and growing as a developer, tackling new challenges with enthusiasm. Whether it's building new features or optimizing code, I take pride in delivering efficient, high-quality work.
          </p>
          <p>
            Let's collaborate to bring your ideas to life and create something impactful together!
          </p>
          <div className="cta-container">
            {/* Use Link component to navigate to the contact page */}
            <Link href="/contact">
              <button className="cta-button">Contact Me</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
