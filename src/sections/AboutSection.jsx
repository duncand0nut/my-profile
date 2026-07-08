export default function AboutSection() {
  return (
    <section id="about" className="border-t border-[var(--border)]">
      <div className="max-w-[860px] mx-auto px-6 py-[72px]">
        <p className="sec-label font-plex text-sm text-[var(--muted)] mb-10">
          about
        </p>

        <div className="max-w-[620px] text-[var(--muted)] text-[15.5px] flex flex-col gap-4">
          <p>
            I care about <strong className="text-[var(--ink)] font-semibold">why</strong> a
            pattern exists before I use it. I'd rather ship a plain controller than a
            five-layer abstraction nobody needed — and add structure only when a real pain
            point earns it.
          </p>
          <p>
            Before software, I worked as a{' '}
            <strong className="text-[var(--ink)] font-semibold">Medical Technologist</strong>{' '}
            in a hospital lab for two years. That background taught me precision,
            documentation, and working under pressure — habits that translate directly to
            writing systems people depend on.
          </p>
          <p>Off the clock: streetwear, sneakers, and building side projects around both.</p>
        </div>
      </div>
    </section>
  )
}
