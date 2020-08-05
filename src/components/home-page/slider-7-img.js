import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutSliderFour = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDelMarHomepage{
        nodes{
          homepageAboutCarousel{
            carouselImage3{
              image{
                fluid(maxWidth: 500) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return <Img alt="slider image" fluid={data.allContentfulDelMarHomepage.nodes[0].homepageAboutCarousel.carouselImage3.image.fluid} />
}

export default AboutSliderFour
