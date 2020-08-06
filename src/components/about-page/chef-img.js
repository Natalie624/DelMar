import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ChefImg = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulDelMarAboutPage{
        nodes{
          aboutSection2{
            sectionImage{
              fluid(maxWidth: 500){
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return <Img alt="chef image" fluid={data.allContentfulDelMarAboutPage.nodes[0].aboutSection2.sectionImage.fluid} />
}

export default ChefImg
