import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ContactUs = () => {
	const [isSubmitting, setIsSubmitting] = useState(false)

	const sendEmail = (e) => {
		e.preventDefault()
		setIsSubmitting(true)

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				e.target,
				import.meta.env.VITE_USER_ID
			)
			.then(
				() => {
					toast.success('Message sent successfully!')
					e.target.reset()
					setIsSubmitting(false)
				},
				() => {
					toast.error('Error sending email.')
					setIsSubmitting(false)
				}
			)
	}

	return (
		<div className=' pb-8'>
			<ToastContainer />
			<div className='max-w-prose mx-auto px-4 sm:px-6 lg:px-8'>
				<form onSubmit={sendEmail} className='space-y-6'>
					<div className='mb-8 rounded-[30px] shadow-2xl p-6'>
						<div className='flex flex-col w-full'>
							<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mb-4'>
								Your Name
							</label>
							<input
								type='text'
								name='name'
								placeholder='Your Full Name'
								required
								aria-label='Your Name'
								className='w-full px-4 py-3 shadow-inner bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mt-4'>
								Your Email
							</label>
							<input
								type='email'
								name='email'
								placeholder='youremail@example.com'
								required
								aria-label='Your Email'
								className='w-full px-4 py-3 shadow-inner bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
							<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mt-4'>
								Phone Number (Optional)
							</label>
							<input
								type='text'
								name='phone'
								placeholder='Phone Number'
								aria-label='Phone Number'
								className='w-full px-4 py-3 shadow-inner bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						<div className='flex flex-col w-full mt-6'>
							<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mb-4'>
								Select Subject
							</label>
							<select
								name='subject'
								required
								aria-label='Select Subject'
								className='w-full px-4 py-3 shadow-inner bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
								<option value=''>Select Subject</option>
								<option value='General Enquiry'>General Enquiry</option>
								<option value='Service Enquiry'>Service Enquiry</option>
								<option value='Office Enquiry'>Office Enquiry</option>
								<option value='School Enquiry'>School Enquiry</option>
							</select>
						</div>

						<div className='flex flex-col w-full mt-6'>
							<label className='text-[16px] leading-[22px] font-extrabold text-gray-500 mb-4'>
								Your Message
							</label>
							<textarea
								name='message'
								placeholder='Your Message'
								rows='4'
								required
								aria-label='Your Message'
								className='w-full px-4 py-3 shadow-inner bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'></textarea>
						</div>
						<button
							type='submit'
							disabled={isSubmitting}
							className={`bg-blue-500 my-8 w-full text-center hover:bg-blue-600 text-yellow-400 font-bold rounded-full px-10 py-4 shadow-lg transform hover:scale-105 transition-all duration-300 ${
								isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
							}`}>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
