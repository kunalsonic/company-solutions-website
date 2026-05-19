import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
       <a
        href="https://wa.me/917340743407"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>

    </BrowserRouter>
  );
}
export default App;