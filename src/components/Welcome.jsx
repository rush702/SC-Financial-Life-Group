import { useState } from 'react'
import { createPortal } from 'react-dom'

const GOAL_PROGRAM_URL = 'https://umustsee.net/FGL6JS'

function GoalProgramModal({ onClose }) {
  return createPortal(
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        display: 'flex', flexDirection: 'column',
        background: '#07071a',
        animation: 'slideInUp 0.35s cubic-bezier(0.16,1,0.3,1) both',
      }}
    >
      {/* Header bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 20px',
        background: 'rgba(7,7,26,0.97)',
        borderBottom: '1px solid rgba(255,255,255,0.09)',
        flexShrink: 0,
      }}>
        <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>Goal Program</span>
        <button
          onClick={onClose}
          style={{
            background: 'rgba(255,255,255,0.08)',
            border: 'none', borderRadius: 8,
            color: '#f1f5f9', cursor: 'pointer',
            fontFamily: 'inherit', fontWeight: 700,
            fontSize: '0.875rem', padding: '6px 16px',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
        >
          ✕ Close
        </button>
      </div>

      {/* iframe */}
      <iframe
        src={GOAL_PROGRAM_URL}
        title="Goal Program"
        style={{ flex: 1, border: 'none', width: '100%' }}
        allowFullScreen
      />
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
          <div className="brand-mark"><img src="logo.png" alt="SC Financial Life Group" className="brand-logo" /></div>
          <div className="brand-name">
            SC Financial Life Group
            <span>& Life Group</span>
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
