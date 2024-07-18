import { Link } from 'react-router-dom'

const AcademicFoundation = () => {
	return (
		<div className='relative'>
			<div className='bg-opacity-60 absolute inset-0 bg-black'></div>
			<div className="flex flex-col items-center justify-center p-20 bg-[url('./assets/academic-foundation-img.jpg')] bg-cover bg-center">
				<div className='z-10 text-center'>
					<h3 className='text-white text-2xl md:text-3xl font-bold'>
						Embark on Your Academic Adventure in the US!
					</h3>
					<p className='text-white text-lg md:text-xl mt-4'>
						Unlock your potential with our tailored study programs. Your dream
						university awaits.
					</p>

					<Link to='/register/#registration'>
						<button className='mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-12 rounded-lg transition-transform duration-200 hover:scale-105'>
							Start Your Application
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default AcademicFoundation
