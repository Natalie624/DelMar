import React from "react"
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MenuPagerStyle from "./menu-page.module.css"
import MenuImg from "../home-page/slider-3-img"

const Entrees = () => (
    <StaticQuery query={graphql`
        query EntreeMenuItems{
            allContentfulDelMarMenuPage{
                nodes{
                 entreeMenuItems{
                  menuSectionTitle
                }
                  entreeMenuItems{
                    menuItems{
                      json
                    }
                  }
                }
              }
            }
        `}
    render = {data=> (
    <section className={MenuPagerStyle.menuSection} id="entrees">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>{data.allContentfulDelMarMenuPage.nodes[0].entreeMenuItems.menuSectionTitle}</h3>
            <div className={MenuPagerStyle.menuItems}>
                {documentToReactComponents(data.allContentfulDelMarMenuPage.nodes[0].entreeMenuItems.menuItems.json)}
            </div>
        </div>
    </section>
    )}
    />
);

export default Entrees