// Site content lives here so the home and CV pages stay in sync.
// CV content follows cv_diomidis_anadiotis_2025_v1.tex. Phone number and postcode are left out on purpose.

export const links = {
  notes: 'https://blog.diomidis.net',
  github: 'https://github.com/diomidis',
  linkedin: 'https://www.linkedin.com/in/diomidis-anadiotis/',
  email: 'mailto:info@diomidis.net',
}

export const location = 'London, UK'

// Home page

export const intro =
  'I build event-driven systems on .NET and Azure, and I move legacy software onto them without taking customers offline.'

export const currently =
  'I’m a senior software engineer at Arnold Clark, working remotely from London. I started there in 2017 as a systems analyst.'

export const selectedWork: { name: string; description: string; tags: string; href?: string }[] = [
  {
    name: 'Booking platform',
    description: 'co-led the rebuild of the customer journey',
    tags: '.NET · React',
  },
  {
    name: 'Real-time availability',
    description: 'owned the feature that shows live appointment slots',
    tags: 'CQRS · Redis',
  },
  {
    name: 'Event processing pipeline',
    description: 'proposed and built a replacement for legacy database jobs',
    tags: 'MassTransit · Hangfire',
  },
]

export const interests = ['Event-driven architecture', 'CQRS and event sourcing', 'Modernising legacy systems', 'Test-first development']

export const notes = [
  { title: 'London: dining and drinking', href: 'https://blog.diomidis.net/Goals/Experiences/London---Dining--and--Drinking' },
  { title: 'Gigs in the UK', href: 'https://blog.diomidis.net/Goals/Experiences/Gigs---UK' },
  { title: 'Japan', href: 'https://blog.diomidis.net/Goals/Trips/Japan' },
]

// CV page

export const summary = [
  'Software engineer at Europe’s largest independent automotive company, building robust, scalable and maintainable enterprise systems. Specialised in event-driven microservices using C#/.NET, CQRS and Azure.',
  'Co-leads cross-functional work and mentors engineers while delivering software at scale across complex product catalogues. Background in omnichannel full-stack customer experiences, and in modernising legacy systems into cloud-native architectures while keeping customer, internal and integration applications available.',
]

export interface Role {
  title: string
  period: string
  highlights: string[]
}

export interface Employer {
  name: string
  href?: string
  location: string
  roles: Role[]
}

export const experience: Employer[] = [
  {
    name: 'Arnold Clark',
    href: 'https://www.arnoldclark.com/about-us',
    location: 'London, UK · Remote',
    roles: [
      {
        title: 'Senior Software Engineer',
        period: 'Jan 2025 – Present',
        highlights: [
          'Co-led the modernisation of the customer-facing booking platform, serving 220k monthly active users. Customer journey conversion improved by 17%, contributing to more than £15M in annual digital revenue growth.',
          'Owned the availability feature that shows real-time appointment slots based on product catalogue availability. Page bounces fell by 35–50% and bookings rose by 18.5% (3k additional bookings in 6 weeks), with a further 7% conversion gain from data-driven UX changes, all at sub-second response times.',
          'Designed and implemented event-driven microservices using CQRS with MediatR, .NET 8 and Azure Service Bus, handling more than 50,000 daily transactions with heavy background processing. Set up distributed caching with Redis and auto-scaling in Kubernetes for peak loads.',
          'Contributed heavily to the real-time inventory synchronisation system managing 10k products across 200+ locations. Refactored the legacy event-sourced availability engine, migrating from EventStore to Service Bus, to keep availability accurate across web, mobile and in-store channels.',
          'Mentored junior engineers in SOLID principles, TDD, refactoring, greenfield development and cloud architecture. Worked directly with product owners, UX designers, QA and business stakeholders.',
        ],
      },
      {
        title: 'Software Engineer',
        period: 'Dec 2021 – Jan 2025',
        highlights: [
          'Proposed, designed and migrated a third-party integration from resource-intensive database jobs and stored procedures to an event processing application, processing millions of records 5x faster and adding full auditing. Built with Hangfire for scheduling and MassTransit for messaging, with configuration-driven support for direct database or service bus integration, error handling and concurrent-run prevention.',
          'Designed and developed RESTful APIs for React frontends and department-wide internal applications using a layered architecture. Built reusable component libraries and maintained Swagger/OpenAPI documentation.',
          'Designed and optimised SQL Server schemas and persistence for unstructured availability and product data. Indexing and query optimisation cut database response times by up to 60%.',
        ],
      },
      {
        title: 'Associate Software Engineer',
        period: 'Dec 2019 – Dec 2021',
        highlights: [
          'Wrote test suites with NUnit and Cypress, and automated testing with TestContainers across 20+ microservices and legacy codebases. Worked test-first from business requirements to production code wherever possible.',
          'Delivered small and medium features with UX/UI, product and business stakeholders. Found refactoring opportunities in legacy codebases, and took part in tech development days, hackathons and knowledge-sharing sessions.',
        ],
      },
      {
        title: 'Systems Analyst',
        period: 'Dec 2017 – Dec 2019',
        highlights: [
          'Analysed and modelled complex business domains, turning requirements into technical specifications. Worked with the aftersales development team on product lifecycle management and customer journey improvements.',
        ],
      },
    ],
  },
  {
    name: 'City Unity College',
    location: 'Athens, Greece',
    roles: [
      {
        title: 'IT Systems Engineer',
        period: 'Feb 2012 – Jan 2015',
        highlights: [
          'Managed cloud infrastructure and automated deployments with PowerShell and Bash. Administered Windows and Linux servers and SQL Server environments for high-availability applications.',
        ],
      },
    ],
  },
]

// The research was published under Dr Kyritsis's name, so the entry credits him and links to his work
export const research = {
  title: 'Research Assistant in Cognitive Computing',
  institution: 'City Unity College',
  location: 'Athens, Greece',
  period: 'Jan 2015 – Sep 2015',
  lead: 'Dr Markos Kyritsis',
  leadHref: 'https://scholar.google.com/citations?hl=en&user=QUT52bQAAAAJ&view_op=list_works&sortby=pubdate',
  highlights: [
    'Assisted Dr Markos Kyritsis, senior researcher and lecturer, with research into how people solve the Euclidean travelling salesperson problem.',
    'Developed the research software, using an EyeTribe eye tracker to capture cognitive processes in real time.',
    'Ran selective attention experiments and analysed the data in R, building visualisations and models in an interdisciplinary team.',
  ],
  publication: {
    authors: 'Kyritsis, M., Blathras, G., Gulliver, S. and Varela, V.-A.',
    year: 2017,
    title: 'Sense of direction and conscientiousness as predictors of performance in the Euclidean travelling salesman problem',
    venue: 'Heliyon, 3(11), e00461',
    doi: '10.1016/j.heliyon.2017.e00461',
  },
}

export const education = [
  {
    school: 'University of Glasgow',
    location: 'Glasgow, UK',
    degree: 'MSc in Information Technology',
    period: 'Sep 2016 – Sep 2017',
  },
  {
    school: 'City University of Seattle',
    location: 'Seattle, USA',
    degree: 'BSc in Information Systems – Systems Engineering (ABET accredited)',
    period: 'Sep 2011 – Jun 2016',
  },
]

export const skills = [
  { area: 'Languages and backend', items: 'C#, .NET 6/8, .NET Framework, .NET Standard, R' },
  { area: 'Frontend and web', items: 'React, TypeScript, JavaScript (ES6+), Redux, Next.js, HTML, CSS' },
  { area: 'Architecture', items: 'Microservices, CQRS, event sourcing, domain-driven design, event-driven architecture' },
  { area: 'Azure', items: 'Functions, Service Bus, App Services, Application Insights, DevOps Pipelines' },
  { area: 'Data storage', items: 'SQL Server, MySQL, RavenDB, EventStore, Redis, Entity Framework' },
  { area: 'Messaging and APIs', items: 'Azure Service Bus, MassTransit, RabbitMQ, Kafka, REST, GraphQL, gRPC' },
  { area: 'DevOps and infrastructure', items: 'Docker, Kubernetes, Terraform, Jenkins, Azure DevOps, GitHub Actions' },
  { area: 'Testing', items: 'TDD, unit and integration testing, Cypress, performance testing' },
  { area: 'Observability', items: 'New Relic, Application Insights, ELK Stack, distributed tracing' },
]

export const volunteering =
  'openSUSE Project Advocate (2010–2014), promoting the distribution across Greece and Europe through translation, documentation and bug fixing. Volunteered at FOSDEM (2011–2014) and hosted the Novell SUSE booth at LinuxCon Europe 2012.'
