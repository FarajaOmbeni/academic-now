import { partners, expertise } from '../../constants'
import main from '../../assets/demo-videos.mp4'

const AboutCompany = () => {
	return (
		<div className=' py-16'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<section className='mb-20'>
					<h1 className='text-blue-900 text-4xl md:text-5xl font-bold mb-6 text-center'>
						Who We <span className='text-yellow-500'>Are</span>
					</h1>
					<p className='text-blue-950 text-lg text-center max-w-3xl mx-auto mb-10'>
						Academic Now Foundation is a pioneering organization dedicated to
						empowering students worldwide to achieve their dreams of studying in
						the United States. We bridge the gap between international
						aspirations and world-class American education.
					</p>
					<div className='rounded-lg overflow-hidden '>
						<video
							controls
							width='50%'
							height='auto'
							muted
							loop
							className='w-full md:w-1/2 mx-auto  rounded-2xl'>
							<source src={main} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
					</div>
				</section>

				<section className='mb-20'>
					<h2 className='text-blue-900 text-3xl md:text-4xl font-bold mb-6 text-center'>
						Our <span className='text-yellow-500'>Expertise</span>
					</h2>
					<p className='text-blue-950 text-lg text-center max-w-3xl mx-auto mb-10'>
						At Academic Now Foundation, we&apos;ve assembled a team of dedicated
						professionals with deep expertise in international education. Our
						staff is committed to guiding you through every step of your journey
						to studying in the US.
					</p>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
						{expertise.map((experience) => (
							<div
								key={experience.id}
								className='bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg'>
								<img
									src={experience.img}
									alt={experience.title}
									className='w-full h-48 object-cover'
								/>
								<div className='p-6'>
									<h3 className='text-blue-900 text-xl font-semibold mb-2'>
										{experience.title}
									</h3>
									<p className='text-blue-950 mb-4'>{experience.content}</p>
									<p className='text-yellow-500 font-bold'>{experience.role}</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section>
					<h2 className='text-blue-900 text-3xl md:text-4xl font-bold mb-6 text-center'>
						Our <span className='text-yellow-500'>Partners</span>
					</h2>
					<p className='text-blue-950 text-lg text-center max-w-3xl mx-auto mb-10'>
						We&apos;ve forged strong partnerships with prestigious institutions
						across the United States, opening doors to a diverse range of
						academic opportunities. Our network ensures that you have access to
						top-tier education and resources.
					</p>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
						{partners.map((partner) => (
							<div
								key={partner.id}
								className='bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg'>
								<img
									src={partner.img}
									alt={partner.title}
									className='w-full h-32 object-contain p-4'
								/>
								<h5 className='bg-blue-900 text-white text-center py-2 px-4 text-sm font-semibold'>
									{partner.title}
								</h5>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}

export default AboutCompany
