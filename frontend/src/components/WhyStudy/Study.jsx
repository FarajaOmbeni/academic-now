import main from '../../assets/demo-videos.mp4'
import WhyStudy from '../Home/WhyStudy'

const Study = () => {
	return (
		<div className=' py-16'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<WhyStudy />

				<div className='my-12'>
					{/* Video section */}
					<div className='max-w-4xl mx-auto'>
						<div className='aspect-w-16 aspect-h-9 bg-white rounded-lg overflow-hidden'>
							<video
								controls
								width='50%'
								height='auto'
								muted
								loop
								className='w-full md:w-1/2 h-full object-cover mx-auto hover:shadow-xl transition-shadow duration-300  rounded-2xl'>
								<source src={main} type='video/mp4' />
								Your browser does not support the video tag.
							</video>
						</div>
						<p className='text-center text-blue-700 mt-4 text-lg font-medium'>
							Watch our informative video to learn more about studying in the US
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Study
