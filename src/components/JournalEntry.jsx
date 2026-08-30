export default function JournalEntry({ entry }) {
  return (
    <article className="hairline-top py-14 first:border-t-0 first:pt-0 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-signal-500">
            {entry.org}
          </p>
          <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
            {entry.period}
          </p>
          {entry.status && (
            <p className="mt-3 inline-block border border-hairline-strong px-2 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-signal-300">
              {entry.status}
            </p>
          )}
          <h3 className="display-heading mt-4 text-3xl sm:text-4xl">{entry.title}</h3>
        </div>

        <div>
          {entry.image && (
            <img
              src={entry.image}
              alt={entry.imageAlt || `Photograph related to ${entry.title}`}
              className="mb-6 aspect-video w-full object-cover"
              loading="lazy"
            />
          )}

          {entry.body.map((paragraph, i) => (
            <p key={`${entry.id}-${i}`} className="mb-4 font-body text-base leading-relaxed text-ink-muted last:mb-0 sm:text-lg">
              {paragraph}
            </p>
          ))}

          {entry.stats && (
            <div className="mt-8 flex flex-wrap gap-8">
              {entry.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="display-heading text-2xl text-signal-300">{stat.value}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-ink-faint">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
