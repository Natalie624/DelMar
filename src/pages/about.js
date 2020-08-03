import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import Hero from "../components/about-page/hero"
import AboutContent from "../components/about-page/about-content"
import ChefContent from "../components/about-page/chef-content"

const AboutPage = () => (
  <Layout>
    <Helmet>
    <body className="about-page-body" />
    </Helmet>
    <SEO title="About Us" />
    <Hero />
    <AboutContent />
    <ChefContent />
  </Layout>
)

export default AboutPage
