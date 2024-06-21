import { AboutCompany, Divider, EffortlessEnrollment, Hero, WhyStudy } from "../components"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Divider />
      <WhyStudy />
      <EffortlessEnrollment />
      <Divider />
      <AboutCompany />
    </div>
  )
}

export default Home