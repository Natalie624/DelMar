import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import HomePageStyle from "./home-page.module.css"
import MenuSlider from "./menu-slider"

const MenuContent = () => (
    <section className={HomePageStyle.menuSection}>
        <h3 className={HomePageStyle.sectionTitle}><strong>Our Menu</strong></h3>
        <MenuSlider />
        <AniLink fade className={HomePageStyle.btn} to="/menu">See Full Menu</AniLink>
    </section>
)

export default MenuContent