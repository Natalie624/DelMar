import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const MenuSliderThree = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulDelMarHomepage{
      nodes{
        homepageMenuCarousel {
          carouselImage3{
            image {
              fluid (maxWidth: 300){
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  }
  `)

  return <Img alt="slider image" fluid={data.allContentfulDelMarHomepage.nodes[0].homepageMenuCarousel.carouselImage3.image.fluid} />
}

export default MenuSliderThree
