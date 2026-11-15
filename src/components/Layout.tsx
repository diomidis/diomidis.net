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

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-2xl mx-auto px-6 py-10 sm:py-16">
        <header className="flex items-center justify-between mb-16">
          <a href="/" className="font-semibold text-primary py-2" aria-current={current === 'home' ? 'page' : undefined}>
            Diomidis Anadiotis
          </a>
          <DarkModeToggle isDark={isDark} onToggle={toggle} />
        </header>

        <main>{children}</main>

        {/* The home intro already shows these links, so it has no footer */}
        {current !== 'home' && (
          <footer className="mt-20 pt-6 border-t border-light text-sm text-muted flex flex-wrap gap-x-4 gap-y-2">
            <span>{location}</span>
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-primary">GitHub<NewTab /></a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-primary">LinkedIn<NewTab /></a>
            <a href={links.email} className="hover:text-primary">Email</a>
          </footer>
        )}
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
