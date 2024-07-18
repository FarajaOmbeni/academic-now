import { HashLink as Link } from 'react-router-hash-link'
import { Student } from '../../assets'
import { FaRocket, FaInfoCircle } from 'react-icons/fa'

const Hero = () => {
	return (
		<div className=' relative overflow-hidden'>
			{/* Grainy background */}
			<div className='absolute inset-0 opacity-50'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='relative z-10 py-12 md:py-20 lg:py-28 flex flex-col lg:flex-row items-center'>
					<div className='lg:w-1/2 lg:pr-12 text-center lg:text-left'>
						<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight'>
							Your Future Starts Here{' '}
							<span className='text-yellow-500 block mt-2 animate-pulse'>
								Study in the USA
							</span>
						</h1>
						<p className='mt-6 text-xl text-blue-700 max-w-lg mx-auto lg:mx-0'>
							Expert Guidance to Your Dream US University
						</p>
						<div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
							<Link
								to='/register/#registration'
								className='group inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:text-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-lg'
								aria-label='Begin Your Journey'>
								<FaRocket className='mr-2' />
								Begin Your Journey
								<span className='absolute top-0 right-0 -mt-2 -mr-2 px-2 py-1 bg-yellow-500 text-blue-900 text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
									Start now!
								</span>
							</Link>
							<Link
								to='/about'
								className='inline-flex items-center justify-center px-6 py-3 border-2 border-blue-600 text-base font-medium rounded-full text-blue-600 bg-transparent hover:bg-blue-50 md:text-lg transition duration-300 ease-in-out shadow-md'
								aria-label='Learn More'>
								<FaInfoCircle className='mr-2' />
								Learn More
							</Link>
						</div>
					</div>
					<div className='lg:w-1/2 mt-12 lg:mt-0 relative'>
						<div className='relative rounded-lg shadow-2xl overflow-hidden'>
							<img
								className='w-full object-cover h-64 sm:h-80 md:h-96 lg:h-full transform hover:scale-105 transition-transform duration-300'
								src={Student}
								alt='Student studying abroad'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent'></div>
							<div className='absolute bottom-4 left-4 right-4 text-white text-center'>
								<p className='text-lg font-semibold'>
									Join thousands of students already living their dream!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-white to-transparent'></div>
		</div>
	)
}

export default Hero
