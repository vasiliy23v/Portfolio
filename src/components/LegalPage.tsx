import type { Lang } from '../content'
import { LEGAL, LEGAL_LABELS } from '../legal'

// Text in [square brackets] is a placeholder the owner must replace before publishing.
function Text({ s }: { s: string }) {
  return (
    <>
      {s.split(/(\[[^\]]+\])/).map((part, i) =>
        part.startsWith('[') ? <mark className="ph" key={i}>{part}</mark> : <span key={i}>{part}</span>,
      )}
    </>
  )
}

export default function LegalPage({ lang, kind }: { lang: Lang; kind: 'imprint' | 'privacy' }) {
  const set = LEGAL[lang]
  const doc = set[kind]
  const labels = LEGAL_LABELS[lang]
  const other = kind === 'imprint' ? 'privacy' : 'imprint'
  const showNote = set.note && lang !== 'en' && lang !== 'de'
  return (
    <main className="legal wrap" id="top">
      <a className="legal-back" href="#top">{labels.back}</a>
      <h1>{doc.title}</h1>
      <p className="legal-meta">{set.updated}</p>
      {(set.note && lang !== 'de') && <p className="legal-note">{showNote ? 'Legal texts are available in German and English. ' : ''}{set.note}</p>}
      {doc.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.p.map((p) => <p key={p}><Text s={p} /></p>)}
        </section>
      ))}
      <nav className="legal-links">
        <a href={`#/${other === 'imprint' ? 'impressum' : 'datenschutz'}`}>{labels[other]}</a>
      </nav>
    </main>
  )
}
