import React from 'react'
import './App.css'

function App() {
  return (
    <div className="app">
      <main className="main">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Hi, I'm Diomidis</h1>
          <p className="hero-subtitle">Backend Software Engineer</p>
          <p className="hero-description">
            I'm a backend software engineer with a passion for building scalable systems and elegant solutions. 
            I enjoy working with modern technologies and solving complex problems.
          </p>
          <p className="hero-current">
            Currently building amazing things with Node.js, Python, and cloud technologies.
          </p>
        </section>

        {/* Skills Section */}
        <section className="skills">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3 className="skill-title">Backend</h3>
              <p className="skill-list">
                Node.js, Python, Java, Go<br/>
                Express, FastAPI, Spring Boot<br/>
                PostgreSQL, MongoDB, Redis
              </p>
            </div>
            <div className="skill-category">
              <h3 className="skill-title">Infrastructure</h3>
              <p className="skill-list">
                AWS, Docker, Kubernetes<br/>
                CI/CD, Terraform<br/>
                Microservices, Event-driven architecture
              </p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3 className="project-title">Distributed Task Queue</h3>
              <p className="project-description">
                A high-performance distributed task queue system built with Node.js and Redis. 
                Handles millions of jobs per day with automatic retry logic and monitoring.
              </p>
              <div className="project-tags">
                <span className="tag">Node.js</span>
                <span className="tag">Redis</span>
                <span className="tag">Docker</span>
              </div>
            </div>

            <div className="project-card">
              <h3 className="project-title">API Gateway Service</h3>
              <p className="project-description">
                Microservices API gateway with authentication, rate limiting, and request routing. 
                Built with Go for maximum performance and deployed on Kubernetes.
              </p>
              <div className="project-tags">
                <span className="tag">Go</span>
                <span className="tag">Kubernetes</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>

            <div className="project-card">
              <h3 className="project-title">Real-time Analytics Platform</h3>
              <p className="project-description">
                Event streaming platform for real-time data processing and analytics. 
                Processes terabytes of data daily with sub-second latency.
              </p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">Apache Kafka</span>
                <span className="tag">AWS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities and interesting projects. 
            Feel free to reach out if you'd like to collaborate or just want to say hello.
          </p>
          <div className="contact-links">
            <a 
              href="https://linkedin.com/in/diomidis-anadiotis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn →
            </a>
            <a 
              href="https://github.com/diomidis/cv/blob/a132da5932c0c4a84df85af665e73edf90571a39/cv_1023.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
            >
              Resume →
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App