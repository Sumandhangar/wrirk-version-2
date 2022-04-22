import React from 'react'
import Image from "next/image"


import implementation from "../../images/services/implementation.png"
import research_paper from "../../images/services/research-paper.png"
import research_proposal from "../../images/services/research-proposal.png"
import synopsis from "../../images/services/synopsis.png"
import thesis_writing from "../../images/services/thesis-writing.png"
import bibliometric from "../../images/services/service2.png"

import stats1 from "../../images/stats/fig-1.png"
import stats2 from "../../images/stats/fig-2.png"
import stats3 from "../../images/stats/fig-3.png"

import Wheel from './Wheel'
import Link from 'next/link'

const Services = () => {
    return (
        <>
            <div className="container-fluid mt-5 stats-top" >
                <div className="row text-center pt-5 pb-5 stats-container ">
                    <div className="col-md-4" style={{borderRight:"2px solid yellow"}}>
                        {/* <p className="count">500+</p> */}
                        <Image src={stats1} width={170} height={170}></Image>
                        {/* <p className="title">Alumni of <br />University</p> */}
                    </div>
                    <div className="col-md-4" style={{borderRight:"2px solid yellow"}}>
                        <Image src={stats2} width={170} height={170}></Image>
                        {/* <p className="title">Successful Projects <br />Delivered</p> */}
                    </div>
                    <div className="col-md-4">
                        <Image src={stats3} width={170} height={170}></Image>
                        {/* <p className="title">Customers</p> */}
                    </div>
                </div>
                <Wheel />
            </div>

            {/* ---------------------------- */}
            <div className="container-fluid bg-info">
                <div className="row">
                    <div className="col-md-12 col-lg-4 services">
                        <div className="services-heading">
                            <h2>Unbeatable <span>Services</span></h2>
                            <p>Get scratch to hatch services as per your requirement.</p>
                            <Link href="/services"><button className="request-button shadow mb-4" style={{background:"#f8cc08",width:"52%"}}>Explore More..</button></Link>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-8 pt-5 pb-5">
                        <div className="row">
                            <div className="col-md-4 services-box">
                                <div className="images"><Image src={research_proposal} alt='image' className="w-100" width={150}
                                    height={140} /></div>
                                <h3>Research Proposal</h3>
                                <p>In order to be considered for a PhD post, most institutions demand that candidates submit a research plan. The most difficult part of writing a research proposal for PhD is deciding on an original idea and substance. </p>
                            </div>
                            <div className="col-md-4 services-box">
                                <div className="images"><Image src={synopsis} alt='image' className="w-100" width={150}
                                    height={140} /></div>
                                <h3>Synopsis</h3>
                                <p>Synopsis is a brief description of what you want to study, why it is important and how you intend to perform your research. Your research strategy is summarized in this paper, which must be provided prior to beginning your actual research activity.</p>
                            </div>
                            <div className="col-md-4 services-box">
                                <div className="images"><Image src={thesis_writing} alt='image' className="w-100" width={150}
                                    height={140} /></div>
                                <h3>Thesis writing</h3>
                                <p>The distinctiveness of PHD thesis is one of its primary strengths. It is essential for academics to have a thesis writing, as opposed to any other kind of research effort. Not only is it important to get a PhD, but also to have a significant impact in the topic of study you choose to specialize in. Having a PHD thesis which is full of new discoveries and ideas for solving problems is highly prized by universities.</p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4 services-box">
                                <div className="images"><Image src={research_paper} alt='image' className="w-100" width={150}
                                    height={140} /></div>
                                <h3>Research <br/>Paper</h3>
                                <p>A research paper is your work and analysis on your preferred topic, finally providing the world with your methods of solving a problem, or viewing the world through your insightful lenses. A research paper is a milestone of success achieved after long nights of researching.</p>
                            </div>
                            <div className="col-md-4 services-box">
                                <div className="images"><Image src={implementation} alt='image' className="w-100" width={150}
                                    height={140} /></div>
                                <h3>Research <br/>Implementation</h3>
                                <p>Implementation is a very important part of a research paper. Implementation research is itself a very deep field, in which we try to know how well it is executed, and ultimately determine the success of a Research.
                                </p>
                            </div>
                            <div className="col-md-4 services-box">
                                <div className="images"><Image src={bibliometric} alt='image' className="w-100" width={150}
                                    height={140} /></div>
                                <h3>Bibliometric <br/>Analysis</h3>
                                <p>Bibliometric analysis is described as the application of statistical techniques to assess the bibliometric study publishing data like as books to journal articles and related materials. It has been frequently utilised to demonstrate the links of study fields using quantitative approaches. Bibliometrics is the study of the relationships among the publications generated by people or organisations through time and space.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services