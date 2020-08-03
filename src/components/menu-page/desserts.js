import React from "react"
import MenuPagerStyle from "./menu-page.module.css"
import MenuImg from "../home-page/slider-4-img"

const Desserts = () => (
    <section className={MenuPagerStyle.menuSection} id="desserts">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>Desserts</h3>
            <div className={MenuPagerStyle.menuItems}>
                <p><strong>Brownies &amp; Cream</strong> | $9.00</p>
                <p>Baked soft brownie served with rich creamy whipped topping.</p>

                <p><strong>Tiramisu</strong> | $11.00</p>
                <p>Traditional Italian specialty with layers of marscapone cheese, coffee, &amp; savioardi biscuits topped with dusting of chocolate.</p>
                
                <p><strong>Chocolate Lava Cake</strong> | $8.00</p>
                <p>Served with vanilla ice cream.</p>
            </div>
        </div>
    </section>
)

export default Desserts