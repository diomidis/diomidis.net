import { Layout, NewTab } from '../components/Layout'
import { about, intro, links } from '../data/profile'

export function Home() {
  return (
    <Layout current="home">
      <section>
        <p className="text-2xl sm:text-3xl font-medium text-primary leading-snug mb-5">{intro}</p>
        <div className="text-secondary space-y-4 mb-5">
          {about.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <p className="flex flex-wrap gap-x-5 gap-y-1 text-accent">
          <a href="/cv/" className="py-2 hover:underline">CV</a>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="py-2 hover:underline">GitHub<NewTab /></a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="py-2 hover:underline">LinkedIn<NewTab /></a>
          <a href={links.email} className="py-2 hover:underline">Email</a>
        </p>
      </section>
    </Layout>
  )
}
