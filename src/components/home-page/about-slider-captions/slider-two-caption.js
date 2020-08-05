import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SliderTwoCaption = () => (
    <StaticQuery query={graphql`
        query CaptionTwo{
            allContentfulDelMarHomepage{
                nodes{
                  homepageAboutCarousel{
                    carouselImage3{
                        imageCaption
                      }
                    }
                }
            }
        }
    `}
    render ={data => (
        <>{data.allContentfulDelMarHomepage.nodes[0].homepageAboutCarousel.carouselImage3.imageCaption}</>
    )}
    />
);

export default SliderTwoCaption