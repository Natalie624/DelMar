import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MenuPagerStyle from "./menu-page.module.css";
import MenuImg from "../home-page/slider-5-img";

const Cocktails = () => (
    <StaticQuery query={graphql`
        query CocktailMenuItems{
            allContentfulDelMarMenuPage{
                nodes{
                 cocktailMenuItems{
                  menuSectionTitle
                }
                  cocktailMenuItems{
                    menuItems{
                      json
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={MenuPagerStyle.menuSection} id="cocktails">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>{data.allContentfulDelMarMenuPage.nodes[0].cocktailMenuItems.menuSectionTitle}</h3>
            <div className={MenuPagerStyle.menuItems}>
                {documentToReactComponents(data.allContentfulDelMarMenuPage.nodes[0].cocktailMenuItems.menuItems.json)}
            </div>
        </div>
    </section>
    )}
    />
)

export default Cocktails