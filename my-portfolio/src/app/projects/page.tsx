import './projects.css';
import Image from 'next/image'; // Import next/image

export const metadata = {
  title: 'Projects by Damjan - Full-Stack Developer',
  description: 'Explore my latest projects including Filmpire movie app, vacation rental webapp, e-commerce webshop, and some fun JavaScript experiments.',
};

export default function Projects() {
  return (
    <section className="projects-section fade-in">
      <h1>My Latest Projects</h1>
      <div className="projects-container">
        
        {/* Project 1: Filmpire */}
        <div className="project-card filmpire-card"> {/* Added filmpire-card class */}
          <h2>Filmpire - Movie Database App</h2>
          <Image
            src="/images/filmpire-photo.PNG" // Placeholder image
            alt="Filmpire Preview"
            width={600} // Adjust width based on your design
            height={400} // Adjust height based on your design
            className="project-img"
            priority={true} // Optional: loads above-the-fold image faster
          />
          <p>
            A responsive React web application that fetches and displays movie data using a
            third-party API. Features include search functionality, movie details, and a
            modern UI built with React.
          </p>
          <a
            href="https://filmpire-damjan.netlify.app/" // Replace with actual URL
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            View Live Project
          </a>
        </div>

        {/* Project 2: Vacation Rental Webapp */}
        <div className="project-card">
          <h2>Vacation Rental Webapp</h2>
          <p>
            A full-stack web application for booking vacation rentals. Includes user
            authentication, property listings, and booking management. Built with Next.js
            and a custom backend.
          </p>
          <div className="project-media">
            <Image
              src="/images/1rental.png"
              alt="Vacation Rental Webapp Screenshot"
              width={600} // Adjust width
              height={400} // Adjust height
              className="project-img"
            />
            <div className="video-container">
              <div className="video-box">
                <video
                  controls
                  className="project-video"
                  preload="metadata" // Loads metadata only, improves performance
                  width="100%" // Responsive width
                >
                  <source src="/videos/rental_PC-view.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="video-label">Large Screen View (open in Full screen for best UX)</p>
              </div>
              <div className="video-box">
                <video
                  controls
                  className="project-video"
                  preload="metadata" // Loads metadata only
                  width="100%" // Responsive width
                >
                  <source src="/videos/rental_mobile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="video-label">Mobile View (open in Full screen for best UX)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Webshop */}
        <div className="project-card">
          <h2>E-commerce Webshop</h2>
          <p>
            An online store with product catalog, shopping cart, and payment integration.
            Designed in Next.js and Django with a focus on user experience and performance using modern
            front-end technologies and secure backend with built in user dashboard for adding and modifying info.
          </p>
          <div className="project-media">
            <Image
              src="/images/1conseil.PNG"
              alt="E-commerce Webshop Screenshot"
              width={600} // Adjust width
              height={400} // Adjust height
              className="project-img"
            />
            <div className="video-container">
              <div className="video-box">
                <video
                  controls
                  className="project-video"
                  preload="metadata" // Loads metadata only
                  width="100%" // Responsive width
                >
                  <source src="/videos/conseil_PC.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="video-label">Large Screen View (open in Full screen for best UX)</p>
              </div>
              <div className="video-box">
                <video
                  controls
                  className="project-video"
                  preload="metadata" // Loads metadata only
                  width="100%" // Responsive width
                >
                  <source src="/videos/conseil_mobile.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="video-label">Mobile View (open in Full screen for best UX)</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Section: Fun Projects */}
        <div className="project-card">
          <h2>Fun Projects</h2>
          <div className="project-media">
            {/* Weather App */}
            <div className="fun-project">
              <h3>Weather App</h3>
              <p>
                A simple JavaScript-based weather application that fetches real-time weather
                data using an API. Features a clean UI and dynamic updates based on user input.
              </p>
              <div className="video-box">
                <Image
                  src="/images/Weather_App.gif" // Placeholder path for GIF
                  alt="Weather App Demo"
                  width={400} // Adjust width based on your GIF
                  height={300} // Adjust height based on your GIF
                  className="project-gif"
                />
                <p className="video-label">Demo</p>
              </div>
            </div>

            {/* Calculator */}
            <div className="fun-project">
              <h3>Calculator</h3>
              <p>
                A fully functional calculator built with vanilla JavaScript. Supports basic
                arithmetic operations with a sleek, user-friendly interface.
              </p>
              <div className="video-box">
                <Image
                  src="/images/Calculator.gif" // Placeholder path for GIF
                  alt="Calculator Demo"
                  width={400} // Adjust width based on your GIF
                  height={300} // Adjust height based on your GIF
                  className="project-gif"
                />
                <p className="video-label">Demo</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}