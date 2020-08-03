import React from "react"
import AboutPageStyle from "./about-page.module.css"
import ChefImg from "./chef-img"

const ChefContent = () => (
    <section className={AboutPageStyle.chefSection}>
        <h3 className={AboutPageStyle.sectionTitle}><strong>Chef John Smith</strong></h3>
        <ChefImg />
        <p className={AboutPageStyle.description}>
        Chef John is known for his approachable cuisine and inventive seafood style. Having grown up around the successful pub/restaurant owned and operated by his parents in Monteray he was peeling potatoes and shucking corn with the rest of the restaurant staff and by 11, he could julienne vegetables as fast as any of them. At 16, Chef John Smith completed his formal training at the prestegious La Capur Catering College. A fresh face in the culinary world, John Smith began work at the critically acclaimed Royal Vistana Cafe in New York for three years. Having cut his teeth with the best Chef John turned his sights to his own restaurant...Del Mar. 
        </p>
    </section>
)

export default ChefContent