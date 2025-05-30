import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
