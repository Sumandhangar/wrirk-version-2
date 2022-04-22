
import Image from 'next/image'
import Logo from '../images/logo.svg'
const Footer = () => {
  https://github.com/Sumandhangar/wrirk-version-2.git
  return (
    <>
      <div className="container-fluid text-white pt-3 pb-5" style={{ background: '#1E2833' }}>
        <div className="container">
          <div className="row pb-2" style={{ borderBottom: '1px solid #ffffff4d' }}>
            <div className="col-md-4 d-lg-block d-md-block d-flex justify-content-center">
              <div className="mt-3" style={{ height: '80px', width: '80px' }}>
                <Image src={Logo} alt='logo' className="w-100" />
              </div>
            </div>
            <div className="col-sm-8 d-flex justify-content-center align-items-center">
              <div className="footer-row-1 d-lg-flex d-md-flex d-block">
                <p>Ready to get Started?</p>
                <button className="shadow" data-toggle="modal" data-target="#requestTopic">Get Started</button>
              </div>
            </div>
          </div>
          <div className="row footer-row-2 pt-5">
            <div className="col-xl-3 col-lg-3 col-md-3 col-6 col-xs-6 order-lg-1 order-md-1 order-4">
              <p>Subscribe to our newsletter</p>
              <div className="input-group mb-2 mr-sm-2">
                <input type="email" className="form-control footer-email border-left-0 border-right-0 border-top-0 border-bottom-1 mt-2" placeholder="Email address" style={{ background: 'transparent', borderRadius: '0',border:"1px solid",color:"#FFFFFF",opacity:"0.5" }} />
                <div className="input-group-prepend">
                  <div className="input-group-text border-0" style={{ borderRadius: '5px 5px 0 0',background:"#268fa7" }}><i className="fa fa-arrow-right text-white"></i></div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-6 pl-lg-4 pl-md-4 pl-0 order-lg-2 order-md-2 order-1">
              <p className="footer-heading">Services</p>
              <ul className="">
                <li><a href="#">Wrirk Premium</a></li>
                <li><a href="#">Thesis Writing</a></li>
                <li><a href="#">Paper Writing</a></li>
                <li><a href="#">Publication Assistance</a></li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-6 pl-lg-4 pl-md-5 pl-0 order-lg-3 order-md-3 order-2">
              <p className="footer-heading">About Us</p>
              <ul className="">
                <li><a href="#">Our Story</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Research Community</a></li>
                
              </ul>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-6 pl-lg-4 plmd-4 pl-0 order-lg-4 order-md-4 order-3">
              <p className="footer-heading">Help</p>
              <ul className="">
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div className="row footer-row-3 pt-5">
            <div className="col-md-6 col-lg-6">
              <ul className="d-flex">
                <li><a href="#">Terms & Conditions</a></li>
                <li className="ml-lg-3 ml-md-5 ml-2"><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 text-right text-white">
              <div className="social-icons" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                <span><a href='https://www.facebook.com/wrirk1'><i className="fa fa-facebook" style={{ fontSize: '25px' }}></i></a></span>
                <span><a href='https://www.twitter.com'><i className="fa fa-twitter" style={{ fontSize: '25px' }}></i></a></span>
                <span><a href="https://www.instagram.com/wrirk_"><i className="fa fa-instagram" style={{ fontSize: '25px' }}></i></a></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer