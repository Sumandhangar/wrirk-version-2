import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import service_image from "../../images/bg2.png"
import short_reads from "../../images/img-3.jpg"
import mail_box from "../../images/mail-box.png"
import Link from 'next/link'
import { useDebounce } from 'use-debounce';
import Pagination from '@mui/material/Pagination';
import axios from 'axios'
import Skeleton from 'react-loading-skeleton';

const Posts = () => {

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const [data, setData] = useState([]);
  const [type, setType] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchType, setsearchType] = useState("");
  const [searchDomain, setsearchDomain] = useState("");
  const [subtype, setsubtype] = useState([])
  const [value] = useDebounce(searchTerm, 1000);

  console.log(data);

  useEffect(() => {
    let url = 'https://repo.wrirk.com/api/research_areas'
    let url2 = 'https://repo.wrirk.com/api/domains'

    const fetchdata = async () => {
      const result = await axios.get(url);
      if (result.data != undefined && result.data != null) {
        setType(result.data);
      }
    }

    const fetchdata2 = async () => {
      const result = await axios.get(url2);
      if (result.data != undefined && result.data != null) {
        setsubtype(result.data);
      }
    }
    fetchdata2();
    fetchdata();

  }, [])


  useEffect(() => {

    let url = `https://repo.wrirk.com/api/search?query=${value}&research_area=${searchType}&domain=${searchDomain}&perpage=10&page=${page}`

    const fetchdata = async () => {
      setLoading(true);
      const result = await axios.get(url);
      if (result.data != undefined && result.data != null) {
        setData(result.data);
      }
      setLoading(false);
    }
    fetchdata();

  }, [value,page, searchType, searchDomain])

  return (
    <>
      <div className="container-fluid">
        <div className="row mx-auto mb-4" style={{ alignItems: "baseline" }}>
          <div className="col-md-6">
            <div className="newsletter-box topic-search text-center">
              <div className="input-group col-lg-12 topics-section" style={{ border: "none", padding: "5px 10px", borderRadius: "12px", borderRight: "37px", background: "#35a3e4", height: "48px", boxShadow: "-1px 1px 3px 0px #25526c" }}>
                <input type="search" style={{ borderRadius: "10px", boxShadow: "inset -2px 3px 3px #bbb8b8" }} className="form-control topic-form" value={searchTerm ? searchTerm : ''} placeholder="Type Topic Keywords" required onChange={(e) => {
                  setsearchTerm(e.target.value);
                  setPage(1);
                }} />
                <button className="btn btn-sm"
                  style={{ cursor: "pointer", marginLeft: "13px", color: "#fff", fontSize: "21px", textShadow: "0 3px #2a3840" }} name="btn"><span><i className="fa-solid fa-magnifying-glass"></i></span></button>
              </div>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="select-wrap mr-auto">
              <span className="icon-keyboard_arrow_down arrow-down"></span>
              <select className="form-control topics-section" onClick={(event) => {
                setsearchType(event.target.value);
                setsearchDomain("");
                setPage(1);
              }} style={{ borderRadius: "14px", height: "45px", border: "none", boxShadow: "0px -1px 3px 2px #35a3e4" }}>
                <option value="">All Research Areas</option>
                {type != undefined && type != null ? type.map((item, key) => {
                  return (<option key={key} value={item.slug} >{item.title}</option>);
                }) : ""}
              </select>
            </div>
          </div>
          <div className="col-md-3 mt-3">
            <div className="select-wrap mr-auto">
              <span className="icon-keyboard_arrow_down arrow-down"></span>
              <select className="form-control topics-section" onClick={(event) => {
                setsearchDomain(event.target.value);
                setPage(1);
              }} style={{ borderRadius: "14px", height: "45px", border: "none", boxShadow: "0px -1px 3px 2px #35a3e4", textTransform: "capitalize" }}>
                <option value="">All Domains</option>
                {searchType ? subtype != undefined && subtype != null ? subtype.map((topic) => {
                  return (
                    <>
                      {topic.research_area ? searchType === topic.research_area.slug ? <option value={topic.slug}>{topic.title}</option> : '' : ''}
                    </>
                  );
                }) : '' : ''}

              </select>
            </div>
          </div>
        </div>
        <div className="row mb-5" style={{ justifyContent: "space-around" }}>
          <div className="col-lg-3 post-name">
            <div className="row">
              <div className="col-md-12">
                <h2 style={{ color: "#268FA7" }}>Trending <span style={{ color: "#f8cc08" }}>Topics</span></h2>
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
          </div>
          <div className="col-lg-8 mt-lg-0 mt-md-0 mt-3">
            <div className="indicators pb-lg-0 pb-md-4 pb-4">
              <h2 className='mb-0' style={{ color: "#268FA7" }}>Hot <span style={{ color: "#f8cc08" }}>Topics</span> in <span style={{ color: "#6eac54" }}>Research</span></h2>
              {/* <div className="mr-lg-5 mr-md-5 mr-0 next-prev-icons">
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
                  <i style={{ fontSize: "16px" }} className="fa-solid fa-arrow-right"></i>
                </button>
              </div> */}
            </div>
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner mt-lg-5">
                <div className="carousel-item active">
                  <div className="row-eq-height">
                    {!loading ? data.topics != null && data.topics != null ? data.topics.map((item, index) => (

                      <div className="col-md-12 pl-0" key={index}>
                        <div className="domain-slider-item py-2 pl-2 mb-2 d-block d-sm-flex align-items-center" style={{ width: "100%" }}>
                          <div className="slider-img col-md-5 p-0">
                            <img src={item.featured_image} className="img w-100" width={200} height={220} />
                          </div>
                          <div className='col-md-7 topics-content'>
                            {/* <div className="d-flex mt-lg-2 post-age">
                              <p className='domain-date'>Fantasy <span className='pl-lg-3 pr-l-md-3 pl-5'>1 Month ago</span></p>

                            </div> */}
                            <div className="post-discription mt-lg-2">
                              <h2>{item.title}</h2>
                              <div className="d-flex mt-lg-2" style={{ flexWrap: "wrap" }}>

                                {item.research_area != null && item.research_area != undefined ? <Link href=""><span className="topic-tag mr-2 mb-1">{item.research_area.title}</span></Link> : ""}
                                {item.domain != null && item.domain != undefined ? <Link href=""><span className="topic-tag mb-1">{item.domain.title}</span></Link> : ""}

                              </div>
                              <p>
                                {item.short_description}
                              </p>
                            </div>
                            <div className='keywords d-flex' style={{ flexWrap: "wrap" }}>
                              {item.keywords != null && item.keywords != undefined ? item.keywords.map((keyword, index) => (
                                <Link href="/services" key={index}><div className='tags mx-2 mt-2 text-muted d-flex align-items-center'><span className='mr-1'><i className="fa-solid fa-tag"></i></span> <span>{keyword.title}</span></div></Link>
                              )) : ""}

                            </div>
                            <div className="domain-post-link">
                              <p>12 Min Read</p>
                              <Link href={`/domain/${item.slug}`}>
                              <a className="link"
                              >Read Full <i className="fa-solid fa-arrow-right"></i
                                 ></a>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )) : "" : <div className='col'>
                      {[...Array(11)].map((x, i) =>
                        <div key={i} style={{ width: "100%", background: "#ededed", marginBottom: "5px" }} >
                          <Skeleton height={200} count={10} />
                        </div>
                      )}
                    </div>

                    }

                  </div>
                  {!loading ? data.topics != null && data.topics != undefined ? data.topics.length > 0 ? <div className='mt-3'>
                    <Pagination count={data.total_pages} page={page} color="primary" variant="outlined" shape="rounded" size="large" onChange={handleChange} />
                  </div>
                    : <div className='mt-3'>
                      <h3>Not Found</h3>
                    </div> : "" : ""}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
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
      </div> */}

      {/* <div className="container-fluid category-container" style={{ background: "#268FA7" }}>
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
      </div> */}

      {/* ------------------------------------------------------------------------------- */}

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 subscribe-section text-center">
            <div className="subscribe-img">
              <Image src={mail_box} className="img w-100" />
            </div>
            <h1>Subscribe For the lastest updates</h1>
            <p>Subscribe to newsletter and never miss the new post every week.</p>
            <div className="d-flex latest_updates" style={{ width: "40%" }}>
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