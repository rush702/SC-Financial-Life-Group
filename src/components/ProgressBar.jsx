const SECTION_COLORS = {
  A: '#86710D', B: '#c9a227', C: '#d4b86a',
  D: '#a8920f', E: '#10b981', F: '#3a7bd5',
  G: '#5a9fd4', R: 'rgba(237,234,227,0.5)',
}

const SECTION_ICONS = {
  A: '👤', B: '🛡️', C: '❤️', D: '⚡',
  E: '📋', F: '👨‍👩‍👧', G: '✍️', R: '📝',
}

export default function ProgressBar({ progress, section, sectionName, current, total }) {
  const color = SECTION_COLORS[section] || '#86710D'
  const icon  = SECTION_ICONS[section]  || '●'
  const pct   = Math.min(100, Math.max(0, Math.round(progress)))

  return (
    <div className="progress-wrap">
      <div className="progress-brand">
        <span className="progress-brand-name">SC Financial Life Group</span>
      </div>
      <div className="progress-meta">
        <div className="progress-section" style={{ color }}>
          <span className="progress-section-dot" style={{ background: color }} />
          {icon} {sectionName}
        </div>
        <span className="progress-pct">{pct}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg, ${color}, ${color}cc)`, color }}
        />
      </div>
    </div>
  )
}
