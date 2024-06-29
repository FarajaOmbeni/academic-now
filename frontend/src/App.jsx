import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Register, WhyStudy } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/whystudy" element={<WhyStudy />}></Route>
          </Routes>
        </div>
        <div className="footer-bg">
          <div className="container mx-auto sm:px-16 px-6">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
