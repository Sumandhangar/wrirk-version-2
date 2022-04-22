import React from 'react'
import Image from 'next/image'
import Typewritter from '../../images/typewriter.png'
const Hero = () => {
  return (
   <>
   <div className="container-fluid">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-6 blog-baneer-column-left">
            <h1>BLOG</h1>
            <p>
              We deliver outstanding outcomes across the board in terms of
              academic research writing services.
            </p>
          </div>
          <div className="col-md-6">
            <Image src={Typewritter} className="w-100" />
          </div>
        </div>
      </div>
    </div>


   </>
  )
}

export default Hero