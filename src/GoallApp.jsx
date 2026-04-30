import { useState, useEffect, useCallback, useMemo } from 'react'
import ProgressBar from './components/ProgressBar'
import GoallWelcome from './goall/GoallWelcome'
import GoallSuccess from './goall/GoallSuccess'
import GoallPersonalStep from './goall/steps/GoallPersonalStep'
import GoallContactStep from './goall/steps/GoallContactStep'
import GoallIdentityStep from './goall/steps/GoallIdentityStep'
import GoallEmployerStep from './goall/steps/GoallEmployerStep'
import GoallFamilyStep from './goall/steps/GoallFamilyStep'
import GoallBeneficiaryStep from './goall/steps/GoallBeneficiaryStep'
import GoallMedicalStep from './goall/steps/GoallMedicalStep'
import GoallPoliciesStep from './goall/steps/GoallPoliciesStep'
import GoallPremiumStep from './goall/steps/GoallPremiumStep'
import GoallSignatureStep from './goall/steps/GoallSignatureStep'

const INITIAL_FORM = {
  firstName: '', lastName: '', gender: '', dob: '',
  homePhone: '', cellPhone: '', workPhone: '', email: '', bestContact: 'Cell',
  street: '', city: '', state: '', zip: '',
  heightFt: '', heightIn: '', weight: '',
  dlNumber: '', dlState: '', dlExp: '',
  ssn: '', usCitizen: 'Yes', birthCountry: '', birthState: '', birthCity: '',
  employer: '', employmentLength: '', employerStreet: '', employerCity: '', employerState: '', employerZip: '',
  occupation: '', jobTitle: '',
  maritalStatus: '', spouseName: '', spouseAge: '',
  hasKids: '', kid1Name: '', kid1Age: '', kid2Name: '', kid2Age: '',
  bene1Name: '', bene1Dob: '', bene1Relation: '', bene1Address: '', bene1City: '', bene1StateZip: '', bene1Phone: '', bene1Ssn: '', bene1Email: '', bene1Percent: '100',
  bene2Name: '', bene2Dob: '', bene2Relation: '', bene2Address: '', bene2City: '', bene2StateZip: '', bene2Phone: '', bene2Ssn: '', bene2Email: '', bene2Percent: '',
  bene3Name: '', bene3Dob: '', bene3Relation: '', bene3Address: '', bene3City: '', bene3StateZip: '', bene3Phone: '', bene3Ssn: '', bene3Email: '', bene3Percent: '',
  clinicName: '', clinicPhone: '', clinicAddress: '', lastSeenDate: '', lastSeenReason: '',
  med1Name: '', med1Why: '', med1Dosage: '',
  med2Name: '', med2Why: '', med2Dosage: '',
  tobacco: '',
  policy1Amount: '', policy1Company: '', policy1Type: '', policy1StartDate: '', policy1Number: '', policy1CashValue: '',
  policy2Amount: '', policy2Company: '', policy2Type: '', policy2StartDate: '', policy2Number: '', policy2CashValue: '',
  hasRetirement: '', policyNotes: '',
  premiumAmount: '', premiumDay: '', groupBill: '',
  bankName: '', routingNumber: '', accountNumber: '',
  lumpSum: '', exchange1035: '',
  newPolicyType: '', newPolicyCompany: '', faceAmount: '', policyOption: '', illustrationNumber: '',
  clientSignName: '', clientSignDate: '',
  presenterName: '', presenterDate: '',
}

const ALL_STEPS = [
  { id: 'welcome',   component: GoallWelcome,        section: null, sectionName: null },
  { id: 'personal',  component: GoallPersonalStep,   section: 'A',  sectionName: 'Personal Info' },
  { id: 'contact',   component: GoallContactStep,    section: 'A',  sectionName: 'Personal Info' },
  { id: 'identity',  component: GoallIdentityStep,   section: 'A',  sectionName: 'Personal Info' },
  { id: 'employer',  component: GoallEmployerStep,   section: 'B',  sectionName: 'Employment' },
  { id: 'family',    component: GoallFamilyStep,     section: 'C',  sectionName: 'Family' },
  { id: 'bene1',     component: GoallBeneficiaryStep, section: 'D', sectionName: 'Beneficiaries', beneNum: 1 },
  { id: 'bene2',     component: GoallBeneficiaryStep, section: 'D', sectionName: 'Beneficiaries', beneNum: 2 },
  { id: 'bene3',     component: GoallBeneficiaryStep, section: 'D', sectionName: 'Beneficiaries', beneNum: 3, skip: d => !d.bene2Name },
  { id: 'medical',   component: GoallMedicalStep,    section: 'E',  sectionName: 'Medical' },
  { id: 'policies',  component: GoallPoliciesStep,   section: 'F',  sectionName: 'Policies' },
  { id: 'premium',   component: GoallPremiumStep,    section: 'G',  sectionName: 'Premium Options' },
  { id: 'signature', component: GoallSignatureStep,  section: 'R',  sectionName: 'Signature' },
]

function getActiveSteps(formData) {
  return ALL_STEPS.filter(s => !s.skip || !s.skip(formData))
}

export default function GoallApp() {
  const [stepIdx, setStepIdx] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [direction, setDirection] = useState('forward')
  const [formData, setFormData] = useState(INITIAL_FORM)
  const [isSuccess, setIsSuccess] = useState(false)

  const activeSteps = useMemo(() => getActiveSteps(formData), [formData])
  const currentStep = activeSteps[stepIdx]

  const goNext = useCallback((data = {}) => {
    const merged = { ...formData, ...data }
    setFormData(merged)
    const next = getActiveSteps(merged)
    const nextIdx = stepIdx + 1
    if (nextIdx >= next.length) { setIsSuccess(true); return }
    setDirection('forward')
    setAnimKey(k => k + 1)
    setStepIdx(nextIdx)
  }, [formData, stepIdx])

  const goBack = useCallback(() => {
    if (stepIdx === 0) return
    setDirection('backward')
    setAnimKey(k => k + 1)
    setStepIdx(i => i - 1)
  }, [stepIdx])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [stepIdx])

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && stepIdx > 0) goBack() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [stepIdx, goBack])

  if (isSuccess) return <GoallSuccess formData={formData} />

  const isWelcome = currentStep?.id === 'welcome'
  const countableSteps = activeSteps.filter(s => s.section !== null)
  const currentCountable = activeSteps.slice(0, stepIdx).filter(s => s.section !== null).length
  const progress = countableSteps.length > 0 ? (currentCountable / countableSteps.length) * 100 : 0
  const StepComponent = currentStep?.component

  return (
    <div className="app">
      {!isWelcome && (
        <ProgressBar
          progress={progress}
          section={currentStep?.section}
          sectionName={currentStep?.sectionName}
          current={currentCountable}
          total={countableSteps.length}
        />
      )}
      <div key={animKey} className={`step-container ${direction}`}>
        {StepComponent && (
          <StepComponent
            formData={formData}
            onNext={goNext}
            onBack={goBack}
            beneNum={currentStep?.beneNum}
          />
        )}
      </div>
    </div>
  )
}
