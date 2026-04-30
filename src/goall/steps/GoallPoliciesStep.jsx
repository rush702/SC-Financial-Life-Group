import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

function PolicyGroup({ label, prefix, state, onChange }) {
  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 10,
      padding: '14px 16px',
      marginBottom: 12,
    }}>
      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: 12, fontWeight: 600 }}>{label}</p>
      <div className="field-row three" style={{ marginBottom: 10 }}>
        <div className="field-group">
          <label className="field-label">Amount ($)</label>
          <input className="input" value={state[`${prefix}Amount`]} onChange={e => onChange(`${prefix}Amount`, e.target.value)} placeholder="50,000" inputMode="numeric" />
        </div>
        <div className="field-group">
          <label className="field-label">Company</label>
          <input className="input" value={state[`${prefix}Company`]} onChange={e => onChange(`${prefix}Company`, e.target.value)} placeholder="Insurer name" />
        </div>
        <div className="field-group">
          <label className="field-label">Type</label>
          <input className="input" value={state[`${prefix}Type`]} onChange={e => onChange(`${prefix}Type`, e.target.value)} placeholder="Term, Whole…" />
        </div>
      </div>
      <div className="field-row three">
        <div className="field-group">
          <label className="field-label">Date Started</label>
          <input className="input" value={state[`${prefix}StartDate`]} onChange={e => onChange(`${prefix}StartDate`, e.target.value)} placeholder="MM/YYYY" />
        </div>
        <div className="field-group">
          <label className="field-label">Policy #</label>
          <input className="input" value={state[`${prefix}Number`]} onChange={e => onChange(`${prefix}Number`, e.target.value)} placeholder="Policy number" />
        </div>
        <div className="field-group">
          <label className="field-label">Cash Value ($)</label>
          <input className="input" value={state[`${prefix}CashValue`]} onChange={e => onChange(`${prefix}CashValue`, e.target.value)} placeholder="0" inputMode="numeric" />
        </div>
      </div>
    </div>
  )
}

export default function GoallPoliciesStep({ formData, onNext, onBack }) {
  const [fields, setFields] = useState({
    policy1Amount: formData.policy1Amount,
    policy1Company: formData.policy1Company,
    policy1Type: formData.policy1Type,
    policy1StartDate: formData.policy1StartDate,
    policy1Number: formData.policy1Number,
    policy1CashValue: formData.policy1CashValue,
    policy2Amount: formData.policy2Amount,
    policy2Company: formData.policy2Company,
    policy2Type: formData.policy2Type,
    policy2StartDate: formData.policy2StartDate,
    policy2Number: formData.policy2Number,
    policy2CashValue: formData.policy2CashValue,
  })
  const [hasRetirement, setHasRetirement] = useState(formData.hasRetirement)
  const [policyNotes, setPolicyNotes] = useState(formData.policyNotes)
  const [err, setErr] = useState('')

  const setField = (key, val) => setFields(f => ({ ...f, [key]: val }))

  const submit = () => {
    if (!hasRetirement) { setErr('Please answer the retirement account question.'); return }
    onNext({ ...fields, hasRetirement, policyNotes })
  }

  return (
    <div className="step">
      <SectionBadge section="F" label="Current Policies" />
      <h2 className="step-question">Existing insurance &amp; retirement</h2>
      <p className="step-hint">Leave blank if not applicable.</p>

      <PolicyGroup label="Policy 1" prefix="policy1" state={fields} onChange={setField} />
      <PolicyGroup label="Policy 2 (optional)" prefix="policy2" state={fields} onChange={setField} />

      <div style={{ marginBottom: 20 }}>
        <p className="field-label" style={{ marginBottom: 12 }}>Do you have an IRA, 401(k), or Roth IRA?</p>
        <div className="cards-grid two">
          {[
            { v: 'Yes', icon: '📈' },
            { v: 'No', icon: '—' },
          ].map(({ v, icon }) => (
            <div
              key={v}
              className={`option-card${hasRetirement === v ? ' selected' : ''}`}
              onClick={() => { setHasRetirement(v); setErr('') }}
            >
              <span className="card-icon">{icon}</span>
              <span className="card-label">{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 24 }}>
        <label className="field-label">Notes</label>
        <textarea
          className="input"
          style={{ minHeight: 76, resize: 'vertical' }}
          value={policyNotes}
          onChange={e => setPolicyNotes(e.target.value)}
          placeholder="Any additional notes about your coverage..."
        />
      </div>

      {err && <div className="field-error">⚠️ {err}</div>}

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={submit} disabled={!hasRetirement}>Continue →</button>
      </div>
    </div>
  )
}
