import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutSliderFive = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDelMarHomepage{
        nodes{
          homepageAboutCarousel{
            carouselImage1{
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

  return <Img alt="slider image" fluid={data.allContentfulDelMarHomepage.nodes[0].homepageAboutCarousel.carouselImage1.image.fluid} />
}

export default AboutSliderFive
