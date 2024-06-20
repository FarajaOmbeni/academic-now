import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Contact, Home, Register, WhyStudy } from "./pages";
import { Footer, Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/whystudy" element={<WhyStudy />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
