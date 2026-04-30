import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']
const CONTACT_METHODS = ['Home','Cell','Work','Email']

function fmtPhone(v) {
  const d = v.replace(/\D/g, '').slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `(${d.slice(0,3)}) ${d.slice(3)}`
  return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`
}

export default function GoallContactStep({ formData, onNext, onBack }) {
  const [street, setStreet] = useState(formData.street)
  const [city, setCity] = useState(formData.city)
  const [state, setState] = useState(formData.state)
  const [zip, setZip] = useState(formData.zip)
  const [homePhone, setHomePhone] = useState(formData.homePhone)
  const [cellPhone, setCellPhone] = useState(formData.cellPhone)
  const [workPhone, setWorkPhone] = useState(formData.workPhone)
  const [email, setEmail] = useState(formData.email)
  const [bestContact, setBestContact] = useState(formData.bestContact || 'Cell')
  const [err, setErr] = useState('')

  const submit = () => {
    if (!street.trim() || !city.trim() || !state || !zip.trim()) {
      setErr('Please complete your address.'); return
    }
    if (!cellPhone && !homePhone) {
      setErr('Please enter at least one phone number.'); return
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setErr('Please enter a valid email address.'); return
    }
    onNext({ street: street.trim(), city: city.trim(), state, zip: zip.trim(), homePhone, cellPhone, workPhone, email: email.trim(), bestContact })
  }

  return (
    <div className="step">
      <SectionBadge section="A" label="Personal Information" />
      <h2 className="step-question">Address &amp; contact info</h2>

      <div className="field-group" style={{ marginBottom: 12 }}>
        <label className="field-label">Street Address</label>
        <input className="input" value={street} onChange={e => { setStreet(e.target.value); setErr('') }} placeholder="123 Main Street" autoFocus />
      </div>

      <div className="field-row three" style={{ marginBottom: 20 }}>
        <div className="field-group" style={{ gridColumn: 'span 1' }}>
          <label className="field-label">City</label>
          <input className="input" value={city} onChange={e => { setCity(e.target.value); setErr('') }} placeholder="City" />
        </div>
        <div className="field-group">
          <label className="field-label">State</label>
          <select className="input" value={state} onChange={e => { setState(e.target.value); setErr('') }}>
            <option value="">State</option>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">ZIP</label>
          <input className="input" value={zip} onChange={e => { setZip(e.target.value.replace(/\D/g,'').slice(0,5)); setErr('') }} placeholder="00000" inputMode="numeric" />
        </div>
      </div>

      <div className="field-row three" style={{ marginBottom: 12 }}>
        <div className="field-group">
          <label className="field-label">Home Phone</label>
          <input className="input" value={homePhone} onChange={e => { setHomePhone(fmtPhone(e.target.value)); setErr('') }} placeholder="(555) 555-5555" inputMode="tel" />
        </div>
        <div className="field-group">
          <label className="field-label">Cell Phone</label>
          <input className="input" value={cellPhone} onChange={e => { setCellPhone(fmtPhone(e.target.value)); setErr('') }} placeholder="(555) 555-5555" inputMode="tel" />
        </div>
        <div className="field-group">
          <label className="field-label">Work Phone</label>
          <input className="input" value={workPhone} onChange={e => { setWorkPhone(fmtPhone(e.target.value)); setErr('') }} placeholder="(555) 555-5555" inputMode="tel" />
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 20 }}>
        <label className="field-label">Email Address</label>
        <input className="input" type="email" value={email} onChange={e => { setEmail(e.target.value); setErr('') }} placeholder="you@example.com" />
      </div>

      <div style={{ marginBottom: 24 }}>
        <p className="field-label" style={{ marginBottom: 12 }}>Best way to contact</p>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {CONTACT_METHODS.map(m => (
            <button
              key={m}
              type="button"
              onClick={() => setBestContact(m)}
              style={{
                padding: '8px 20px',
                borderRadius: 8,
                border: `1.5px solid ${bestContact === m ? 'var(--primary)' : 'rgba(255,255,255,0.15)'}`,
                background: bestContact === m ? 'rgba(134,113,13,0.2)' : 'rgba(255,255,255,0.04)',
                color: bestContact === m ? 'var(--primary)' : 'var(--text-muted)',
                fontFamily: 'inherit',
                fontWeight: 600,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >{m}</button>
          ))}
        </div>
      </div>

      {err && <div className="field-error">⚠️ {err}</div>}

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={submit}>Continue →</button>
      </div>
    </div>
  )
}
