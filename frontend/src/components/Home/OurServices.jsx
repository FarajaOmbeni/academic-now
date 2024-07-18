import { HashLink } from 'react-router-hash-link'
import { services } from '../../constants'

const OurServices = () => {
	return (
		<div className='my-24 py-16 '>
			<div className='container mx-auto px-6 md:px-16'>
				<div className='flex flex-col items-center mb-12'>
					<h1 className='text-4xl md:text-5xl font-bold'>
						Empowering Your Academic Journey
					</h1>
					<p className='text-center mt-4 text-lg md:text-xl max-w-3xl'>
						Discover how Academic Now Foundation can transform your path to
						studying in the US with our comprehensive range of services.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service) => (
						<div
							key={service.id}
							className='service-card transition duration-300 ease-in-out transform hover:-translate-y-2'>
							<img
								src={service.img}
								alt={service.title}
								className='w-full h-40 object-cover rounded-t-lg'
							/>
							<div className='bg-blue-100 text-[#1C1C1C] p-6 rounded-b-lg'>
								<h5 className='text-2xl font-semibold text-center mb-4'>
									{service.title}
								</h5>
								<p className='text-center text-sm leading-relaxed mb-6'>
									{service.content}
								</p>
								<HashLink to='/register/#registration'>
									<button className='w-full text-white bg-blue-600 hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out shadow-md py-3 font-semibold rounded-full'>
										Get Started
									</button>
								</HashLink>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default OurServices
