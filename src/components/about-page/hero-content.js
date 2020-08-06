import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HeroContent = () => (
    <StaticQuery query={graphql`
        query AboutHeroContent{
            allContentfulDelMarAboutPage{
                nodes{
                  aboutHeroContent{
                    headline {
                      headline
                    }
                    heroParagraph{
                      heroParagraph
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <div className="hero-content">
        <h1 className="hero-title"><strong>{data.allContentfulDelMarAboutPage.nodes[0].aboutHeroContent.headline.headline}</strong></h1>
        <p className="hero-description">{data.allContentfulDelMarAboutPage.nodes[0].aboutHeroContent.heroParagraph.heroParagraph}</p>
        <button type="button" className="hero-btn" data-toggle="modal" data-target="#reservationBtn" data-keyboard="false">Reserve a Table</button>
    </div>
    )}
    />
)

export default HeroContent