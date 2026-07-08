import { useInView } from '../hooks/useInView'

const stack = [
  {
    category: 'frontend',
    items: ['React', 'Tailwind CSS'],
  },
  {
    category: 'backend',
    items: ['PHP', 'CodeIgniter 4', 'Laravel', 'MySQL', 'PostgreSQL', 'JWT', 'Sanctum', 'REST'],
  },
  {
    category: 'ai',
    items: ['ChatGPT', 'Claude', 'Stitch AI'],
  },
  {
    category: 'developer tools',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Discord', 'Viber', 'Teams'],
  },
]

export default function StackSection() {
  const [ref, visible] = useInView()

  return (
    <section id="stack" ref={ref} className="border-t border-[var(--border)]">
      <div className="max-w-[860px] mx-auto px-6 py-[72px]">
        <p className={`sec-label font-plex text-sm text-[var(--muted)] mb-10 reveal ${visible ? 'visible' : ''}`}>
          stack
        </p>

        <div className="flex flex-col gap-8">
          {stack.map((group, i) => (
            <div
              key={group.category}
              className={`reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              <p className="font-plex text-[11px] tracking-widest uppercase text-[var(--muted)] mb-3">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-plex text-[13px] text-[var(--ink)] bg-[var(--surface)] border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] transition-[border-color] duration-150"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
