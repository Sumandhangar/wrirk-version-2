import React from "react"
import img from "../../images/default1.webp";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import AddTopic from "../AddTopic";
import { Button, Modal } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import { AiOutlineClose, AiOutlineRight } from 'react-icons/ai'
import { FaSearch, FaTag } from 'react-icons/fa';
import Markdown from "markdown-to-jsx";
import Navbar from "../Navbar"
import Footer from "../Footer"
import { useDebounce } from 'use-debounce';
import Pagination from "react-js-pagination";
import Link from "next/link";

const ResearchArea = ({ post, type, subtype, slug }) => {

    const [data, setData] = useState([]);

    const name = slug;
    const [searchTerm, setsearchTerm] = useState("");
    const [value] = useDebounce(searchTerm, 1000);

    const [searchType, setsearchType] = useState(name);
    const [searchDomain, setsearchDomain] = useState('');
    const [loading, Setloading] = useState(true);

    const [currentPage, setcurrentPage] = useState(1);

    useEffect(() => {
        let url = '';
        if (value == undefined) {
            Setloading(true);
            url = `https://repo.wrirk.com/api/topics?research_area=${searchType}&domain=${searchDomain}&perpage=10&page=${currentPage}`
        }
        else {
            if (value.length > 2) {
                Setloading(true);
                url = `https://repo.wrirk.com/api/search?query=${value}&research_area=${searchType}&domain=${searchDomain}&perpage=10&page=${currentPage}`
            }
            else {
                Setloading(true);
                url = `https://repo.wrirk.com/api/topics?research_area=${searchType}&domain=${searchDomain}&perpage=10&page=${currentPage}`
            }
        }

        const fetchfilter = async () => {
            // Setloading(true);
            const result = await axios.get(url);
            if (result.data != undefined && result.data != null) {
                setData(result.data);
            }
            Setloading(false);
        }
        fetchfilter();
    }, [value, searchType, searchDomain, currentPage]);

    // pagination states and code
    // ------------- pagination function ----------------
    const handlePageChange = (pageNumber) => {
        setcurrentPage(pageNumber);
    }

    // modal form states
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Navbar />
            <div className="unit-5 overlay topics-img">
                <div className="container text-center">
                    <h1 className="mb-0">Research Area</h1>
                    <p className="mb-0 unit-6">Home<span className="sep"><AiOutlineRight /></span><span>Research Area</span></p>
                </div>
            </div>
            <div className="site-section bg-light">
                <div className="mx-lg-5 mx-2 mx-md-3">
                    <div className="row mx-auto justify-content-start text-left mb-3">
                        <div className="col-md-12" >
                            <h5 className="font-weight-semibold text-black site-section-subheading">Search Research Area</h5>
                        </div>
                    </div>
                    <div className="row mx-auto">
                        <div className="col-md-6">
                            <div className="newsletter-box p-0 text-center">
                                <div className="input-group col-lg-12 topics-section" style={{ border: "none", padding: "1px 10px", borderRadius: "30px", height: "45px", boxShadow: "1px 4px 11px 0px #57c8f16e" }}>
                                    <input type="search" className="form-control topic-form" value={searchTerm ? searchTerm : ''} placeholder="Search Your Research Topic" required onChange={(e) => {
                                        setsearchTerm(e.target.value);
                                        setcurrentPage("1");
                                    }} />
                                    <button className="btn-radius search-btn"
                                        style={{ cursor: "pointer" }} name="btn"><span><FaSearch /></span></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="select-wrap mr-auto">
                                <span className="icon-keyboard_arrow_down arrow-down"></span>
                                <select name="" id="" className="form-control topics-section" onClick={(event) => {
                                    setsearchType(event.target.value);
                                    setsearchDomain("");
                                    setcurrentPage("1");
                                }} style={{ borderRadius: "30px", height: "45px", border: "none", boxShadow: "1px 4px 11px 0px #57c8f16e" }} >
                                    <option value="">All Research Areas</option>
                                    {type ? type.map((item) => {
                                        return (<>{item.slug == name ? <option selected value={item.slug}>{item.title}</option> : <option value={item.slug}>{item.title}</option>}</>);
                                    }) : ''}
                                </select>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="select-wrap mr-auto">
                                <span className="icon-keyboard_arrow_down arrow-down"></span>
                                <select name="" id="" className="form-control topics-section" onClick={(event) => {
                                    setsearchDomain(event.target.value);
                                    setcurrentPage("1");
                                }} style={{ borderRadius: "30px", height: "45px", border: "none", boxShadow: "1px 4px 11px 0px #57c8f16e" }}>
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
                    {!loading ? data != undefined && data != null && data.topics != "" ?
                        (
                            <>
                                {data.topics.map((blog, key) => {
                                    if (blog.featured_image == "") {
                                        blog.featured_image = img
                                    }
                                    return (
                                        <div className="row mx-auto" key={key}>
                                            <div className="col-md-12 mb-3">
                                                <div className="job-post-item bg-white py-3 pl-3 d-block d-md-flex align-items-center" >
                                                    <div className="pl-0 col-lg-3 col-md-5">
                                                        <Link href={`/domain/${blog.slug}`}><a>
                                                            <div className="bg-img" role="img" aria-label="research" style={{ backgroundImage: `url(${blog.featured_image})` }}>
                                                            </div>
                                                        </a></Link>
                                                    </div>
                                                    <div className="col-lg-9 col-md-7 mb-4 mb-md-0 px-0 px-md-2">
                                                        <Link href={`/domain/${blog.slug}`}><a>
                                                            <div className="job-post-item-header d-flex align-items-center text-ellipsis mb-1">
                                                                <h6 className="mr-3 text-black font-weight-bold markdown" style={{ fontSize: "1.2rem", WebkitLineClamp: "2" }}>{blog.title}</h6>
                                                            </div>
                                                        </a></Link>
                                                        <div className="job-post-item-body row
                                                        mx-auto mb-2">
                                                            <div className="text-ellipsis">
                                                                <Link href={`/area/${blog.research_area.slug}`}><a>
                                                                    <div className="mr-2 mt-1"><h6 className="markdown" style={{ padding: "5px 0px", WebkitLineClamp: "1" }}><span className="topic-tag">{blog.research_area.title}</span></h6></div>
                                                                </a></Link>
                                                            </div>
                                                            <Link href={`/area/${blog.research_area.slug}/${blog.domain.slug}`}><a>
                                                                <div>
                                                                    <h6 className="mr-3 mt-1" style={{ padding: "5px 0px" }}><span className="topic-tag">{blog.domain ? blog.domain.title : ''}</span></h6>
                                                                </div>
                                                            </a></Link>
                                                        </div>
                                                        <div className="text-ellipsis" style={{ color: "#4d4d4d" }}>
                                                            {blog.short_description ? <><p className="markdown"><Markdown>{blog.short_description}</Markdown></p><Link href={`/domain/${blog.slug}`}><a>read more</a></Link></> : ''}

                                                            {/* keywords */}
                                                            {blog.keywords != "" ? <div className="d-flex ml-0" style={{ flexWrap: "wrap" }}>
                                                                {blog.keywords.map((item, key) => {
                                                                    return (
                                                                        <>
                                                                            <Link href={`/keywords/${item.slug}`}><a>
                                                                                <div key={key} className="mx-2 mt-2 text-muted">
                                                                                    <FaTag className="mr-1" />{item.title}
                                                                                </div>
                                                                            </a></Link>
                                                                        </>
                                                                    )
                                                                })}

                                                            </div> : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {data.total_pages > 1 ?
                                    <Pagination
                                        activePage={data.current_page}
                                        itemsCountPerPage={data.per_page}
                                        totalItemsCount={data.total}
                                        pageRangeDisplayed={5}
                                        onChange={handlePageChange}
                                    /> : ''}
                            </>

                        ) : (
                            <>
                                <div className="container mt-0 text-black mt-4 mb-2"><h3>No Results Found</h3></div>
                                <div className="container">
                                    <Button className="btn grad-btn border-0" onClick={handleShow}>
                                        Request Your Topic
                                    </Button>
                                    {/* add topic modal form */}
                                    <Modal show={show} onHide={handleClose} size="md">
                                        <Modal.Header><Modal.Title className="pl-3">Request Your Topic</Modal.Title><AiOutlineClose className="mt-2" onClick={handleClose} style={{ cursor: "pointer" }} /></Modal.Header>
                                        <Modal.Body className="mx-2"><AddTopic handleClose={handleClose} /></Modal.Body>
                                    </Modal>
                                </div>
                            </>
                        ) :
                        <div style={{ width: "100%" }}>
                            <Skeleton height={200} count={10} />
                        </div>
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ResearchArea;