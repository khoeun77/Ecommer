import { Outlet } from "react-router-dom"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
function RootLayouts() {
  return (
    <>

        <TopBar />
        <Header />
        <Outlet />


    </>
  )
}

export default RootLayouts
