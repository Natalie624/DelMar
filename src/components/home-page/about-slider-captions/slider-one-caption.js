import React from "react";
import { StaticQuery, graphql } from "gatsby";

const SliderOneCaption = () => (
    <StaticQuery query={graphql`
        query CaptionOne{
            allContentfulDelMarHomepage{
                nodes{
                  homepageAboutCarousel{
                    carouselImage2{
                      imageCaption
                    }
                }
            }
        }
    }
    `}
    render={data => (
        <>
        {data.allContentfulDelMarHomepage.nodes[0].homepageAboutCarousel.carouselImage2.imageCaption}
        </>
        )}
    />
    );

    export default SliderOneCaption