import React from 'react'
import ImageSlider from '../homepage/ImageSlider'
import Latest from '../homepage/Latest'
import MostPopular from '../homepage/MostPopular'
import Shop from '../homepage/Shop'
import TopCollection from '../homepage/TopCollection'
import Hero from '../homepage/Hero'


const Home = () => {
    return (
        <>
           <ImageSlider />
           <MostPopular />
           <Shop />
           <Latest />
           <TopCollection />
           <Hero />
        </>
    )
}

export default Home