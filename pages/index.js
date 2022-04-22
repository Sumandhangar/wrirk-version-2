import Head from 'next/head'
import Image from 'next/image'
import CallToAction from '../components/Home/CallToAction'
import Hero from '../components/Home/Hero'
import Newsletter from '../components/Home/Newsletter'
import Section1 from '../components/Home/Section1'
import Services from '../components/Home/Services'
import Topics from '../components/Home/Topics'

import Layout from '../components/Layout'

export default function Home() {

  return (
    <>
      <Head>
        <title>Wrirk | Your Research Trainer | Research Paper Writing</title>
        <meta name="description" content="Wrirk provides a unique Research Paper Writing solution to the scholars who are seeking any assistance in their research work." />
      </Head>

      <Layout>
        <Hero />
        <Services />
        <Section1 />
        <CallToAction />
        {/* <Topics /> */}
        <Newsletter/>
      </Layout>
    </>

  )
}
