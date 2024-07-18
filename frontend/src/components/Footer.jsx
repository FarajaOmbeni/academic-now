import {
	FaUserGraduate,
	FaHandsHelping,
	FaFlagUsa,
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
	return (
		<footer className='bg-blue-900 text-white py-16'>
			<div className='container mx-auto px-4'>
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-8'>
					<div className='flex flex-col items-center text-center'>
						<FaUserGraduate className='text-4xl mb-4 text-yellow-300' />
						<h3 className='text-lg font-semibold mb-2 text-yellow-300'>
							Our Mission
						</h3>
						<p className='text-sm'>
							Connecting students with U.S. education opportunities.
						</p>
					</div>
					<div className='flex flex-col items-center text-center'>
						<FaHandsHelping className='text-4xl mb-4 text-yellow-300' />
						<h3 className='text-lg font-semibold mb-2 text-yellow-300'>
							Dedicated Support
						</h3>
						<p className='text-sm'>
							Guiding you through the application process.
						</p>
					</div>
					<div className='flex flex-col items-center text-center'>
						<FaFlagUsa className='text-4xl mb-4 text-yellow-300' />
						<h3 className='text-lg font-semibold mb-2 text-yellow-300'>
							Your Future Starts Here
						</h3>
						<p className='text-sm'>Embark on your U.S. academic journey.</p>
					</div>
				</div>
				<div className='flex justify-center gap-6 mb-8'>
					<FaFacebook className='text-2xl cursor-pointer hover:text-yellow-300' />
					<FaInstagram className='text-2xl cursor-pointer hover:text-yellow-300' />
					<FaYoutube className='text-2xl cursor-pointer hover:text-yellow-300' />
					<FaTwitter className='text-2xl cursor-pointer hover:text-yellow-300' />
				</div>
				<div
					className='flex flex-col md:flex-row justify-between
				items-center gap-4 md:gap-0 text-sm
				bg-slate-950 p-5 rounded-2xl
				
				'>
					<div>
						<h4 className='text-xl font-semibold text-yellow-500 mb-2'>
							Study in the USA with Academic Now
						</h4>
						<p className='text-sm mb-4'>
							We specialize in bridging the gap for international students
							aspiring to pursue their education and ensuring they are
							well-equipped to embark on their academic journey in the USA.
						</p>
						<div className='flex gap-4'>
							<a href='#' className='text-yellow-300 hover:underline'>
								Privacy Policy
							</a>
							<a href='#' className='text-yellow-300 hover:underline'>
								Terms of Use
							</a>
							<a href='#' className='text-yellow-300 hover:underline'>
								Contact Us
							</a>
						</div>
					</div>
					<div className='md:ml-8'>
						<h4 className='text-xl font-semibold text-yellow-500 mb-2'>
							Contact Us
						</h4>
						<p className='text-sm'>
							1234 Academic Way <br />
							New York, NY 10001 <br />
							United States
						</p>
					</div>
				</div>
				<div className='text-center mt-8 bg-white text-black p-2 w-fit mx-auto rounded-full shadow-inner text-sm'>
					<p className='text-sm'>
						© {new Date().getFullYear()} Academic Now Foundation. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
