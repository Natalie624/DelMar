import React from "react"
import MenuPagerStyle from "./menu-page.module.css"
import MenuImg from "../home-page/slider-2-img"

const Salads = () => (
    <section className={MenuPagerStyle.menuSection} id="salads">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>Salads</h3>
            <div className={MenuPagerStyle.menuItems}>
                <p><strong>Garden Salad</strong> | $3.00</p>
                <p>Baby lettuces, grape tomatoes, garlic croutons topped with anhouse vinegrette.</p>

                <p><strong>Seaweed Salad</strong> | $5.00</p>
                <p>A colorful array of seaweed dressed in a savory sweet dressing that's redolent of toasted sesame.</p>

                <p><strong>Avocado Salad</strong> | $5.00</p>
                <p>Rich and creamy avocados, vibrant tomatoes, crisp cucumbers, bright red onions and a fresh herb dressing.</p>

                <p><strong>Salmon Skin Salad</strong> | $5.00</p>
                <p>Broiled salmon skin over a garden salad.</p>
            </div>
        </div>
    </section>
)

export default Salads