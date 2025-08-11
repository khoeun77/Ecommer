import { useActionState, useState } from "react"
import { NavLink } from "react-router-dom"


function Header() {
  const [isActiveNavbar, setIsActiveNavbar] = useState(false)
  return (
    <>
    
            <header className="bg-blue-300 border-b border-gray-200 py-4 font-jost flex justify-between items-center px-4 lg:px-40">


                          <div className="flex items-center gap-2 transition-all duration-500 ease-in-out">

                              <button onClick ={() => setIsActiveNavbar(true)} className="lg:hidden inline-block">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-yellow-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                              </button>
                              <h2 className="font-bold hover:text-yellow-600">Khoeun Store</h2>

                          </div>


                            <ul className=" hidden lg:flex items-center gap-4">
                                <li>
                                  <NavLink to="/" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">Home</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/Products" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">Products</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/Contact" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">Contact</NavLink>
                                </li>
                                <li>
                                  <NavLink to="/About" className="hover:underline decoration-yellow-600 aria-[current=page]:underline aria-[current=page]:text-yellow-600">About</NavLink>
                                </li>
                            </ul>


                            <div className="flex items-center gap-2">
                                <button>

                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 hover:text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                  </svg>

                                </button>


                                <button>

                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  hover:text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                  </svg>

                                </button>



                                <button>

                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6  hover:text-yellow-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                                  </svg>

                                </button>

                            </div>
            </header>


            <header className={`${isActiveNavbar ? '-left-0' : '-left-full'} absolute transition-all duration-500 ease-in-out top-0 z-[999] pt-8 px-4 w-[260px] bg-primary text-white min-h-screen`}>

                  <div className="flex justify-end">

                        <button onClick={() => setIsActiveNavbar(false)} className="p-1 border border-white border-dashed rounded-full hover:bg-gray-700">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>

                        </button>

                  </div>

                  <div className="flex flex-col mt-3">

                        <a href="" className="hover:bg-gray-400 p-2 rounded-lg transition-all">Home</a>
                        <a href="" className="hover:bg-gray-400 p-2 rounded-lg transition-all">Products</a>
                        <a href="" className="hover:bg-gray-400 p-2 rounded-lg transition-all">Contact</a>
                        <a href="" className="hover:bg-gray-400 p-2 rounded-b-lg transition-all">About</a>
                  </div>
              
            </header>

                    
    
    
    
    
    
    
    
    
    
    </>

  )
}

export default Header
