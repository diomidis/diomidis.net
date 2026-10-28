import { Layout, NewTab, SectionLabel } from '../components/Layout'
import { education, experience, research, skills, summary, volunteering } from '../data/profile'

const dateClass = 'font-mono text-xs text-muted whitespace-nowrap'

export function Cv() {
  return (
    <Layout current="cv">
      <h1 className="text-3xl font-medium text-primary mb-6">CV</h1>
      <div className="text-secondary space-y-4 mb-14">
        {summary.map(paragraph => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <section className="mb-14">
        <SectionLabel>Experience</SectionLabel>
        <ol className="border-t border-light">
          {experience.map(employer => (
            <li key={employer.name} className="py-8 border-b border-light">
              <header className="mb-6">
                <h3 className="font-semibold text-primary text-lg">
                  {employer.href ? (
                    <a href={employer.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {employer.name}<NewTab arrow={false} />
                    </a>
                  ) : employer.name}
                </h3>
                <p className="text-muted text-sm">{employer.location}</p>
              </header>
              {/* Roles at one employer are listed newest first to show progression */}
              <ol className="space-y-8 border-l border-light pl-5">
                {employer.roles.map(role => (
                  <li key={role.title}>
                    <article>
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                        <h4 className="font-medium text-primary">{role.title}</h4>
                        <p className={dateClass}>{role.period}</p>
                      </div>
                      <ul className="text-secondary space-y-2 list-disc list-outside pl-5">
                        {role.highlights.map(highlight => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    </article>
                  </li>
                ))}
              </ol>
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-14">
        <SectionLabel>Research</SectionLabel>
        <article className="py-5 border-t border-b border-light">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
            <h3 className="font-medium text-primary">{research.title}</h3>
            <p className={dateClass}>{research.period}</p>
          </div>
          <p className="text-primary mb-3">
            {research.institution} <span className="text-muted">· {research.location}</span>
          </p>
          <ul className="text-secondary space-y-2 list-disc list-outside pl-5 mb-4">
            {research.highlights.map(highlight => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
          <p className="text-sm text-muted mb-1">Published as</p>
          <p className="text-sm text-secondary mb-3">
            {research.publication.authors} ({research.publication.year}).{' '}
            <cite className="not-italic text-primary">{research.publication.title}</cite>.{' '}
            <i>{research.publication.venue}</i>.{' '}
            <a
              href={`https://doi.org/${research.publication.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:underline break-all"
            >
              doi:{research.publication.doi}<NewTab />
            </a>
          </p>
          <a href={research.leadHref} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-sm text-accent hover:underline">
            Publications by {research.lead}<NewTab />
          </a>
        </article>
      </section>

      <section className="mb-14">
        <SectionLabel>Education</SectionLabel>
        <ul className="border-t border-light">
          {education.map(entry => (
            <li key={entry.school} className="py-5 border-b border-light">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-medium text-primary">{entry.degree}</h3>
                <p className={dateClass}>{entry.period}</p>
              </div>
              <p className="text-primary">
                {entry.school} <span className="text-muted">· {entry.location}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-14">
        <SectionLabel>Skills</SectionLabel>
        <dl className="border-t border-light">
          {skills.map(skill => (
            <div key={skill.area} className="grid sm:grid-cols-[12rem_1fr] gap-1 sm:gap-6 py-3 border-b border-light">
              <dt className="font-medium text-primary">{skill.area}</dt>
              <dd className="text-secondary">{skill.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section>
        <SectionLabel>Volunteering</SectionLabel>
        <p className="text-secondary border-t border-light pt-4">{volunteering}</p>
      </section>
    </Layout>
  )
}
