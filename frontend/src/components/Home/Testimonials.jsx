import { useState } from 'react'
import { mwanaisha, quoteIcon } from '../../assets'
import YellowCircle from '../SvgComponents/YellowCircle'

const Testimonials = () => {
	const [isExpanded, setIsExpanded] = useState(false)

	const testimonialText = `Studying in the United States through Academic Now was transformative,
  thanks to its support and guidance. The US education systems focus on
  practical learning and critical thinking broadened my academic
  horizons and equipped me with valuable skills. The flexibility of the
  US education system allowed me to explore various subjects before
  deciding on my major, and the availability of resources ensured I had
  the guidance I needed. Overall, I am grateful for the opportunity and
  would highly recommend Academic Now to any Tanzanian student seeking
  to broaden their horizons and pursue their academic goals.`

	const shortText = `${testimonialText.slice(0, 207)}...`

	return (
		<div className='mt-24 mb-40 container mx-auto sm:px-16 px-6'>
			<div className='flex flex-col items-center mb-24'>
				<h1 className='text-primaryBlue text-3xl md:text-4xl font-bold leading-tight mb-8 text-center'>
					What
					<span className='text-[#1C1C1C]'> our students Say</span>
				</h1>
				<p className='text-gray-800 text-lg md:text-xl font-medium leading-relaxed text-center px-4 max-w-4xl'>
					At Academic Now foundation, we believe in empowering students to
					pursue their academic dreams with confidence. Here are some of our
					services designed to streamline your journey to studying in the US.
				</p>
			</div>

			{/* Testimonials box */}
			<div className='pt-16 p-6 bg-primaryBlue bg-opacity-90 relative bg-cover rounded-lg shadow-lg max-w-4xl mx-auto'>
				<div className='text-center space-y-4'>
					<p className='text-yellow-100 text-md md:text-lg font-medium leading-relaxed'>
						{isExpanded ? testimonialText : `${shortText}...`}
					</p>
					<button
						onClick={() => setIsExpanded(!isExpanded)}
						className='bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out'>
						{isExpanded ? 'Read Less' : 'Read More'}
					</button>
				</div>
				<img
					src={mwanaisha}
					alt='testimonial-image'
					className='w-24 h-24 md:w-32 md:h-32 rounded-full absolute -top-20 left-1/2 transform -translate-x-1/2 border-4 border-primaryBlue'
				/>
				<img
					src={quoteIcon}
					alt='quote icon'
					className='w-8 h-8 absolute top-8 left-2 text-blue-800'
				/>
			</div>
		</div>
	)
}

export default Testimonials
