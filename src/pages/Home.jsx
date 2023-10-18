import React from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider'
import Footer from '../components/Footer/Footer'
import WhatsappChat from '../components/Whatsapp/Index'


const Home = () => {
    return (
        <div>
            <Navbar />
            <ImageSlider />

            <WhatsappChat />
            <Footer />
        </div>
    )
}

export default Home;