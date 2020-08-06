import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import MenuPagerStyle from "./menu-page.module.css";
import MenuImg from "../home-page/slider-4-img";

const Desserts = () => (
    <StaticQuery query={graphql`
        query DessertItems{
            allContentfulDelMarMenuPage{
                nodes{
                 dessertMenuItems{
                  menuSectionTitle
                }
                  dessertMenuItems{
                    menuItems{
                      json
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
    <section className={MenuPagerStyle.menuSection} id="desserts">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>{data.allContentfulDelMarMenuPage.nodes[0].dessertMenuItems.menuSectionTitle}</h3>
            <div className={MenuPagerStyle.menuItems}>
                {documentToReactComponents(data.allContentfulDelMarMenuPage.nodes[0].dessertMenuItems.menuItems.json)}
            </div>
        </div>
    </section>
    )}
    />
);

export default Desserts