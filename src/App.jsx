import { useEffect, useState } from 'react'
import { content, profile } from './data.js'
import Topology from './Topology.jsx'

const SECTIONS = ['about', 'experience', 'projects', 'skills', 'credentials', 'contact']

function initialLang() {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'en' || saved === 'fr') return saved
  } catch { /* storage unavailable */ }
  return (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en'
}

export default function App() {
  const [lang, setLang] = useState(initialLang)
  const [copied, setCopied] = useState(false)
  const c = content[lang]

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch { window.location.href = `mailto:${profile.email}` }
  }

  return (
    <>
      <header className="bar">
        <a className="brand" href="#top" aria-label="Jefferson Nguessi">
          <img src="/jefferson.jpg" alt="" width="34" height="34" />
          <span>Jefferson Nguessi</span>
        </a>
        <nav aria-label="Main">
          {SECTIONS.map((s) => <a key={s} href={`#${s}`}>{c.nav[s]}</a>)}
        </nav>
        <div className="lang" role="group" aria-label="Language">
          <button aria-pressed={lang === 'en'} onClick={() => setLang('en')}>EN</button>
          <button aria-pressed={lang === 'fr'} onClick={() => setLang('fr')}>FR</button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-text">
            <p className="place">{c.hero.place}</p>
            <h1>Jefferson<br />Nguessi</h1>
            <p className="role">{c.hero.role}</p>
            <p className="lede">{c.hero.line}</p>
            <div className="actions">
              <a className="btn primary" href={profile.cv} download>{c.hero.cta1}</a>
              <a className="btn" href="#contact">{c.hero.cta2}</a>
            </div>
          </div>
          <Topology t={c.topo} hint={c.hero.hint} />
        </section>

        <section id="about" className="sec about">
          <h2>{c.about.title}</h2>
          <div className="about-grid">
            <div className="prose">
              {c.about.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <aside>
              <img className="portrait" src="/jefferson.jpg" alt="Jefferson Nguessi" width="360" height="360" loading="lazy" />
              <dl className="facts">
                {c.about.facts.map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                ))}
              </dl>
            </aside>
          </div>
        </section>

        <section id="experience" className="sec">
          <h2>{c.experience.title}</h2>
          <p className="org">{c.experience.org}</p>
          <ol className="timeline">
            {c.experience.jobs.map((j) => (
              <li key={j.when}>
                <div className="when">{j.when}</div>
                <div>
                  <h3>{j.role}</h3>
                  <ul>{j.points.map((p) => <li key={p}>{p}</li>)}</ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="sec dark">
          <div className="inner">
            <h2>{c.projects.title}</h2>
            <p className="intro">{c.projects.intro}</p>
            <div className="cards">
              {c.projects.items.map((p) => (
                <article className="card" key={p.name}>
                  <h3>{p.name}</h3>
                  <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
                  <ul className="pts">{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
                  <p className="result">{p.result}</p>
                </article>
              ))}
            </div>
            <h3 className="more">{c.projects.more}</h3>
            <div className="side">
              {c.projects.side.map((s) => (
                <div key={s.name}><strong>{s.name}</strong><p>{s.text}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="sec">
          <h2>{c.skills.title}</h2>
          <div className="skill-grid">
            {c.skills.groups.map((g) => (
              <div key={g.name} className="skill-group">
                <h3>{g.name}</h3>
                <ul>{g.items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
          <p className="soft">{c.skills.soft}</p>
        </section>

        <section id="credentials" className="sec">
          <h2>{c.credentials.title}</h2>
          <div className="cred-grid">
            <div className="certs">
              {c.credentials.certs.map((x) => (
                <article key={x.name}>
                  <h3>{x.name}</h3>
                  <p className="by">{x.by}</p>
                  <p>{x.detail}</p>
                </article>
              ))}
            </div>
            <div>
              <h3 className="edu-title">{c.credentials.eduTitle}</h3>
              <ol className="edu">
                {c.credentials.edu.map((e) => (
                  <li key={e.name}>
                    <span className="when">{e.when}</span>
                    <strong>{e.name}</strong>
                    <span>{e.where}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section id="contact" className="sec contact">
          <h2>{c.contact.title}</h2>
          <p className="intro">{c.contact.body}</p>
          <div className="actions">
            <a className="btn primary" href={`mailto:${profile.email}`}>{c.contact.email}: {profile.email}</a>
            <button className="btn" onClick={copyEmail}>{copied ? c.contact.copied : c.contact.copy}</button>
            <a className="btn" href={`tel:${profile.phone.replace(/\s/g, '')}`}>{c.contact.call} {profile.phone}</a>
            <a className="btn" href={profile.whatsapp} target="_blank" rel="noopener noreferrer">{c.contact.wa}</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">{c.contact.github}</a>
          </div>
        </section>
      </main>

      <footer className="foot">
        <span>© {new Date().getFullYear()} {profile.fullName}</span>
        <span>{c.footer}</span>
      </footer>
    </>
  )
}
