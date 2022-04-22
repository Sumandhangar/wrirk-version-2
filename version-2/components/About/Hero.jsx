import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 about-us text-center">
                        <div className="about-us-box">
                            <h1 className="top-heading">Our Value</h1>
                            <h1 className="mid-heading">The right choice always makes a difference</h1>
                            <p>We deliver outstanding outcomes across the board in terms of academic research writing services, we thrive towards maintaining the integrity of research.</p>
                            <button className="btn shadow mr-2" style={{ background: "#268FA7", color: "#fff" }}>Get Started</button>
                            <Link href="/services"><button className="btn shadow">Explore More</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid text-white who-we-are" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
                <div className="row">
                    <div className="col-md-5 right-border "style={{fontSize:"4rem"}}>
                        <h1>Who <br />we are</h1>
                    </div>
                    <div className="col-md-7 right-column">
                        <p>Being equipped and completely prepared with a team of 200 professional, researcher&apos;s and analytic professionals internationally, &quot;WIRIK&quot; in the shape of a strong team guide&apos;s and assist every scholar with individual attention to enable them enhancing their abilities and obtaining more understanding of the relevant research area and specific domain.
                            We have established a set of guidelines for hiring PhD holders with eight or more years of experience as professors, researchers in private or government labs, so that scholars may feel at ease and flexible during their studies. A broad range of writing demands may be met by our Thesis/Research paper/Review paper/Research proposal writers.</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid text-center text-white" style={{ background: "#268FA7" }}>
                <div className="row">
                    <div className="col-md-12">
                        <p className="about-peragraph">&quot;From the initial stage of Research Topic selection<br /> to the final stage of  defending a thesis &quot;</p>
                    </div>
                </div>
                <div className="row text-center pt-5 pb-5">
                    <div className="col-md-3">
                        <p className="count">150+</p>
                        <p className="title2">Alumni of <br />University</p>
                    </div>
                    <div className="col-md-3">
                        <p className="count">300+</p>
                        <p className="title2">Happy <br />Clients</p>
                    </div>
                    <div className="col-md-3">
                        <p className="count">150+</p>
                        <p className="title2">Alumni of <br />University</p>
                    </div>
                    <div className="col-md-3">
                        <p className="count">300+</p>
                        <p className="title2">Happy <br />Clients</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid what-we-do" style={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
                <div className="row">
                    <div className="col-md-12 col-lg-4 services">
                        <div className="services-heading-about">
                            <h2>What do<br />we offer</h2>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly.</p>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-8 pt-5 pb-5">
                        <div className="row services-box-1">
                            <div className="col-md-4 services-box pt-lg-5 pb-lg-5 pt-md-5 pb-md-5 pt-2 pb-2 service-box-left">
                                <h3>Assured acceptance</h3>
                                <p>Get proficient research assistance till acceptance...</p>
                            </div>
                            <div className="col-md-4 services-box pt-lg-5 pb-lg-5 pt-md-5 pb-md-5 pt-2 pb-2 service-box-mid">
                                <h3>90% Plag Free</h3>
                                <p>Get plagarism validation through &quot;Turnitin&quot; ...</p>
                            </div>
                            <div className="col-md-4 services-box pt-lg-5 pb-lg-5 pt-md-5 pb-md-5 pt-2 pb-2 service-box-right">
                                <h3>Ontime Delivery</h3>
                                <p>Our effective requirement communication ensures ontime work delivery...</p>
                            </div>
                        </div>
                        <div className="row services-box-2">
                            <div className="col-md-4 services-box pt-lg-5 pb-lg-5 pt-md-5 pb-md-5 pt-2 pb-2 service-box-left">
                                <h3>Research Integrity</h3>
                                <p>Performing research in a way that permits everyone to have faith and trust in the research methods and results...</p>
                            </div>
                            <div className="col-md-4 services-box pt-lg-5 pb-lg-5 pt-md-5 pb-md-5 pt-2 pb-2 service-box-mid">
                                <h3>Grammerly Index</h3>
                                <p>Grammarly detects and corrects more problems in writing than a standard proofreading and grammar checker....</p>
                            </div>
                            <div className="col-md-4 services-box pt-lg-5 pb-lg-5 pt-md-5 pb-md-5 pt-2 pb-2 service-box-right">
                                <h3>18*7 Client Support</h3>
                                <p>Scholar can get technical support and raise an issue ticket for his/her concern...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid text-white" style={{background:"#268FA7"}}>
                <div className="row">
                    <div className="col-md-12 text-center ">
                        <p className="short-discription">In publishing and graphic design, Lorem ipsum is a placeholder text commonly.relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is</p>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default Hero