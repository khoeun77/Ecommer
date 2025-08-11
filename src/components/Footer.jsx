import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-primary py-4 text-white"> 

            <div className="max-w-[90%] lg:max-w-5xl mx-auto flex flex-col lg:flex-row justify-between" >


              <h4>Copyright &#169;2025 - Khoeun Store</h4>

              <ul className="flex items-center gap-4">

                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="Contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="About">About Us</Link>
                  </li>
                  <li>
                    <a href="">Term and Conditional</a>
                  </li>
              </ul>

              
            </div>
        </footer>
  )
}

export default Footer
