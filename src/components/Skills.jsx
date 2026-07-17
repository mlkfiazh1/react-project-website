function Skills() {
  const skills = [
    {
      title: "Frontend",
      items: "HTML, CSS, JavaScript, React, Tailwind CSS",
    },
    {
      title: "Backend",
      items: "Node.js, Express, REST APIs, authentication",
    },
    {
      title: "Data",
      items: "SQL, MongoDB, Prisma, data modeling",
    },
    {
      title: "Tooling",
      items: "Git, Vite, npm, ESLint, VS Code",
    },
    {
      title: "Soft skills",
      items: "Communication, debugging, pair programming",
    },
    {
      title: "Currently learning",
      items: "TypeScript, testing, cloud deployment",
    },
  ];

  return (
    <section id="skills" className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">
          Skills
        </h2>
        <p className="mb-10 max-w-2xl text-slate-600 dark:text-slate-400">
          Tools I use to design, build, and ship full stack applications.
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article
              key={skill.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {skill.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {skill.items}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
