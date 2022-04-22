import React, { useEffect } from "react"
import { AiOutlineRight } from 'react-icons/ai'
import { useState } from 'react';
import Pagination from "../Pagination"
import Markdown from 'markdown-to-jsx';
import slugify from 'slugify';
import { GoPrimitiveDot } from 'react-icons/go';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Navbar from "../Navbar";
import Footer from "../Footer";
import Link from "next/link";
import Image from "next/image";
import placeimg from "../../images/imgplace.jpg";

function SingleBlogCategory({ post, blogs, category }) {

    const [loading, setloading] = useState(true)
    const [item, setitem] = useState([])

    // pagination states and code
    const [currentPage, setcurrentPage] = useState(1);
    const itemsPerPage = 2;

    const pages = [];
    for (let i = 1; i <= Math.ceil(item.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = item.slice(indexOfFirstItem, indexOfLastItem);

    // set loading while fetching data from gatsby skeleton
    useEffect(() => {
        setloading(true);
        {
            blogs ? blogs.map((blog) => {
                return (
                    <>
                        {!blog.blog_category ? '' : blog.blog_category.title == post.title ? item.push(blog) : ''}
                    </>
                )
            })
                : ''
        }
        setloading(false);
    }, [blogs, item, post.title])


    return (
        <>
            <Navbar />

            <div className="unit-5 overlay blog-img">
                <div className="container text-center">
                    <h1 className="mb-0">Blog</h1>
                    <p className="mb-0 unit-6">Category<span className="sep"><AiOutlineRight /></span><span>{post.title}</span></p>
                </div>
            </div>
            <div className="site-section" style={{ background: "rgba(204, 204, 204, 0.21)" }}>
                <div className="mx-lg-5 mx-2 mx-md-3">
                    <div className="row mb-4">
                        <div className="col-md-3">
                            <h1 className="font-weight-semibold text-black site-section-subheading">Our Blogs</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 col-md-12">
                            {!loading ? currentItems.map((blog) => {
                                return (
                                    <>
                                        {blog.blog_category == null ? '' : blog.blog_category.title == post.title ?
                                            <div className="row mb-5 pb-2 bg-white ">
                                                <div className="col-lg-8 px-4 py-0 my-auto">
                                                    <div className="mb-3" style={{ fontStyle: "italic" }}>
                                                        <span className="d-block mt-2 text-normal small mb-1" style={{ fontSize: "15px" }}> {blog.blog_category ? <>Category | <Link href={`/blog/category${slugify(blog.blog_category.title.toLowerCase())}`}><a>{blog.blog_category.title}</a></Link></> : ''}
                                                            <span className="mx-2"></span>
                                                            <span className="mx-2"></span>{blog.createdAt ? new Date(blog.createdAt).toDateString() : ''}
                                                        </span>
                                                    </div>
                                                    {blog.title ? <div>
                                                        <Link href={`/blog/${slugify(blog.title.toLowerCase())}`}><a>
                                                            <h2 className="h4 mt-1 font-weight-bold line-height-sm mb-2 text-black">{blog.title}</h2>
                                                        </a></Link>
                                                    </div> : ''}
                                                    <div className="text-ellipsis">
                                                        {blog.description ?
                                                            <>
                                                                <p className="markdown" style={{ WebkitLineClamp: "5" }}>
                                                                    <Markdown>{blog.description}</Markdown>
                                                                </p>
                                                                <Link href={`/blog/${slugify(blog.title.toLowerCase())}`}><a>read more</a></Link>
                                                            </> : ''
                                                        }
                                                    </div>
                                                </div>

                                                <div className="col-lg-4 pr-4 py-3 pl-0 my-auto">
                                                    <Link href={`/blog/${slugify(blog.title.toLowerCase())}`} style={{ color: "#4d4d4d" }}><a>
                                                        <Image src={blog.image ? `https://content.wrirk.com${blog.image.url}` : placeimg} width={100} height={100} layout="responsive" loading="lazy" className="img-hover" alt="blog" blurDataURL={`https://content.wrirk.com${blog.image.url}`} placeholder="blur" />
                                                    </a></Link>
                                                </div>
                                            </div> : ''
                                        }
                                    </>
                                )
                            }) :
                                <div className="row">
                                    <div className="col-lg-8 py-2">
                                        <SkeletonTheme color="#d5cdcdc4" highlightColor="#d5cdcdc4">
                                            <Skeleton width={900} height={200} />
                                        </SkeletonTheme>
                                    </div>
                                </div>
                            }
                            {pages != 1 ? <Pagination pages={pages} setcurrentPage={setcurrentPage} currentPage={currentPage} /> : ''}
                        </div>
                        {category ? <div className="col-lg-3">
                            <div className="mt-md-0 ml-2 ml-lg-3 mt-lg-4">
                                <h6 className="text-black font-weight-bold">CATEGORIES</h6>
                                <div className="blog-section">
                                    {category.map((cat, key) => {
                                        return (
                                            <div className="blog-section" key={key}>
                                                {cat.blogs != 0 ? cat.title != post.title ?
                                                    <Link href={`/blog/category/${slugify(cat.title.toLowerCase())}`}><a>
                                                        <GoPrimitiveDot className="mr-2" />{cat.title}
                                                    </a></Link> : <div style={{ color: "green" }}><GoPrimitiveDot className="mr-2" />{cat.title}</div>
                                                    : ''
                                                }
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div> : ''}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SingleBlogCategory