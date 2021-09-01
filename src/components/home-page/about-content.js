import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import HomePageStyle from "./home-page.module.css"
import AboutSlider from "./about-slider"

const AboutContent = () => (
    <section className={HomePageStyle.aboutSection}>
        <h3 className={HomePageStyle.sectionTitle}><strong>Del Mar Details</strong></h3>
        <AboutSlider />
        <AniLink fade className={HomePageStyle.btn} to="/about">Learn More</AniLink>
    </section>
)

export default AboutContent