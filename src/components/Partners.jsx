import React from 'react'
import img01 from "../assets/01.jpeg"
import img02 from "../assets/02.jpeg"
import img03 from "../assets/03.jpeg"
import img04 from "../assets/04.jpeg"
import img05 from "../assets/05.jpeg"
import img06 from "../assets/06.jpeg"
import img07 from "../assets/07.jpeg"
import img08 from "../assets/08.jpeg"
import img09 from "../assets/09.jpeg"
import img10 from "../assets/10.jpeg"
import img11 from "../assets/11.jpeg"
import img12 from "../assets/12.jpeg"
import img13 from "../assets/13.jpeg"
import img14 from "../assets/14.jpeg"
import img15 from "../assets/15.jpeg"
import img16 from "../assets/16.jpeg"
import img17 from "../assets/17.jpeg"

// सर्व images एक array मध्ये import


















const Partners = () => {
  const images = [
    img01, img02, img03, img04, img05, img06, img07, img08, img09,
    img10, img11, img12, img13, img14, img15, img16, img17
  ]

  return (
    <div className='py-10 bg-white'>
      <div className='text-center'>
        <h1 className='text-3xl lg:text-4xl font-bold mb-4 text-red-500'>Our Specialities</h1>
        <p className='text-sm lg:text-xl'>
          At Kaveri Hotel, we serve a wide range of authentic and mouth-watering dishes. 
          Here are some of our most loved specialities.
        </p>

        <div 
         style={{
          maskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))',
          WebkitMaskImage: 'linear-gradient(to right, hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 10%, hsl(0 0% 0% / 1) 90%, hsl(0 0% 0% / 0))',
        }}
        className='lg:max-w-6xl mx-auto mt-10 py-2 flex gap-4 flex-nowrap overflow-hidden'>

          {/* First Row */}
          <div className='flex gap-4 loop-scroll'>
            {images.map((img, index) => (
              <div key={index} className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                <img src={img} alt={`Speciality ${index + 1}`} />
              </div>
            ))}
          </div>

          {/* Duplicate Row for infinite scroll effect */}
          <div className='flex gap-4 loop-scroll'>
            {images.map((img, index) => (
              <div key={`dup-${index}`} className='shadow-orange-200 shadow-md p-4 w-80 bg-white'>
                <img src={img} alt={`Speciality ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners
