import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Register, WhyStudy } from './pages'
import { AcademicFoundation, Footer, Navbar } from './components'

function App() {
	return (
		<>
			<BrowserRouter>
				<div className=''>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/contact' element={<Contact />}></Route>
						<Route path='/register' element={<Register />}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/whystudy' element={<WhyStudy />}></Route>
					</Routes>
				</div>
				<AcademicFoundation />
				<Footer />
			</BrowserRouter>
		</>
	)
}

export default App
