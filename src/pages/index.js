import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import Hero from "../components/home-page/hero"
import MenuContent from "../components/home-page/menu-content"
import AboutContent from "../components/home-page/about-content"

const IndexPage = () => (
  <Layout>
    <Helmet>
    <body className="home-page-body" />
    </Helmet>
    <SEO title="Home" />
    <Hero />
    <MenuContent />
    <AboutContent />
  </Layout>
)

export default IndexPage
