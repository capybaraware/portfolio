export default function Contact() {

  const links = [
    { label: 'Email', value: 'orichh@gmail.com', href: 'mailto:orichh@gmail.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/orichh', href: 'https://linkedin.com/in/orichh' },
    { label: 'GitHub', value: 'github.com/capybaraware', href: 'https://github.com/capybaraware' },
  ]

  return (
    <section
      id="contact"
      className="py-32 bg-stone-50 dark:bg-stone-950 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-4">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 mb-4">
              Let's talk
            </h2>
            <p className="text-stone-500 mb-10 leading-relaxed">
              Open to engineering roles, collaborations, and interesting projects.
            </p>

            <div className="space-y-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label !== 'Email' ? '_blank' : undefined}
                  rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="block group cursor-pointer"
                >
                  <p className="text-xs text-stone-400 dark:text-stone-600 mb-0.5">{link.label}</p>
                  <p className="text-stone-900 dark:text-stone-100 font-medium group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 pt-8 border-t border-stone-200 dark:border-stone-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-stone-400 dark:text-stone-600">
            Richard O &middot; 2026
          </p>
          <p className="text-sm text-stone-400 dark:text-stone-600">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  )
}
