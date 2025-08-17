import React from 'react'
import starburst from "/starburst.png";
const Hero = () => {
  return (
    <div className='flex align-center flex-col justify-center p-8'>
          <div className='flex flex-1 flex-col items-center justify-center mt-5'> 
            <h1 className="text-4xl font-semibold text-center font-inter"> Lorem ipsum dolor sit</h1>
            <p className="mt-4 text-lg text-center font-inter">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
        <div className='flex flex-1 flex-col items-center justify-center mt-5'>
               <img src={starburst} alt="Starburst" className="w-64 h-64" />
        </div>
      
   
    </div>
  )
}

export default Hero