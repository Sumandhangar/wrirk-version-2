import React from 'react'
import Image from 'next/image'
// import BookReader from '../../images/book-reader.png'
import BookReader from "../../images/call-action.png"
const CallToAction = () => {
  return (
    <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <Image src={BookReader} alt='image' className="w-100" />
          </div>
          <div className="col-md-12 col-lg-6 find-out">
            <h1>Find out your <span>university</span></h1>
            <p>In research Journey you are not alone, wrirk has already build an  ecosystem of assistance in your surrounding.</p>
            <a href='https://erbhupendrasingh69.wixsite.com/my-site-5' ><button className="shadow">Find mine</button></a>
          </div>
        </div>
      </div>
  )
}

export default CallToAction