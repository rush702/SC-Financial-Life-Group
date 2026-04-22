import { useEffect } from 'react'

// TODO: Replace 'YOUR_FORM_ID' with your actual Formspree form ID.
// Steps: 1) Go to https://formspree.io and sign up with rush702@gmail.com
//         2) Create a new form → copy the form ID (e.g. "xpwzgkjd")
//         3) Replace 'YOUR_FORM_ID' below with that ID, then commit.
const FORMSPREE_ID = 'YOUR_FORM_ID'

export default function Success({ formData }) {
    const refNum = `SCF-${Date.now().toString(36).toUpperCase()}`

  useEffect(() => {
        // Submit form data to Formspree so results arrive at rush702@gmail.com
                if (FORMSPREE_ID !== 'YOUR_FORM_ID') {
                        const payload = {
                                  _subject: `New Insurance Application – ${formData.firstName} ${formData.lastName}`,
                                  reference_number: refNum,
                                  // --- About You ---
                                  first_name: formData.firstName,
                                  last_name: formData.lastName,
                                  date_of_birth: formData.dob,
                                  gender: formData.gender,
                                  phone: formData.phone,
                                  email: formData.email,
                                  address: `${formData.street}, ${formData.city}, ${formData.state} ${formData.zip}`,
                                  citizenship: formData.citizenship,
                                  occupation: formData.occupation,
                                  annual_income: formData.income,
                                  // --- Coverage ---
                                  policy_type: formData.policyType,
                                  term_length: formData.termLength,
                                  coverage_amount: formData.coverageAmount,
                                  riders: formData.riders.join(', '),
                                  // --- Health ---
                                  height: `${formData.heightFt}ft ${formData.heightIn}in`,
                                  weight_lbs: formData.weight,
                                  tobacco_use: formData.tobacco,
                                  drinks_per_week: formData.drinksPerWeek,
                                  medications: formData.medications,
                                  medications_list: formData.medicationsList,
                                  medical_conditions: formData.conditions.join(', '),
                                  hospitalized: formData.hospitalized,
                                  hospital_details: formData.hospitalDetails,
                                  family_history: formData.familyHistory.join(', '),
                                  // --- Lifestyle ---
                                  hazardous_activities: formData.hazardous.join(', '),
                                  driving_violations: formData.drivingFlags.join(', '),
                                  felony: formData.felony,
                                  // --- Existing Coverage ---
                                  existing_insurance: formData.hasExistingIns,
                                  existing_amount: formData.existingAmount,
                                  existing_company: formData.existingCompany,
                                  previously_declined: formData.prevDeclined,
                                  // --- Beneficiaries ---
                                  beneficiary_name: formData.beneName,
                                  beneficiary_relation: formData.beneRelation,
                                  beneficiary_dob: formData.beneDob,
                                  beneficiary_percent: formData.benePercent,
                                  contingent_name: formData.contingentName,
                                  contingent_relation: formData.contingentRelation,
                                  // --- E-Signature ---
                                  esign_name: formData.esignName,
                        }

          fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify(payload),
          }).catch(() => {
                    // Silently fail – user experience is not affected
          })
                }

                // Confetti
                import('canvas-confetti').then(m => {
                        const confetti = m.default
                        const fire = (opts) => confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, ...opts })
                        setTimeout(() => fire({ colors: ['#6366f1', '#8b5cf6', '#06b6d4'] }), 100)
                        setTimeout(() => fire({ colors: ['#10b981', '#34d399', '#f43f5e'], angle: 60 }), 400)
                        setTimeout(() => fire({ colors: ['#f59e0b', '#6366f1', '#8b5cf6'], angle: 120 }), 700)
                })
  }, [])

  return (
        <div className="app" style={{ justifyContent: 'center' }}>
                <div className="success-wrap">
                        <div className="success-icon">✅</div>div>
                
                        <h1 className="success-title">
                                  You're all set,<br />{formData.firstName}!
                        </h1>h1>
                        <p className="success-sub">
                                  Your application has been submitted to SC Financial Life Group.
                                  One of our licensed agents will reach out within 24 hours to finalize your policy.
                        </p>p>
                
                        <div className="success-ref-box">
                                  <div className="success-ref-label">Application Reference Number</div>div>
                                  <div className="success-ref-num">{refNum}</div>div>
                        </div>div>
                
                        <div className="next-steps">
                                  <div className="next-step">
                                              <span className="next-step-icon">📞</span>span>
                                              <div>
                                                            <strong>Agent Contact</strong>strong>
                                                            <span>A licensed agent will call you at {formData.phone} within 24 hours to review your application.</span>span>
                                              </div>div>
                                  </div>div>
                                  <div className="next-step">
                                              <span className="next-step-icon">🔍</span>span>
                                              <div>
                                                            <strong>Underwriting Review</strong>strong>
                                                            <span>We'll verify your information with MIB, prescription records, and motor vehicle records as authorized.</span>span>
                                              </div>div>
                                  </div>div>
                                  <div className="next-step">
                                              <span className="next-step-icon">📄</span>span>
                                              <div>
                                                            <strong>Policy Issued</strong>strong>
                                                            <span>Upon approval, your policy documents will be emailed to {formData.email} within 2–5 business days.</span>span>
                                              </div>div>
                                  </div>div>
                                  <div className="next-step">
                                              <span className="next-step-icon">🛡️</span>span>
                                              <div>
                                                            <strong>Coverage Begins</strong>strong>
                                                            <span>Your {formData.coverageAmount ? `$${Number(formData.coverageAmount).toLocaleString()}` : ''} policy activates upon your first premium payment.</span>span>
                                              </div>div>
                                  </div>div>
                        </div>div>
                </div>div>
        </div>div>
      )
}</div>
