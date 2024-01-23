'use client';

import { Box, Button, Container, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import styles from './About.module.css';
import { drukTrial, neueHaasDisplay } from '../fonts';
import { aboutData } from './AboutData';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export const AboutSection = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS on component mount
  }, []);
  return (
    <Box data-aos="zoom-in-up" data-aos-duration="1000" bg="#161C23" className={styles.aboutH}>
      <Container size="lg">
        <Box py="3rem">
          <Text
            style={{
              fontFamily: neueHaasDisplay.style.fontFamily,
            }}
            className={styles.title}
            pb="40px"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            {aboutData.about}
          </Text>
          <Flex className={styles.about}>
            <Box className={styles.aboutBox}>
              <Text
                style={{
                  fontFamily: drukTrial.style.fontFamily,

                  '@media (max-width: 750px) ': {
                    fontFamily: drukTrial.style.fontFamily,
                  },
                }}
                data-aos="fade-down-right"
                data-aos-duration="1000"
                className={styles.title2}
              >
                {aboutData.only}{' '}
                <span>
                  <img alt="img" src={aboutData.black} className={styles.black} />
                </span>{' '}
                {aboutData.family}
              </Text>
              <Text
                style={{
                  fontFamily: neueHaasDisplay.style.fontFamily,
                }}
                data-aos="fade-down-left"
                data-aos-duration="1000"
                className={styles.des}
              >
                {aboutData.description}
              </Text>
              <Flex direction="row" my="2rem" className={styles.playBtn}>
                <Button
                  style={{
                    fontFamily: neueHaasDisplay.style.fontFamily,
                  }}
                  variant="filled"
                  radius="40px"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  className={styles.btn}
                >
                  {aboutData.ctxText}
                </Button>
                <Flex data-aos="fade-down" data-aos-duration="1000" direction="row" align="center" gap="10px">
                  <Box className={styles.playIcon}>
                    <Image height={14.42} width={14.42} alt="Play button" src={aboutData.play} />
                  </Box>
                  <Text
                    style={{
                      fontFamily: neueHaasDisplay.style.fontFamily,
                    }}
                    className={styles.Play}
                  >
                    {aboutData.demo}
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box>
              <Image
                data-aos="zoom-out-left"
                data-aos-duration="1000"
                height={1000}
                width={1000}
                className={styles.img}
                alt=""
                src={aboutData.aboutImg}
              />
            </Box>
          </Flex>
          <Flex className={styles.value} py="40px">
            {aboutData.statistics.map((data) => (
              <Box data-aos="fade-up-right" data-aos-duration="1000" className={styles.valueBox}>
                <Text
                  style={{
                    fontFamily: drukTrial.style.fontFamily,

                    '@media (max-width: 750px) ': {
                      fontFamily: drukTrial.style.fontFamily,
                    },
                  }}
                  className={styles.valueTitle}
                >
                  {data.value}
                </Text>
                <Text
                  className={styles.valueDes}
                  style={{
                    fontFamily: neueHaasDisplay.style.fontFamily,
                    '@media (max-width: 750px) ': {
                      fontFamily: neueHaasDisplay.style.fontFamily,
                    },
                  }}
                >
                  {data.description}
                </Text>
              </Box>
            ))}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
