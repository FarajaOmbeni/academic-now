import { EffortlessEnrollment, Introduction, RegistrationForm } from "../components"

const Register = () => {
  return (
    <div>
      <div id="introduction">
        <Introduction />
      </div>
      <div id="enrollment">
        <EffortlessEnrollment />
      </div>
      <div id="registration">
        <RegistrationForm />
      </div>
    </div>
  )
}

export default Register
