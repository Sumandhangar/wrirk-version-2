import React from 'react'
import Image from 'next/image'
import Typewritter from '../../images/services/service-hero.png'

import implementation from "../../images/services/implementation.png"
import research_paper from "../../images/services/research-paper.png"
import research_proposal from "../../images/services/research-proposal.png"
import synopsis from "../../images/services/synopsis.png"
import thesis_writing from "../../images/services/thesis-writing.png"
import bibliometric from "../../images/services/service2.png"
const Hero = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row banner">
                    <div className="col-md-8 col-lg-7 banner-content">
                        <div className="content">
                            <h1>We can change your Imagination into Research!</h1>
                            <p className='mt-2'>We deliver outstanding outcomes across the board in terms of academic
                                research
                                writing services</p>
                            <button type="button" className="mt-3 btn btn-lg shadow">Request your topic</button>
                        </div>
                    </div>
                    <div className="hero-right col-md-4 col-lg-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className=''>
                            <Image src={Typewritter} className='w-100' />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ background: "#268FA7" }}>
                <div className="row">
                    <div className="col-12">
                        <h1 className="heading2">Our Services</h1>
                    </div>
                </div>
                <div className="row  border-bottom">
                    <div className="col-lg-4 hovering border-top-0 border-right-0 border-left-0">
                        <div className="content1">
                            <Image src={research_proposal} className="img-fluid  w-75" />
                            <div>
                                <h5>Research Proposal
                                </h5>
                                <p>A Thesis Writing is a kind of document which is required in
                                    support... </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 hovering border-top-0">
                        <div className="content1">
                            <Image src={synopsis} className="img-fluid  w-75" />
                            <div>
                                <h5>Synopsis</h5>
                                <p>A Thesis Writing is a kind of document which is required in
                                    support... </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 hovering border-top-0 border-left-0 border-right-0">
                        <div className="content1">
                            <Image src={thesis_writing} className="img-fluid  w-75" />
                            <div>
                                <h5>Thesis writing</h5>
                                <p>A Thesis Writing is a kind of document which is required in
                                    support... </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row pb-5 border-bottom">
                    <div className="col-lg-4 hovering border-top-0 border-right-0 border-left-0 border-bottom-0">
                        <div className="content1">
                            <Image src={research_paper} className="img-fluid  w-75" />
                            <div>
                                <h5>Research
                                    Paper</h5>
                                <p>A Thesis Writing is a kind of document which is required in
                                    support... </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 hovering border-bottom-0 border-top-0">
                        <div className="content1">
                            <Image src={implementation} className="img-fluid  w-75" />
                            <div>
                                <h5>Research
                                    Implementation</h5>
                                <p>A Thesis Writing is a kind of document which is required in
                                    support... </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 hovering border-top-0 border-left-0 border-right-0  border-bottom-0">
                        <div className="content1">
                            <Image src={bibliometric} className="img-fluid  w-75" />
                            <div>
                                <h5>Bibliometric
                                    Analysis</h5>
                                <p>A Thesis Writing is a kind of document which is required in
                                    support... </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid request-section">
                <div className="row content6-row">
                    <div className="col-lg-4">
                        <div className="content3">
                            <h1>Lets Get Your Research Begin</h1>
                        </div>
                    </div>
                    <div className="col-lg-8 content4">
                        <p>
                            The collection, organization and analysis of information to increase understanding of a topic or
                            issue. The
                            collection, organization and analysis of information to increase understanding of a topic or
                            issue. The
                            collection, organization and analysis of information to increase understanding of a topic or
                            issue. The
                            collection,
                        </p>
                        <button type="button" className=" btn btn-lg shadow">Request a quote</button>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ background: "#268FA7" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="content5">
                            <h3>Present To Your Service</h3>
                            <h1>Stay in the loop</h1>
                            <p>
                                Create custom landing pages with Shades that convert more visitors than any website-no coding
                                required.
                            </p>
                            <div className="bottons d-flex">
                                <button type="button" className=" btn btn-lg bg-light shadow  mr-lg-3 mr-md-3 mr-2">Enter your
                                    email</button>
                                <button type="button" className=" btn btn-lg shadow">Get Started</button>
                            </div>
                            <span>Trusted by over 50,000+ customers</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid request-section">
                <div className="row content6-row">
                    <div className="col-md-4">
                        <div className="content6">
                            <h1>Research<br />Domain</h1>
                        </div>
                    </div>
                    <div className="col-md-8 content7">
                        <div className="box">
                            <p>
                                The collection, organization and analysis of information to increase understanding of a topic or
                                issue. The
                                collection, organization and analysis of information to increase understanding of a topic or
                                issue. The
                                collection,
                            </p>
                            <button type="button" className=" btn btn-lg shadow">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero