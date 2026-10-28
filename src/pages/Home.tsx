import { Layout, NewTab, SectionLabel } from '../components/Layout'
import { currently, interests, intro, links, notes, selectedWork } from '../data/profile'

const rowClass = 'flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 py-3 border-b border-light'

export function Home() {
  return (
    <Layout current="home">
      <section className="mb-16">
        <p className="text-2xl sm:text-3xl font-medium text-primary leading-snug mb-5">{intro}</p>
        <p className="text-secondary mb-5">{currently}</p>
        <p className="flex flex-wrap gap-x-5 gap-y-1 text-accent">
          <a href="/cv/" className="py-2 hover:underline">CV</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="py-2 hover:underline">GitHub<NewTab /></a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="py-2 hover:underline">LinkedIn<NewTab /></a>
          <a href={links.email} className="py-2 hover:underline">Email</a>
        </p>
      </section>

      <section className="mb-14">
        <SectionLabel>Selected work</SectionLabel>
        <ul className="border-t border-light">
          {selectedWork.map(work => {
            const name = <span className="font-medium text-primary">{work.name}</span>
            return (
              <li key={work.name} className={rowClass}>
                <span>
                  {work.href ? (
                    <a href={work.href} className="hover:underline">{name}</a>
                  ) : name}
                  <span className="text-secondary"> — {work.description}</span>
                </span>
                <span className="font-mono text-xs text-muted whitespace-nowrap">{work.tags}</span>
              </li>
            )
          })}
        </ul>
        <a href="/cv/" className="inline-block mt-3 py-2 text-sm text-accent hover:underline">
          Read the full CV
        </a>
      </section>

      <section className="mb-14">
        <SectionLabel>Happy to talk about</SectionLabel>
        <ul className="flex flex-wrap gap-2 mb-4">
          {interests.map(topic => (
            <li key={topic} className="text-sm text-secondary border border-light rounded-full px-3 py-1">
              {topic}
            </li>
          ))}
        </ul>
        <p className="text-secondary">
          If you’re working on something similar, running a meetup or want to compare notes,{' '}
          <a href={links.email} className="text-accent hover:underline">email me</a>.
        </p>
      </section>

      <section>
        <SectionLabel>Off the clock</SectionLabel>
        <ul className="border-t border-light">
          {notes.map(note => (
            <li key={note.href} className="border-b border-light">
              <a href={note.href} target="_blank" rel="noopener noreferrer" className="block py-3 text-primary hover:underline">
                {note.title}
                <NewTab arrow={false} />
              </a>
            </li>
          ))}
        </ul>
        <a href={links.notes} target="_blank" rel="noopener noreferrer" className="inline-block mt-3 py-2 text-sm text-accent hover:underline">
          All notes<NewTab />
        </a>
      </section>
    </Layout>
  )
}
