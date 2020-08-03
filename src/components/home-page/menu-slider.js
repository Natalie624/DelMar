import React from "react"
import { Link } from "gatsby"
import HomePageStyle from "./home-page.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuSliderOne from "./slider-1-img"
import MenuSliderTwo from "./slider-2-img"
import MenuSliderThree from "./slider-3-img"
import MenuSliderFour from "./slider-4-img"
import MenuSliderFive from "./slider-5-img"

const MenuSlider = () => (
    <div className={HomePageStyle.menuSliderDiv} id="menu-slider-div">
        <Slider
            dots={true}
            arrows={true}
            infinite={true}
            speed={1000}
            slidesToShow={3}
            swipeToSlide={true}
            >
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#appetizers">
                        <MenuSliderOne />
                        <p>Appetizers</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#salads">
                        <MenuSliderTwo />
                        <p>Salads</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#entrees">
                        <MenuSliderThree />
                        <p>Entrees</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#desserts">
                        <MenuSliderFour />
                        <p>Desserts</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#cocktails">
                        <MenuSliderFive />
                        <p>Cocktails</p>
                    </Link>
                </div>
        </Slider>
    </div>
)

export default MenuSlider