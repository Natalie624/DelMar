import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SliderFourCaption = () => (
    <StaticQuery query={graphql`
        query CaptionFour{
            allContentfulDelMarHomepage{
                nodes{
                  homepageAboutCarousel{
                    carouselImage4{
                        imageCaption
                      }
                    }
                }
            }
        }
    `}
    render ={data => (
        <>{data.allContentfulDelMarHomepage.nodes[0].homepageAboutCarousel.carouselImage4.imageCaption}</>
    )}
    />
);

export default SliderFourCaption