import React from 'react'
import './App.css'
import { useDarkMode } from './hooks/useDarkMode'
import { DarkModeToggle } from './components/DarkModeToggle'

function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-primary transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-end mb-6">
            <DarkModeToggle isDark={isDark} onToggle={toggle} />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-3">Diomidis Anadiotis</h1>
          <p className="text-xl text-secondary mb-8">Senior Software Engineer</p>
          <nav className="flex justify-center gap-8 flex-wrap">
            <a 
              href="https://blog.diomidis.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent font-medium hover:underline transition-all duration-200"
            >
              Notes
            </a>
            <a 
              href="https://linkedin.com/in/diomidis-anadiotis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent font-medium hover:underline transition-all duration-200"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/diomidis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent font-medium hover:underline transition-all duration-200"
            >
              GitHub
            </a>
            <a 
              href="mailto:info@diomidis.net"
              className="text-accent hover:text-accent font-medium hover:underline transition-all duration-200"
            >
              Email
            </a>
          </nav>
        </header>

        {/* Main content */}
        <main className="space-y-16">
          {/* About */}
          <section>
            <div className="prose prose-lg max-w-none text-secondary leading-relaxed space-y-4">
              <p>
                Customer-focused software engineer with proven expertise in technical initiatives to deliver robust, 
                scalable and maintainable enterprise systems. Specialised in architecting event-driven microservices 
                using C#/.NET Core, CQRS patterns, and Azure cloud technologies.
              </p>
              <p>
                Demonstrated success in co-leading cross-functional team efforts and mentoring engineers while 
                delivering high-quality software at scale. Strong background in building omnichannel fullstack 
                customer experiences and modernising legacy systems into cloud-native architectures.
              </p>
              <p>
                Experience includes maintaining availability for mission-critical customer applications, 
                implementing comprehensive testing strategies, and collaborating with product teams to 
                optimize user experiences through data-driven development.
              </p>
            </div>
          </section>

          {/* Technical Expertise */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-8 pb-2 border-b border-primary">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light hover:shadow-custom-md transition-all duration-200">
                <h3 className="font-semibold text-primary mb-3 text-lg">Backend & Architecture</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  C#, .NET Core, CQRS with MediatR, Event-Driven Microservices, Domain-Driven Design, 
                  Event Sourcing, RESTful APIs, GraphQL
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light hover:shadow-custom-md transition-all duration-200">
                <h3 className="font-semibold text-primary mb-3 text-lg">Cloud & Infrastructure</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  Azure Services, Docker, Kubernetes, CI/CD Pipelines, Terraform, 
                  Application Insights, DevOps
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light hover:shadow-custom-md transition-all duration-200">
                <h3 className="font-semibold text-primary mb-3 text-lg">Data & Messaging</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  SQL Server, Redis, Azure Service Bus, MassTransit, RabbitMQ, 
                  Entity Framework, EventStore
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light hover:shadow-custom-md transition-all duration-200">
                <h3 className="font-semibold text-primary mb-3 text-lg">Frontend & Testing</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  React.js, TypeScript, Redux, TDD, NUnit, Cypress, 
                  Performance Testing, Test-Driven Development
                </p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-8 pb-2 border-b border-primary">
              Experience
            </h2>
            <div className="space-y-8">
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light">
                <h3 className="font-semibold text-primary text-lg mb-2">Senior Software Engineer</h3>
                <p className="text-secondary mb-4">
                  Led modernisation of customer-facing platforms and booking systems, improving user experience 
                  and conversion rates through event-driven architecture and real-time availability features.
                </p>
                <ul className="text-secondary text-sm space-y-2 list-disc list-inside">
                  <li>Designed event-driven microservices using CQRS, .NET Core, and Azure Service Bus</li>
                  <li>Implemented distributed caching and auto-scaling strategies in Kubernetes</li>
                  <li>Built real-time inventory synchronization systems across multiple channels</li>
                  <li>Mentored junior engineers in SOLID principles and cloud architecture patterns</li>
                </ul>
              </div>
              
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light">
                <h3 className="font-semibold text-primary text-lg mb-2">Software Engineer</h3>
                <p className="text-secondary mb-4">
                  Developed high-performance applications and RESTful APIs, optimized database operations, 
                  and implemented comprehensive testing strategies across microservices architecture.
                </p>
                <ul className="text-secondary text-sm space-y-2 list-disc list-inside">
                  <li>Migrated legacy systems to event-driven processing applications</li>
                  <li>Built RESTful APIs serving React frontends and internal applications</li>
                  <li>Optimized SQL Server schemas and implemented efficient indexing strategies</li>
                  <li>Developed comprehensive test suites using NUnit and Cypress</li>
                </ul>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center pt-12 mt-16 border-t border-primary">
          <p className="text-secondary">
            London, UK • <a 
              href="https://blog.diomidis.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:text-accent hover:underline transition-all duration-200"
            >
              Read my notes
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App