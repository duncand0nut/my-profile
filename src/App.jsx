import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import AnimatedBackground from './components/AnimatedBackground'
import HomeSection from './sections/HomeSection'
import StackSection from './sections/StackSection'
import ProjectSection from './sections/ProjectSection'
import AboutSection from './sections/AboutSection'
import ContactSection from './sections/ContactSection'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))

  return (
    <>
      <AnimatedBackground />
      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <HomeSection />
        <StackSection />
        <ProjectSection />
        <AboutSection />
        <ContactSection />
        <footer className="border-t border-[var(--border)]">
          <div className="max-w-[860px] mx-auto px-6 pt-6 pb-10 font-plex text-[12.5px] text-[var(--muted)] flex justify-between flex-wrap gap-2">
            <span>© 2026 Patrick</span>
            <span>response_time: fast</span>
          </div>
        </footer>
      </div>
    </>
  )
}
