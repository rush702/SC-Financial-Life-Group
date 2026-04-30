import { useState } from 'react'
import { createPortal } from 'react-dom'

const GOAL_PROGRAM_URL = 'https://umustsee.net/FGL6JS'

function GoalProgramModal({ onClose }) {
  const [loading, setLoading] = useState(true)
  const [blocked, setBlocked] = useState(false)

  return createPortal(
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        background: '#07071a',
        animation: 'slideInUp 0.35s cubic-bezier(0.16,1,0.3,1) both',
      }}
    >
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 20px', flexShrink: 0,
        background: 'rgba(7,7,26,0.97)',
        borderBottom: '1px solid rgba(255,255,255,0.09)',
      }}>
        <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>🎯 Goal Program</span>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.08)', border: 'none',
            borderRadius: 8, color: '#f1f5f9', cursor: 'pointer',
            fontFamily: 'inherit', fontWeight: 700,
            fontSize: '0.875rem', padding: '6px 16px',
          }}
        >
          ✕ Close
        </button>
      </div>

      {/* Loading spinner */}
      {loading && !blocked && (
        <div style={{
          position: 'absolute', inset: '53px 0 0 0',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 16,
          color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem',
        }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            border: '3px solid rgba(255,255,255,0.1)',
            borderTopColor: '#6366f1',
            animation: 'spin 0.8s linear infinite',
          }} />
          Loading Goal Program…
        </div>
      )}

      {/* Fallback if blocked */}
      {blocked && (
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: 20, padding: 32, textAlign: 'center',
        }}>
          <span style={{ fontSize: '3rem' }}>🎯</span>
          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', maxWidth: 320, lineHeight: 1.6 }}>
            The Goal Program page needs to open in a new tab. Tap below to view it.
          </p>
          <a
            href={GOAL_PROGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg,#6366f1,#8b5cf6)',
              color: 'white', textDecoration: 'none',
              padding: '14px 32px', borderRadius: 10,
              fontWeight: 700, fontSize: '0.975rem',
            }}
          >
            Open Goal Program →
          </a>
        </div>
      )}

      {/* iframe — sandbox blocks frame-busting JS */}
      {!blocked && (
        <iframe
          src={GOAL_PROGRAM_URL}
          title="Goal Program"
          style={{ flex: 1, border: 'none', width: '100%', display: loading ? 'none' : 'block' }}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
          referrerPolicy="no-referrer"
          onLoad={() => setLoading(false)}
          onError={() => { setLoading(false); setBlocked(true) }}
          allowFullScreen
        />
      )}
    </div>,
    document.body
  )
}

export default function Welcome({ onNext }) {
  const [showGoal, setShowGoal] = useState(false)

  return (
    <>
      {showGoal && <GoalProgramModal onClose={() => setShowGoal(false)} />}

      <div className="welcome">
        <div className="welcome-brand">
          <div className="brand-mark">
            <img src="logo.png" alt="SC Financial Life Group" className="brand-logo" onError={e => { e.target.style.display='none'; e.target.parentElement.textContent='🛡️' }} />
          </div>
          <div className="brand-name">
            SC Financial Life Group
            <span>Licensed Insurance Brokerage</span>
          </div>
        </div>

        <h1 className="welcome-headline">
          Stewards of Your<br />
          <span className="g">Financial Life.</span>
        </h1>

        <p className="welcome-tagline">Prudence · Protection · Prosperity</p>

        <p className="welcome-sub">
          Answer a few questions and we'll find the right life insurance coverage for you.
          Takes about 10 minutes — fully secure and digital.
        </p>

        <div className="welcome-stats">
          <div className="stat">
            <span className="stat-num">$50K–$3M</span>
            <span className="stat-label">Coverage options</span>
          </div>
          <div className="stat">
            <span className="stat-num">~10 min</span>
            <span className="stat-label">To complete</span>
          </div>
          <div className="stat">
            <span className="stat-num">256-bit</span>
            <span className="stat-label">SSL encrypted</span>
          </div>
        </div>

        <button className="btn-primary xl" onClick={() => onNext()}>
          Start My Application →
        </button>

        <p className="welcome-trust">
          🔒 Your information is protected by bank-level encryption and never sold.
        </p>

        <button
          onClick={() => setShowGoal(true)}
          style={{
            marginTop: 24,
            background: 'none',
            border: '1.5px solid rgba(255,255,255,0.15)',
            borderRadius: 10,
            color: 'var(--text-muted)',
            fontFamily: 'inherit',
            fontSize: '0.9rem',
            fontWeight: 600,
            padding: '12px 24px',
            cursor: 'pointer',
            transition: 'all 0.2s',
            width: '100%',
            maxWidth: 360,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.35)'
            e.currentTarget.style.color = 'var(--text)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = 'var(--text-muted)'
          }}
        >
          Learn how the Goal Program can work for you →
        </button>
      </div>
    </>
  )
}
