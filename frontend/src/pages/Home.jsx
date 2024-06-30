import { AboutCompany, ContactUs, Divider, EffortlessEnrollment, Hero, OurServices, Testimonials, WhyStudy } from "../components"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Divider />
      <WhyStudy />
      <EffortlessEnrollment />
      <Divider />
      <AboutCompany />
      <OurServices />
      <Divider />
      <Testimonials />
      <Divider />
      <ContactUs />
    </div>
  )
}

export default Home