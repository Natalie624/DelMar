import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import HomePageStyle from "./home-page.module.css"
import MenuSlider from "./menu-slider"

const MenuContent = () => (
    <StaticQuery query={graphql`
        query MenuCarouselHeadline {
            allContentfulDelMarHomepage{
                nodes{
                  homepageMenuCarousel {
                    imageCarouselHeadline {
                      imageCarouselHeadline
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={HomePageStyle.menuSection}>
        <h3 className={HomePageStyle.sectionTitle}><strong>{data.allContentfulDelMarHomepage.nodes[0].homepageMenuCarousel.imageCarouselHeadline.imageCarouselHeadline}</strong></h3>
        <MenuSlider />
        <AniLink fade className={HomePageStyle.btn} to="/menu">See Full Menu</AniLink>
    </section>
    )}
    />
    
);

export default MenuContent