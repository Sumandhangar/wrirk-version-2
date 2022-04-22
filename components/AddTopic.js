import axios from "axios";
import React from "react"
import { useState } from "react";
import Recaptcha from "react-recaptcha";
import Swal from "sweetalert2";
import { Button, Modal } from "react-bootstrap";
import { ClassicSpinner } from "react-spinners-kit";
import Head from "next/head";

const AddTopic = (props) => {

  // attatching captcha
  const [verify, setIsVerified] = useState();
  const [button1, setbutton1] = useState();

  const callback = function () {
  }

  const verifyCallback = function () {
    setIsVerified(true);
    setbutton1(false);
  }
  const expiredCallback = function () {
    setbutton1(true);
  }

  // form submission
  const [requester_name, setrequester_name] = useState();
  const [requester_mobile, setrequester_mobile] = useState();
  const [research_title, setresearch_title] = useState();
  const [requester_email, setrequester_email] = useState();
  const [research_domain, setresearch_domain] = useState();

  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const handleSubmit = (event) => {

    event.preventDefault();
    const postData = { requester_name, requester_mobile, research_title, requester_email, research_domain };

    if (verify) {
      axios.post('https://repo.wrirk.com/api/request-topic', postData, setloading(true), setbutton1(true)).then(response => {
        event.target.reset();
        setloading(false);
        props.handleClose();
        Swal.fire(
          'New Topic Request Submitted Successfully !',
          'We will get back you Soon!',
          'success'
        )
      }).catch(error => {
        setloading(false);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong! Please Try Again Later or Check your Internet Connection',
        })
      });
    }
    else {
      seterror("Please Fill Captcha");
    }

  }

  const close = () => props.handleClose();

  return (
    <>
      <Head>
        <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
      </Head>

      {error ? (
        <div className="alert alert-danger">
          {error}
        </div>
      ) : (
        <></>
      )}
      <form method="post" onSubmit={handleSubmit}>
        <div className="row add-topic">
          <div className="form-group col-md-12 mt-3 mb-0">
            {/* <label for="title1" className="col-lg-4 col-md-3 col-sm-2 px-0 my-1 control-label col-form-label">Research Title/Area:</label> */}
            <div className="col-sm-8 col-md-12 new-topic">
              <input type="text" className="form-control" id="title"
                placeholder="Your Research Title/Area" name="title" onChange={(e) => {
                  setresearch_title(e.target.value);
                }} required />
            </div>
          </div>
          <div className="form-group col-md-12 mt-3 mb-0">
            {/* <label for="domain1" className="col-lg-4 col-md-3 col-sm-2 px-0 my-1 control-label col-form-label">Research Domain/Keyword:</label> */}
            <div className="col-sm-8 col-md-12 new-topic">
              <input type="text" className="form-control" id="domain"
                placeholder="Your Research Domain/Keyword" name="domain" onChange={(e) => {
                  setresearch_domain(e.target.value);
                }} required />
            </div>
          </div>
          <div className="form-group col-md-12 mt-3 mb-0">
            {/* <label for="name" className="col-lg-4 col-md-3 col-sm-2 px-0 my-1 control-label col-form-label">Your
              Name: </label> */}
            <div className="col-sm-8 col-md-12 new-topic">
              <input type="text" className="form-control" id="name" name='name'
                placeholder="Your Name" onChange={(e) => {
                  setrequester_name(e.target.value);
                }} required />
            </div>
          </div>

          <div className="form-group col-md-12 mt-3 mb-0">
            {/* <label for="contact" className="col-lg-4 col-md-3 col-sm-2 px-0 my-1 control-label col-form-label">Contact No.</label> */}
            <div className="col-sm-8 col-md-12 new-topic">
              <input type="tel" className="form-control" id="contact"
                placeholder="Your Contact Number" name="contact" onChange={(e) => {
                  setrequester_mobile(e.target.value);
                }} required />
            </div>
          </div>
          <div className="form-group col-md-12 mt-3 mb-0">
            {/* <label for="contact" className="col-lg-4 col-md-3 col-sm-2 px-0 my-1 control-label col-form-label">Email Address</label> */}
            <div className="col-sm-8 col-md-12 new-topic">
              <input type="email" className="form-control" id="email"
                placeholder="Your Email Address" name="email" onChange={(e) => {
                  setrequester_email(e.target.value);
                }} required />
            </div>
          </div>
          <div className="form-group col-md-12 mt-3 mb-0">

          </div>
          <div className="form-group col-md-12 mt-3 mb-0">
            <Recaptcha
              sitekey='6LcWLmMcAAAAAPPG9YdIdtl-UpnuG522HY2HmAvf'
              render="explicit"
              onloadCallback={callback}
              verifyCallback={verifyCallback}
              expiredCallback={expiredCallback}
            />
          </div>
          {loading ?
            <div className="form-group col-md-12 mt-3 mb-0">
              <div className="col-sm-12 text-right my-3">
                <div className="d-flex" style={{ justifyContent: "space-between" }}>
                  <div>
                    <ClassicSpinner color="#0490bd" />
                  </div>
                </div>
              </div>
            </div>
            : ' '}
        </div>
        <Modal.Footer className="mt-4">
          <Button type="submit" className="btn grad-btn border-0 font-weight-bold">Submit</Button>
          <Button className="btn btn-danger font-weight-bold" onClick={close}>Close</Button>
        </Modal.Footer>
      </form>
    </>
  )
}
export default AddTopic;