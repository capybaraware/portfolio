export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            I'm a passionate software engineer with a love for creating elegant
            solutions to complex problems. With expertise in modern web
            technologies, I specialize in building responsive, performant
            applications that deliver exceptional user experiences.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, or sharing knowledge with the
            developer community.
          </p>
          <div className="flex justify-center mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

