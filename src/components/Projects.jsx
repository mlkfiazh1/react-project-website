function Projects() {
  const projects = [
    {
      title: "Campus Events App",
      description:
        "A React app for browsing campus events with filters and bookmarks.",
      tags: ["React", "Tailwind", "API"],
      link: "#",
    },
    {
      title: "Expense Tracker",
      description:
        "Track spending with charts, categories, and local storage persistence.",
      tags: ["JavaScript", "Chart.js"],
      link: "#",
    },
    {
      title: "Recipe Finder",
      description:
        "Search recipes from a public API and save favorites to a list.",
      tags: ["React", "Fetch", "CSS"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="bg-slate-50 py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Projects
        </h2>
        <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
          Selected work from class projects and side experiments.
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-cyan-400 transition duration-300 group-hover:scale-105" />

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 text-xl font-semibold text-slate-900 transition group-hover:text-blue-600 dark:text-slate-100 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {project.description}
                </p>

                <ul className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <a
                  href={project.link}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View project →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
