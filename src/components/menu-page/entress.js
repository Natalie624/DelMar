import React from "react"
import MenuPagerStyle from "./menu-page.module.css"
import MenuImg from "../home-page/slider-3-img"

const Entrees = () => (
    <section className={MenuPagerStyle.menuSection} id="entrees">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>Entrees</h3>
            <div className={MenuPagerStyle.menuItems}>
                <p><strong>Shrimp &amp; Grits</strong> | $19.00</p>
                <p>Tender grilled shrimp served with cheesy grits and spicy Creole sauce.</p>

                <p><strong>Seafood Platter</strong> | $24.00</p>
                <p>A selection of batter fried shrimp, talapia, oysters, scallops and a delectible crab cake.</p>

                <p><strong>Crab Cake Sandwich</strong> | $15.00</p>
                <p>The biggest. The best. Our sandwich requires two hands, our double platter requires two sets of silverware.</p>

                <p><strong>Seared Scallops</strong> | $19.00</p>
                <p>Fresh from the Sea. Seared to crispy perfection over a leafy green pile of delicious lettuce or over a creamy helping of fettuccini.</p>

                <p><strong>Chilean Sea Bass</strong> | $20.00</p>
                <p>Seared Chilean Sea Bass and fingerling potatoes with a side of farm fresh organic greens.</p>
            </div>
        </div>
    </section>
)

export default Entrees