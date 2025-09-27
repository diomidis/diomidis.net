import React from 'react'
import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="name">Diomidis Anadiotis</h1>
        <p className="title">Senior Software Engineer</p>
        <nav className="nav">
          <a href="https://blog.diomidis.net" target="_blank" rel="noopener noreferrer">Notes</a>
          <a href="https://linkedin.com/in/diomidis-anadiotis" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/diomidis" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:info@diomidis.net">Email</a>
        </nav>
      </header>

      <main className="main">
        <section className="intro">
          <p>
            Customer-focused software engineer with proven expertise in technical initiatives to deliver robust, 
            scalable and maintainable enterprise systems. Specialised in architecting event-driven microservices 
            using C#/.NET Core, CQRS patterns, and Azure cloud technologies.
          </p>
          <p>
            Currently at Arnold Clark, co-leading modernisation of customer-facing platforms serving 220k monthly 
            active users, contributing to £15M+ in annual digital revenue growth.
          </p>
        </section>

        <section className="section">
          <h2>Experience</h2>
          <div className="experience-item">
            <div className="experience-header">
              <h3>Senior Software Engineer</h3>
              <span className="company">Arnold Clark</span>
              <span className="period">Jan 2025 – Present</span>
            </div>
            <ul>
              <li>Co-led complete modernisation of customer-facing booking platform serving 220k monthly active users</li>
              <li>Designed event-driven microservices using CQRS with MediatR, .NET Core 8, and Azure Service Bus</li>
              <li>Built real-time inventory synchronization system managing 10k products across 200+ locations</li>
              <li>Mentored junior engineers in SOLID principles, TDD practices, and cloud architecture patterns</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <h3>Software Engineer</h3>
              <span className="company">Arnold Clark</span>
              <span className="period">Dec 2021 – Jan 2025</span>
            </div>
            <ul>
              <li>Migrated third-party integration to high-performance event processing, achieving 5x faster processing</li>
              <li>Designed RESTful APIs serving React frontends and internal applications</li>
              <li>Optimized SQL Server schemas reducing database response times by 60%</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-group">
              <h3>Backend & Architecture</h3>
              <p>C#, .NET Core, CQRS, Event Sourcing, Domain-Driven Design, Microservices</p>
            </div>
            <div className="skill-group">
              <h3>Cloud & Infrastructure</h3>
              <p>Azure Services, Docker, Kubernetes, CI/CD, Terraform</p>
            </div>
            <div className="skill-group">
              <h3>Data & Messaging</h3>
              <p>SQL Server, Redis, Azure Service Bus, MassTransit, RESTful APIs</p>
            </div>
            <div className="skill-group">
              <h3>Frontend & Testing</h3>
              <p>React.js, TypeScript, TDD, Cypress, Performance Testing</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>Education</h2>
          <div className="education-item">
            <h3>MSc Information Technology</h3>
            <span className="institution">University of Glasgow</span>
          </div>
          <div className="education-item">
            <h3>BSc Information Systems</h3>
            <span className="institution">City University of Seattle</span>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>London, UK • <a href="https://blog.diomidis.net" target="_blank" rel="noopener noreferrer">Read my notes</a></p>
      </footer>
    </div>
  )
}

export default App