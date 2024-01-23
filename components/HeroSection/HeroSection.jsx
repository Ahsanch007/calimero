'use client';

import { Box, Container, Flex, Image, Text } from '@mantine/core';
import styles from './HeroSection.module.css';
import { drukTrial } from '../fonts';
import { heroData } from './HeroData';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export const HeroSection = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS on component mount
  }, []);
  return (
    <Box bg="#FFFFF8" py="30px" h="720px" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container size="lg">
        <Box>
          <Box data-aos="fade-right" data-aos-duration="1000" style={{ position: 'relative' }}>
            <Text
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
              className={styles.title}
            >
              {heroData.title}
            </Text>
            <Image src={heroData.img} height={1000} width={1000} className={styles.Calimero} alt="hero" />
          </Box>
          <Flex data-aos="fade-left" data-aos-duration="1000" className={styles.social}>
            {heroData.socialIcon.map((path) => (
              <Image src={path.img} height={24} width={24} alt="hero" />
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
