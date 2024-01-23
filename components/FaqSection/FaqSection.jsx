'use client';

import { Box, Container, Flex, Title, Accordion } from '@mantine/core';
import Image from 'next/image';
// import { useState } from 'react';
import styles from './Faq.module.css';
import { drukTrial, neueHaasDisplay } from '../fonts';
import { faqData } from './FaqData';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

// const FaqItem = ({ index, question, answer, openQuestions, toggleQuestion }) => (
//   <Box
//     className={`${openQuestions[index] ? styles.open : styles.question}`}
//     py="10px"
//     onClick={() => toggleQuestion(index)}
//   >
//     <Box className={`${openQuestions[index] ? styles.openDes : styles.desc}`}>
//       <Text className={`${openQuestions[index] ? styles.openDetail : styles.detail}`}>{question}</Text>
//       <Text className={`${openQuestions[index] ? styles.openSign : styles.sign}`}>
//         {openQuestions[index] ? '-' : '+'}
//       </Text>
//     </Box>
//   </Box>
// );

export const FaqSection = () => {
  // const [openQuestions, setOpenQuestions] = useState(Array(5).fill(false));

  // const toggleQuestion = (index) => {
  //   const newOpenQuestions = [...openQuestions];
  //   newOpenQuestions[index] = !newOpenQuestions[index];
  //   setOpenQuestions(newOpenQuestions);
  // };
  // const [activeItem, setActiveItem] = useState(null);
  useEffect(() => {
    Aos.init(); // Initialize AOS on component mount
  }, []);
  const items = faqData.faqDatas.map((item) => (
    <Accordion.Item key={item.question} value={item.question}>
      <Accordion.Control
        style={{
          fontFamily: neueHaasDisplay.style.fontFamily,
        }}
        className={`${styles.detail} detailss`}
      >
        {item.question}
      </Accordion.Control>
      <Accordion.Panel
        style={{
          fontFamily: neueHaasDisplay.style.fontFamily,
        }}
        className={styles.answer}
      >
        {item.answer}
      </Accordion.Panel>
    </Accordion.Item>
  ));
  return (
    <Box
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      bg="#161C23"
      py="30px"
      style={{ borderRadius: '60px 60px 0px 0px' }}
    >
      <Container size="lg">
        <Flex className={styles.faq} py="40px">
          <Box className={styles.left}>
            <Title
              style={{
                fontFamily: drukTrial.style.fontFamily,

                '@media (max-width: 750px) ': {
                  fontFamily: drukTrial.style.fontFamily,
                },
              }}
              pb="40px"
              className={styles.title}
            >
              {faqData.title}
            </Title>
            <Box data-aos="fade-up" data-aos-duration="1000" my="30px">
              <Accordion transitionDuration={500} classNames={{ chevron: styles.chevron }} chevron="+">
                {items}
              </Accordion>
            </Box>
          </Box>
          <Box className={styles.right}>
            <Image
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
              className={styles.img}
              src={faqData.img}
              height={1000}
              width={1000}
              alt="faq"
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
