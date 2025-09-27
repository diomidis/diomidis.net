import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-12 pb-8 border-b border-gray-200">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Diomidis Anadiotis</h1>
          <p className="text-xl text-gray-600 mb-6">Senior Software Engineer</p>
          <nav className="flex justify-center gap-6 flex-wrap">
            <a 
              href="https://blog.diomidis.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              Notes
            </a>
            <a 
              href="https://linkedin.com/in/diomidis-anadiotis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/diomidis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              GitHub
            </a>
            <a 
              href="mailto:info@diomidis.net"
              className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
            >
              Email
            </a>
          </nav>
        </header>

        {/* Main content */}
        <main>
          {/* About */}
          <section className="mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Customer-focused software engineer with proven expertise in technical initiatives to deliver robust, 
                scalable and maintainable enterprise systems. Specialised in architecting event-driven microservices 
                using C#/.NET Core, CQRS patterns, and Azure cloud technologies.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Demonstrated success in co-leading cross-functional team efforts and mentoring engineers while 
                delivering high-quality software at scale. Strong background in building omnichannel fullstack 
                customer experiences and modernising legacy systems into cloud-native architectures.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Experience includes maintaining availability for mission-critical customer applications, 
                implementing comprehensive testing strategies, and collaborating with product teams to 
                optimize user experiences through data-driven development.
              </p>
            </div>
          </section>

          {/* Technical Expertise */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Backend & Architecture</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  C#, .NET Core, CQRS with MediatR, Event-Driven Microservices, Domain-Driven Design, 
                  Event Sourcing, RESTful APIs, GraphQL
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Cloud & Infrastructure</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Azure Services, Docker, Kubernetes, CI/CD Pipelines, Terraform, 
                  Application Insights, DevOps
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Data & Messaging</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  SQL Server, Redis, Azure Service Bus, MassTransit, RabbitMQ, 
                  Entity Framework, EventStore
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-3">Frontend & Testing</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  React.js, TypeScript, Redux, TDD, NUnit, Cypress, 
                  Performance Testing, Test-Driven Development
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm">
            London, UK • <a 
              href="https://blog.diomidis.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 hover:underline"
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