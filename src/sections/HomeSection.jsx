export default function HomeSection() {
  return (
    <header id="top">
      <div className="max-w-[860px] mx-auto px-6 pt-24 pb-[72px]">
        <p className="font-plex text-[13px] text-[var(--accent)] tracking-[0.04em] mb-4">
          Backend Developer
        </p>

        <h1
          className="font-space font-bold leading-[1.12] tracking-[-0.02em] mb-6 max-w-[720px]"
          style={{ fontSize: 'clamp(34px, 6vw, 54px)' }}
        >
          I build the part of the app you don't see — and can't live without.
        </h1>

        <div
          role="img"
          aria-label="Example API response describing Patrick"
          className="rounded-xl border border-[var(--border)] overflow-hidden font-plex text-[13.5px]"
          style={{ background: 'var(--code-bg)', boxShadow: 'var(--shadow)' }}
        >
          <div className="flex items-center gap-3 flex-wrap px-5 py-3 border-b border-[var(--border)] bg-[var(--surface)]">
            <span className="text-[var(--accent)] font-medium">GET</span>
            <span className="text-[var(--ink)]">/api/developer</span>
            <span className="ml-auto bg-[var(--accent-soft)] text-[var(--accent)] rounded-md px-[10px] py-[2px] text-xs">
              200 OK
            </span>
          </div>

          <div className="px-6 py-5 overflow-x-auto">
            <pre className="font-plex text-[13.5px] leading-[1.9] whitespace-pre">
              {'{'}
              {'\n  '}
              <span className="text-[var(--muted)]">"name"</span>
              {': '}
              <span className="text-[var(--accent)]">"Patrick"</span>
              {',\n  '}
              <span className="text-[var(--muted)]">"role"</span>
              {': '}
              <span className="text-[var(--accent)]">"Backend Developer"</span>
              {',\n  '}
              <span className="text-[var(--muted)]">"location"</span>
              {': '}
              <span className="text-[var(--accent)]">"Batangas, Philippines"</span>
              {',\n  '}
              <span className="text-[var(--muted)]">"status"</span>
              {': '}
              <span className="text-[var(--accent)]">"open_to_work"</span>
              {' '}
              <span className="cursor" aria-hidden="true" />
              {'\n}'}
            </pre>
          </div>
        </div>
      </div>
    </header>
  )
}
