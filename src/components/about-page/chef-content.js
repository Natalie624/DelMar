import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AboutPageStyle from "./about-page.module.css";
import ChefImg from "./chef-img";

const ChefContent = () => (
    <StaticQuery query={graphql`
        query ChefJohnContent{
            allContentfulDelMarAboutPage{
                nodes{
                  aboutSection2{
                    headline
                    sectionParagraph{
                      json
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={AboutPageStyle.chefSection}>
        <h3 className={AboutPageStyle.sectionTitle}><strong>{data.allContentfulDelMarAboutPage.nodes[0].aboutSection2.headline}</strong></h3>
        <ChefImg />
        <span className={AboutPageStyle.description}>
          {documentToReactComponents(data.allContentfulDelMarAboutPage.nodes[0].aboutSection2.sectionParagraph.json)} 
        </span>
    </section>
    )}
    />
)

export default ChefContent