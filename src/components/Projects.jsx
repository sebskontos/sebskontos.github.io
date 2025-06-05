import React from "react";
import Card from "./Card";

const Projects = () => (
  <section id="projects" className="bg-gray-100 dark:bg-gray-900 py-16 px-8 md:px-20 lg:px-40">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12 text-left">Projects</h2>

    {/* Card Container */}
    <div className="flex flex-col gap-8">

      <Card
        title="Boys Behind The Bar"
        description="[In Development] A full-stack web application for a mobile 
        bartending company, featuring a modern, responsive design. The platform 
        combines a customer-facing interface for service bookings, cocktail menu 
        browsing, and review management with a robust admin CRM system for 
        business operations. Built with industry best practices and deployed on 
        AWS infrastructure."
        technologies={["React", "Node.js", "Express.js", "AWS EC2", "AWS RDS", "Tailwind CSS", "PostgreSQL"]}
        objectFit="contain"
      />

      <Card
        image="/bbtb.png"
        title="Bartender Booking App"
        description="A custom iOS application built for a mobile bartending company. 
        The app streamlines the event booking process, allowing customers to 
        easily schedule and manage their bartending services. 
        Features a dual-interface system with a customer-facing booking 
        platform and a specialized admin portal for bartenders to confirm 
        reservations and manage their events."
        githubLink="https://github.com/sebskontos/BoysBehindTheBar"
        technologies={["Swift", "SwiftUI", "XCode", "Firebase"]}
        objectFit="contain"
      />

      <Card
        image="/insite.png"
        title="InSite Monitoring"
        description={
          <>
            Led a group of 6 software engineering students to develop a computer vision system capable of detecting the proper use of safety equipment on construction sites. See{' '}
            <a
              href="https://www.linkedin.com/posts/consilium-solutions-aus_insitemonitoring-consiliumsolutions-projectmanagement-activity-7282961827896926208-9AEV?utm_source=share&utm_medium=member_desktop"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              here
            </a>{' '}
            for more details.
          </>
        }
        githubLink="https://github.com/sebskontos/capstone"
        technologies={["Python", "OpenCV", "Tenserflow", "PyTorch", "YOLOv8"]}
      />

      <Card
        image="/harmonize.png"
        title="Harmonize"
        description="A full-stack music streaming web application. Developed and 
        deployed on an AWS EC2 instance with Nginx, Django, and Google OAuth 2.0 for secure 
        authentication."
        githubLink="https://github.com/sebskontos/Harmonize"
        technologies={["Python", "Django", "CSS", "HTML", "AJAX", "AWS EC2"]}
      />


      <Card
        image="/space_invaders.png"
        title="Space Invaders Game"
        description="A 2D game engine in Java which replicates Space Invaders, 
        featuring enemy spawning, projectiles, collision detection, and game 
        state transitions. Leveraged OOP principles and design patterns like 
        Factory, Builder, and State."
        githubLink="https://github.com/sebskontos/Space-Invaders-v2.0.0"
        technologies={["Java", "JavaFX", "Design Patterns"]}
        objectFit="contain"
      />
    </div>
  </section>
);

export default Projects;
