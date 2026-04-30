import { useEffect } from 'react'

const FORMSPREE_ID = 'xgorpldw'

export default function GoallSuccess({ formData }) {
  const refNum = `GOALL-${Date.now().toString(36).toUpperCase()}`

  useEffect(() => {
    const payload = {
      _subject: `New GOALL Profile — ${formData.firstName} ${formData.lastName}`,
      form_type: 'GOALL Personal Profile Sheet (1.1.26)',
      reference_number: refNum,
      first_name: formData.firstName,
      last_name: formData.lastName,
      gender: formData.gender,
      date_of_birth: formData.dob,
      home_phone: formData.homePhone,
      cell_phone: formData.cellPhone,
      work_phone: formData.workPhone,
      email: formData.email,
      best_contact: formData.bestContact,
      address: `${formData.street}, ${formData.city}, ${formData.state} ${formData.zip}`,
      height: `${formData.heightFt}ft ${formData.heightIn}in`,
      weight_lbs: formData.weight,
      dl_number: formData.dlNumber,
      dl_state: formData.dlState,
      dl_exp: formData.dlExp,
      ssn: formData.ssn,
      us_citizen: formData.usCitizen,
      birth_location: formData.usCitizen === 'No'
        ? `${formData.birthCity}, ${formData.birthState}, ${formData.birthCountry}`
        : 'USA',
      employer: formData.employer,
      employment_length: formData.employmentLength,
      employer_address: `${formData.employerStreet}, ${formData.employerCity}, ${formData.employerState} ${formData.employerZip}`,
      occupation: formData.occupation,
      job_title: formData.jobTitle,
      marital_status: formData.maritalStatus,
      spouse: formData.maritalStatus === 'Married'
        ? `${formData.spouseName}, Age ${formData.spouseAge}`
        : '',
      children: formData.hasKids === 'Yes'
        ? [formData.kid1Name && `${formData.kid1Name} (age ${formData.kid1Age})`, formData.kid2Name && `${formData.kid2Name} (age ${formData.kid2Age})`].filter(Boolean).join(', ')
        : 'None',
      beneficiary_1: `${formData.bene1Name} | ${formData.bene1Relation} | DOB: ${formData.bene1Dob} | ${formData.bene1Percent}% | SSN: ${formData.bene1Ssn}`,
      beneficiary_2: formData.bene2Name
        ? `${formData.bene2Name} | ${formData.bene2Relation} | DOB: ${formData.bene2Dob} | ${formData.bene2Percent}%`
        : '',
      beneficiary_3: formData.bene3Name
        ? `${formData.bene3Name} | ${formData.bene3Relation} | DOB: ${formData.bene3Dob} | ${formData.bene3Percent}%`
        : '',
      clinic: formData.clinicName
        ? `${formData.clinicName} | ${formData.clinicPhone} | ${formData.clinicAddress}`
        : '',
      last_seen: formData.lastSeenDate
        ? `${formData.lastSeenDate} — ${formData.lastSeenReason}`
        : '',
      medication_1: formData.med1Name
        ? `${formData.med1Name} | Why: ${formData.med1Why} | Dosage: ${formData.med1Dosage}`
        : '',
      medication_2: formData.med2Name
        ? `${formData.med2Name} | Why: ${formData.med2Why} | Dosage: ${formData.med2Dosage}`
        : '',
      tobacco_use: formData.tobacco,
      policy_1: formData.policy1Company
        ? `$${formData.policy1Amount} | ${formData.policy1Company} | ${formData.policy1Type} | Started: ${formData.policy1StartDate} | #${formData.policy1Number} | CV: $${formData.policy1CashValue}`
        : '',
      policy_2: formData.policy2Company
        ? `$${formData.policy2Amount} | ${formData.policy2Company} | ${formData.policy2Type} | Started: ${formData.policy2StartDate} | #${formData.policy2Number} | CV: $${formData.policy2CashValue}`
        : '',
      has_ira_401k: formData.hasRetirement,
      policy_notes: formData.policyNotes,
      premium_amount: formData.premiumAmount,
      premium_day_of_month: formData.premiumDay,
      group_bill_number: formData.groupBill,
      bank_name: formData.bankName,
      routing_number: formData.routingNumber,
      account_number: formData.accountNumber,
      first_year_lump_sum: formData.lumpSum,
      exchange_1035: formData.exchange1035,
      new_policy_type: formData.newPolicyType,
      new_policy_company: formData.newPolicyCompany,
      face_amount: formData.faceAmount,
      policy_option: formData.policyOption,
      illustration_number: formData.illustrationNumber,
      client_signature: formData.clientSignName,
      client_signature_date: formData.clientSignDate,
      goall_presenter: formData.presenterName,
      presenter_date: formData.presenterDate,
    }

    fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    }).catch(() => {})

    import('canvas-confetti').then(m => {
      const confetti = m.default
      const fire = (opts) => confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, ...opts })
      setTimeout(() => fire({ colors: ['#86710D', '#c9a227', '#d4b86a'] }), 100)
      setTimeout(() => fire({ colors: ['#f59e0b', '#86710D', '#c9a227'], angle: 60 }), 400)
      setTimeout(() => fire({ colors: ['#d4b86a', '#86710D', '#c9a227'], angle: 120 }), 700)
    })
  }, [])

  return (
    <div className="app" style={{ justifyContent: 'center' }}>
      <div className="success-wrap">
        <div className="success-icon">🎯</div>
        <h1 className="success-title">
          Profile Complete,<br />{formData.firstName}!
        </h1>
        <p className="success-sub">
          Your personal profile has been submitted to GOALL Agency.
          Your benefits partner will review your information and reach out shortly.
        </p>
        <div className="success-ref-box">
          <div className="success-ref-label">Profile Reference Number</div>
          <div className="success-ref-num">{refNum}</div>
        </div>
        <div className="next-steps">
          <div className="next-step">
            <span className="next-step-icon">📞</span>
            <div>
              <strong>Benefits Partner Contact</strong>
              <span>Your benefits partner will call {formData.cellPhone || formData.homePhone} to review your profile and discuss your options.</span>
            </div>
          </div>
          <div className="next-step">
            <span className="next-step-icon">📋</span>
            <div>
              <strong>Profile Review</strong>
              <span>We'll analyze your information and identify the best coverage options for your goals.</span>
            </div>
          </div>
          <div className="next-step">
            <span className="next-step-icon">📧</span>
            <div>
              <strong>Summary Email</strong>
              <span>A copy of your profile summary will be sent to {formData.email}.</span>
            </div>
          </div>
          <div className="next-step">
            <span className="next-step-icon">🛡️</span>
            <div>
              <strong>Coverage Recommendation</strong>
              <span>Your personalized plan will be ready within 1–2 business days.</span>
            </div>
          </div>
        </div>
        <p style={{ marginTop: 24, fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center' }}>
          © 2026 GOALL Agency. All rights reserved.
        </p>
      </div>
    </div>
  )
}
