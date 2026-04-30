import { useState } from 'react'
import SectionBadge from '../../components/SectionBadge'

export default function GoallPremiumStep({ formData, onNext, onBack }) {
  const [premiumAmount, setPremiumAmount] = useState(formData.premiumAmount)
  const [premiumDay, setPremiumDay] = useState(formData.premiumDay)
  const [groupBill, setGroupBill] = useState(formData.groupBill)
  const [bankName, setBankName] = useState(formData.bankName)
  const [routingNumber, setRoutingNumber] = useState(formData.routingNumber)
  const [accountNumber, setAccountNumber] = useState(formData.accountNumber)
  const [lumpSum, setLumpSum] = useState(formData.lumpSum)
  const [exchange1035, setExchange1035] = useState(formData.exchange1035)
  const [newPolicyType, setNewPolicyType] = useState(formData.newPolicyType)
  const [newPolicyCompany, setNewPolicyCompany] = useState(formData.newPolicyCompany)
  const [faceAmount, setFaceAmount] = useState(formData.faceAmount)
  const [policyOption, setPolicyOption] = useState(formData.policyOption)
  const [illustrationNumber, setIllustrationNumber] = useState(formData.illustrationNumber)

  const submit = () => {
    onNext({ premiumAmount, premiumDay, groupBill, bankName, routingNumber, accountNumber, lumpSum, exchange1035, newPolicyType, newPolicyCompany, faceAmount, policyOption, illustrationNumber })
  }

  return (
    <div className="step">
      <SectionBadge section="G" label="Premium Options" />
      <h2 className="step-question">Premium &amp; payment details</h2>
      <div style={{
        background: 'rgba(134,113,13,0.15)',
        border: '1px solid rgba(201,162,39,0.3)',
        borderRadius: 10,
        padding: '10px 16px',
        marginBottom: 24,
        fontSize: '0.85rem',
        color: '#c9a227',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        ⚙️ <span>To be completed with the assistance of your benefits partner.</span>
      </div>

      <div className="field-row three" style={{ marginBottom: 14 }}>
        <div className="field-group">
          <label className="field-label">Premium Amount ($)</label>
          <input className="input" value={premiumAmount} onChange={e => setPremiumAmount(e.target.value)} placeholder="0.00" inputMode="decimal" />
        </div>
        <div className="field-group">
          <label className="field-label">Day of Month</label>
          <input className="input" type="number" value={premiumDay} onChange={e => setPremiumDay(e.target.value)} placeholder="1–28" min="1" max="28" inputMode="numeric" />
        </div>
        <div className="field-group">
          <label className="field-label">Group Bill No.</label>
          <input className="input" value={groupBill} onChange={e => setGroupBill(e.target.value)} placeholder="If applicable" />
        </div>
      </div>

      <div className="field-row three" style={{ marginBottom: 14 }}>
        <div className="field-group">
          <label className="field-label">Bank Name</label>
          <input className="input" value={bankName} onChange={e => setBankName(e.target.value)} placeholder="Bank name" />
        </div>
        <div className="field-group">
          <label className="field-label">Routing #</label>
          <input className="input" value={routingNumber} onChange={e => setRoutingNumber(e.target.value.replace(/\D/g,'').slice(0,9))} placeholder="000000000" inputMode="numeric" maxLength={9} />
        </div>
        <div className="field-group">
          <label className="field-label">Account #</label>
          <input className="input" value={accountNumber} onChange={e => setAccountNumber(e.target.value.replace(/\D/g,''))} placeholder="Account number" inputMode="numeric" />
        </div>
      </div>

      <div className="field-row two" style={{ marginBottom: 14 }}>
        <div className="field-group">
          <label className="field-label">First Year Lump Sum ($)</label>
          <input className="input" value={lumpSum} onChange={e => setLumpSum(e.target.value)} placeholder="0.00" inputMode="decimal" />
        </div>
        <div className="field-group">
          <label className="field-label">1035 Exchange Amount ($)</label>
          <input className="input" value={exchange1035} onChange={e => setExchange1035(e.target.value)} placeholder="0.00" inputMode="decimal" />
        </div>
      </div>

      <div className="field-row three" style={{ marginBottom: 20 }}>
        <div className="field-group">
          <label className="field-label">Policy Type</label>
          <input className="input" value={newPolicyType} onChange={e => setNewPolicyType(e.target.value)} placeholder="Term, Whole, UL…" />
        </div>
        <div className="field-group">
          <label className="field-label">Company</label>
          <input className="input" value={newPolicyCompany} onChange={e => setNewPolicyCompany(e.target.value)} placeholder="Insurance company" />
        </div>
        <div className="field-group">
          <label className="field-label">Face Amount ($)</label>
          <input className="input" value={faceAmount} onChange={e => setFaceAmount(e.target.value)} placeholder="0" inputMode="numeric" />
        </div>
      </div>

      <div style={{ marginBottom: 20 }}>
        <p className="field-label" style={{ marginBottom: 12 }}>Option</p>
        <div className="cards-grid two">
          {['A', 'B'].map(opt => (
            <div
              key={opt}
              className={`option-card${policyOption === opt ? ' selected' : ''}`}
              onClick={() => setPolicyOption(opt)}
            >
              <span className="card-label" style={{ fontSize: '1.3rem' }}>Option {opt}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="field-group" style={{ marginBottom: 24 }}>
        <label className="field-label">Illustration #</label>
        <input className="input" value={illustrationNumber} onChange={e => setIllustrationNumber(e.target.value)} placeholder="Illustration number" />
      </div>

      <div className="step-actions">
        <button className="btn-ghost" onClick={onBack}>← Back</button>
        <button className="btn-primary" onClick={submit}>Continue →</button>
      </div>
    </div>
  )
}
