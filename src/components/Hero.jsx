function Hero() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-20 md:flex-row"
    >
      <div className="flex-1">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-slate-600 dark:text-slate-400">
          Software Engineer
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl">
          Building clean interfaces and solid APIs
        </h1>
        <p className="mb-8 text-lg leading-relaxed text-slate-600 dark:text-slate-400">
          I care about readable code, thoughtful UX, and shipping work that
          lasts.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            View projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Get in touch
          </a>
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/196466915?s=400&v=4"
          alt="Portrait"
          className="h-56 w-56 rounded-full object-cover shadow-lg ring-4 ring-blue-100 dark:ring-slate-700"
        />
      </div>
    </section>
  );
}

export default Hero;
