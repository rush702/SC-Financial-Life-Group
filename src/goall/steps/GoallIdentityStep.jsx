import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

function fmtSsn(v) {
  const d = v.replace(/\D/g, '').slice(0, 9)
  if (d.length <= 3) return d
  if (d.length <= 5) return `${d.slice(0,3)}-${d.slice(3)}`
  return `${d.slice(0,3)}-${d.slice(3,5)}-${d.slice(5)}`
}

export default function GoallIdentityStep({ formData, onNext, onBack }) {
  const [heightFt, setHeightFt] = useState(formData.heightFt)
  const [heightIn, setHeightIn] = useState(formData.heightIn)
  const [weight, setWeight] = useState(formData.weight)
  const [dlNumber, setDlNumber] = useState(formData.dlNumber)
  const [dlState, setDlState] = useState(formData.dlState)
  const [dlExp, setDlExp] = useState(formData.dlExp)
  const [ssn, setSsn] = useState(formData.ssn)
  const [usCitizen, setUsCitizen] = useState(formData.usCitizen || 'Yes')
  const [birthCountry, setBirthCountry] = useState(formData.birthCountry)
  const [birthState, setBirthState] = useState(formData.birthState)
  const [birthCity, setBirthCity] = useState(formData.birthCity)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!heightFt || !weight) { setErr('Please enter your height and weight.'); return }
    const ssnDigits = ssn.replace(/\D/g, '')
    if (!ssnDigits || ssnDigits.length !== 9) { setErr('Please enter a valid 9-digit SSN.'); return }
    onNext({ heightFt, heightIn, weight, dlNumber, dlState, dlExp, ssn, usCitizen, birthCountry, birthState, birthCity })
  }

  const ftOptions = [4, 5, 6, 7]
  const inOptions = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="step">
      <SectionBadge section="A" label="Personal Information" />
      <h2 className="step-question">Physical &amp; identification</h2>

      <div className="field-row three" style={{ marginBottom: 20 }}>
        <div className="field-group">
          <label className="field-label">Height (ft)</label>
          <select className="input" value={heightFt} onChange={e => { setHeightFt(e.target.value); setErr('') }}>
            <option value="">Ft</option>
            {ftOptions.map(f => <option key={f} value={f}>{f} ft</option>)}
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">Height (in)</label>
          <select className="input" value={heightIn} onChange={e => setHeightIn(e.target.value)}>
            <option value="">In</option>
            {inOptions.map(i => <option key={i} value={i}>{i} in</option>)}
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">Weight (lbs)</label>
          <input className="input" type="number" value={weight} onChange={e => { setWeight(e.target.value); setErr('') }} placeholder="lbs" min="50" max="600" inputMode="numeric" />
        </div>
      </div>

      <div className="field-row three" style={{ marginBottom: 20 }}>
        <div className="field-group">
          <label className="field-label">Driver's License #</label>
          <input className="input" value={dlNumber} onChange={e => setDlNumber(e.target.value.toUpperCase())} placeholder="DL12345678" />
        </div>
        <div className="field-group">
          <label className="field-label">DL State</label>
          <select className="input" value={dlState} onChange={e => setDlState(e.target.value)}>
            <option value="">State</option>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">DL Exp. Date</label>
          <input className="input" type="date" value={dlExp} onChange={e => setDlExp(e.target.value)} />
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 20 }}>
        <label className="field-label">Social Security Number</label>
        <input
          className="input"
          value={ssn}
          onChange={e => { setSsn(fmtSsn(e.target.value)); setErr('') }}
          placeholder="XXX-XX-XXXX"
          maxLength={11}
          inputMode="numeric"
        />
      </div>

      <div style={{ marginBottom: 20 }}>
        <p className="field-label" style={{ marginBottom: 10 }}>U.S. Citizen?</p>
        <div className="cards-grid two">
          {['Yes', 'No'].map(opt => (
            <div
              key={opt}
              className={`option-card${usCitizen === opt ? ' selected' : ''}`}
              onClick={() => { setUsCitizen(opt); setErr('') }}
            >
              <span className="card-label">{opt}</span>
            </div>
          ))}
        </div>
      </div>

      {usCitizen === 'No' && (
        <div className="field-row three" style={{ marginBottom: 20 }}>
          <div className="field-group">
            <label className="field-label">Birth Country</label>
            <input className="input" value={birthCountry} onChange={e => setBirthCountry(e.target.value)} placeholder="Country" />
          </div>
          <div className="field-group">
            <label className="field-label">Birth State / Province</label>
            <input className="input" value={birthState} onChange={e => setBirthState(e.target.value)} placeholder="State/Province" />
          </div>
          <div className="field-group">
            <label className="field-label">Birth City</label>
            <input className="input" value={birthCity} onChange={e => setBirthCity(e.target.value)} placeholder="City" />
          </div>
        </div>
      )}

      {err && <div className="field-error">⚠️ {err}</div>}

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={submit}>Continue →</button>
      </div>
    </div>
  )
}
