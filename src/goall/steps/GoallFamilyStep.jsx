import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

export default function GoallFamilyStep({ formData, onNext, onBack }) {
  const [maritalStatus, setMaritalStatus] = useState(formData.maritalStatus)
  const [spouseName, setSpouseName] = useState(formData.spouseName)
  const [spouseAge, setSpouseAge] = useState(formData.spouseAge)
  const [hasKids, setHasKids] = useState(formData.hasKids)
  const [kid1Name, setKid1Name] = useState(formData.kid1Name)
  const [kid1Age, setKid1Age] = useState(formData.kid1Age)
  const [kid2Name, setKid2Name] = useState(formData.kid2Name)
  const [kid2Age, setKid2Age] = useState(formData.kid2Age)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!maritalStatus) { setErr('Please select your marital status.'); return }
    if (!hasKids) { setErr('Please indicate if you have children.'); return }
    onNext({ maritalStatus, spouseName, spouseAge, hasKids, kid1Name, kid1Age, kid2Name, kid2Age })
  }

  return (
    <div className="step">
      <SectionBadge section="C" label="Family" />
      <h2 className="step-question">Tell us about your family.</h2>

      <div style={{ marginBottom: 28 }}>
        <p className="field-label" style={{ marginBottom: 12 }}>Marital status</p>
        <div className="cards-grid two">
          {[
            { v: 'Single', icon: '🧑' },
            { v: 'Married', icon: '💑' },
          ].map(({ v, icon }) => (
            <div
              key={v}
              className={`option-card${maritalStatus === v ? ' selected' : ''}`}
              onClick={() => { setMaritalStatus(v); setErr('') }}
            >
              <span className="card-icon">{icon}</span>
              <span className="card-label">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {maritalStatus === 'Married' && (
        <div className="field-row two" style={{ marginBottom: 24 }}>
          <div className="field-group">
            <label className="field-label">Spouse Name</label>
            <input className="input" value={spouseName} onChange={e => setSpouseName(e.target.value)} placeholder="Full name" />
          </div>
          <div className="field-group">
            <label className="field-label">Spouse Age</label>
            <input className="input" type="number" value={spouseAge} onChange={e => setSpouseAge(e.target.value)} placeholder="Age" min="18" max="110" inputMode="numeric" />
          </div>
        </div>
      )}

      <div style={{ marginBottom: 24 }}>
        <p className="field-label" style={{ marginBottom: 12 }}>Do you have children?</p>
        <div className="cards-grid two">
          {[
            { v: 'Yes', icon: '👨‍👩‍👧' },
            { v: 'No', icon: '—' },
          ].map(({ v, icon }) => (
            <div
              key={v}
              className={`option-card${hasKids === v ? ' selected' : ''}`}
              onClick={() => { setHasKids(v); setErr('') }}
            >
              <span className="card-icon">{icon}</span>
              <span className="card-label">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {hasKids === 'Yes' && (
        <>
          <div className="field-row two" style={{ marginBottom: 10 }}>
            <div className="field-group">
              <label className="field-label">Child 1 — Name</label>
              <input className="input" value={kid1Name} onChange={e => setKid1Name(e.target.value)} placeholder="Name" />
            </div>
            <div className="field-group">
              <label className="field-label">Age</label>
              <input className="input" type="number" value={kid1Age} onChange={e => setKid1Age(e.target.value)} placeholder="Age" min="0" max="40" inputMode="numeric" />
            </div>
          </div>
          <div className="field-row two" style={{ marginBottom: 24 }}>
            <div className="field-group">
              <label className="field-label">Child 2 — Name (optional)</label>
              <input className="input" value={kid2Name} onChange={e => setKid2Name(e.target.value)} placeholder="Name" />
            </div>
            <div className="field-group">
              <label className="field-label">Age</label>
              <input className="input" type="number" value={kid2Age} onChange={e => setKid2Age(e.target.value)} placeholder="Age" min="0" max="40" inputMode="numeric" />
            </div>
          </div>
        </>
      )}

      {err && <div className="field-error">⚠️ {err}</div>}

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={submit} disabled={!maritalStatus || !hasKids}>Continue →</button>
      </div>
    </div>
  )
}
