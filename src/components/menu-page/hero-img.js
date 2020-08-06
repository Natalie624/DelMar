import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDelMarMenuPage{
        nodes{
          menuHeroContent{
            heroImage{
              fluid (maxWidth: 2000) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return <Img className="hero-img" alt="hero-img" fluid={data.allContentfulDelMarMenuPage.nodes[0].menuHeroContent.heroImage.fluid} />
}

export default HeroImg
