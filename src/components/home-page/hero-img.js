import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const HeroImg = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDelMarHomepage{
        nodes{
          heroContentInfo{
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

  return <Img className="hero-img" alt="hero-img" fluid={data.allContentfulDelMarHomepage.nodes[0].heroContentInfo.heroImage.fluid} />
}

export default HeroImg
