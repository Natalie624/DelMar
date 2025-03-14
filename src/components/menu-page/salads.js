import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MenuPagerStyle from "./menu-page.module.css";
import MenuImg from "../home-page/slider-2-img";

const Salads = () => (
    <StaticQuery query={graphql`
        query SaladMenuitems{
            allContentfulDelMarMenuPage{
                nodes{
                 saladMenuItems{
                  menuSectionTitle
                }
                  saladMenuItems{
                    menuItems{
                      json
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={MenuPagerStyle.menuSection} id="salads">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>{data.allContentfulDelMarMenuPage.nodes[0].saladMenuItems.menuSectionTitle}</h3>
            <div className={MenuPagerStyle.menuItems}>
                {documentToReactComponents(data.allContentfulDelMarMenuPage.nodes[0].saladMenuItems.menuItems.json)}
            </div>
        </div>
    </section>
    )}
    />
);

export default Salads