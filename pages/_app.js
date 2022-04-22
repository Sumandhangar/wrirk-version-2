// import "bootstrap/dist/css/bootstrap.min.css"
import '../styles/style.css'
import "../styles/about.css"
import "../styles/services.css"
import "../styles/blog.css"
import "../styles/contact.css"
import "../styles/wheel.css"
import "../styles/domains.css"
import "../styles/action.scss"
import Script from 'next/script'
import Head from 'next/head'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import $ from "jquery"

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

    </Head>

    <Script async src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></Script>
    <Script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></Script>
    {/* <Script src={require('../scripts/wheel.js')}></Script> */}
    <Component {...pageProps} />
  </>
}

export default MyApp
