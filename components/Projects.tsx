interface Project {
  title: string;
  description: string;
  technologies: string[];
  link: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "AI Chatbot",
      description:
        "An AI chatbot using the Qwen/Qwen2.5-0.5B-Instruct model deployed on an AWS Lambda function.",
      technologies: ["Next.js", "TypeScript", "FastAPI", "Lambda"],
      link: "https://ai-v1-rouge.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
