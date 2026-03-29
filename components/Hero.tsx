export default function Hero() {
  return (
    <section className="min-h-screen flex items-end relative overflow-hidden bg-stone-950 pb-24 pt-32">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/8 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-4xl">
          <div className="animate-fade-in-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-stone-400">
                Available for opportunities
              </span>
            </div>
          </div>

          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[0.9] tracking-tight animate-fade-in-up delay-1">
            <span className="text-stone-100">Richard O</span>
            <br />
            <span className="gradient-text">Full-stack engineer.</span>
          </h1>
          <p className="text-lg text-stone-600 mt-6 mb-8 italic animate-fade-in-up delay-2">
            ( Yes, O is my real last name. Not an initial! )
          </p>

          <p className="text-lg sm:text-xl text-stone-400 max-w-2xl leading-relaxed mb-12 animate-fade-in-up delay-2">
            I build and scale web applications from database to deploy.
            Currently building{' '}
            <a
              href="https://fullstackprep.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-100 underline decoration-indigo-400/50 underline-offset-4 hover:decoration-indigo-400 transition-colors"
            >
              FullStackPrep.org
            </a>
            , an interview prep platform for software engineers.
          </p>

          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-3">
            <a
              href="#projects"
              className="px-7 py-3.5 bg-stone-100 text-stone-950 rounded-full font-semibold text-sm hover:bg-white transition-colors cursor-pointer"
            >
              See my work
            </a>
            <a
              href="https://linkedin.com/in/orichh"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-stone-700 text-stone-300 rounded-full font-semibold text-sm hover:border-stone-500 hover:text-stone-100 transition-colors cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/capybaraware"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 border border-stone-700 text-stone-300 rounded-full font-semibold text-sm hover:border-stone-500 hover:text-stone-100 transition-colors cursor-pointer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="absolute bottom-24 right-8 hidden lg:block text-right animate-fade-in-up delay-4">
          <p className="text-xs text-stone-600 tracking-widest uppercase mb-1">Based in</p>
          <p className="text-sm text-stone-400">West Orange, NJ</p>
          <p className="text-sm text-stone-500">NYC Metro Area</p>
        </div>
      </div>
    </section>
  )
}
