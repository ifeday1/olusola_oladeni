import React from 'react'
import { Container, Grid, GridItem, Text, } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import Image2 from '../../src/assets/3.jpg'

const Contact = () => {

    return (
        <>
            <Navbar />
            <div className="each-slide-effect" style={{ paddingTop: '90px' }}>
                <div style={{
                    backgroundImage: `url(${Image2})`,
                    width: '100%',
                    height: '600px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>

                    <span>
                        <Text py='20px' textAlign={'center'} fontSize={'4xl'} fontWeight={'extrabold'} color={'white'} backgroundColor='red'>CONTACT US</Text>
                        <Grid background={Image2} pt='100px' mx='100px' templateColumns='repeat(5, 1fr)' gap={4}>
                            <GridItem colSpan={2} h='10' >
                                <Text color='white'

                                    fontWeight='bold' lineHeight={{ base: '20px', md: "40px" }} fontSize={{ base: '20px', md: "3xl" }} >  I WOULD LOVE TO HEAR FROM YOU</Text>
                                <Text fontSize='15px' pt="10px" color='whitesmoke'>Welcome to my contact information page. If you will like to send me a message, you can use the form at the right. Good bless you.</Text>
                            </GridItem>
                            <GridItem colStart={4} colEnd={6} h='10' bg='papayawhip' />
                        </Grid>
                    </span>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default Contact;