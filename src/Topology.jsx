import { useState } from 'react'

// Node geometry. Centers are used for links and packet routes.
const NODES = {
  isp: { x: 280, y: 44, w: 132, h: 44 },
  fw: { x: 280, y: 142, w: 132, h: 48 },
  core: { x: 280, y: 242, w: 132, h: 48 },
  srv: { x: 488, y: 242, w: 144, h: 48 },
  v10: { x: 90, y: 352, w: 120, h: 48 },
  v20: { x: 280, y: 352, w: 120, h: 48 },
  v30: { x: 470, y: 352, w: 120, h: 48 },
}
const HOSTS = [
  { id: 'v10', x: 90, color: 'var(--blue)' },
  { id: 'v20', x: 280, color: 'var(--aqua)' },
  { id: 'v30', x: 470, color: 'var(--amber)' },
]
const LINKS = [
  ['fw', 'core'], ['core', 'srv'], ['core', 'v10'], ['core', 'v20'], ['core', 'v30'],
]

export default function Topology({ t, hint }) {
  const [active, setActive] = useState('fw')
  const a = t[active]

  const pick = (id) => () => setActive(id)
  const key = (id) => (e) => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(id) }
  }

  const routes = HOSTS.map((h, i) => {
    const sx = i === 1 ? 262 : 298
    return {
      color: h.color,
      d: `M${sx},66 L${sx},120 L280,142 L280,242 L${h.x},352 L${h.x},430`,
      begin: `${i * 1.4}s`,
    }
  })

  return (
    <figure className="topo" aria-label="Network topology">
      <svg viewBox="0 0 580 470" role="group" aria-label={hint}>
        {/* ISP links: two uplinks */}
        <line className="wire" x1="262" y1="66" x2="262" y2="120" />
        <line className="wire wire-b" x1="298" y1="66" x2="298" y2="120" />
        <text className="isp-tag" x="248" y="98" textAnchor="end">ISP A</text>
        <text className="isp-tag" x="312" y="98">ISP B</text>

        {LINKS.map(([from, to]) => (
          <line key={from + to} className="wire" x1={NODES[from].x} y1={NODES[from].y} x2={NODES[to].x} y2={NODES[to].y} />
        ))}
        {HOSTS.map((h) => (
          <line key={h.id} className="wire" x1={h.x} y1="352" x2={h.x} y2="430" />
        ))}

        {/* hosts */}
        {HOSTS.map((h) => (
          <g key={'host' + h.id}>
            <rect className="host" x={h.x - 44} y="418" width="88" height="26" rx="6" style={{ stroke: h.color }} />
            <circle cx={h.x - 26} cy="431" r="3.5" style={{ fill: h.color }} />
            <rect x={h.x - 16} y="429" width="38" height="4" rx="2" style={{ fill: h.color, opacity: 0.35 }} />
          </g>
        ))}

        {/* packets */}
        <g className="packets" aria-hidden="true">
          {routes.map((r, i) => (
            <circle key={i} r="5" style={{ fill: r.color, opacity: 0 }}>
              <animateMotion dur="4.2s" begin={r.begin} repeatCount="indefinite" path={r.d} keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="4.2s" begin={r.begin} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* devices */}
        {Object.entries(NODES).map(([id, n]) => (
          <g
            key={id}
            className={'node' + (active === id ? ' on' : '')}
            transform={`translate(${n.x - n.w / 2} ${n.y - n.h / 2})`}
            tabIndex={0}
            role="button"
            aria-pressed={active === id}
            aria-label={`${t[id].label} ${t[id].sub}`}
            onMouseEnter={pick(id)}
            onFocus={pick(id)}
            onClick={pick(id)}
            onKeyDown={key(id)}
          >
            <rect width={n.w} height={n.h} rx="10" />
            <text x={n.w / 2} y={n.h / 2 - 3} textAnchor="middle" className="n-label">{t[id].label}</text>
            <text x={n.w / 2} y={n.h / 2 + 13} textAnchor="middle" className="n-sub">{t[id].sub}</text>
          </g>
        ))}
      </svg>

      <figcaption className="topo-info" aria-live="polite">
        <strong>{a.label} <span>{a.sub}</span></strong>
        <p>{a.text}</p>
      </figcaption>
    </figure>
  )
}
