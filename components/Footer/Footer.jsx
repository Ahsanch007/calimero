'use client';

import { Box, Container, Flex, Text } from '@mantine/core';
import Image from 'next/image';
import styles from './Footer.module.css';
import { neueHaasDisplay } from '../fonts';
import { footerData } from './FooterData';
import { AiFillInstagram } from 'react-icons/ai';
import { FaDiscord, FaFacebookF, FaTwitter } from 'react-icons/fa6';
import { SiOpensea } from 'react-icons/si';

export const Footer = () => (
  <Box bg="#161C23" py="30px">
    <Container size="lg">
      <Flex className={styles.footer}>
        <Box className={styles.time}>
          <Image src={footerData.icon} height={23.19} width={22} alt="icon" />
          <Text>{footerData.calimero}</Text>
        </Box>
        <Box className={styles.terms}>
          <Text>{footerData.terms}</Text>
          <Text>{footerData.privacy}</Text>
          {footerData.privacyIcon.map((img) => (
            <Image src={img.img} height={20} width={22} alt="icon" />
          ))}
        </Box>
        <Box className={styles.social}>
          <Box className={styles.socialIcon}>
            <AiFillInstagram className={styles.reactIcon} />
          </Box>
          <Box className={styles.socialIcon}>
            <FaTwitter className={styles.reactIcon} />
          </Box>
          <Box className={styles.socialIcon}>
            <SiOpensea className={styles.reactIcon} />
          </Box>
          <Box className={styles.socialIcon}>
            <FaFacebookF className={styles.reactIcon} />
          </Box>
          <Box className={styles.socialIcon}>
            <FaDiscord className={styles.reactIcon} />
          </Box>
        </Box>
      </Flex>
      <Flex className={styles.footer2}>
        <Box className={styles.social}>
          {footerData.iconSources.map((img) => (
            <Box className={styles.socialIcon}>
              <Image src={img.img} height={10} width={10} alt="icon" />
            </Box>
          ))}
        </Box>
        <Box className={styles.terms}>
          <Text
            style={{
              fontFamily: neueHaasDisplay.style.fontFamily,
              '@media (max-width: 750px) ': {
                fontFamily: neueHaasDisplay.style.fontFamily,
              },
            }}
          >
            {footerData.terms}
          </Text>
          <Text
            style={{
              fontFamily: neueHaasDisplay.style.fontFamily,
              '@media (max-width: 750px) ': {
                fontFamily: neueHaasDisplay.style.fontFamily,
              },
            }}
          >
            {' '}
            {footerData.privacy}
          </Text>
        </Box>
        <Flex gap="10px" justify="center">
          {footerData.privacyIcon.map((img) => (
            <Image src={img.img} height={20} width={22} alt="icon" />
          ))}
        </Flex>
        <Box className={styles.time}>
          <Image src="/assets/icon/Group 7357.svg" height={23.19} width={22} alt="icon" />
          <Text>{footerData.calimero}</Text>
        </Box>
      </Flex>
    </Container>
  </Box>
);
