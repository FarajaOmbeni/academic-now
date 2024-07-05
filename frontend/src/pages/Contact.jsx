import { ContactIntro, ContactUs } from "../components"

const Contact = () => {
  return (
    <div>
      <ContactIntro />
      <ContactUs showHeading={false}/>
    </div>
  )
}

export default Contact