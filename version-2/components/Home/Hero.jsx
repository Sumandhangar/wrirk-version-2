import React, { useEffect } from 'react'
import Typewriter from "typewriter-effect";
import Typewritter from '../../images/typewriter.png'
import Image from 'next/image'
import signIn from "../../images/sign-in.png"
import Search from './search/Index'
export const searchIndices = [{ name: `topics`, title: `Pages` }]
const Hero = () => {

  useEffect(()=>{

  },[])
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7 content-column mt-5">
          <div className="content">
            <h1 style={{ color: "#474747" }}><span style={{ color: 'rgb(6, 142, 184)' }}>Hire</span> Our<br /><span style={{ color: 'rgb(6, 142, 184)' }}>PhD</span> Research Writers
              <Typewriter

                options={{
                  autoStart: true,
                  loop: true,
                  strings: [
                    '"Problem Formulation"', '"Abstract Writing"', '"Research Methodology"', '"Analysis"', '"Thesis Writing"', '"Paper Writing"',
                  ],
                }}
              /></h1>
            <div className="topic-name search-input-algolia" data-sal='slide-up' data-sal-duration="800">
            <Search indices={searchIndices} />
            </div>
            {/* <div className="input-container">
              <i className="fa fa-search icon pt-4"></i>
              <input
                className="input-field"
                type="search"
                placeholder="Type your research topic"
              />
              <button type="submit" className="submit">Search</button>
            </div> */}
            <p className="subheading">Using zero plag algorithm wrirk provides you a topic defining your research need.</p>
          </div>
        </div>
        <div className="col-md-5" style={{ height: "400px" }}>
          <Image src={Typewritter} alt='typewriter' width={600} height={700} />
        </div>

        <div className='col-12 pl-5 pr-5 topic-button'>
          <p className="message p-0 mt-0">Get topic template for presentation </p>

          <button className="request-button shadow m-0" data-toggle="modal" data-target="#exampleModal">Free Download Topic Template</button>
        </div>

      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Please Make sure Sign In</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <Image src={signIn}></Image>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero