"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min.js";
import './Hero.modules.css'

export default function Hero() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaRef.current) return;

    const vantaEffect = NET({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x160d9f, // Blue from your latest config
      backgroundColor: 0x000000, // Black background
      points: 15.0,
      maxDistance: 24.0,
      spacing: 14.0,
      showDots: true,
      THREE, // Pass Three.js instance
    });

    // Adjust SpotLight to prevent washout
    if (vantaEffect.spot) {
      vantaEffect.spot.intensity = 0.3; // Lower intensity
      vantaEffect.spot.color.setHex(0x160d9f); // Tint light to match
    }

    // Force linesMesh color
    if (vantaEffect.linesMesh) {
      vantaEffect.linesMesh.material.color.setHex(0x160d9f);
      vantaEffect.linesMesh.material.needsUpdate = true; // Ensure it updates
    }

    console.log("Vanta Effect Object:", vantaEffect);

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  useEffect(() => {
    gsap.from(".hero-vanta h1", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
    gsap.from(".hero-vanta p", { opacity: 0, y: 20, duration: 1, delay: 0.3, ease: "power2.out" });
    gsap.from(".cta-buttons", { opacity: 0, y: 20, duration: 1, delay: 0.6, ease: "power2.out" });
  }, []);

  return (
    <section ref={vantaRef} className="hero-vanta">
      <h1>Building Custom Web Solutions for Your Business</h1>
      <p>
        Hi, I’m Damjan, a full-stack developer from Croatia. I create web apps,
        webshops, and websites tailored to your business needs. Whether you're
        a startup, entrepreneur, or a growing company, I craft high-performance,
        responsive, and user-friendly solutions.
      </p>
      <div className="cta-buttons">
        <a href="/projects" className="cta-button">View My Work</a>
        <a href="/contact" className="cta-button secondary">Contact Me</a>
      </div>
    </section>
  );
}