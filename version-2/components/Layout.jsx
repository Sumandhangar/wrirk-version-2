
import Head from 'next/head'
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./Navbar"));
const Footer = dynamic(() => import("./Footer"));

export default function Layout({ children }) {

    return (
        <>
            <Head>
                <meta name="author" content="Wrirk" />
                <meta name="DC.title" content="Article Writing, Research Paper Writing services, Thesis Writing Services, Research Proposal" />
                <meta name="geo.region" content="IN-UP" />
                <meta name="geo.placename" content="Mathura" />
                <meta name="geo.position" content="27.633333;77.583333" />
                <meta name="ICBM" content="27.633333, 77.583333" />
                <meta name="googlebot" content="index,follow,all" /> 

                {/* tags for showing image while sharing on social media */}
                <meta property="og:image" content="https://content.wrirk.com/uploads/bg8_2194468163.webp" />
                <meta property="og:description" content="Want to write a blog but dont know where to start from? Wrirk writers are here to assist you and help you in writing best quality blogs for you" />

                <meta property="og:image:width" content="1024" />
                <meta property="og:image:height" content="1024" />

                <meta name="twitter:card" content="Wrirk" />
                <meta name="twitter:image" content="https://content.wrirk.com/uploads/bg8_2194468163.webp" />
            </Head>

            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
