import Card from "../components/Card"
function Home() {
  return (
    <div className="font-jost">

        <div className="bg-[url('./slide_05.jpg')] bg-secondary bg-center bg-cover lg:bg-contain bg-no-repeat flex items-center h-screen px4 lg:px-40">
            <div>
                <h2 className="text-lx font-bold">New Collection</h2>
                <h1 className="text-5xl font-bold mt-2">Luxury Without <br/>Labels</h1>
                <p className="mt-2">Explore new-in product and best sellers</p>
                <button className=" bg-primary text-white px-6 py-2 mt-2 hover:bg-yellow-400">View Collection</button>

            </div>

        </div>
        
        
            <div className="my-20 max-w-[90%] lg:max-w-5xl mx-auto">

                <h2 className="text-center text-3x1 font-bold">Best Seller</h2>
                <p className="text-center">Explore our best sellers</p>

                <div>
          
                      
                            <Card/>


                </div>

                <div className="flex justify-center mt-8">
                  <button className="bg-transparent px-8 py-2 border border-primary hover:bg-primary hover:text-white transition-all">Explore More </button>
                </div>


            </div>

    </div>
  )
}

export default Home
