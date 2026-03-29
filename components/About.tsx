export default function About() {
  return (
    <section
      id="about"
      className="py-32 bg-stone-50 dark:bg-stone-950 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left column - photo + label */}
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-4 lg:sticky lg:top-28">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 lg:sticky lg:top-36">
              The short version
            </h2>
          </div>

          {/* Right column - content */}
          <div className="lg:col-span-8 space-y-6">
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              I'm a full-stack engineer who went from managing million-dollar insurance
              accounts to building software that processes millions of data points. The
              career pivot was the best decision I made.
            </p>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              After completing{' '}
              <span className="text-stone-900 dark:text-stone-200 font-medium">Hack Reactor</span>,
              I spent 3.5 years at{' '}
              <span className="text-stone-900 dark:text-stone-200 font-medium">Schlosser Geographic Systems</span>{' '}
              building high-performance data processing pipelines for telecom clients
              like AT&T and T-Mobile. I refactored APIs, cut P99 latency by 80%+,
              built regression testing with 100+ scenarios, and mentored
              junior engineers in React, Python, C#, and .NET.
            </p>
            <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              In 2026 I founded{' '}
              <a
                href="https://fullstackprep.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-500 dark:text-indigo-400 font-medium hover:underline"
              >
                FullStackPrep.org
              </a>{' '}
              and built the technical side of the platform. Next.js frontend, PostgreSQL database,
              AWS infrastructure, real-time WebRTC video, collaborative code editing,
              and CI/CD pipelines deploying to Cloudflare Workers.
            </p>

            {/* Education */}
            <div className="pt-8 mt-8 border-t border-stone-200 dark:border-stone-800 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-2">Education</p>
                <p className="font-semibold text-stone-900 dark:text-stone-100">Hack Reactor</p>
                <p className="text-sm text-stone-500">Advanced Software Engineering Immersive, 2021</p>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-2 sm:invisible">.</p>
                <p className="font-semibold text-stone-900 dark:text-stone-100">Temple University</p>
                <p className="text-sm text-stone-500">BBA, Risk Management & Insurance, 2014</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
