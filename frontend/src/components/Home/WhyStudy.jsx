import { WhyStudySection } from '../../constants'

const WhyStudy = () => {
	// generate dynamic background colors
	const getBackgroundColor = (index) => {
		const colors = [
			'#FFD700',
			'#F0E68C',
			'#E6E6FA',
			'#FFFACD',
			'#B0E0E6',
			'#ADD8E6',
		]
		return colors[index % colors.length] // Cycle through colors based on index
	}

	return (
		<section className=' py-16'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-blue-900 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4'>
						Why Study <span className='text-yellow-500'>in the US</span>
					</h2>
					<p className='text-blue-950 text-lg max-w-3xl mx-auto'>
						Studying in the US provides access to world-class education and
						diverse cultural experiences, setting the stage for personal and
						professional growth.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{WhyStudySection.map((section, index) => (
						<div
							key={index}
							className='bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105'>
							<div className='p-6'>
								<div
									className='w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center'
									style={{ backgroundColor: getBackgroundColor(index) }}>
									<img
										src={section.img}
										alt={section.title}
										className='w-8 h-8'
									/>
								</div>
								<h3 className='text-xl font-semibold text-blue-900 text-center mb-2'>
									{section.title}
								</h3>
								<p className='text-blue-950 text-center'>{section.content}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default WhyStudy
