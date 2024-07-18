import { useEffect, useRef, useState } from 'react'
import { logo } from '../assets'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navLinks } from '../constants'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
	const [active, setActive] = useState('')
	const [toggle, setToggle] = useState(false)
	const location = useLocation()
	const navRef = useRef()

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (navRef.current && !navRef.current.contains(event.target)) {
				setToggle(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [navRef])

	useEffect(() => {
		const currentPath = location.pathname
		const currentPage = currentPath.split('/')[1]
		setActive(currentPage || '')
	}, [location])

	return (
		<nav ref={navRef} className='bg-blue-100 shadow-md'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between h-16 py-2'>
					<div className='flex-shrink-0 flex items-center'>
						<Link to='/'>
							<img src={logo} alt='Logo' className='h-16 w-auto py-0.5' />
						</Link>
					</div>

					<div className='hidden lg:flex items-center space-x-8'>
						{navLinks.map((nav) => (
							<Link
								key={nav.id}
								to={`/${nav.id}`}
								className={`text-base font-medium transition-colors duration-200 ${
									active === nav.id
										? 'text-yellow-500 bg-blue-100 hover:bg-blue-200' // Changed active style
										: 'text-blue-900 hover:text-yellow-500'
								}`}
								onClick={() => setActive(nav.id)}>
								{nav.title}
							</Link>
						))}
						<Link
							to='/register'
							className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out'>
							Get Started
						</Link>
					</div>

					<div className='lg:hidden flex items-center'>
						<button
							onClick={() => setToggle(!toggle)}
							className='inline-flex items-center justify-center p-2 rounded-md text-blue-900 hover:text-yellow-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'>
							{toggle ? (
								<FaTimes className='h-6 w-6' />
							) : (
								<FaBars className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={`${
					toggle ? 'block' : 'hidden'
				} lg:hidden bg-blue-50 shadow-lg absolute top-16 right-0 left-0 z-20`}>
				<div className='px-2 pt-2 pb-3 space-y-1'>
					{navLinks.map((nav) => (
						<Link
							key={nav.id}
							to={`/${nav.id}`}
							className={`block px-3 py-2 rounded-md text-base font-medium ${
								active === nav.id
									? 'text-yellow-500 bg-blue-100'
									: 'text-blue-900 hover:text-yellow-500 hover:bg-blue-100'
							}`}
							onClick={() => {
								setActive(nav.id)
								setToggle(false)
							}}>
							{nav.title}
						</Link>
					))}
					<Link
						to='/register'
						className='block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out'
						onClick={() => setToggle(false)} // Close mobile menu on click
					>
						Get Started
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
