import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SliderFiveCaption = () => (
    <StaticQuery query={graphql`
        query CaptionFive{
            allContentfulDelMarHomepage{
                nodes{
                  homepageAboutCarousel{
                    carouselImage1{
                        imageCaption
                      }
                    }
                }
            }
        }
    `}
    render ={data => (
        <>
        {data.allContentfulDelMarHomepage.nodes[0].homepageAboutCarousel.carouselImage1.imageCaption}
        </>
    )}
    />
);

export default SliderFiveCaption