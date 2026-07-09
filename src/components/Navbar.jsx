export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav
      className="sticky top-0 z-10 border-b border-[var(--border)]"
      style={{
        background: 'color-mix(in srgb, var(--bg) 85%, transparent)',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="max-w-[860px] mx-auto px-6 flex items-center justify-between h-[60px]">
        <a
          href="#top"
          className="font-plex text-sm font-medium text-[var(--ink)] no-underline"
        >
          patrick<span className="text-[var(--accent)]">.dev</span>
        </a>

        <div className="flex items-center gap-7">
          <div className="hidden sm:flex gap-6">
            {['about', 'experience', 'projects', 'stack', 'contact'].map((link) => (
              <a
                key={link}
                href={`#${link}`}
                className="text-sm text-[var(--muted)] no-underline hover:text-[var(--ink)] transition-colors duration-150 capitalize"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            ))}
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            aria-pressed={theme === 'dark'}
            className="inline-flex items-center gap-2 font-plex text-[12.5px] bg-[var(--surface)] text-[var(--ink)] border border-[var(--border)] rounded-full px-[14px] py-[7px] cursor-pointer transition-[border-color] duration-150 hover:border-[var(--accent)]"
          >
            <span
              className="w-2 h-2 rounded-full bg-[var(--accent)]"
              aria-hidden="true"
            />
            <span>{theme === 'dark' ? 'light' : 'dark'}</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
