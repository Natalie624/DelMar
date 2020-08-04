import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
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
    <StaticQuery query={graphql` 
        query MenuSliderLabels {
            allContentfulDelMarHomepage{
                nodes{
                  homepageMenuCarousel {
                    carouselImage1{
                      name
                    }
                    carouselImage2
                    {
                      name
                    }
                    carouselImage3{
                      name
                    }
                    carouselImage4{
                      name
                    }
                    carouselImage5{
                      name
                    }
                  }
                }
              }
            }
        `}
    render = {data => (
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
                        <p>{data.allContentfulDelMarHomepage.nodes[0].homepageMenuCarousel.carouselImage1.name}</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#salads">
                        <MenuSliderTwo />
                        <p>{data.allContentfulDelMarHomepage.nodes[0].homepageMenuCarousel.carouselImage2.name}</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#entrees">
                        <MenuSliderThree />
                        <p>{data.allContentfulDelMarHomepage.nodes[0].homepageMenuCarousel.carouselImage3.name}</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#desserts">
                        <MenuSliderFour />
                        <p>{data.allContentfulDelMarHomepage.nodes[0].homepageMenuCarousel.carouselImage4.name}</p>
                    </Link>
                </div>
                <div>
                    <Link className={HomePageStyle.menuSliderLink} to="/menu/#cocktails">
                        <MenuSliderFive />
                        <p>{data.allContentfulDelMarHomepage.nodes[0].homepageMenuCarousel.carouselImage5.name}</p>
                    </Link>
                </div>
        </Slider>
    </div>
    )}
    />
)

export default MenuSlider