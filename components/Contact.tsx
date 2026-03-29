'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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

          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-stone-900 dark:text-stone-100 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-stone-900 dark:text-stone-100 text-sm transition-colors"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-stone-900 dark:text-stone-100 text-sm transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3.5 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-full font-semibold text-sm hover:bg-stone-800 dark:hover:bg-white transition-colors cursor-pointer"
              >
                Send Message
              </button>
            </form>
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
