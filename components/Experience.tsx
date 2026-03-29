interface Role {
  title: string
  company: string
  period: string
  description: string
  highlights: string[]
  current?: boolean
}

export default function Experience() {
  const roles: Role[] = [
    {
      title: 'Founder',
      company: 'FullStackPrep.org',
      period: '2026 - Present',
      current: true,
      description: 'Interview prep and job search platform for software engineers.',
      highlights: [
        'Built the full technical stack: frontend, backend, infrastructure, and deployment',
        'Cloud infrastructure: AWS ECS Fargate, Lambda, ElastiCache, Cloudflare Workers, CI/CD',
        'Real-time features: WebRTC video, Yjs CRDTs for collaborative editing, Redis matchmaking queue',
      ],
    },
    {
      title: 'Software Engineer II',
      company: 'Schlosser Geographic Systems',
      period: '2023 - 2025',
      description: 'Geospatial data processing and visualization for telecom clients.',
      highlights: [
        'Built multi-threaded data processing jobs on AWS Lambda for AT&T and T-Mobile',
        'Refactored GPS job status API, cut P99 latency by 80%+',
        'Built React dashboard backed by Python microservices for geospatial data visualization',
        'Created regression testing tool with 100+ end-to-end test scenarios',
        'Mentored junior engineers in React, Python, C#, and .NET',
      ],
    },
    {
      title: 'Software Engineer I',
      company: 'Schlosser Geographic Systems',
      period: '2022 - 2023',
      description: 'Codebase modernization and operations support.',
      highlights: [
        'Modernized legacy codebases: updated packages, converted to TypeScript, added unit tests',
        'Supported acceptance testing, deployment, and technical support with operations team',
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="py-32 bg-stone-100/50 dark:bg-stone-900/30 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-4 lg:sticky lg:top-28">
              Experience
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 lg:sticky lg:top-36">
              4+ years building software
            </h2>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-16">
              {roles.map((role, index) => (
                <div key={index} className="group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-xl font-bold text-stone-900 dark:text-stone-100">
                          {role.title}
                        </h3>
                        {role.current && (
                          <span className="px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-500 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-indigo-500 dark:text-indigo-400 font-medium">
                        {role.company}
                      </p>
                    </div>
                    <p className="text-sm text-stone-400 dark:text-stone-600 whitespace-nowrap ml-4 mt-1">
                      {role.period}
                    </p>
                  </div>

                  <p className="text-stone-500 mb-4">{role.description}</p>

                  <ul className="space-y-2.5">
                    {role.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex gap-3 text-[15px] text-stone-600 dark:text-stone-400 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-stone-300 dark:bg-stone-700 mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {index < roles.length - 1 && (
                    <div className="mt-16 border-b border-stone-200 dark:border-stone-800" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
