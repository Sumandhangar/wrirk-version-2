import React from 'react'

const Topics = () => {
    return (
        <div className="container-fluid pb-5 mb-5 mt-5">
            <div className="row">
                <div className="col-md-12 slider-boxes">
                
                    <div className="box-left">
                        <h2>Wednesday</h2>
                        <p>Jan 7th 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos, quam pariatur iure alias adipisci deleniti exercitationem ipsum hic. Eum quaerat est, animi rem natus nulla fugiat hic labore in?</p>
                        <button className="btn slider-boxes-button text-info"><strong> Read more</strong></button>
                    </div>
                    <div className="box-mid">
                        <h2>Wednesday</h2>
                        <p>Jan 7th 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos, quam pariatur iure alias adipisci deleniti exercitationem ipsum hic. Eum quaerat est, animi rem natus nulla fugiat hic labore in?</p>
                        <button className="btn slider-boxes-button text-info"><strong> Read more</strong></button><br />
                        <button className="btn video-paly-button rounded-circle p-2 mt-1"><i className="fa fa-solid fa-play text-white fa-2x"></i></button>
                    </div>
                    <div className="box-right">
                        <h2>Wednesday</h2>
                        <p>Jan 7th 2022</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quos, quam pariatur iure alias adipisci deleniti exercitationem ipsum hic. Eum quaerat est, animi rem natus nulla fugiat hic labore in?</p>
                        <button className="btn slider-boxes-button text-info"><strong> Read more</strong></button>
                    </div>
                </div>
                <div className="col-md-12 mt-5 d-lg-flex d-md-flex d-none" style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <button className="btn-lg shadow pl-4 pr-4 slider-button border-0" style={{ borderRadius: '30px' }}>Session</button>
                    <button className="btn-lg shadow pl-4 pr-4 slider-button border-0" style={{ borderRadius: '30px' }}>Previously Searched</button>
                    <button className="btn-lg shadow pl-4 pr-4 slider-button border-0" style={{ borderRadius: '30px' }}>Meet Alumni</button>
                    <button className="btn-lg btn-info bg-info text-white shadow pl-4 pr-4 slider-button border-0" style={{ borderRadius: '30px' }}>More</button>
                </div>
            </div>
        </div>
    )
}

export default Topics