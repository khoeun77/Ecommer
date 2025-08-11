import React from 'react'

function About() {
  return (
    <div className='max-w-[90%] lg:max-w-3xl mx-auto my-10'>
      <div className='grid grid-cols-1 items-start lg:grid-cols-2 gap-4'>
        <div>
          <img className='w-full h-full py-11 px-auto' src='./about.jpg' alt='' />
        </div>

        <div>
          <h1 className='font-bold text-3xl md-2'>Our Story</h1>

          <p>Welcome to [Khoeun Stor], where shopping meets convenience, quality, and trust.

            We started with a simple mission — to bring you products you’ll love, at prices you’ll appreciate, with service you can rely on. Our team carefully curates every item in our store, ensuring that it meets our high standards for quality, style, and value.

            Whether you’re looking for the latest trends, everyday essentials, or unique finds, we’re here to make your shopping experience seamless and enjoyable. From browsing to checkout, we’ve designed every step with you in mind.

            At [Your Store Name], we believe in:

            Quality First – Only products we’d use ourselves.

            Customer Happiness – Your satisfaction is our priority.

            Secure Shopping – Safe payments and trusted delivery partners.

            We’re more than just a store — we’re your partner in finding products that make life better. Thank you for choosing us and being part of our journey.

            Happy Shopping!
            — The [Khoeun Stor] Team</p>
        </div>
      </div>
    </div>
  )
}

export default About
