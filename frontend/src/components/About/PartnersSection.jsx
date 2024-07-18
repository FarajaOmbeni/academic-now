import { partners } from '../../constants'

export default function PartnersSection() {
	return (
		<section className='py-12 md:px-5 px-2 bg-gray-100'>
			<h2 className='text-blue-900 text-3xl md:text-4xl font-bold mb-6 text-center'>
				Our <span className='text-yellow-500'>Partners</span>
			</h2>
			<p className='text-blue-900 text-lg text-center max-w-4xl mx-auto mb-10'>
				We've forged strong partnerships with prestigious institutions across
				the United States, opening doors to a diverse range of academic
				opportunities. Our network ensures that you have access to top-tier
				education and resources.
			</p>
			<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 md:px-0'>
				{partners.map((partner) => (
					<div
						key={partner.id}
						className='bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg transform hover:scale-105'>
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
	)
}
