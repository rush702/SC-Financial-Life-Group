import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

const US_STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY','DC']

export default function GoallEmployerStep({ formData, onNext, onBack }) {
  const [employer, setEmployer] = useState(formData.employer)
  const [employmentLength, setEmploymentLength] = useState(formData.employmentLength)
  const [employerStreet, setEmployerStreet] = useState(formData.employerStreet)
  const [employerCity, setEmployerCity] = useState(formData.employerCity)
  const [employerState, setEmployerState] = useState(formData.employerState)
  const [employerZip, setEmployerZip] = useState(formData.employerZip)
  const [occupation, setOccupation] = useState(formData.occupation)
  const [jobTitle, setJobTitle] = useState(formData.jobTitle)
  const [err, setErr] = useState('')

  const submit = () => {
    if (!employer.trim() || !occupation.trim()) {
      setErr('Please enter your employer and occupation.'); return
    }
    onNext({ employer: employer.trim(), employmentLength, employerStreet, employerCity, employerState, employerZip, occupation: occupation.trim(), jobTitle: jobTitle.trim() })
  }

  return (
    <div className="step">
      <SectionBadge section="B" label="Employment" />
      <h2 className="step-question">Where do you work?</h2>

      <div className="field-row two" style={{ marginBottom: 12 }}>
        <div className="field-group">
          <label className="field-label">Employer Name *</label>
          <input className="input" value={employer} onChange={e => { setEmployer(e.target.value); setErr('') }} placeholder="Company name" autoFocus />
        </div>
        <div className="field-group">
          <label className="field-label">Length of Employment</label>
          <input className="input" value={employmentLength} onChange={e => setEmploymentLength(e.target.value)} placeholder="e.g. 3 years" />
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 12 }}>
        <label className="field-label">Employer Street Address</label>
        <input className="input" value={employerStreet} onChange={e => setEmployerStreet(e.target.value)} placeholder="123 Business Ave" />
      </div>

      <div className="field-row three" style={{ marginBottom: 20 }}>
        <div className="field-group">
          <label className="field-label">City</label>
          <input className="input" value={employerCity} onChange={e => setEmployerCity(e.target.value)} placeholder="City" />
        </div>
        <div className="field-group">
          <label className="field-label">State</label>
          <select className="input" value={employerState} onChange={e => setEmployerState(e.target.value)}>
            <option value="">State</option>
            {US_STATES.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">ZIP</label>
          <input className="input" value={employerZip} onChange={e => setEmployerZip(e.target.value.replace(/\D/g,'').slice(0,5))} placeholder="00000" inputMode="numeric" />
        </div>
      </div>

      <div className="field-row two" style={{ marginBottom: 24 }}>
        <div className="field-group">
          <label className="field-label">Occupation *</label>
          <input className="input" value={occupation} onChange={e => { setOccupation(e.target.value); setErr('') }} placeholder="e.g. Sales Manager" />
        </div>
        <div className="field-group">
          <label className="field-label">Title</label>
          <input className="input" value={jobTitle} onChange={e => setJobTitle(e.target.value)} placeholder="e.g. Director" />
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
