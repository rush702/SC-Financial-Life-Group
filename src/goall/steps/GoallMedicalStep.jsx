import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

function fmtPhone(v) {
  const d = v.replace(/\D/g, '').slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `(${d.slice(0,3)}) ${d.slice(3)}`
  return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`
}

export default function GoallMedicalStep({ formData, onNext, onBack }) {
  const [clinicName, setClinicName] = useState(formData.clinicName)
  const [clinicPhone, setClinicPhone] = useState(formData.clinicPhone)
  const [clinicAddress, setClinicAddress] = useState(formData.clinicAddress)
  const [lastSeenDate, setLastSeenDate] = useState(formData.lastSeenDate)
  const [lastSeenReason, setLastSeenReason] = useState(formData.lastSeenReason)
  const [med1Name, setMed1Name] = useState(formData.med1Name)
  const [med1Why, setMed1Why] = useState(formData.med1Why)
  const [med1Dosage, setMed1Dosage] = useState(formData.med1Dosage)
  const [med2Name, setMed2Name] = useState(formData.med2Name)
  const [med2Why, setMed2Why] = useState(formData.med2Why)
  const [med2Dosage, setMed2Dosage] = useState(formData.med2Dosage)
  const [tobacco, setTobacco] = useState(formData.tobacco)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!tobacco) { setErr('Please answer the tobacco/e-cig question.'); return }
    onNext({ clinicName, clinicPhone, clinicAddress, lastSeenDate, lastSeenReason, med1Name, med1Why, med1Dosage, med2Name, med2Why, med2Dosage, tobacco })
  }

  return (
    <div className="step">
      <SectionBadge section="E" label="Medical" />
      <h2 className="step-question">Medical information</h2>
      <p className="step-hint">Leave fields blank if not applicable.</p>

      <div className="field-row two" style={{ marginBottom: 12 }}>
        <div className="field-group">
          <label className="field-label">Clinic / Doctor's Office</label>
          <input className="input" value={clinicName} onChange={e => setClinicName(e.target.value)} placeholder="Clinic or office name" autoFocus />
        </div>
        <div className="field-group">
          <label className="field-label">Phone #</label>
          <input className="input" value={clinicPhone} onChange={e => setClinicPhone(fmtPhone(e.target.value))} placeholder="(555) 555-5555" inputMode="tel" />
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 12 }}>
        <label className="field-label">Clinic Address</label>
        <input className="input" value={clinicAddress} onChange={e => setClinicAddress(e.target.value)} placeholder="Clinic street address" />
      </div>

      <div className="field-row two" style={{ marginBottom: 24 }}>
        <div className="field-group">
          <label className="field-label">Date Last Seen</label>
          <input className="input" type="date" value={lastSeenDate} onChange={e => setLastSeenDate(e.target.value)} />
        </div>
        <div className="field-group">
          <label className="field-label">Reason for Visit</label>
          <input className="input" value={lastSeenReason} onChange={e => setLastSeenReason(e.target.value)} placeholder="Reason" />
        </div>
      </div>

      <p className="step-hint" style={{ marginBottom: 12, fontWeight: 600 }}>Current Medications</p>

      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 10,
        padding: '14px 16px',
        marginBottom: 12,
      }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 10, fontWeight: 600 }}>Medication 1</p>
        <div className="field-row three">
          <div className="field-group">
            <label className="field-label">Name</label>
            <input className="input" value={med1Name} onChange={e => setMed1Name(e.target.value)} placeholder="Medication name" />
          </div>
          <div className="field-group">
            <label className="field-label">Why Needed</label>
            <input className="input" value={med1Why} onChange={e => setMed1Why(e.target.value)} placeholder="Condition/reason" />
          </div>
          <div className="field-group">
            <label className="field-label">Dosage</label>
            <input className="input" value={med1Dosage} onChange={e => setMed1Dosage(e.target.value)} placeholder="e.g. 10mg" />
          </div>
        </div>
      </div>

      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 10,
        padding: '14px 16px',
        marginBottom: 24,
      }}>
        <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 10, fontWeight: 600 }}>Medication 2 (optional)</p>
        <div className="field-row three">
          <div className="field-group">
            <label className="field-label">Name</label>
            <input className="input" value={med2Name} onChange={e => setMed2Name(e.target.value)} placeholder="Medication name" />
          </div>
          <div className="field-group">
            <label className="field-label">Why Needed</label>
            <input className="input" value={med2Why} onChange={e => setMed2Why(e.target.value)} placeholder="Condition/reason" />
          </div>
          <div className="field-group">
            <label className="field-label">Dosage</label>
            <input className="input" value={med2Dosage} onChange={e => setMed2Dosage(e.target.value)} placeholder="e.g. 20mg" />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 24 }}>
        <p className="field-label" style={{ marginBottom: 12 }}>Do you Smoke / Chew / Use E-cigarettes?</p>
        <div className="cards-grid two">
          {[
            { v: 'Yes', icon: '🚬' },
            { v: 'No', icon: '✅' },
          ].map(({ v, icon }) => (
            <div
              key={v}
              className={`option-card${tobacco === v ? ' selected' : ''}`}
              onClick={() => { setTobacco(v); setErr('') }}
            >
              <span className="card-icon">{icon}</span>
              <span className="card-label">{v}</span>
            </div>
          ))}
        </div>
      </div>

      {err && <div className="field-error">⚠️ {err}</div>}

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={submit} disabled={!tobacco}>Continue →</button>
      </div>
    </div>
  )
}
