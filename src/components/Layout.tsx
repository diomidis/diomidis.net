import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { DarkModeToggle } from './DarkModeToggle'
import { links, location } from '../data/profile'

interface LayoutProps {
  current: 'home' | 'cv'
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ current, children }) => {
  const { isDark, toggle } = useDarkMode()
  const navLink = 'text-secondary hover:text-primary px-1 py-2'

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-2xl mx-auto px-6 py-10 sm:py-16">
        <header className="flex items-center justify-between mb-16">
          <a href="/" className="font-semibold text-primary py-2" aria-current={current === 'home' ? 'page' : undefined}>
            Diomidis Anadiotis
          </a>
          <nav className="flex items-center gap-3 text-sm" aria-label="Site">
            <a href={links.notes} target="_blank" rel="noopener noreferrer" className={navLink}>
              Notes<NewTab />
            </a>
            <a
              href="/cv/"
              className={current === 'cv' ? 'text-primary px-1 py-2 underline underline-offset-4' : navLink}
              aria-current={current === 'cv' ? 'page' : undefined}
            >
              CV
            </a>
            <DarkModeToggle isDark={isDark} onToggle={toggle} />
          </nav>
        </header>

        <main>{children}</main>

        <footer className="mt-20 pt-6 border-t border-light text-sm text-muted flex flex-wrap gap-x-4 gap-y-2">
          <span>{location}</span>
          {/* The home intro already shows these links */}
          {current !== 'home' && (
            <>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub<NewTab /></a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn<NewTab /></a>
              <a href={links.email} className="hover:text-primary">Email</a>
            </>
          )}
        </footer>
      </div>
    </div>
  )
}

// Marks a link that opens in a new tab: a visible arrow for sighted users, plain words for screen readers
export const NewTab: React.FC<{ arrow?: boolean }> = ({ arrow = true }) => (
  <>
    {arrow && <span aria-hidden="true"> ↗</span>}
    <span className="sr-only"> (opens in a new tab)</span>
  </>
)

export const SectionLabel: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="font-mono text-xs uppercase tracking-wider text-muted mb-3">{children}</h2>
)
