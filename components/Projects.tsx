export default function Projects() {
  const features = [
    'Live mock interviews with WebRTC peer-to-peer video',
    'Collaborative code editor powered by Yjs CRDTs',
    'Redis-backed matchmaking queue for session pairing',
    'Job application tracking and progress monitoring',
    'OAuth/PKCE authentication via AWS Cognito',
    'Edge deployment on Cloudflare Workers',
  ]

  const stack = [
    { category: 'Frontend', items: 'Next.js, React, TypeScript, Tailwind CSS' },
    { category: 'Backend', items: 'PostgreSQL, Redis, Node.js, REST APIs' },
    { category: 'Infrastructure', items: 'AWS (ECS, Lambda, ElastiCache), Terraform, Docker' },
    { category: 'Real-time', items: 'WebRTC, Yjs CRDTs, WebSockets' },
  ]

  return (
    <section
      id="projects"
      className="py-32 bg-stone-50 dark:bg-stone-950 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-20">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-4">
              Featured Project
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
              The thing I'm most proud of
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              I built FullStack Prep because I was tired of stitching together 5 different
              tools to prepare for interviews. It's an all-in-one platform where engineers
              can do live collaborative mock interviews, track their job applications, and
              connect with other job seekers.
            </p>
          </div>
        </div>

        {/* Project card */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-indigo-500/5 via-violet-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:via-violet-500/10 dark:to-purple-500/10 border border-stone-200/50 dark:border-stone-800/50">
          <div className="p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-12">
              <div>
                <h3 className="text-4xl sm:text-5xl font-black text-stone-900 dark:text-stone-100 tracking-tight">
                  FullStack Prep
                </h3>
                <p className="text-stone-500 mt-2 text-lg">
                  Interview prep & job search platform
                </p>
              </div>
              <a
                href="https://fullstackprep.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-full font-semibold text-sm hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer flex-shrink-0"
              >
                Visit fullstackprep.org
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-14">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400 mt-2 flex-shrink-0" />
                  <p className="text-[15px] text-stone-600 dark:text-stone-400">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div className="border-t border-stone-200/50 dark:border-stone-800/50 pt-10">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-6">
                Architecture
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stack.map((group, index) => (
                  <div key={index}>
                    <p className="text-sm font-semibold text-stone-900 dark:text-stone-100 mb-1">
                      {group.category}
                    </p>
                    <p className="text-sm text-stone-500">{group.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
