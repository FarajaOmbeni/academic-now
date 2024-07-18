import { useState } from 'react'
import {
	FaRegHandshake,
	FaSearchDollar,
	FaPenFancy,
	FaUserTie,
	FaPassport,
	FaPlaneDeparture,
} from 'react-icons/fa'

const enrollmentSteps = [
	{
		icon: FaRegHandshake,
		title: 'Step 1: Online Application',
		description:
			'Fill out our easy-to-use online application form with your personal and academic information.',
	},
	{
		icon: FaSearchDollar,
		title: 'Step 2: Application Review',
		description:
			'Our expert advisors will review your application and guide you through the next steps.',
	},
	{
		icon: FaPenFancy,
		title: 'Step 3: Program Selection',
		description:
			"We'll help you choose the best programs and universities that match your goals and qualifications.",
	},
	{
		icon: FaUserTie,
		title: 'Step 4: Application Submission',
		description:
			'Our team will assist you in preparing and submitting strong applications to your chosen schools.',
	},
	{
		icon: FaPassport,
		title: 'Step 5: Visa Assistance',
		description:
			"Once accepted, we'll guide you through visa applications, housing, and pre-departure preparations.",
	},
	{
		icon: FaPlaneDeparture,
		title: 'Step 6: Embark on Your Journey',
		description:
			'Congratulations! You are now ready to embark on your journey to study in the US.',
	},
]

const EffortlessEnrollment = () => {
	const [openStep, setOpenStep] = useState(null)

	const toggleStep = (index) => {
		setOpenStep(openStep === index ? null : index)
	}

	return (
		<section className=' py-16'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col items-center'>
					<div className=' mx-auto'>
						<h2 className='text-blue-900 text-3xl sm:text-4xl font-bold mb-6 text-center'>
							Your Path to Success:{' '}
							<span className='text-yellow-500'>Effortless Enrollment</span>
						</h2>
						<div className='space-y-4'>
							{enrollmentSteps.map((step, index) => (
								<div
									key={index}
									className='bg-white rounded-lg shadow-md transition duration-300 hover:shadow-lg flex flex-col'>
									<button
										onClick={() => toggleStep(index)}
										className='w-full flex justify-between items-center p-3 text-blue-900 text-xl font-semibold'>
										<span>{step.title}</span>
										<step.icon className='text-2xl text-primary' />
									</button>
									<div
										style={{
											maxHeight: openStep === index ? '500px' : '0',
											visibility: openStep === index ? 'visible' : 'hidden',
											transition: 'max-height 0.3s ease, visibility 0.3s ease',
										}}
										className={`flex-1 p-3 ${
											openStep === index ? 'open  ' : ''
										}`}>
										<p className='text-blue-950'>{step.description}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default EffortlessEnrollment
