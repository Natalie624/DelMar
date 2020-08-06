import React from "react";
import { StaticQuery, graphql } from "gatsby";

const HeroContent = () => (
    <StaticQuery query={graphql`
        query MenuHeroContent{
            allContentfulDelMarMenuPage{
                nodes{
                  menuHeroContent{
                    headline{
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
        render ={data => (
        <div className="hero-content">
            <h1 className="hero-title"><strong>{data.allContentfulDelMarMenuPage.nodes[0].menuHeroContent.headline.headline}</strong></h1>
            <p className="hero-description">{data.allContentfulDelMarMenuPage.nodes[0].menuHeroContent.heroParagraph.heroParagraph}</p>
            <button type="button" className="hero-btn" data-toggle="modal" data-target="#reservationBtn" data-keyboard="false">Reserve a Table</button>
        </div>
        )}
    />
)

export default HeroContent