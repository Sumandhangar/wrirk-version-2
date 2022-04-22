import React from "react"
import { AiOutlineRight } from 'react-icons/ai'
import Footer from "../Footer";
import Navbar from "../Navbar";
import ExtraComponent1 from "../ExtraComponent1";
import { ExtraComponent2 } from "../ExtraComponent2";
import Image from "next/image";
import Markdown from "markdown-to-jsx";
import Head from "next/head";

const SingleService = ({ post }) => {

    return (
        <>

            <Head>
                <title>{post[0].meta_title}</title>
                <link rel="canonical" href={`https://www.wrirk.com/services/${post[0].slug}`} />
                <meta name="keywords" content={post[0].meta_keywords} />
                <meta name="description" content={post[0].meta_description} />
            </Head>

            <Navbar />
            <div className="unit-5 overlay service-bg-img service-img blog-img">
                <div className="container text-center">
                    <h2 className="mb-0">Service</h2>
                    <p className="mb-0 unit-6">Home<span className="sep"><AiOutlineRight /></span><span>Service</span></p>
                </div>
            </div>

            <div className="site-section pb-0">
                <div className="mx-lg-5 mx-md-4 mx-3 px-lg-5 mb-5">
                    <h1 className="h3 font-weight-bold text-black mb-4 text-center">{post[0].title}</h1>
                    <div className="row mb-3 mx-auto">
                        <div className="col-lg-7 col-sm-12 mb-3 mt-2 px-0">
                            <div className="bg-white pb-0 text-justify">
                                <Markdown>{post[0].desc}</Markdown>
                            </div>
                        </div>
                        <div className="col-lg-5 about-img my-auto">
                            <Image src={`https://content.wrirk.com/${post[0].featured_image.url}`} loading="lazy" width={550} height={500} layout="responsive" alt="service" blurDataURL={`https://content.wrirk.com${post[0].featured_image.url}`} placeholder="blur" />
                        </div>
                    </div>

                    {post[0].extra_description ?
                        <div className="mt-0 mb-5 px-0">
                            <div className="text-justify">
                                <Markdown>{post[0].extra_description}</Markdown>
                            </div>
                        </div>
                        : ''
                    }
                    {post[0].section_description || post[0].section_image.url ?
                        <div className="mt-5 pb-0 row mx-auto">
                            <div className="col-md-12 mb-5 px-0">
                                <div className="">
                                    <Image src={`https://content.wrirk.com/${post[0].section_image.url}`} width={1300} height={360} layout="responsive" alt="image" blurDataURL={`https://content.wrirk.com${post[0].section_image.url}`} placeholder="blur" />
                                </div>
                            </div>
                            <div className="col-md-12 mt-2 px-0 text-justify">
                                <Markdown>{post[0].section_description}</Markdown>
                            </div>
                        </div>
                        : ''
                    }


                    <ExtraComponent1 />

                </div>

                <ExtraComponent2 />

            </div>

            <Footer />

        </>
    )
}

export default SingleService;