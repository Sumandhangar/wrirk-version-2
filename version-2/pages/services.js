import Head from 'next/head'
import Image from 'next/image'
import CallToAction from '../components/Home/CallToAction'
import Hero from '../components/Services/Hero'


import Layout from '../components/Layout'

export default function Services() {

  return (
    <>
      <Head>
        <title>Wrirk | Your Research Trainer | Research Paper Writing</title>
        <meta name="description" content="Wrirk provides a unique Research Paper Writing solution to the scholars who are seeking any assistance in their research work." />
      </Head>

      <Layout>
       <Hero/>
      
      </Layout>
    </>

  )
}
