import React from "react"
import MenuPagerStyle from "./menu-page.module.css"
import MenuImg from "../home-page/slider-5-img"

const Cocktails = () => (
    <section className={MenuPagerStyle.menuSection} id="cocktails">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>Cocktails</h3>
            <div className={MenuPagerStyle.menuItems}>
                <p><strong>Fall Fashion</strong> | $8.00</p>
                <p>Rye Wiskey, Apple Jack, Maple Syrup, Black Walnut Bitters</p>

                <p><strong>Tiki Turkey</strong> | $8.00</p>
                <p>Wild Turkey, Apple Jack, Lemon Juice, Honey Syrup, Falernum</p>

                <p><strong>Strawberry WooHoo</strong> | $9.00</p>
                <p>Absolute Raspberry, Peach Liqueur, Strawberry Liquor, Cranberry Juice</p>

                <p><strong>Blood Orange Mule</strong> | $8.00</p>
                <p>Absolute Vodka, Blood Orange Syrup topped with Ginger Beer</p>
            </div>
        </div>
    </section>
)

export default Cocktails