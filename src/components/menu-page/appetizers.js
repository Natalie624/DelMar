import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import MenuPagerStyle from "./menu-page.module.css"
import MenuImg from "../home-page/slider-1-img"

const Appetizers = () => (
    <StaticQuery query={graphql`
        query AppetizerMenuItems{
            allContentfulDelMarMenuPage{
                nodes{
                 appetizerMenuItems{
                  menuSectionTitle
                    }
                  appetizerMenuItems{
                    menuItems{
                      json
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={MenuPagerStyle.menuSection} id="appetizers">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>{data.allContentfulDelMarMenuPage.nodes[0].appetizerMenuItems.menuSectionTitle}</h3>
            <div className={MenuPagerStyle.menuItems}>
            {documentToReactComponents(data.allContentfulDelMarMenuPage.nodes[0].appetizerMenuItems.menuItems.json)}
            </div>
        </div>
    </section>
    )}
    />
);

export default Appetizers