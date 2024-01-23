import { Box, Button, Drawer, Flex } from '@mantine/core';
import React from 'react';
import Image from 'next/image';
import styles from './Header/Header.module.css';
import { drukTrial } from './fonts';

export const MenuDrawer = ({ opened, close }) => (
    <Drawer position="right" size="100%" opened={opened} onClose={close} withCloseButton={false}>
      <Box style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '100vh' }}>
        <Flex className={styles.drawer} style={{ justifyContent: 'space-between' }}>
          <Image src="/assets/image/Union.svg" onClick={close} height={16} width={16} alt="close" />
          <Button variant="filled" radius="40px" className={styles.btnDrawer}>
            connect wallet
          </Button>
        </Flex>
        <Box>
          <ul className={styles.menuList}>
            <li
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
            >
              Home
            </li>
            <li
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
            >
              about
            </li>
            <li
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
            >
              Roadmap
            </li>
            <li
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
            >
              team
            </li>
            <li
              style={{
                fontFamily: drukTrial.style.fontFamily,
              }}
            >
              faq
            </li>
          </ul>
        </Box>
        <Flex className={styles.socialIcons} style={{ justifyContent: 'space-between' }}>
          <Image src="/assets/image/Group 7372 (1).svg" height={24} width={24} alt="icon" />
          <Image src="/assets/image/Group 7371 (1).svg" height={24} width={24} alt="icon" />
          <Image src="/assets/image/Group 7370 (1).svg" height={24} width={24} alt="icon" />
          <Image src="/assets/image/Group 7369 (1).svg" height={24} width={24} alt="icon" />
          <Image src="/assets/image/Group 7368 (1).svg" height={24} width={24} alt="icon" />
        </Flex>
      </Box>
    </Drawer>
  );
