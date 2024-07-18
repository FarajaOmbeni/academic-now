const ContactIntro = () => {
	return (
		<div className='container mx-auto sm:px-16 px-6 pt-12'>
			<div className='flex flex-col items-center mb-8'>
				<h1 className='text-primaryBlue text-4xl lg:text-5xl font-bold leading-tight'>
					Get in Touch
					<span className='text-black text-4xl lg:text-5xl font-light'>
						{' '}
						with Us
					</span>
				</h1>
				<p className='text-center mt-4 mb-8 max-w-prose text-gray-600 text-lg lg:text-xl font-normal leading-relaxed'>
					Whether you have a question, feedback, or need assistance, our team is
					here to help. Reach out to us, and let&apos;s make things happen.
				</p>
			</div>
		</div>
	)
}

export default ContactIntro
