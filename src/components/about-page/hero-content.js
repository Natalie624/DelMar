import React from "react"

const HeroContent = () => (
    <div className="hero-content">
        <h1 className="hero-title"><strong>About</strong></h1>
        <p className="hero-description">Del Mar was founded on the belief that the best seafood is the freshest! That is why we work closely with our partner fishermen to pick the best catch of the day just for you!</p>
        <button type="button" className="hero-btn" data-toggle="modal" data-target="#reservationBtn" data-keyboard="false">Reserve a Table</button>
    </div>
)

export default HeroContent