type ProjectCardProps = {
  description: string
  files: string[]
  name: string
}

function ProjectCard({ description, files, name }: ProjectCardProps) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <span className="grid size-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600">
          <svg
            aria-hidden="true"
            className="size-5"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              d="M3.75 6.75A1.75 1.75 0 0 1 5.5 5h4l2 2h7A1.75 1.75 0 0 1 20.25 8.75v8.5A1.75 1.75 0 0 1 18.5 19h-13a1.75 1.75 0 0 1-1.75-1.75z"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            />
          </svg>
        </span>
        <h2 className="font-mono text-base font-semibold text-slate-900">
          {name}
        </h2>
      </div>
      <p className="mb-4 min-h-10 text-sm leading-5 text-slate-600">
        {description}
      </p>
      <ul className="space-y-2 border-t border-slate-100 pt-4">
        {files.map((file) => (
          <li className="font-mono text-xs text-slate-500" key={file}>
            {file}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default ProjectCard
