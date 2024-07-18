import {
	FaRegHandshake,
	FaSearchDollar,
	FaPenFancy,
	FaUserTie,
	FaPassport,
	FaPlaneDeparture,
} from 'react-icons/fa'

const Introduction = () => {
	return (
		<div className='relative bg-gray-50 py-12'>
			<div className='container mx-auto sm:px-16 px-6'>
				<div className='mb-12 flex items-center justify-center flex-col'>
					<h1 className='text-center mb-6 text-primaryBlue text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold lg:leading-normal'>
						Comprehensive support for students
					</h1>
					<ServicesGrid />
				</div>
			</div>
		</div>
	)
}

export default Introduction

const services = [
	{ icon: FaRegHandshake, text: 'Application Assistance' },
	{ icon: FaSearchDollar, text: 'Scholarship Search' },
	{ icon: FaPenFancy, text: 'Essay Guidance' },
	{ icon: FaUserTie, text: 'Interview Preparation' },
	{ icon: FaPassport, text: 'Visa Support' },
	{ icon: FaPlaneDeparture, text: 'Pre-departure Orientation' },
]

const ServiceItem = ({ Icon, text }) => (
	<div className='flex flex-col items-center text-center hover:text-primary-500 cursor-pointer'>
		<Icon className='mb-2 text-2xl' aria-label={text} />
		<p className='text-sm sm:text-base'>{text}</p>
	</div>
)

const ServicesGrid = () => (
	<div className='py-8'>
		<div className='max-w-4xl mx-auto'>
			<div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
				{services.map((service) => (
					<ServiceItem
						key={service.text}
						Icon={service.icon}
						text={service.text}
					/>
				))}
			</div>
		</div>
	</div>
)
