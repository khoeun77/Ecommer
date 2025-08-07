import { BrowserRouter, Routes, Route } from "react-router-dom"
import RootLayouts from "./Layouts/RootLayouts"
import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
    
      <Routes>


          <Route path="/" element={<RootLayouts />}>

              <Route index element={<Home />}></Route>

          </Route>


      </Routes>

    </BrowserRouter>
  )
}

export default App
