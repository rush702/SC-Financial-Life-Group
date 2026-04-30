import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

export default function GoallSignatureStep({ formData, onNext, onBack }) {
  const today = new Date().toISOString().split('T')[0]
  const [clientSignName, setClientSignName] = useState(formData.clientSignName)
  const [clientSignDate, setClientSignDate] = useState(formData.clientSignDate || today)
  const [presenterName, setPresenterName] = useState(formData.presenterName)
  const [presenterDate, setPresenterDate] = useState(formData.presenterDate || today)
  const [confirmed, setConfirmed] = useState(false)
  const [err, setErr] = useState('')

  const expectedName = `${formData.firstName} ${formData.lastName}`.trim().toLowerCase()

  const submit = () => {
    if (!clientSignName.trim()) { setErr('Please type your full name to sign.'); return }
    if (clientSignName.trim().toLowerCase() !== expectedName) {
      setErr(`Signature must match your legal name: ${formData.firstName} ${formData.lastName}`); return
    }
    if (!confirmed) { setErr('Please confirm the information is correct.'); return }
    onNext({ clientSignName: clientSignName.trim(), clientSignDate, presenterName, presenterDate })
  }

  return (
    <div className="step">
      <SectionBadge section="R" label="Signature" />
      <h2 className="step-question">Review &amp; sign</h2>

      <div style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 12,
        padding: '16px 20px',
        marginBottom: 24,
        fontSize: '0.925rem',
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 1.65,
        fontStyle: 'italic',
      }}>
        "The above information is correct to the best of my knowledge."
      </div>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
          <input
            type="checkbox"
            checked={confirmed}
            onChange={e => { setConfirmed(e.target.checked); setErr('') }}
            style={{ marginTop: 3, width: 18, height: 18, accentColor: '#c9a227', flexShrink: 0 }}
          />
          <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
            I confirm that all information provided in this profile is accurate and complete to the best of my knowledge.
          </span>
        </label>
      </div>

      <div className="field-row two" style={{ marginBottom: 28 }}>
        <div className="field-group">
          <label className="field-label">Type your full legal name</label>
          <input
            className="input"
            value={clientSignName}
            onChange={e => { setClientSignName(e.target.value); setErr('') }}
            placeholder={`${formData.firstName} ${formData.lastName}`}
            style={{ fontStyle: 'italic' }}
          />
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 4 }}>
            Must match: {formData.firstName} {formData.lastName}
          </p>
        </div>
        <div className="field-group">
          <label className="field-label">Date</label>
          <input className="input" type="date" value={clientSignDate} onChange={e => setClientSignDate(e.target.value)} />
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 20,
        marginBottom: 24,
      }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: 14, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          GOALL Presenter
        </p>
        <div className="field-row two">
          <div className="field-group">
            <label className="field-label">Presenter Name</label>
            <input className="input" value={presenterName} onChange={e => setPresenterName(e.target.value)} placeholder="Presenter full name" />
          </div>
          <div className="field-group">
            <label className="field-label">Date</label>
            <input className="input" type="date" value={presenterDate} onChange={e => setPresenterDate(e.target.value)} />
          </div>
        </div>
      </div>

      {err && <div className="field-error">⚠️ {err}</div>}

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={submit} disabled={!confirmed}>
          Submit Profile →
        </button>
      </div>
    </div>
  )
}
