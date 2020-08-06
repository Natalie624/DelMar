import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import AboutPageStyle from "./about-page.module.css";

const AboutContent = () => (
    <StaticQuery query ={graphql`
        query AboutContent{
            allContentfulDelMarAboutPage{
                nodes{
                  aboutSection1{
                    sectionHeadline{
                      sectionHeadline
                    }
                    sectionParagraph{
                      json
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={AboutPageStyle.aboutSection}>
        <h3 className={AboutPageStyle.sectionTitle}><strong>{data.allContentfulDelMarAboutPage.nodes[0].aboutSection1.sectionHeadline.sectionHeadline}</strong></h3>
        <div className={AboutPageStyle.description}>
        {documentToReactComponents(data.allContentfulDelMarAboutPage.nodes[0].aboutSection1.sectionParagraph.json)} 
        </div>
    </section>
    )}
    />
);

export default AboutContent