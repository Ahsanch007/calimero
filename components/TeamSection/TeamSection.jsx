'use client';

import { Box, Container, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import styles from './Team.module.css';
import { drukTrial, neueHaasDisplay } from '../fonts';
import { teamData } from './TeamData';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export const TeamSection = () => {
  useEffect(() => {
    Aos.init(); // Initialize AOS on component mount
  }, []);
  return (
    <Box data-aos="zoom-in-left" data-aos-duration="1000" bg="#eaeaea">
      <Box bg="#ffff" style={{ borderRadius: '60px 60px 0px 0px' }}>
        <Container size="lg" py="50px">
          <Box className={styles.title}>
            <Text
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
              data-aos="zoom-out-right"
              data-aos-duration="1000"
              className={styles.heading}
            >
              {teamData.title}
            </Text>
          </Box>
          <Flex className={styles.team}>
            {teamData.team.map((data) => (
              <Box
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                className={styles.teamBox}
                mt="50px"
              >
                <Image src={data.img} className={styles.avatar} height={1000} width={1000} alt="seocnd" />
                <Text
                  style={{
                    fontFamily: drukTrial.style.fontFamily,
                  }}
                  className={styles.surname}
                >
                  {data.surname}
                </Text>
                <Text
                  style={{
                    fontFamily: neueHaasDisplay.style.fontFamily,
                  }}
                  className={styles.surnameDec}
                >
                  {data.profession}
                </Text>
                <Flex data-aos="fade-up" data-aos-duration="1000" gap="10px" justify="center" mt="10px">
                  {data.socialIcon.map((social) => (
                    <Image src={social.img} height={20} width={20} alt="Subtract" />
                  ))}
                </Flex>
              </Box>
            ))}
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};
