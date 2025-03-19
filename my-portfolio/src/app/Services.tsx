"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const servicesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const services = servicesRef.current;
    if (services) {
      gsap.fromTo(
        services.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.8,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: services,
            start: "top 80%",
            end: "bottom 30%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    }
  }, []);

  return (
    <section className="services" ref={servicesRef}>
      <h2>What I Offer</h2>

      {/* Web Apps & Websites Service */}
      <div className="service-card">
        <div className="service-text">
          <h3>Web Apps & Websites</h3>
          <p>
            I craft high-performance web applications and websites using Next.js, React, and Django.
            Whether you need a sleek landing page or a complex web platform, I deliver scalable and modern solutions.
          </p>
        </div>
        <div className="service-image">
          <Image
            src="/images/website.jpg"
            alt="Web Apps & Websites"
            width={500}
            height={300}
            layout="responsive"
            priority={true}
          />
        </div>
      </div>

      {/* E-commerce Solutions Service */}
      <div className="service-card">
        <div className="service-text">
          <h3>E-commerce Solutions</h3>
          <p>
            Build feature-rich, scalable e-commerce platforms with integrated payment gateways.
            I design seamless shopping experiences that drive conversions and ensure security.
          </p>
        </div>
        <div className="service-image">
          <Image
            src="/images/webshop.jpg"
            alt="E-commerce Solutions"
            width={500}
            height={300}
            layout="responsive"
            priority={true}
          />
        </div>
      </div>

      {/* SaaS Solutions Service */}
      <div className="service-card">
        <div className="service-text">
          <h3>SaaS Solutions</h3>
          <p>
            From automation tools to cloud-based platforms, I develop SaaS solutions that help businesses
            optimize operations with lightweight, efficient, and scalable software.
          </p>
        </div>
        <div className="service-image">
          <Image
            src="/images/saas.jpg"
            alt="SaaS Solutions"
            width={500}
            height={300}
            layout="responsive"
            priority={true}
          />
        </div>
      </div>
    </section>
  );
}