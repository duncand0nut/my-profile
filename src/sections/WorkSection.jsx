import { useInView } from '../hooks/useInView'

const jobs = [
  {
    company: 'Freelance',
    role: 'Backend Developer',
    period: '2024 — present',
    desc: 'Designed and built production APIs for clients across e-commerce, F&B, and civic sectors. Architected service-repository patterns, wrote migration-heavy schemas, and owned deployments end to end.',
    tags: ['Laravel', 'MySQL', 'REST API', 'service-repository'],
  },
  {
    company: 'Hospital Laboratory',
    role: 'Medical Technologist',
    period: '2022 — 2024',
    desc: 'Performed clinical analyses and maintained instrument calibration in a high-throughput hospital lab. Built documentation workflows that cut reporting errors and worked under pressure in time-critical environments.',
    tags: ['clinical analysis', 'documentation', 'quality control'],
  },
]

export default function WorkSection() {
  const [ref, visible] = useInView()

  return (
    <section id="experience" ref={ref} className="border-t border-[var(--border)]">
      <div className="max-w-[860px] mx-auto px-6 py-[72px]">
        <p className={`sec-label font-plex text-sm text-[var(--muted)] mb-10 reveal ${visible ? 'visible' : ''}`}>
          experience
        </p>

        <div className="flex flex-col gap-4">
          {jobs.map((job, i) => (
            <div
              key={job.company + job.role}
              className={`px-7 py-6 border border-[var(--border)] rounded-xl bg-[var(--bg)] transition-[border-color,transform,opacity] duration-150 hover:border-[var(--accent)] hover:-translate-y-0.5 reveal ${visible ? 'visible' : ''}`}
              style={{ transitionDelay: `${(i + 1) * 90}ms` }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                <div>
                  <span className="block font-plex text-xs text-[var(--accent)] mb-1">
                    {job.company}
                  </span>
                  <h3 className="font-space text-[19px] font-semibold text-[var(--ink)]">
                    {job.role}
                  </h3>
                </div>
                <span className="font-plex text-[12.5px] text-[var(--muted)] whitespace-nowrap mt-1">
                  {job.period}
                </span>
              </div>
              <p className="text-[14.5px] text-[var(--muted)] mt-2">{job.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {job.tags.map((tag) => (
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
