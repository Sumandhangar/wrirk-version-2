import React from 'react'

const Newsletter = () => {
  return (
    <div className="container-fluid" style={{ background: 'rgb(8,133,150' }}>
        <div className="row form-section">
          <div className="col-md-6 col-lg-6">
            <div className="contact-heading">
              <h1>Need help with your research ?</h1>
              <p>Schedule a call with our expert</p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 mb-lg-0 mb-md-0 mb-5 d-flex justify-content-center align-items-right text-white">
            <div className="form mt-lg-5 mt-md-5 mt-0">
              <div className="input-group">
                <label>Name</label>
                <input type="text" placeholder="Full name" className="rounded shadow" />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Please enter a valid mail id" className="rounded shadow" />
              </div>
              <div className="input-group">
                <label>Contact no.</label>
                <input type="text" placeholder="Mobile number" className="rounded shadow" />
              </div>
              <div className="input-group mt-5">
                <input type="textarea" placeholder="Please mention your concern over here" className="border-top-0 border-left-0 border-right-0 border-bottom-2" />
              </div>
              <button type="submit" className="btn Fshadow mt-4">Submit</button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Newsletter