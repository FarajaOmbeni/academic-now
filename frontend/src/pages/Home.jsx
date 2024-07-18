import {
	AboutCompany,
	ContactUs,
	EffortlessEnrollment,
	Hero,
	OurServices,
	Testimonials,
	WhyStudy,
} from '../components'
import PartnersSection from '../components/About/PartnersSection'

const Home = () => {
	return (
		<div className='max-w-screen-xl mx-auto px-4'>
			<Hero />
			<div className='space-y-16 mt-16'>
				<WhyStudy />
				<EffortlessEnrollment />
				<AboutCompany />
				<OurServices />
				<Testimonials />
			</div>
			<div className=' py-12 md:m-40 rounded-lg'>
				<h2 className='text-center text-3xl font-semibold text-gray-800'>
					Contact Us
				</h2>
				<p className='text-center text-gray-600 mt-4'>
					We are here to help you. Contact us for more information.
				</p>
				<p className='text-center mt-4'>
					<a
						href='mailto:info@academicnow.com'
						className='text-indigo-600 hover:text-indigo-800 transition duration-150 ease-in-out'>
						info@academicnow.com
					</a>
				</p>
				<ContactUs showHeading={false} />
				<PartnersSection />
			</div>
		</div>
	)
}

export default Home
