import React from 'react';
import Navbar from '../components/Navbar';
import Whatsapp from '../components/Whatsapp/Index';
import Footer from '../components/Footer/Footer';
import { Box, Text, Image, Center, Flex,  } from '@chakra-ui/react';
import Image2 from '../../src/assets/2.jpg';
import Couples from '../../src/assets/Couples.jpeg';
// import Preservation from '../../src/assets/preservation.jpg'
// import Proclaim from '../../src/assets/proclaim.jpg';
import Pro from '../../src/assets/Pro.jpeg';
import Production from '../../src/assets/production.jpg';
import Pray from '../../src/assets/pray.jpg';

const About = () => {
  return (
    <>
      <Navbar />
      <div className='each-slide-effect' style={{ paddingTop: '90px' }}>
        <div
          style={{
            backgroundImage: `url(${Image2})`,
            width: '100%',
            height: '600px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <Text
            textAlign={'center'}
            fontSize={{ base: '30px', md: '50px' }}
            fontWeight={'bold'}
            color={'white'}
            py={{ base: '400px', md: '400px' }}
            lineHeight='110%'
            paddingBottom={{ base: '0px', md: '0px' }}
          >
            THE MINISTRY
          </Text>
          <Text
            textAlign={'center'}
            fontSize={{ base: '20px', md: '40px' }}
            fontWeight={'meduim'}
            color={'white'}
          >
            OF REVEREND OLUSOLA OLADENI. Ph.D.
          </Text>
        </div>
      </div>
      {/* Content */}
      <Text
        fontSize='20px'
        fontWeight='medium'
        mx={{ base: '20px', md: '200px' }}
        my={{ base: '20px', md: '50px' }}
      >
        Olusola Oladeni is a called pastor and an ordained Baptist minister. He
        is a family and marriage counsellor who has authored many books and
        articles. He is spiritually gifted in teaching, preaching, counselling
        and pre-marital and marital relationship building. His Christian and
        ministerial principles are established on Ephesians 4:12, equipping
        people so that the body of Christ may be built up and become mature,
        attaining the whole measure of all the fullness of Christ. When people
        are well equipped with correct principles on relationships, a healthy
        family emerges and a healthy church is produced. Olusola Oladeni
        strongly believes that ministry is a gift from the servant called and
        commissioned by God to mentor and disciple Christians for spiritual
        growth and to prepare them to be useful and valuable Christians in the
        Church and their immediate community. He is privileged to pastor some
        Baptist churches in Nigeria and has also led several organizations
        within and outside of Baptist Denomination. He has his Doctor of
        Philosophy in Counselling Psychology, with a special interest in
        Marriage and Family life and leadership development. He is a member of
        the Counselling Association of Nigeria. He is an Alumnus of the
        prestigious Nigerian Baptist Theological Seminary, Ogbomoso, and the
        University of Ibadan, Ibadan, Oyo State, Nigeria. He is currently the
        Lead Pastor of Winners Baptist Church, Bariga, Lagos, Nigeria. He heads
        Marfam Life Counselling Ministry International. He is happily married to
        his Gem, Esther Adegbenjo and they are blessed with biological and
        spiritual children. He is a veritable vessel in leading family revival,
        and leadership/church workers’ equipment in and outside Nigeria.
      </Text>

      <Center>
        <Image
          src={Couples}
          alt='Best selling'
          boxSize={{ base: '300px', md: '450px', lg: '1000px' }}
          alignContent='center'
        />
      </Center>

      <Box
        backgroundColor='teal.800'
        height={{ base: '1700px', md: '3150px', lg: '1350px' }}
        borderLeftRadius='70px'
      >
        <Text
          align='center'
          fontWeight='bold'
          fontSize='40px'
          fontStyle='italic'
          mt='40px'
          color='white'
          pt='90px'
        >
          PURPOSE OF THE WEBSITE
        </Text>
        <Text align='center' color='white' pb='40px'>
          Purpose, in the context, explains <br></br>why the website.
        </Text>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='center'
          p={6}
          justifyContent='center'
          alignItems='center'
        >
          {/* Text Section */}
          <Box flex={1} maxW='500px' color='white'>
            <Text>
              <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight='bold'>
                Proclamation<br></br>
              </Text>
              <br></br>
              To proclaim the Biblical faith in the Lord Jesus as
              <br></br>the ultimate Savior from the power of sin <br></br>and
              darkness.
            </Text>
          </Box>

          {/* Image Section */}
          <Box flex={1} mt={{ base: 4, md: 0 }} maxW='500px' color='white'>
            <Image
              justify='space-around'
              align='center'
              wrap='wrap'
              width=' 500px'
              src={Pro}
              alt='proclaim'
              borderRadius='md'
            />
          </Box>
        </Flex>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='center'
          p={6}
          justifyContent='center'
          alignItems='center'
        >
          {/* Image Section */}
          <Box flex={1} mt={{ base: 4, md: 0 }} maxW='500px' color='white'>
            <Image
              justify='space-around'
              align='center'
              wrap='wrap'
              width=' 500px'
              src={Pray}
              alt='proclaim'
              borderRadius='md'
            />
          </Box>

          {/* Text Section */}
          <Box flex={1} maxW='500px' color='white' pl='7'>
            <Text>
              <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight='bold'>
                Preservation<br></br>
              </Text>
              <br></br>
              To preserve people the lives, homes and ministries through
              <br></br>
              discipleship and mentorship, and for spiritual growth and to
              <br></br>
              prepare them to be responsible Christians (single and married
              <br></br>
              couples) in and outside the church.
            </Text>
          </Box>
        </Flex>

        <Flex
          direction={{ base: 'column', md: 'row' }}
          align='center'
          justify='center'
          p={6}
          justifyContent='center'
          alignItems='center'
        >
          {/* Text Section */}
          <Box flex={1} maxW='500px' color='white'>
            <Text>
              <Text fontSize={{ base: 'xl', md: '3xl' }} fontWeight='bold'>
                Production<br></br>
              </Text>
              <br></br>
              To produce and provide helpful resources in all set-ups taking the
              <br></br>
              benefit of countless info and communication technological<br></br>
              platforms.
            </Text>
          </Box>

          {/* Image Section */}
          <Box flex={1} mt={{ base: 4, md: 0 }} maxW='500px' color='white'>
            <Image
              justify='space-around'
              align='center'
              wrap='wrap'
              width=' 500px'
              src={Pro}
              alt='proclaim'
              borderRadius='md'
            />
          </Box>
        </Flex>

     
      </Box>

      <Whatsapp />
      <Footer />
    </>
  );
};

export default About;
