function Contact() {
  return (
    <section id="contact" className="bg-white py-20 dark:bg-slate-900">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6">
        <h2 className="mb-2 text-center text-3xl font-bold text-slate-900 dark:text-slate-100">
          Contact
        </h2>
        <p className="mb-10 max-w-2xl text-center text-slate-600 dark:text-slate-400">
          Have a project or question? Send a message: I usually reply within a
          few days.
        </p>

        <form
          className="mx-auto grid w-full max-w-2xl gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            alert("Thanks! Wire this form to an API or email service later.");
          }}
        >
          <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Name
            <input
              type="text"
              required
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
            <input
              type="email"
              required
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>

          <label className="grid gap-1 text-sm font-medium text-slate-700 dark:text-slate-200">
            Message
            <textarea
              rows={5}
              required
              className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:scale-95"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
