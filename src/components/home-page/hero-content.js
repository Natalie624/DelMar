import React from "react"
import { StaticQuery, graphql } from "gatsby"

const HeroContent = () => (
    <StaticQuery query ={graphql`
        query HomepageHeroContent {
            allContentfulDelMarHomepage{
                nodes{
                  heroContentInfo{
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
    render = {data => (
    <div className="hero-content">
        <h1 className="hero-title"><strong>{data.allContentfulDelMarHomepage.nodes[0].heroContentInfo.headline.headline}</strong></h1>
        <p className="hero-description">{data.allContentfulDelMarHomepage.nodes[0].heroContentInfo.heroParagraph.heroParagraph}</p>
        <button type="button" className="hero-btn" data-toggle="modal" data-target="#reservationBtn" data-keyboard="false">Reserve a Table</button>
    </div>
    )}
    />
)

export default HeroContent

