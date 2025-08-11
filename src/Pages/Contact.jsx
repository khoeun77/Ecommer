import React from 'react'

function Contact() {
  return (
    <div className='max-w-[90%] lg:max-w-3xl mx-auto my-10'>
        <form action="" className='w-full shadow-md p-4'>
            <h1 className='text-center text-3xl font-bold'>Contact Us</h1>

            <div className='mb-3'>

                    <label>Name <span className='text-red-500'>*</span></label>
                    <input type="text" className='w-full p-2 border border-gray-200 focus:underline-none focus:right-2 transition-all ease-in-out' placeholder='Enter your name' />
                    
            </div>

            <div className='mb-3'>

                    <label>Email <span className='text-red-500'>*</span></label>
                    <input type='text' className='w-full p-2 border-gray-200 focus:underline-none focus:right-2 transition-all ease-in-out' placeholder=' Enter your Email' />
            </div>

            <div className='mb-3'>

                    <label>Phone <span className='text-red-500'>*</span></label>
                    <input type='text' className='w-full p-2 border-gray-200 focus:underline-none focus:right-2 transition-all ease-in-out' placeholder='Enter your Phone' />
            </div>

            <div className='mb-3'>
                    <label>Message <span className='text-red-500'>*</span></label>
                    <textarea type="text" className='w-full p-2 border-gray-200 focus:underline-none focus:right-2 transition-all ease-in-out' placeholder='Message'>
                        
                    </textarea>
            </div>

            <div className='flex justify-end'>
                <button type='submit' className='bg-primary text-white px-8 py-2 hover:bg-red-500'>
                    Submit
                </button>
            </div>

        </form>
      
    </div>
  )
}

export default Contact
