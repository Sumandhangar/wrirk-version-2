import React from 'react'
import Image from 'next/image'
import user1 from "../../images/users/user1.png"
import user2 from "../../images/users/user2.png"

import user3 from "../../images/users/user3.png"
import undraw from "../../images/scholar-say.png"
import Slider from "react-slick";
import alumni1 from "../../images/alumni-1.png"


const Section1 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container-fluid undraw">
      <div className="row">
        <div className="col-md-4 pt-5">
          <Image src={undraw} alt='image' width={350} height={800} />
        </div>
        <div className="col-md-8">

          <div className="user-heading">
            <h2>What our <span>scholars</span><br /> have to<br /> &quot;Say&quot;</h2>
          </div>
          <div className="col-md-12 slider-boxes mb-5 carousel-inner" >

            <div className="container-wala">
              <input type="radio" name="slider" id="item-1" checked/>
                <input type="radio" name="slider" id="item-2"/>
                  <input type="radio" name="slider" id="item-3"/>
                    <div className="cards">
                      <label className="card" htmlFor="item-1" id="song-1">
                        <Image className='img-wala' src={alumni1} alt="song"/>
                      </label>
                      <label className="card" htmlFor="item-2" id="song-2">
                      <Image className='img-wala' src={alumni1} alt="song"/>
                      </label>
                      <label className="card" htmlFor="item-3" id="song-3">
                      <Image className='img-wala' src={alumni1} alt="song"/>
                      </label>
                    </div>
                   
                  </div>
                </div>
            </div>
          </div>
         


        </div>
        )
}

        export default Section1