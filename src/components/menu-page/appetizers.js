import React from "react"
import MenuPagerStyle from "./menu-page.module.css"
import MenuImg from "../home-page/slider-1-img"

const Appetizers = () => (
    <section className={MenuPagerStyle.menuSection} id="appetizers">
    <MenuImg />
        <div className={MenuPagerStyle.menuBox}>
            <h3 className={MenuPagerStyle.boxTitle}>Appetizers</h3>
            <div className={MenuPagerStyle.menuItems}>
                <p><strong>Hot Crab Dip</strong> | $5.00</p>
                <p>Rich and creamy melt in your mouth succulent crab.</p>

                <p><strong>Fish Taco Bites</strong> | $5.00</p>
                <p>A taste of the Baja, fresh talapia and a creamy drizzel of spicy taco sauce for the perfect mouthful.</p>

                <p><strong>Baby Clams</strong> | $5.00</p>
                <p>Served in a wine butter and garlic sauce.</p>

                <p><strong>Jumbo Buffalo Shrimp</strong> | $5.00</p>
                <p>Fried fresh caught jumbo shrimp tossed in our wing sauce.</p>

                <p><strong>Baked Eggplant</strong> | $5.00</p>
                <p>Baked in our housemade marinara sauce and covered in gooey motzerlla.</p>
            </div>
        </div>
    </section>
)

export default Appetizers