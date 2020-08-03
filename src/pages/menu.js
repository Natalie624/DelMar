import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import SEO from "../components/seo"
import Hero from "../components/menu-page/hero"
import Appetizers from "../components/menu-page/appetizers"
import Salads from "../components/menu-page/salads"
import Entrees from "../components/menu-page/entress"
import Desserts from "../components/menu-page/desserts"
import Cocktails from "../components/menu-page/cocktails"

const MenuPage = () => (
  <Layout>
    <Helmet>
    <body className="menu-page-body" />
    </Helmet>
    <SEO title="Menu" />
    <Hero />
    <Appetizers />
    <Salads />
    <Entrees />
    <Desserts />
    <Cocktails />
  </Layout>
)

export default MenuPage
