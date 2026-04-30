import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const ORDINALS = ['', 'Primary', 'Secondary', 'Third']

function fmtSsn(v) {
  const d = v.replace(/\D/g, '').slice(0, 9)
  if (d.length <= 3) return d
  if (d.length <= 5) return `${d.slice(0,3)}-${d.slice(3)}`
  return `${d.slice(0,3)}-${d.slice(3,5)}-${d.slice(5)}`
}

function fmtPhone(v) {
  const d = v.replace(/\D/g, '').slice(0, 10)
  if (d.length <= 3) return d
  if (d.length <= 6) return `(${d.slice(0,3)}) ${d.slice(3)}`
  return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`
}

function getYears() {
  const now = new Date().getFullYear()
  const years = []
  for (let y = now; y >= now - 100; y--) years.push(y)
  return years
}

export default function GoallBeneficiaryStep({ formData, onNext, onBack, beneNum = 1 }) {
  const p = `bene${beneNum}`
  const isRequired = beneNum === 1
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  const dobStr = formData[`${p}Dob`] || ''
  const dobParts = dobStr ? dobStr.split('-') : ['', '', '']

  const [name, setName] = useState(formData[`${p}Name`] || '')
  const [dobYear, setDobYear] = useState(dobParts[0] || '')
  const [dobMonth, setDobMonth] = useState(dobParts[1] || '')
  const [dobDay, setDobDay] = useState(dobParts[2] || '')
  const [relation, setRelation] = useState(formData[`${p}Relation`] || '')
  const [address, setAddress] = useState(formData[`${p}Address`] || '')
  const [city, setCity] = useState(formData[`${p}City`] || '')
  const [stateZip, setStateZip] = useState(formData[`${p}StateZip`] || '')
  const [phone, setPhone] = useState(formData[`${p}Phone`] || '')
  const [bSsn, setBSsn] = useState(formData[`${p}Ssn`] || '')
  const [bEmail, setBEmail] = useState(formData[`${p}Email`] || '')
  const [percent, setPercent] = useState(formData[`${p}Percent`] || (beneNum === 1 ? '100' : ''))
  const [err, setErr] = useState('')

  const skip = () => onNext({})

  const submit = () => {
    if (isRequired && !name.trim()) { setErr('Please enter the beneficiary name.'); return }
    if (isRequired && !relation.trim()) { setErr('Please enter the relationship.'); return }
    if (isRequired && !percent) { setErr('Please enter the percentage payable.'); return }
    const dob = dobYear && dobMonth && dobDay ? `${dobYear}-${dobMonth}-${dobDay}` : ''
    onNext({
      [`${p}Name`]: name.trim(),
      [`${p}Dob`]: dob,
      [`${p}Relation`]: relation.trim(),
      [`${p}Address`]: address.trim(),
      [`${p}City`]: city.trim(),
      [`${p}StateZip`]: stateZip.trim(),
      [`${p}Phone`]: phone,
      [`${p}Ssn`]: bSsn,
      [`${p}Email`]: bEmail.trim(),
      [`${p}Percent`]: percent,
    })
  }

  return (
    <div className="step">
      <SectionBadge section="D" label="Beneficiaries" />
      <h2 className="step-question">
        {ORDINALS[beneNum]} Beneficiary{!isRequired ? ' — Optional' : ''}
      </h2>

      {!isRequired && (
        <p className="step-hint">
          Add a {ORDINALS[beneNum].toLowerCase()} beneficiary, or{' '}
          <button
            onClick={skip}
            style={{ background: 'none', border: 'none', color: '#c9a227', cursor: 'pointer', fontWeight: 700, fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline', padding: 0 }}
          >
            skip this step
          </button>
        </p>
      )}

      <div className="field-row two" style={{ marginBottom: 12 }}>
        <div className="field-group">
          <label className="field-label">Full Name {isRequired && '*'}</label>
          <input className="input" value={name} onChange={e => { setName(e.target.value); setErr('') }} placeholder="Beneficiary full name" autoFocus={isRequired} />
        </div>
        <div className="field-group">
          <label className="field-label">Relationship {isRequired && '*'}</label>
          <input className="input" value={relation} onChange={e => { setRelation(e.target.value); setErr('') }} placeholder="e.g. Spouse, Child, Parent" />
        </div>
      </div>

      <div style={{ marginBottom: 12 }}>
        <label className="field-label">Date of Birth</label>
        <div className="field-row three" style={{ marginTop: 6 }}>
          <div className="field-group">
            <select className="input" value={dobMonth} onChange={e => setDobMonth(e.target.value)}>
              <option value="">Month</option>
              {MONTHS.map((m, i) => (
                <option key={m} value={String(i + 1).padStart(2, '0')}>{m}</option>
              ))}
            </select>
          </div>
          <div className="field-group">
            <select className="input" value={dobDay} onChange={e => setDobDay(e.target.value)}>
              <option value="">Day</option>
              {days.map(d => (
                <option key={d} value={String(d).padStart(2, '0')}>{d}</option>
              ))}
            </select>
          </div>
          <div className="field-group">
            <select className="input" value={dobYear} onChange={e => setDobYear(e.target.value)}>
              <option value="">Year</option>
              {getYears().map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 12 }}>
        <label className="field-label">Address</label>
        <input className="input" value={address} onChange={e => setAddress(e.target.value)} placeholder="Street address" />
      </div>

      <div className="field-row two" style={{ marginBottom: 12 }}>
        <div className="field-group">
          <label className="field-label">City</label>
          <input className="input" value={city} onChange={e => setCity(e.target.value)} placeholder="City" />
        </div>
        <div className="field-group">
          <label className="field-label">State / ZIP</label>
          <input className="input" value={stateZip} onChange={e => setStateZip(e.target.value)} placeholder="CA 90210" />
        </div>
      </div>

      <div className="field-row three" style={{ marginBottom: 12 }}>
        <div className="field-group">
          <label className="field-label">Phone #</label>
          <input className="input" value={phone} onChange={e => setPhone(fmtPhone(e.target.value))} placeholder="(555) 555-5555" inputMode="tel" />
        </div>
        <div className="field-group">
          <label className="field-label">SSN</label>
          <input className="input" value={bSsn} onChange={e => setBSsn(fmtSsn(e.target.value))} placeholder="XXX-XX-XXXX" maxLength={11} inputMode="numeric" />
        </div>
        <div className="field-group">
          <label className="field-label">% Payable {isRequired && '*'}</label>
          <input className="input" type="number" value={percent} onChange={e => { setPercent(e.target.value); setErr('') }} placeholder="100" min="1" max="100" inputMode="numeric" />
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 24 }}>
        <label className="field-label">Email</label>
        <input className="input" type="email" value={bEmail} onChange={e => setBEmail(e.target.value)} placeholder="email@example.com" />
      </div>

      {err && <div className="field-error">⚠️ {err}</div>}

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        {!isRequired && (
          <button className="btn-ghost" onClick={skip} style={{ marginLeft: 'auto', marginRight: 8 }}>Skip</button>
        )}
        <button className="btn-primary" onClick={submit}>Continue →</button>
      </div>
    </div>
  )
}
