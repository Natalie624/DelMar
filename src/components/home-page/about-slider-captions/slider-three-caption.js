import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SliderThreeCaption = () => (
    <StaticQuery query={graphql`
        query CaptionThree{
            allContentfulDelMarHomepage{
                nodes{
                  homepageAboutCarousel{
                    carouselImage5{
                        imageCaption
                      }
                    }
                }
            }
        }
    `}
    render ={data => (
        <>{data.allContentfulDelMarHomepage.nodes[0].homepageAboutCarousel.carouselImage5.imageCaption}</>
    )}
    />
);

export default SliderThreeCaption