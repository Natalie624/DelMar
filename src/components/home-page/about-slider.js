import React, { Component } from "react"
import HomePageStyle from "./home-page.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutSliderOne from "./slider-1-img"
import AboutSliderTwo from "./slider-2-img"
import AboutSliderThree from "./slider-3-img"
import AboutSliderFour from "./slider-4-img"
import AboutSliderFive from "./slider-6-img"

export default class AboutSlider extends Component {
    render() {
        const settings = {
            dots: true, 
            arrows: false, 
            infinite: true,
            swipeToSlide: true, 
            autoplay: true, 
            autoplaySpeed: 3000, 
            speed: 1000, 
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 991, // tablet breakpoint
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 576, // mobile breakpoint
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className={HomePageStyle.aboutSliderDiv} id="about-slider-div">
                <Slider {...settings}>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderOne />
                                <p>Steamed Prawns</p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderTwo />
                                <p>Summer Salad</p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderThree />
                                <p>Grilled Salmon</p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderFour />
                                <p>Fruit Yogurt</p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderFive />
                                <p>Beach Front Deck Dining</p>
                            </div>
                        </div>
                </Slider>
            </div>
        );
    }
}