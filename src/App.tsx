import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { copy, skills, EMAIL, LINKEDIN, GITHUB } from './content'
import type { Lang } from './content'
import LegalPage from './components/LegalPage'
import { LEGAL_LABELS } from './legal'
import { ParticleField, Words, CursorGlow, useGlobalEffects, Timeline } from './components/effects'

const LANGS: Lang[] = ['en', 'de', 'uk', 'ru']

const read = (k: string) => {
  try {
    return localStorage.getItem(k)
  } catch {
    return null
  }
}
const write = (k: string, v: string) => {
  try {
    localStorage.setItem(k, v)
  } catch {
    /* ignore */
  }
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setShown(true)
      return
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} className={`reveal ${shown ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      setVal(to)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / 1400)
        setVal(to * (1 - Math.pow(1 - p, 4)))
        if (p < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    })
    io.observe(el)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [to])
  const shown = to % 1 ? val.toFixed(1) : Math.round(val).toString()
  return (
    <span ref={ref}>
      {to === 1000 ? Math.round(val).toLocaleString('en-US') : shown}
      {suffix}
    </span>
  )
}

const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function App() {
  const [lang, setLang] = useState<Lang>(() => {
    const s = read('vs-lang')
    return s === 'de' || s === 'uk' || s === 'ru' || s === 'en' ? s : 'en'
  })
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const s = read('vs-theme')
    if (s === 'light' || s === 'dark') return s
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [filter, setFilter] = useState<string[]>([])
  const posRef = useRef<Map<string, number>>(new Map())
  const snapshot = () => {
    const m = new Map<string, number>()
    document.querySelectorAll<HTMLElement>('[data-job]').forEach((el) => m.set(el.dataset.job!, el.getBoundingClientRect().top + window.scrollY))
    posRef.current = m
  }
  const toggle = (s: string | null) => {
    snapshot()
    setFilter((f) => (s === null ? [] : f.includes(s) ? f.filter((x) => x !== s) : [...f, s]))
  }
  useLayoutEffect(() => {
    const old = posRef.current
    if (!old.size) return
    posRef.current = new Map()
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    document.querySelectorAll<HTMLElement>('[data-job]').forEach((el) => {
      const prev = old.get(el.dataset.job!)
      if (prev === undefined) return
      const dy = prev - (el.getBoundingClientRect().top + window.scrollY)
      if (Math.abs(dy) > 2) el.animate([{ transform: `translateY(${dy}px)` }, { transform: 'none' }], { duration: 620, easing: 'cubic-bezier(0.16, 1, 0.3, 1)' })
    })
    requestAnimationFrame(() => window.dispatchEvent(new Event('scroll')))
  }, [filter])
  const [menu, setMenu] = useState(false)
  const t = copy[lang]
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const legal: 'imprint' | 'privacy' | null = hash === '#/impressum' ? 'imprint' : hash === '#/datenschutz' ? 'privacy' : null
  const labels = LEGAL_LABELS[lang]
  useEffect(() => {
    if (legal) {
      window.scrollTo(0, 0)
      document.title = `${legal === 'imprint' ? 'Impressum' : labels.privacy} – Vasyl Shevchuk`
    } else if (hash.length > 1 && !hash.startsWith('#/')) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
    }
  }, [legal, hash, lang, labels.privacy])
  useGlobalEffects()

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dataset.theme = theme
    document.title = `Vasyl Shevchuk – ${copy[lang].hero.role} (React, TypeScript)`
    write('vs-lang', lang)
    write('vs-theme', theme)
  }, [lang, theme])

  useEffect(() => {
    const on = () => {
      const h = document.documentElement
      setScrolled(window.scrollY > 12)
      setProgress(h.scrollHeight - h.clientHeight > 0 ? window.scrollY / (h.scrollHeight - h.clientHeight) : 0)
    }
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  const ranked = useMemo(
    () =>
      t.exp.jobs
        .map((j, i) => ({ j, i, score: filter.filter((f) => j.tech.includes(f)).length }))
        .sort((a, b) => (filter.length ? b.score - a.score || a.i - b.i : a.i - b.i)),
    [t, filter],
  )
  const go = () => setMenu(false)

  return (
    <>
      <div className="ambient" aria-hidden="true"><i /><i /><i /><i /></div>
      <CursorGlow />
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-in">
          <a href="#top" className="brand" aria-label="Vasyl Shevchuk">
            <span className="brand-name">Vasyl Shevchuk</span>
          </a>
          <nav className={`links ${menu ? 'open' : ''}`} aria-label="Main">
            <a href="#experience" onClick={go}>{t.nav.work}</a>
            <a href="#about" onClick={go}>{t.nav.about}</a>
            <a href="#contact" onClick={go}>{t.nav.contact}</a>
          </nav>
          <div className="tools">
            <div className="pill" role="group" aria-label={t.toggles.lang}>
              {LANGS.map((l) => (
                <button key={l} className={lang === l ? 'on' : ''} aria-pressed={lang === l} onClick={() => setLang(l)}>{l.toUpperCase()}</button>
              ))}
            </div>
            <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={t.toggles.theme}>
              {theme === 'dark' ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.4 1.4M17.6 17.6 19 19M5 19l1.4-1.4M17.6 6.4 19 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 14.5A8 8 0 0 1 9.5 4 8 8 0 1 0 20 14.5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" /></svg>
              )}
            </button>
            <button className="icon-btn burger" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d={menu ? 'm6 6 12 12M18 6 6 18' : 'M4 8h16M4 16h16'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      </header>

      {legal ? (
        <LegalPage lang={lang} kind={legal} />
      ) : (
      <main id="top">
        {/* HERO */}
        <section className="hero wrap">
          <ParticleField />
          <div className="glow glow-a" aria-hidden="true" />
          <div className="glow glow-b" aria-hidden="true" />
          <Reveal>
            <div className="badge"><i /> {t.hero.badge}</div>
          </Reveal>
          <h1 key={lang}>
            <Words text={t.hero.title} start={150} />
            <br />
            <span className="grad grad-live">{t.hero.accent}</span>
          </h1>
          <Reveal delay={160}>
            <p className="lead">{t.hero.sub}</p>
          </Reveal>
          <Reveal delay={240} className="cta">
            <a className="btn btn-primary magnetic" href="#contact">
              {t.hero.secondary}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14m0 0-5-5m5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a className="btn btn-link" href="#experience">
              {t.nav.work} <span aria-hidden="true">›</span>
            </a>
          </Reveal>

        </section>

        {/* STATS */}
        <section className="stats wrap">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100} className="stat">
              <strong><Counter to={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </Reveal>
          ))}
        </section>

        {/* HIGHLIGHTS */}
        <section className="wrap section" id="highlights">
          <Reveal>
            <p className="eyebrow">{t.highlightsHead.eyebrow}</p>
            <h2>{t.highlightsHead.title}</h2>
          </Reveal>
          <div className="bento">
            {t.highlights.map((h, i) => (
              <Reveal key={h.title} delay={(i % 3) * 90} className={`tile spot tile-${i + 1}`}>
                <p className="kicker">{h.kicker}</p>
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="wrap section" id="experience">
          <Reveal>
            <p className="eyebrow">{t.exp.eyebrow}</p>
            <h2>{t.exp.title}</h2>
            <p className="sub">{t.exp.text}</p>
          </Reveal>
          <Reveal className="filter" delay={80}>
            <div role="group" aria-label={t.exp.filter} className="chip-row">
              <button className={`chip ${filter.length === 0 ? 'on' : ''}`} onClick={() => toggle(null)}>{t.exp.all}</button>
              {skills.map((s) => (
                <button key={s} className={`chip ${filter.includes(s) ? 'on' : ''}`} aria-pressed={filter.includes(s)} onClick={() => toggle(s)}>{s}</button>
              ))}
            </div>
          </Reveal>
          <Timeline className="jobs">
            {ranked.map(({ j, i: origin, score }, i) => {
              const active = filter.length > 0
              const match = !active || score > 0
              return (
                <Reveal key={j.id} delay={origin * 80} className="tl-item">
                  <span className="tl-node" aria-hidden="true" />
                  <article data-job={j.id} className={`job spot ${match ? '' : 'off'}`}>
                    <span className="job-no" aria-hidden="true">0{i + 1}</span>
                    <div className="job-body">
                    <div className="job-text">
                    <div className="job-head">
                      <div>
                        <div className="job-top">
                          <p className="job-co">{j.company}</p>
                          {active && (
                            <span className={`rank ${match ? '' : 'rank-off'}`}>
                              {match ? `#${i + 1} · ${score}/${filter.length} ${t.exp.matches}` : t.exp.notUsed}
                            </span>
                          )}
                        </div>
                        <h3>{j.project}</h3>
                        <p className="job-role">{j.role}</p>
                      </div>
                      <time>{j.period}</time>
                    </div>
                    <p className="job-sum">{j.summary}</p>
                    <ul>
                      {j.highlights.map((h, k) => <li key={h} style={{ '--i': k } as React.CSSProperties}>{h}</li>)}
                    </ul>
                    <div className="chips">
                      {j.tech.map((s, k) => <span key={s} className={filter.includes(s) ? 'hit' : ''} style={{ '--i': k } as React.CSSProperties}>{s}</span>)}
                    </div>
                    </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </Timeline>
        </section>

        {/* ABOUT */}
        <section className="wrap section" id="about">
          <div className="about-grid">
            <Reveal>
              <p className="eyebrow">{t.about.eyebrow}</p>
              <h2>{t.about.title}</h2>
              {t.about.paras.map((p) => <p className="sub" key={p}>{p}</p>)}
              <div className="seek">
                <strong>{t.about.seeking}</strong>
                <p>{t.about.seekingText}</p>
              </div>
            </Reveal>
            <div className="side">
              <Reveal className="panel" delay={60}>
                <h3>{t.about.langsTitle}</h3>
                {t.about.langs.map((l) => (
                  <div className="lang" key={l.name}>
                    <div><strong>{l.name}</strong><span>{l.level}</span></div>
                    <div className="dots" aria-hidden="true">
                      {[1, 2, 3, 4, 5].map((n) => <i key={n} className={n <= l.value ? 'f' : ''} />)}
                    </div>
                  </div>
                ))}
              </Reveal>
              <Reveal className="panel" delay={120}>
                <h3>{t.about.eduTitle}</h3>
                <p className="edu-d">{t.about.edu.degree}</p>
                <p className="muted">{t.about.edu.school} · {t.about.edu.period}</p>
                <p className="muted">{t.about.edu.text}</p>
                <h3 className="gap">{t.about.volTitle}</h3>
                <p className="edu-d">{t.about.vol.role}</p>
                <ul className="muted-list">{t.about.vol.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="glow glow-c" aria-hidden="true" />
          <div className="wrap contact-in">
            <Reveal>
              <p className="eyebrow">{t.contact.eyebrow}</p>
              <h2 className="big">{t.contact.title} <span className="grad">{t.contact.accent}</span></h2>
              <p className="sub center">{t.contact.text}</p>
            </Reveal>
            <Reveal delay={100} className="cta center-row">
              <a className="btn btn-primary magnetic" href={`mailto:${EMAIL}`}>{EMAIL} <Arrow /></a>
            </Reveal>
            <Reveal delay={160} className="cta center-row">
              <a className="btn btn-ghost" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            </Reveal>
            <p className="loc">{t.contact.location}</p>
          </div>
          <footer className="wrap foot">
            <span>{t.contact.footer}</span>
            <nav className="foot-links" aria-label="Legal">
              <a href="#/impressum">{labels.imprint}</a>
              <a href="#/datenschutz">{labels.privacy}</a>
            </nav>
            <a href="#top">{t.contact.top}</a>
          </footer>
        </section>
      </main>
      )}
    </>
  )
}
