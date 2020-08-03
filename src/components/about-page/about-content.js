import React from "react"
import AboutPageStyle from "./about-page.module.css"

const AboutContent = () => (
    <section className={AboutPageStyle.aboutSection}>
        <h3 className={AboutPageStyle.sectionTitle}><strong>About Del Mar</strong></h3>
        <p className={AboutPageStyle.description}>
        Del Mar opened its doors in 2006 on the shore of Del Mar beach in sunny southern California. Welcoming visitors from all over the world, Del Mar prides itself on fresh seafood done simply and elegantly. Located just a short drive from San Diego Del Mar is privvy to some of the best fishing on the Pacific. With ties to many local fisherman Del Mar obtains the freshest seafood ingredients daily. We are excited to welcome you to our establishment.
        </p>
    </section>
)

export default AboutContent