import React from 'react'

const Newsletter = () => {
    return (
        <div className="container-fluid">
            <div className="row form-section-about">
                <div className="col-md-6 col-lg-6">
                    <div className="contact-heading-about">
                        <h1 className="" style={{color:"black"}}>Need help with your research ?</h1>
                        <p className="" style={{color:"black"}}>Schedule a call with our expert</p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 mb-lg-0 mb-md-0 mb-5">
                    <div className="form mt-lg-5 mt-md-5 mt-0">
                        <div className="group">
                            <label style={{color:"black"}}>Name</label>
                            <input type="text" placeholder="Full name" className="shadow placeholder" />
                        </div>
                        <div className="group">
                            <label style={{color:"black"}}>Email</label>
                            <input type="email" placeholder="Please enter a valid mail id" className="shadow placeholder" />
                        </div>
                        <div className="group">
                            <label style={{color:"black"}}>Contact no.</label>
                            <input type="text" placeholder="Mobile number" className="shadow placeholder" />
                        </div>
                        <div className="group mt-5">
                            <input type="textarea" placeholder="Please mention your concern over here" className="border-top-0 border-left-0 border-right-0 border-bottom-2 placeholder" style={{borderRadius:"none"}} />
                        </div>
                        <button type="submit" className="btn mt-4 shadow">Request your topic</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter