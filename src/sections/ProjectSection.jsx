import { useInView } from '../hooks/useInView'

const projects = [
  {
    type: 'e-commerce API',
    name: 'Copsociety',
    desc: 'Backend for a sneaker e-commerce platform. Service-repository architecture, 15 migration tables across product, order, and inventory modules, custom middleware layers, and courier-specific tracking URL generation.',
    tags: ['Laravel', 'MySQL', 'Sanctum', 'service-repository'],
  },
  {
    type: 'POS & management system',
    name: 'Artisan Brews',
    desc: 'Full café management backend — staff, products, modifier groups, orders, inventory, shifts, attendance, and audit logs. Feature-based folder structure with thin controllers, services, and observers.',
    tags: ['Laravel 11', 'MySQL', 'observers', 'audit logging'],
  },
  {
    type: 'civic platform',
    name: 'Barangay Management System',
    desc: 'Versioned backend for community administration: resident registry, households, roles, announcements, and complaints with ownership policies. Generic observer pattern for audit trails across models.',
    tags: ['Laravel', 'Vue.js', 'policies', 'versioned API'],
  },
  {
    type: 'team project',
    name: '2GO Shipping Rate Calculator',
    desc: 'REST API for computing shipping rates. Contributed the full auth module with session-based authentication and BCRYPT hashing, plus delivery-type auto-detection refactoring.',
    tags: ['CodeIgniter 3', 'REST', 'auth'],
  },
]

export default function ProjectSection() {
  const [ref, visible] = useInView()

  return (
    <section id="projects" ref={ref} className="border-t border-[var(--border)]">
      <div className="max-w-[860px] mx-auto px-6 py-[72px]">
        <p className={`sec-label font-plex text-sm text-[var(--muted)] mb-10 reveal ${visible ? 'visible' : ''}`}>
          projects
        </p>

        <div className="flex flex-col gap-4">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className={`px-7 py-6 border border-[var(--border)] rounded-xl bg-[var(--bg)] transition-[border-color,transform,opacity] duration-150 hover:border-[var(--accent)] hover:-translate-y-0.5 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i + 1) * 90}ms` }}
            >
              <span className="block font-plex text-xs text-[var(--accent)] mb-1.5">
                {project.type}
              </span>
              <h3 className="font-space text-[19px] font-semibold text-[var(--ink)] mb-2">
                {project.name}
              </h3>
              <p className="text-[14.5px] text-[var(--muted)]">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-plex text-[11.5px] text-[var(--muted)] border border-[var(--border)] rounded-md px-[10px] py-[3px]"
                  >
                    {tag}
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
