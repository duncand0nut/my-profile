import { useInView } from '../hooks/useInView'

export default function ContactSection() {
  const [ref, visible] = useInView()

  return (
    <section id="contact" ref={ref} className="border-t border-[var(--border)]">
      <div className="max-w-[860px] mx-auto px-6 py-[72px]">
        <p className={`sec-label font-plex text-sm text-[var(--muted)] mb-10 reveal ${visible ? 'visible' : ''}`}>
          contact
        </p>

        <p
          className={`max-w-[620px] text-[var(--muted)] text-[15.5px] mb-6 reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '80ms' }}
        >
          Open to backend roles and freelance projects. The fastest way to reach me:
        </p>

        <div
          className={`flex flex-wrap gap-3 reveal ${visible ? 'visible' : ''}`}
          style={{ transitionDelay: '160ms' }}
        >
          <a
            href="https://mail.google.com/mail/?view=cm&to=duncan.patrick02@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline rounded-[10px] px-[22px] py-[11px] transition-[transform,opacity] duration-150 hover:-translate-y-px bg-[var(--accent)] text-white"
          >
            Email me
          </a>
          <a
            href="https://github.com/duncand0nut"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline rounded-[10px] px-[22px] py-[11px] transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-[var(--accent)] border border-[var(--border)] text-[var(--ink)]"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline rounded-[10px] px-[22px] py-[11px] transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-[var(--accent)] border border-[var(--border)] text-[var(--ink)]"
          >
            LinkedIn
          </a>
          <a
            href="https://www.facebook.com/patwenks/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline rounded-[10px] px-[22px] py-[11px] transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-[var(--accent)] border border-[var(--border)] text-[var(--ink)]"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/iiam.dxncan/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium no-underline rounded-[10px] px-[22px] py-[11px] transition-[border-color,transform] duration-150 hover:-translate-y-px hover:border-[var(--accent)] border border-[var(--border)] text-[var(--ink)]"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
