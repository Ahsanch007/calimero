'use client';

import { Box, Button, Container, Text } from '@mantine/core';
import Image from 'next/image';
import styles from './Roadmap.module.css';
import { drukTrial, neueHaasDisplay } from '../fonts';
import { roadmapData } from './RoadmapData';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { BiLoaderAlt } from 'react-icons/bi';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

export const RoadmapSection = () => {
  const [cardStates, setCardStates] = useState(roadmapData.stage1Data.map(() => false));
  const [cardStates2, setCardStates2] = useState(roadmapData.data.map(() => false));
  useEffect(() => {
    Aos.init(); // Initialize AOS on component mount
  }, []);
  const handleCardClick = (index) => {
    const newCardStates = [...cardStates];
    newCardStates[index] = !newCardStates[index];
    setCardStates(newCardStates);
  };
  const handleCardClick2 = (index) => {
    const newCardStates = [...cardStates2];
    newCardStates[index] = !newCardStates[index];
    setCardStates2(newCardStates);
  };
  return (
    <Box data-aos="zoom-in-up" data-aos-duration="1000" className={styles.bgimg}>
      <Container size="lg" py="60px">
        <Box className={styles.roadMap}>
          <Box className={styles.icon}>
            <Image
              data-aos="fade-down"
              data-aos-duration="1000"
              src={roadmapData.headImg}
              height={1000}
              width={1000}
              className={styles.iconMain}
              alt="icon"
            />
          </Box>
          <Box className={styles.icon}>
            <Text
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
              data-aos="fade-down-right"
              data-aos-duration="1000"
              className={styles.title}
            >
              {roadmapData.title}
            </Text>
            <Text
              style={{
                fontFamily: neueHaasDisplay.style.fontFamily,
              }}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className={styles.des}
            >
              {roadmapData.des}{' '}
            </Text>
          </Box>
          <Box>
            <Box className={styles.icon} mt="40px">
              <Text
                style={{
                  fontFamily: drukTrial.style.fontFamily,

                  '@media (max-width: 750px) ': {
                    fontFamily: drukTrial.style.fontFamily,
                  },
                }}
                data-aos="zoom-in-left"
                data-aos-duration="1000"
                className={styles.title2}
              >
                {roadmapData.title2}
              </Text>
            </Box>
            {roadmapData.stage1Data.map((data, index) =>
              data.ctxText === 'Released' ? (
                <Box
                  data-aos="zoom-in-right"
                  data-aos-duration="1000"
                  my="30px"
                  className={`${styles.card} ${cardStates[index] ? styles.openCard : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <Box className={styles.cardContent}>
                    <Text
                      style={{
                        fontFamily: neueHaasDisplay.style.fontFamily,
                      }}
                      className={styles.launch}
                    >
                      {data.title}
                    </Text>
                    <Button variant="filled" className={styles.btn}>
                      {data.ctxText}
                      <FaCheck className={styles.reactIcon} />
                    </Button>
                    <Button variant="filled" className={styles.btnMob}>
                      <Image src={data.img} height={14} width={14} alt="progress" />
                    </Button>
                  </Box>

                  <Text
                    style={{
                      fontFamily: neueHaasDisplay.style.fontFamily,
                    }}
                    className={`${cardStates[index] ? styles.content : ''} ${styles.none}`}
                  >
                    {data.desciption}
                  </Text>
                </Box>
              ) : data.ctxText === 'In progress' ? (
                <Box
                  data-aos="zoom-in-left"
                  data-aos-duration="1000"
                  my="30px"
                  className={`${styles.card2} ${cardStates[index] ? styles.openCard2 : ''}`}
                  onClick={() => handleCardClick(index)}
                >
                  <Box className={styles.cardContent}>
                    <Text
                      style={{
                        fontFamily: neueHaasDisplay.style.fontFamily,
                        '@media (max-width: 750px) ': {
                          fontFamily: neueHaasDisplay.style.fontFamily,
                        },
                      }}
                      className={styles.Join}
                    >
                      {data.ctxText}
                    </Text>
                    <Button variant="filled" className={styles.btn2}>
                      In Progress
                      {/* <Image
                        src={data.img}
                        height={20}
                        width={20}
                        className={styles.rotatingImage}
                        alt="progress"
                        style={{ marginLeft: '10px' }}
                      /> */}
                      <BiLoaderAlt className={styles.rotatingImage} />
                    </Button>
                    <Button variant="filled" className={styles.btnMob2}>
                      <Image src={data.img} height={14} width={14} className={styles.rotatingImage} alt="progress" />
                    </Button>
                  </Box>

                  <Text
                    style={{
                      fontFamily: neueHaasDisplay.style.fontFamily,
                    }}
                    className={`${cardStates[index] ? styles.content2 : ''} ${styles.none}`}
                  >
                    {data.desciption}
                  </Text>
                </Box>
              ) : (
                <Box data-aos="flip-left" data-aos-duration="1000" my="30px" className={styles.card3}>
                  <Text
                    style={{
                      fontFamily: neueHaasDisplay.style.fontFamily,
                      '@media (max-width: 750px) ': {
                        fontFamily: neueHaasDisplay.style.fontFamily,
                      },
                    }}
                    className={styles.launch}
                  >
                    {data.title}
                  </Text>
                  <Button variant="filled" className={styles.btn3}>
                    {data.ctxText}
                  </Button>
                  <Button variant="filled" className={styles.btn3Mob}>
                    {data.img}
                  </Button>
                </Box>
              ),
            )}
          </Box>
          <Box>
            <Box className={styles.icon} mt="40px">
              <Text
                style={{
                  fontFamily: drukTrial.style.fontFamily,

                  '@media (max-width: 750px) ': {
                    fontFamily: drukTrial.style.fontFamily,
                  },
                }}
                className={styles.title2}
              >
                {roadmapData.stage}
              </Text>
            </Box>
            <Box>
              {roadmapData.data.map((item, index) => (
                <Box
                  data-aos="flip-right"
                  data-aos-duration="1000"
                  key={index}
                  my="30px"
                  className={`${styles.card} ${cardStates2[index] ? styles.openCard : ''}`}
                  onClick={() => handleCardClick2(index)}
                >
                  <Box className={styles.cardContent}>
                    <Text
                      style={{
                        fontFamily: neueHaasDisplay.style.fontFamily,
                      }}
                      className={styles.launch}
                    >
                      {item.title}
                    </Text>
                    <Button variant="filled" className={styles.btn3}>
                      {item.buttonText}
                    </Button>
                    <Button variant="filled" className={styles.btn3Mob}>
                      {item.buttonTextShort}
                    </Button>
                  </Box>
                  <Text
                    style={{
                      fontFamily: neueHaasDisplay.style.fontFamily,
                    }}
                    className={`${cardStates2[index] ? styles.content : ''} ${styles.none}`}
                  >
                    {item.desciption}
                  </Text>
                </Box>
              ))}
            </Box>
          </Box>
          <Box>
            <Box className={styles.icon} mt="40px">
              <Box className={styles.icon}>
                <Image src="/assets/icon/play.svg" height={70} width={70} alt="play" />
              </Box>
              <Text
                style={{
                  fontFamily: drukTrial.style.fontFamily,

                  '@media (max-width: 750px) ': {
                    fontFamily: drukTrial.style.fontFamily,
                  },
                }}
                className={styles.title2}
              >
                {roadmapData.stage3}
              </Text>
              <Box className={styles.rotation}>
                <Text className={styles.desci}>{roadmapData.stageDes}</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
