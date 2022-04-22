import Link from 'next/link'
import React, { useState } from 'react'
import axios from 'axios';
import Swal from 'sweetalert2'

const Hero = () => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [mob, setMob] = useState("");
    const [loading, setloading] = useState(true);

    const [looking,setLooking]=useState("");
    const [me,setMe]=useState("");

   
    // submitting formdf
    const handleSubmit = (event) => {

        event.preventDefault();
        const postData = { username, email, message, mob };

        axios.post('../.netlify/functions/contactform', postData, setloading(true)).then(response => {
            setloading(false);
            Swal.fire(
                'Form Submitted Successfully !',
                'We will get back you Soon!',
                'success'
            )

            // reseting form values
            event.target.reset();

        }).catch(error => {
            setloading(false);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please Try Again Later or Check your Internet Connection',
            })
        });
    }
    const [data, setdata] = useState(true);

    return (
        <>
            <div className="container-fluid bg-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <div className="contact-form">
                                <h1>Get in touch <br /><span style={{ fontSize: "35px" }}>with our</span><br /><span style={{ color: "#6EAC55", fontSize: "50px" }}> Research Writers</span> <span style={{ fontSize: "35px" }}>for </span><br /> <span style={{ color: "yellow", fontSize: "50px" }}>prompt response</span></h1>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-7 m-0 p-0">
                            <form onSubmit={handleSubmit}>
                                <div className="form-contact bg-white mt-5 mb-5 pt-5 pb-5 pl-lg-5 pr-lg-5 pl-md-5 pr-md-5 pl-2 pr-2">
                                    <p className="topic">I am a ...</p>
                                    <div className="options">
                                        <div className={`btn btn-sm btn-lg pl-lg-5 pr-lg-5 pl-md-5 pr-md-5 pl-2 pr-2 ${me==="student" ? 'option-select-btn':'option-btn'} shadow`} onClick={()=>{
                                                setMe("student");
                                        }}>Student </div>
                                        <div className={`btn btn-sm btn-lg pl-lg-5 pr-lg-5 pl-md-5 pr-md-5 pl-2 pr-2 ${me==="professional" ? 'option-select-btn':'option-btn'} shadow`} onClick={()=>{
                                                setMe("professional");
                                        }}>Job Professional </div>
                                        <div className={`btn btn-sm btn-lg pl-lg-5 pr-lg-5 pl-md-5 pr-md-5 pl-2 pr-2 ${me==="other" ? 'option-select-btn':'option-btn'} shadow`} onClick={()=>{
                                                setMe("other");
                                        }}>Others</div>
                                    </div>

                                    <p className="topic mt-4">I am looking for ...</p>
                                    <div className="options">
                                        <div className={`btn btn-sm btn-lg pl-lg-5 pr-lg-5 pl-md-5 pr-md-5 pl-2 pr-2 ${looking==="writing" ? 'option-select-btn':'option-btn'} shadow`} onClick={()=>{
                                            setLooking("writing");
                                        }}>Writing Assistance</div>
                                        <div className={`btn btn-sm btn-lg pl-lg-5 pr-lg-5 pl-md-5 pr-md-5 pl-2 pr-2 ${looking==="phd" ? 'option-select-btn':'option-btn'} shadow`} onClick={()=>{
                                            setLooking("phd");
                                        }}>PhD Admission</div>
                                        <div className={`btn btn-sm btn-lg pl-lg-5 pr-lg-5 pl-md-5 pr-md-5 pl-2 pr-2 ${looking==="job" ? 'option-select-btn':'option-btn'} shadow`} onClick={()=>{
                                            setLooking("job");
                                        }}>Job</div>
                                    </div>
                                    <div className="form-group mt-5 pl-2">
                                        <label className="pl-2">Name</label>
                                        <input type='text' className="form-control" placeholder='Full name' onChange={(e)=>{
                                            setUserName(e.target.value)
                                        }}/>
                                    </div>
                                    <div className="form-group mt-lg-3 mt-md-5 mt-3 pl-2">
                                        <label className="pl-2">Email</label>
                                        <input type='email' className="form-control" required placeholder='Please enter a valid mail id' onChange={(e)=>{
                                            setEmail(e.target.value);
                                        }}/>
                                    </div>
                                    <div className="form-group mt-lg-3 mt-md-5 mt-3 pl-2">
                                        <label className="pl-2">Contact no.</label>
                                        <input type='text' className="form-control" minLength={10} maxLength={10} placeholder='Mobile Number' onChange={(e)=>{
                                            setMob(e.target.value);
                                        }}/>
                                    </div>
                                    <div className="form-group mt-lg-3 mt-md-5 mt-5 pl-2">
                                        <textarea type='textarea' className="form-control mt-lg-4" placeholder='Please mention your concern over here' style={{ height: "38px" }} onChange={(e)=>{
                                            setMessage(e.target.value);
                                        }}></textarea>
                                    </div>
                                    <button className="btn btn-lg shadow pl-lg-4 pr-lg-4 pl-md-4 pr-md-4 pl-3 pr-3 mt-lg-5 mt-md-5" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ background: "rgb(6, 142, 184)" }}>
                <div className="row pt-5 pb-5">
                    <div className="col-md-5 research-domain">
                        <h1> Our<br /> Values</h1>
                    </div>
                    <div className="col-md-7 contact-right-column">
                        <p>Wrirk caters to the research requirements of every experienced researcher. We deliver outstanding outcomes across the board in terms of academic research writing services. We facilitate the scholars by providing the writing assistance services via state-of-art technology for enabling scholars to get seamlessly &amp; effortlessly writing assistance by us </p>
                        <Link href="/about-us"><button className="btn btn-lg shadow pl-4 pr-4" type="submit">Learn More</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero