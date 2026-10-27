import "./App.css";
import { useDarkMode } from "./hooks/useDarkMode";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { ExternalLink } from "./components/ExternalLink";

// Vertical padding grows the touch target to 44px; the matching negative margin keeps the layout unchanged
const navLinkClass =
  "py-2.5 -my-2.5 text-accent font-medium hover:underline underline-offset-4 transition-colors duration-200";

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className="min-h-screen bg-primary transition-colors duration-200">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="flex justify-end mb-6">
            <DarkModeToggle isDark={isDark} onToggle={toggle} />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-primary mb-3">
            Diomidis Anadiotis
          </h1>
          <p className="text-xl text-secondary mb-8">
            Senior Software Engineer
          </p>
          <nav className="flex justify-center gap-8 flex-wrap">
            <ExternalLink
              href="https://blog.diomidis.net"
              className={navLinkClass}
            >
              Notes
            </ExternalLink>
            <ExternalLink
              href="https://linkedin.com/in/diomidis-anadiotis"
              className={navLinkClass}
            >
              LinkedIn
            </ExternalLink>
            <ExternalLink
              href="https://github.com/diomidis"
              className={navLinkClass}
            >
              GitHub
            </ExternalLink>
            <ExternalLink
              href="https://books.diomidis.net/"
              className={navLinkClass}
            >
              Library
            </ExternalLink>
            <a href="mailto:info@diomidis.net" className={navLinkClass}>
              Email
            </a>
          </nav>
        </header>

        {/* Main content */}
        <main className="space-y-16">
          {/* About */}
          <section>
            <div className="max-w-measure text-lg text-secondary leading-relaxed space-y-4">
              <p>
                Customer-focused software engineer with proven expertise in
                technical initiatives to deliver robust, scalable and
                maintainable enterprise systems. Specialised in architecting
                event-driven microservices using C#/.NET Core, CQRS patterns,
                and Azure cloud technologies.
              </p>
              <p>
                Demonstrated success in co-leading cross-functional team efforts
                and mentoring engineers while delivering high-quality software
                at scale. Strong background in building omnichannel fullstack
                customer experiences and modernising legacy systems into
                cloud-native architectures.
              </p>
              <p>
                Experience includes maintaining availability for
                mission-critical customer applications, implementing
                comprehensive testing strategies, and collaborating with product
                teams to optimize user experiences through data-driven
                development.
              </p>
            </div>
          </section>

          {/* Technical Expertise */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-8 pb-2 border-b border-primary">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  Backend & Architecture
                </h3>
                <p className="text-secondary leading-relaxed">
                  C#, .NET Core, CQRS with MediatR, Event-Driven Microservices,
                  Domain-Driven Design, Event Sourcing, RESTful APIs, GraphQL
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  Cloud & Infrastructure
                </h3>
                <p className="text-secondary leading-relaxed">
                  Azure Services, Docker, Kubernetes, CI/CD Pipelines,
                  Terraform, Application Insights, DevOps
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  Data & Messaging
                </h3>
                <p className="text-secondary leading-relaxed">
                  SQL Server, Redis, Azure Service Bus, MassTransit, RabbitMQ,
                  Entity Framework, EventStore
                </p>
              </div>
              <div className="bg-secondary p-6 rounded-lg shadow-custom-sm border border-light">
                <h3 className="font-semibold text-primary mb-3 text-lg">
                  Frontend & Testing
                </h3>
                <p className="text-secondary leading-relaxed">
                  React.js, TypeScript, Redux, TDD, NUnit, Cypress, Performance
                  Testing, Test-Driven Development
                </p>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center pt-12 mt-16 border-t border-primary">
          <p className="text-secondary">
            London, UK •{" "}
            <ExternalLink
              href="https://blog.diomidis.net"
              className="text-accent underline underline-offset-4 hover:decoration-2 transition-colors duration-200"
            >
              Read my notes
            </ExternalLink>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
