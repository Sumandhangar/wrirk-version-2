import React from 'react'
import Image from 'next/image'
import service_image from "../../images/bg2.png"
import short_reads from "../../images/img-3.jpg"
import mail_box from "../../images/mail-box.png"
const Posts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row mb-5" style={{ justifyContent: "space-around" }}>
          {/* <div className="col-lg-3 post-name">
            <div className="row">
              <div className="col-md-12">
                <h2>Recent posts</h2>
                <div className="rounded post-info">
                  <p className="p-0 m-0 post-heading">Guidline for Data Analysis</p>
                  <p className="p-0 m-0 post-date">14/12/2021, Tues</p>
                </div>
                <div className="rounded post-info mt-lg-3 mt-md-1 mt-2">
                  <p className="p-0 m-0 post-heading">Guidline for Data Analysis</p>
                  <p className="p-0 m-0 post-date">14/12/2021, Tues</p>
                </div>
                <div className="rounded post-info mt-lg-3 mt-md-1 mt-2">
                  <p className="p-0 m-0 post-heading">Guidline for Data Analysis</p>
                  <p className="p-0 m-0 post-date">14/12/2021, Tues</p>
                </div>
                <div className="rounded post-info mt-lg-3 mt-md-1 mt-2">
                  <p className="p-0 m-0 post-heading">Guidline for Data Analysis</p>
                  <p className="p-0 m-0 post-date">14/12/2021, Tues</p>
                </div>
                <div className="rounded post-info mt-lg-3 mt-md-1 mt-2">
                  <p className="p-0 m-0 post-heading">Guidline for Data Analysis</p>
                  <p className="p-0 m-0 post-date">14/12/2021, Tues</p>
                </div>
              </div>
            </div>
            <div className="row mt-lg-5 mt-md-5 mt-3">
              <div className="col-md-12">
                <h2>Short Reads</h2>
                <ul className="categories">
                  <li>
                    <a href="#" className="category-link"
                    >Guidline for Data Analysis</a
                    >
                  </li>
                  <li>
                    <a href="#" className="category-link"
                    >Guidline for Data Analysis</a
                    >
                  </li>
                  <li>
                    <a href="#" className="category-link"
                    >Guidline for Data Analysis</a
                    >
                  </li>
                  <li>
                    <a href="#" className="category-link"
                    >Guidline for Data Analysis</a
                    >
                  </li>
                  <li>
                    <a href="#" className="category-link"
                    >Guidline for Data Analysis</a
                    >
                  </li>
                  <li>
                    <a href="#" className="category-link"
                    >Guidline for Data Analysis</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
          <div className="col-lg-10 mt-lg-0 mt-md-0 mt-3">
            <div className="indicators pb-lg-0 pb-md-4 pb-4">
              <h2 className='mb-0'>Now Trending</h2>
              <div className="mr-lg-5 mr-md-5 mr-0 next-prev-icons">
                <button
                  className="btn btn-sm rounded-circle mr-lg-3 mr-md-3 mr-2"
                  type="button"
                  data-target="#carouselExampleControls"
                  data-slide="prev"
                >
                  <i className="fa-solid fa-arrow-left text-black"></i>
                </button>
                <button
                  className="btn btn-sm rounded-circle mr-lg-3"
                  type="button"
                  data-target="#carouselExampleControls"
                  data-slide="next"
                >
                  <i style={{fontSize:"16px"}} className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </div>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner mt-lg-5">
                <div className="carousel-item active">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                          <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>

                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full <i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full<i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-lg-4 mt-md-3 mt-3">
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full <i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full<i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full <i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full<i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-lg-4 mt-md-3 mt-3">
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full <i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full<i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full <i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full<i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-lg-4 mt-md-3 mt-3">
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full <i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-item">
                        <div className="slider-img">
                          <Image src={service_image} className="img w-100" />
                        </div>
                        <div className="d-flex mt-lg-2 post-age">
                        <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>
                        </div>
                        <div className="post-discription">
                          <h2>Post Name</h2>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Dignissimos iure quisquam magnam et rem
                            aspernatur quam repellat dolor? Distinctio, nostrum
                            eius voluptatum omnis atque aut.
                          </p>
                        </div>
                        <div className="post-link">
                          <p>12 Min Read</p>
                          <a href="#" className="link"
                          >Read Full<i className="fa-solid fa-arrow-right"></i
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="request-section container-fluid pt-5 pb-5 mt-lg-5 mt-md-5 mt-3">
        <div className="container">
          <div className="row" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
            <div className="col-md-12">
              <div id="demo" className="carousel slide" data-ride="carousel">
                <div className="indicators pb-lg-0 pb-md-0 pb-4 text-white">
                  <h2>Short Reads</h2>
                  <div className="mr-lg-0 mr-md-0 mr-0 next-prev-icons">
                    <button
                      className="btn rounded-circle border mr-lg-3 mr-md-3 mr-2 text-white"
                      data-target="#demo"
                      data-slide="prev"
                    >
                      <i className="fa-solid fa-arrow-left text-black"></i>
                    </button>
                    <button
                      className="btn rounded-circle border text-white"
                      data-target="#demo"
                      data-slide="next"
                    >
                      <i className="fa-solid fa-arrow-right text-black"></i>
                    </button>
                  </div>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-lg-4 short-reads">
                        <div className="border rounded p-2 d-flex">
                          <div className="sliding-img">
                            <Image src={short_reads} className="img w-100" />
                          </div>
                          <div className="sliding-content text-white">
                            <h5>Heading</h5>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Labore maiores laboriosam voluptate!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 short-reads">
                        <div className="border rounded p-2 d-flex">
                          <div className="sliding-img">
                            <Image src={short_reads} className="img w-100" />
                          </div>
                          <div className="sliding-content text-white">
                            <h5>Heading</h5>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Labore maiores laboriosam voluptate!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 short-reads">
                        <div className="border rounded p-2 d-flex">
                          <div className="sliding-img">
                            <Image src={short_reads} className="img w-100" />
                          </div>
                          <div className="sliding-content text-white">
                            <h5>Heading</h5>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Labore maiores laboriosam voluptate!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-lg-4 short-reads">
                        <div className="border rounded p-2 d-flex">
                          <div className="sliding-img">
                            <Image src={short_reads} className="img w-100" />
                          </div>
                          <div className="sliding-content text-white">
                            <h5>Heading</h5>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Labore maiores laboriosam voluptate!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 short-reads">
                        <div className="border rounded p-2 d-flex">
                          <div className="sliding-img">
                            <Image src={short_reads} className="img w-100" />
                          </div>
                          <div className="sliding-content text-white">
                            <h5>Heading</h5>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Labore maiores laboriosam voluptate!
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 short-reads">
                        <div className="border rounded p-2 d-flex">
                          <div className="sliding-img">
                            <Image src={short_reads} className="img w-100" />
                          </div>
                          <div className="sliding-content text-white">
                            <h5>Heading</h5>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur adipisicing
                              elit. Labore maiores laboriosam voluptate!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid category-container" style={{ background: "#268FA7" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-white">
              <p className="browes">Browse The Category</p>
              <div className="category-img">
                <Image src={short_reads} className="img w-100" />
              </div>
            </div>
            <div className="col-md-6 text-white">
              <div className="category-content">
                <h1>Heading/<br />Title</h1>
                <p>
                  The collection, organization and analysis of information to
                  increase understanding of a topic or issue.The collection,
                  organization and analysis of information to increase
                  understanding of a topic or issue.The collection, organization
                  and analysis of information to increase understanding of a topic
                  or issue.The collection,
                </p>
                <a className="link" href="#" style={{ textAlign: "right" }}
                >See all Category</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------------------------- */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 subscribe-section text-center">
            <div className="subscribe-img">
              <Image src={mail_box} className="img w-100" />
            </div>
            <h1>Subscribe For the lastest updates</h1>
            <p>Subscribe to newsletter and never miss the new post every week.</p>
            <div className="d-flex" style={{width:"40%"}}>
              <input
                type="email"
                className="form-control shadow"
                placeholder="Enter your email here..."
              />
              <button
                className="btn btn-md rounded bg-primary shadow text-white ml-lg-2 ml-md-2 ml-1"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Posts