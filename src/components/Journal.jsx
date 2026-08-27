import { journalEntries } from '../data/content.js'
import JournalEntry from './JournalEntry.jsx'

export default function Journal() {
  return (
    <section id="journal" aria-label="Journal" className="hairline-top py-24 sm:py-32">
      <div className="container-page">
        <p className="eyebrow">Journal</p>
        <h2 className="display-heading mt-3 text-3xl sm:text-4xl">Field Notes</h2>

        <div className="mt-4">
          {journalEntries.map((entry) => (
            <JournalEntry key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
