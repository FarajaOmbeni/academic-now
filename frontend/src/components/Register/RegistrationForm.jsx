import { useState } from 'react'

const RegistrationForm = () => {
	const [educationLevel, setEducationLevel] = useState('High School')
	const [interestedInUS, setInterestedInUS] = useState('Yes')

	const handleEducationLevelChange = (event) => {
		setEducationLevel(event.target.value)
	}

	const handleInterestedInUSChange = (event) => {
		setInterestedInUS(event.target.value)
	}

	return (
		<div className='container mx-auto sm:px-16 px-6 py-5 text-yellow-50 rounded-2xl md:m-10 mb-10'>
			<div className='text-center py-4'>
				<div className='p-4 bg-blue-800 text-white rounded-full inline-flex items-center justify-center'>
					<span className='text-indigo-900 bg-yellow-400 text-xs font-bold mr-2 px-2.5 py-0.5 rounded-full uppercase'>
						New
					</span>
					<span className='font-semibold'>
						Join our Academic Now program and unlock your potential!
					</span>
				</div>
			</div>
			<div className='py-8 max-w-prose mx-auto'>
				<h2 className='text-blue-900 text-3xl sm:text-4xl font-bold mb-6 text-center'>
					Start Your US Study Journey
					<span className='text-yellow-500'>Today</span>
				</h2>{' '}
				<p className='text-lg md:text-xl leading-relaxed text-gray-700 font-medium mb-6 mt-4 rounded-mplus text-center'>
					Your journey to academic excellence starts here. Fill out the form to
					connect with top educators and unlock your full potential. Let us get
					started!
				</p>
				{/* Actual form starts here */}
				<div className='max-w-prose mx-auto p-8 bg-white rounded-lg shadow-xl'>
					<form className='mt-8 space-y-6' action='#' method='POST'>
						<form action='' className='w-full '>
							<div className='flex flex-col w-full'>
								<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mb-4 rounded-mplus'>
									Full Name
								</label>
								<input
									type='text'
									placeholder='Your Full Name'
									className='shadow-inner border-b-2 bg-gray-50 w-full px-3 py-4 rounded-3xl firstInput'></input>
								<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mt-4 rounded-mplus'>
									Email Address
								</label>
								<input
									type='text'
									placeholder='youremail@example.com'
									className='shadow-inner border-b-2 bg-gray-50 w-full px-3 py-4 rounded-3xl firstInput'></input>
								<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mt-4 rounded-mplus'>
									Phone Number (Optional)
								</label>
								<input
									type='text'
									placeholder='Phone Number'
									className='shadow-inner border-b-2 bg-gray-50 w-full px-3 py-4 rounded-3xl firstInput'></input>
							</div>
						</form>
						<div className='rounded-md shadow-sm -space-y-px'>
							<div className='flex flex-col w-full mt-6'>
								<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mb-4 rounded-mplus'>
									Current Level of Education
								</label>
								<select
									className='shadow-inner border-b-2 bg-gray-50 px-3 py-4 rounded-3xl firstInput select-dropdown'
									value={educationLevel}
									onChange={handleEducationLevelChange}
									required>
									<option value='' disabled>
										Select your education level
									</option>
									<option value='High School'>High School</option>
									<option value='Undergraduate'>Undergraduate</option>
									<option value='Graduate'>Graduate</option>
								</select>
							</div>

							<div className='flex flex-col w-full mt-6'>
								<label className='text-base md:text-[16px] leading-[22px] font-extrabold text-gray-500 mb-4 rounded-mplus'>
									Interested in Studying in the US?
								</label>
								<select
									className='shadow-inner border-b-2 bg-gray-50 px-3 py-4 rounded-3xl firstInput select-dropdown'
									value={interestedInUS}
									onChange={handleInterestedInUSChange}
									required>
									<option value='' disabled>
										Select an option
									</option>
									<option value='Yes'>Yes</option>
									<option value='No'>No</option>
								</select>
							</div>
						</div>
						<div>
							<div className='mb-8 flex justify-center items-center md:justify-start'>
								<button className='bg-blue-600 hover:bg-blue-700 text-yellow-400 w-full hover:text-yellow-300 text-lg lg:text-xl font-bold rounded-full px-6 py-3 md:px-10 md:py-4 lg:px-14 lg:py-5 shadow-lg transform hover:scale-105 transition-all duration-300'>
									Connect with Academic Now
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default RegistrationForm
