import React from "react"

const HeroContent = () => (
    <div className="hero-content">
        <h1 className="hero-title"><strong>Del Mar Restaurant</strong></h1>
        <p className="hero-description">Welcome to Del Mar. We specialize in delicious, yet approachable seafood done right! If it is any fresher it's swimming in the ocean!</p>
        <button type="button" className="hero-btn" data-toggle="modal" data-target="#reservationBtn" data-keyboard="false">Reserve a Table</button>
    </div>
)

export default HeroContent