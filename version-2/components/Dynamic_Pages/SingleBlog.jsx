import React, { useState } from "react"
import { AiOutlineRight } from 'react-icons/ai'
import Markdown from "markdown-to-jsx";
import slugify from "slugify";
import ExtraComponent1 from "../ExtraComponent1";
import { ExtraComponent2 } from "../ExtraComponent2";
import { GoPrimitiveDot } from "react-icons/go";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";
import Image from "next/image";
import placeimg from "../../images/imgplace.jpg";
import Head from "next/head";

const SingleBlog = ({ post, blogs, category }) => {

    // fetching blogs data
    const [loading, setloading] = useState(true)

    return (
        <>
            {/* <Helmet title={`${post.title}`}>
                <meta name="wrirk" content="wrirk" />
                <meta name="MPRW" content="MPRW" />
                <meta name="MPBS" content="MPBS" />
                <meta name="QUERYEX" content="QUERYEX" />
                <meta name="WRIRK" content="WRIRK" />
            </Helmet> */}

            <Head>
                <title>
                    {post.title}
                </title>
            </Head>

            <Navbar />

            <div className="unit-5 overlay blog-img">
                <div className="container text-center">
                    <h1 className="mb-0">Blog</h1>
                    <p className="mb-0 unit-6">Home<span className="sep"><AiOutlineRight /></span>Blog</p>
                </div>
            </div>
            <div className="site-section pb-0">
                <div className="mx-lg-5 mx-md-5 mx-5 px-lg-4 mx-auto">
                    <div className="row mx-auto mt-2" style={{ background: "rgba(204, 204, 204, 0.21)" }}>
                        <div className="px-lg-5 pt-lg-4 col-lg-7 col-md-12 mb-3 mt-3 pt-4">
                            <div className="pl-0 pb-0 ">
                                <h2 className="font-weight-bold text-black mb-3 h3">{post.title ? post.title : ''}</h2>
                                <span className="d-block mt-2 text-normal small mb-1" style={{ fontSize: "15px", fontStyle: "italic" }}>
                                    {/* By <a href="https://www.mp2it.com/">MP2IT</a> */}
                                    <span className="mr-2"></span> {post.createdAt ? new Date(post.createdAt).toDateString() : ''}
                                    {post.blog_category ? <Link href={`/blog/category/${slugify(post.blog_category.title.toLowerCase())}`}><a><span className="mx-2"></span>{post.blog_category.title} </a></Link> : ''}
                                </span>

                                {post.description ?
                                    <div className="text-justify">
                                        <Markdown>{post.description}</Markdown>
                                    </div> : ''}
                            </div>
                        </div>
                        <div className="col-lg-4 col-lg-5 col-md-12 col-sm-12 mt-lg-4 pt-lg-4">
                            <div className="row">
                                <div className="col-lg-12">
                                    {post.image.url ?
                                        <div className="my-lg-3">
                                            <Image src={`https://content.wrirk.com/${post.image.url}`} loading="lazy" width={400} height={350} alt="blog" blurDataURL={`https://content.wrirk.com${post.image.url}`} placeholder="blur" />
                                        </div>
                                        : ''
                                    }
                                    {post.blog_category ? <h6 className="text-black font-weight-bold mt-5 mb-3">RECOMMONDATIONS</h6> : ''}
                                    <div className="blog-section">
                                        {blogs.map((blog, key) => {
                                            return (
                                                <> {blog.blog_category ? blog.blog_category.title === post.blog_category.title ?
                                                    <Link href={`/blog/${slugify(blog.title.toLowerCase())}`} style={{ color: "#4d4d4d" }}><a>
                                                        <div className="card my-3 pt-2">
                                                            <div style={{ flexWrap: "nowrap" }} className="row p-2 " key={key}>
                                                                <div className="col-lg-3 col-md-2 pr-0 d-none d-md-block d-lg-block">
                                                                    <Image src={blog.image ? `https://content.wrirk.com${blog.image.url}` : placeimg} width={100} height={100} layout="responsive" loading="lazy" className="img-hover" alt="blog" blurDataURL={`https://content.wrirk.com${blog.image.url}`} placeholder="blur" />
                                                                </div>
                                                                <div className="col-lg-9 col-md-10 col-sm-10 text-ellipsis">
                                                                    <h6 className="text-black font-weight-bold mb-0 markdown" style={{ WebkitLineClamp: "1", fontSize: "17px" }}>{blog.title}</h6>
                                                                    <span style={{ fontSize: "14px", fontStyle: "italic", color: "rgb(77, 77, 77)" }}>{new Date(blog.createdAt).toDateString()}</span>

                                                                    {blog.description ?
                                                                        <p className="markdown desc" style={{ WebkitLineClamp: "2" }}>
                                                                            <Markdown className="text-justify p-0">{blog.description}</Markdown></p>
                                                                        : ''}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a></Link> : ''
                                                    : ''}
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                                {category ?
                                    <div className="mt-md-0 ml-lg-0 mt-lg-4 mt-md-3 pb-4 col-md-12 col-lg-12">
                                        <hr className="d-md-none d-lg-block" />
                                        <h6 className="text-black font-weight-bold">CATEGORIES</h6>
                                        <div className="blog-section">
                                            {category.map((cat, key) => {
                                                return (
                                                    <>{cat.blogs != 0 ?
                                                        <Link href={`/blog/category/${slugify(cat.title.toLowerCase())}`}><a>
                                                            <div className="blog-section" key={key} style={{ color: `${cat.title === post.blog_category.title ? 'green' : ''}` }}>
                                                                <GoPrimitiveDot className="mr-2" />{cat.title}
                                                            </div>
                                                        </a></Link>
                                                        : ''}
                                                    </>
                                                )
                                            })}
                                        </div>
                                    </div> : ''}
                            </div>
                        </div>
                    </div>

                    {/* extra section */}
                    <ExtraComponent1 />
                </div>

                <ExtraComponent2 />
            </div>
            <Footer />
        </>
    )
}

export default SingleBlog;