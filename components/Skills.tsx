export default function Skills() {
  const categories = [
    {
      title: 'Front-End',
      skills: ['React', 'Next.js', 'React Native', 'TypeScript', 'Redux', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      title: 'Back-End',
      skills: ['.NET', 'Python', 'Node.js', 'Express', 'SQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS (EC2, Lambda, ECS, SNS, SQS)', 'Docker', 'Terraform', 'CI/CD', 'Cloudflare Workers'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Agile/Scrum', 'Claude', 'VS Code', 'TeamCity'],
    },
  ]

  return (
    <section
      id="skills"
      className="py-32 bg-stone-100/50 dark:bg-stone-900/30 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-4 lg:sticky lg:top-28">
              Skills
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100 lg:sticky lg:top-36">
              Tech I reach for
            </h2>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {categories.map((category, index) => (
              <div key={index}>
                <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-stone-400 dark:text-stone-600 mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-stone-50 dark:bg-stone-900 text-stone-700 dark:text-stone-300 rounded-lg text-sm border border-stone-200 dark:border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
