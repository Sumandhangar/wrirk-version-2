import React from 'react'
import logo from "../images/logo.svg"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router'

const Navbar = () => {

    const route = useRouter();
    return (

        <nav className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <Image src={logo} width={100} height={100} />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavbar"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav ml-5">
                    <li className="nav-item">
                        <Link className="nav-link" href="/"><a className={`nav-link ${route.pathname == "/" ? 'active-link' : ""}`}>Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/about-us"><a className={`nav-link ${route.pathname == "/about-us" ? 'active-link' : ""}`}>About Us</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/services"><a className={`nav-link ${route.pathname == "/services" ? 'active-link' : ""}`}>Services</a></Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" href="/domains"><a className={`nav-link ${route.pathname == "/domains" ? 'active-link' : ""}`}>Domains</a></Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/blog"><a className={`nav-link ${route.pathname == "/blog" ? 'active-link' : ""}`}>Blog</a></Link>
                    </li>
                </ul>
                <div className="form ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Log In</a>
                        </li>
                        <li className="nav-item contact-link shadow">
                            <Link className="nav-link text-white" href="/contact-us"><a className="nav-link text-white">Contact Us</a></Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="modal fade" id="requestTopic" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Please Make sure Sign In</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col form-group">
                  <label >Your Research Title Area</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>

              </div>
              <div className="row">
                <div className="col form-group">
                  <label >Your Name</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              {/* <button type="button" className="btn btn-primary">Save changes</button>
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button> */}
            </div>
          </div>
        </div>
      </div>
        </nav>

    )
}

export default Navbar