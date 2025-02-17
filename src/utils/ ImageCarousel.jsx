import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';
import { Text } from '@chakra-ui/react';

import Pre1 from '../assets/p1.jpg';
import Pre2 from '../assets/p2.jpg';
import Pre3 from '../assets/p3.jpg';
import Pre4 from '../assets/p4.jpg';
import Feb1 from '../assets/feb1.jpg';
import Feb3 from '../assets/feb3.jpg';
import Feb4 from '../assets/feb4.jpg';

const ImageCarousel = () => {
  const settings = {
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className='carousel-container' style={{ width: '100%' }}>
      <div className='carousel' style={{ width: '100%' }}>
        <Text
          align='center'
          fontWeight='bold'
          fontSize='40px'
          fontStyle='italic'
          mt='40px'
          mb='20px'
          color='white'
        >
          Premarital and Marital Matters
        </Text>

        <Slider {...settings}>
          <div className='carousel-item'>
            <img src={Pre1} alt='prep' />
          </div>
          <div className='carousel-item'>
            <img src={Pre2} alt='prep1' />
          </div>
          <div className='carousel-item'>
            <img src={Pre3} alt='prep2' />
          </div>
          <div className='carousel-item'>
            <img src={Pre4} alt='prep3' />
          </div>
          <div className='carousel-item'>
            <img src={Feb1} alt='prep3' />
          </div>
          <div className='carousel-item'>
            <img src={Feb3} alt='prep3' />
          </div>
          <div className='carousel-item'>
            <img src={Feb4} alt='prep3' />
          </div>
          {/* Add more images as needed */}
        </Slider>
      </div>
    </div>
  );
};

export default ImageCarousel;
