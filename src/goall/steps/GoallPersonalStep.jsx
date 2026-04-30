import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const GENDERS = [
  { value: 'Male', icon: '♂️' },
  { value: 'Female', icon: '♀️' },
]

function getYears() {
  const now = new Date().getFullYear()
  const years = []
  for (let y = now - 18; y >= now - 100; y--) years.push(y)
  return years
}

export default function GoallPersonalStep({ formData, onNext, onBack }) {
  const parts = formData.dob ? formData.dob.split('-') : ['', '', '']
  const [firstName, setFirstName] = useState(formData.firstName)
  const [lastName, setLastName] = useState(formData.lastName)
  const [gender, setGender] = useState(formData.gender)
  const [month, setMonth] = useState(parts[1] || '')
  const [day, setDay] = useState(parts[2] || '')
  const [year, setYear] = useState(parts[0] || '')
  const [err, setErr] = useState('')

  const submit = () => {
    if (!firstName.trim() || !lastName.trim()) { setErr('Please enter your full name.'); return }
    if (!gender) { setErr('Please select your gender.'); return }
    if (!month || !day || !year) { setErr('Please complete your date of birth.'); return }
    const dob = `${year}-${month}-${day}`
    onNext({ firstName: firstName.trim(), lastName: lastName.trim(), gender, dob })
  }

  const days = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="step">
      <SectionBadge section="A" label="Personal Information" />
      <h2 className="step-question">What's your name?</h2>

      <div className="field-row two" style={{ marginBottom: 24 }}>
        <div className="field-group">
          <label className="field-label">First Name</label>
          <input
            className="input"
            value={firstName}
            onChange={e => { setFirstName(e.target.value); setErr('') }}
            placeholder="First name"
            autoFocus
          />
        </div>
        <div className="field-group">
          <label className="field-label">Last Name</label>
          <input
            className="input"
            value={lastName}
            onChange={e => { setLastName(e.target.value); setErr('') }}
            placeholder="Last name"
          />
        </div>
      </div>

      <h2 className="step-question" style={{ fontSize: 'clamp(1.2rem,3vw,1.6rem)', marginBottom: 8 }}>
        Biological sex
      </h2>
      <div className="cards-grid two" style={{ marginBottom: 28 }}>
        {GENDERS.map(g => (
          <div
            key={g.value}
            className={`option-card${gender === g.value ? ' selected' : ''}`}
            onClick={() => { setGender(g.value); setErr('') }}
          >
            <span className="card-icon">{g.icon}</span>
            <span className="card-label">{g.value}</span>
          </div>
        ))}
      </div>

      <h2 className="step-question" style={{ fontSize: 'clamp(1.2rem,3vw,1.6rem)', marginBottom: 8 }}>
        Date of birth
      </h2>
      <div className="field-row three" style={{ marginBottom: 24 }}>
        <div className="field-group">
          <label className="field-label">Month</label>
          <select className="input" value={month} onChange={e => { setMonth(e.target.value); setErr('') }}>
            <option value="">Month</option>
            {MONTHS.map((m, i) => (
              <option key={m} value={String(i + 1).padStart(2, '0')}>{m}</option>
            ))}
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">Day</label>
          <select className="input" value={day} onChange={e => { setDay(e.target.value); setErr('') }}>
            <option value="">Day</option>
            {days.map(d => (
              <option key={d} value={String(d).padStart(2, '0')}>{d}</option>
            ))}
          </select>
        </div>
        <div className="field-group">
          <label className="field-label">Year</label>
          <select className="input" value={year} onChange={e => { setYear(e.target.value); setErr('') }}>
            <option value="">Year</option>
            {getYears().map(y => <option key={y} value={y}>{y}</option>)}
          </select>
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
