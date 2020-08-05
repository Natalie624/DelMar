import React, { Component } from "react"
import HomePageStyle from "./home-page.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutSliderOne from "./slider-1-img"
import AboutSliderTwo from "./slider-7-img"
import AboutSliderThree from "./slider-3-img"
import AboutSliderFour from "./slider-5-img"
import AboutSliderFive from "./slider-6-img"
import SliderOneCaption from "./about-slider-captions/slider-one-caption"
import SliderTwoCaption from "./about-slider-captions/slider-two-caption"
import SliderThreeCaption from "./about-slider-captions/slider-three-caption"
import SliderFourCaption from "./about-slider-captions/slider-four-caption"
import SliderFiveCaption from "./about-slider-captions/slider-five-caption"

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
                                <p>
                                    <SliderOneCaption />
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderTwo />
                                <p>
                                    <SliderTwoCaption />
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderThree />
                                <p> 
                                    <SliderThreeCaption /> 
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderFour />
                                <p>
                                    <SliderFourCaption />
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={HomePageStyle.aboutSliderItem}>
                                <AboutSliderFive />
                                <p>
                                    <SliderFiveCaption />
                                </p>
                            </div>
                        </div>
                </Slider>
            </div>
        );
    }
}



