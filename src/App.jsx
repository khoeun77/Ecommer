import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayouts from "./Layouts/RootLayouts"
import Home from "./Pages/Home"
import Products from "./Pages/Products"
import Contact from "./Pages/Contact"

function App() {
  return (
    <BrowserRouter>
    
      <Routes>


          <Route path="/" element={<RootLayouts />}>

              <Route index element={<Home />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/contact" element={<Contact />}></Route>

          </Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App
