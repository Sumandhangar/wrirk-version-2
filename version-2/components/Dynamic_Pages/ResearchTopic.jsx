import React, { useState } from "react"
// import img from "../../images/default1.webp";
// import axios from "axios";
// import { FaDownload, FaTag } from "react-icons/fa";
// import { saveAs } from "file-saver";
// import { ClapSpinner } from "react-spinners-kit"
// import { Button, Modal } from "react-bootstrap";
// import Skeleton from 'react-loading-skeleton';
// import Link from 'next/link';
// import { AiOutlineRight } from 'react-icons/ai'
// import Markdown from "markdown-to-jsx";
// import ExtraComponent1 from "../ExtraComponent1"
// import { ExtraComponent2 } from "../ExtraComponent2";
// import { AiOutlineClose } from "react-icons/ai"
// import Navbar from "../Navbar";
// import AddTopic from "../AddTopic";
// import Footer from "../Footer";
// import Swal from "sweetalert2";
// import Image from "next/image";
// import Head from "next/head";

export default function ResearchTopic({ post }) {

    const [loadingapi, setloadingapi] = useState(false);

    

    return (
        <>
          <div className="container-fluid" style={{background:'red'}}>
              <div className="row">
                  <div className="col-md-12 text-center text-white pt-5 pb-5">
                      <h1>Research Domain</h1>
                  </div>
              </div>
          </div>
        </>
    )
}
