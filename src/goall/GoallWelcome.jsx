export default function GoallWelcome({ onNext }) {
  return (
    <div className="welcome">
      <div className="welcome-brand">
        <div className="brand-mark" style={{
          background: 'linear-gradient(135deg,#86710D,#c9a227)',
          borderRadius: 16, width: 60, height: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem',
        }}>
          🎯
        </div>
        <div className="brand-name">
          GOALL Agency
          <span>Personal Profile Sheet</span>
        </div>
      </div>

      <h1 className="welcome-headline">
        Let's Build Your<br />
        <span className="g">Client Profile.</span>
      </h1>

      <p className="welcome-tagline">Personalized · Protected · Purposeful</p>

      <p className="welcome-sub">
        Complete your personal profile to get started with your coverage plan.
        Takes about 5 minutes — fully digital and secure.
      </p>

      <div className="welcome-stats">
        <div className="stat">
          <span className="stat-num">~5 min</span>
          <span className="stat-label">To complete</span>
        </div>
        <div className="stat">
          <span className="stat-num">256-bit</span>
          <span className="stat-label">SSL encrypted</span>
        </div>
        <div className="stat">
          <span className="stat-num">12</span>
          <span className="stat-label">Sections</span>
        </div>
      </div>

      <button className="btn-primary xl" onClick={() => onNext()}>
        Start My Profile →
      </button>

      <p className="welcome-trust">
        🔒 Your information is protected and never sold.
      </p>

      <p style={{ marginTop: 16, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
        © 2026 GOALL Agency. All rights reserved. (1.1.26)
      </p>
    </div>
  )
}
