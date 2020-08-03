/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Header from "../components/header/header"
import Footer from "./footer/footer"
import "./layout.css"
import ReservationModal from "./reservation-modal/reservation-modal"

const Layout = ({ children }) =>  (
    <div className="screen-orientation">
      <Header />
      <div>
        <main>{children}</main>
        <ReservationModal />
      </div>
      <Footer />
    </div>
  )

export default Layout
