import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query AboutHeroImage {
      allContentfulDelMarAboutPage{
        nodes{
          aboutHeroContent{
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

  return <Img className="hero-img" alt="hero-img" fluid={data.allContentfulDelMarAboutPage.nodes[0].aboutHeroContent.heroImage.fluid} />
}

export default HeroImg
